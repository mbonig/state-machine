import { Arn, ArnFormat, Duration, Resource, Stack, Token } from 'aws-cdk-lib';
import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as aws_stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import { LogOptions, StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';

export interface StateMachineProps {

  /**
   * An object that matches the schema/shape of the ASL .States map with overridden values.
   *
   * @example {'My First State': { Parameters: { FunctionName: 'aLambdaFunctionArn' } } }
   */
  readonly overrides?: any;

  /**
   * An object that can be serialized into an ASL.
   */
  readonly definition: any;

  /**
   * A name for the state machine
   *
   * @default A name is automatically generated
   */
  readonly stateMachineName?: string;

  /**
   * The execution role for the state machine service
   *
   * @default A role is automatically created
   */
  readonly role?: iam.IRole;

  /**
   * Maximum run time for this state machine
   *
   * @default No timeout
   */
  readonly timeout?: Duration;

  /**
   * Type of the state machine
   *
   * @default StateMachineType.STANDARD
   */
  readonly stateMachineType?: StateMachineType;

  /**
   * Defines what execution history events are logged and where they are logged.
   *
   * @default No logging
   */
  readonly logs?: LogOptions;

  /**
   * Specifies whether Amazon X-Ray tracing is enabled for this state machine.
   *
   * @default false
   */
  readonly tracingEnabled?: boolean;

}

/**
 * A new or imported state machine.
 */
abstract class StateMachineBase extends Resource implements aws_stepfunctions.IStateMachine {
  /**
   * Import a state machine
   */
  public static fromStateMachineArn(scope: Construct, id: string, stateMachineArn: string): aws_stepfunctions.IStateMachine {
    class Import extends StateMachineBase {
      public readonly stateMachineArn = stateMachineArn;
      public readonly grantPrincipal = new iam.UnknownPrincipal({ resource: this });
    }

    return new Import(scope, id, {
      environmentFromArn: stateMachineArn,
    });
  }

  public abstract readonly stateMachineArn: string;
  /**
   * The principal this state machine is running as
   */
  public abstract readonly grantPrincipal: iam.IPrincipal;

  /**
   * Grant the given identity permissions to start an execution of this state
   * machine.
   */
  public grantStartExecution(identity: iam.IGrantable): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee: identity,
      actions: ['states:StartExecution'],
      resourceArns: [this.stateMachineArn],
    });
  }

  /**
   * Grant the given identity permissions to start a synchronous execution of
   * this state machine.
   */
  public grantStartSyncExecution(identity: iam.IGrantable): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee: identity,
      actions: ['states:StartSyncExecution'],
      resourceArns: [this.stateMachineArn],
    });
  }

  /**
   * Grant the given identity permissions to read results from state
   * machine.
   */
  public grantRead(identity: iam.IGrantable): iam.Grant {
    iam.Grant.addToPrincipal({
      grantee: identity,
      actions: [
        'states:ListExecutions',
        'states:ListStateMachines',
      ],
      resourceArns: [this.stateMachineArn],
    });
    iam.Grant.addToPrincipal({
      grantee: identity,
      actions: [
        'states:DescribeExecution',
        'states:DescribeStateMachineForExecution',
        'states:GetExecutionHistory',
      ],
      resourceArns: [`${this.executionArn()}:*`],
    });
    return iam.Grant.addToPrincipal({
      grantee: identity,
      actions: [
        'states:ListActivities',
        'states:DescribeStateMachine',
        'states:DescribeActivity',
      ],
      resourceArns: ['*'],
    });
  }

  /**
   * Grant the given identity task response permissions on a state machine
   */
  public grantTaskResponse(identity: iam.IGrantable): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee: identity,
      actions: [
        'states:SendTaskSuccess',
        'states:SendTaskFailure',
        'states:SendTaskHeartbeat',
      ],
      resourceArns: [this.stateMachineArn],
    });
  }

  /**
   * Grant the given identity permissions on all executions of the state machine
   */
  public grantExecution(identity: iam.IGrantable, ...actions: string[]) {
    return iam.Grant.addToPrincipal({
      grantee: identity,
      actions,
      resourceArns: [`${this.executionArn()}:*`],
    });
  }

  /**
   * Grant the given identity custom permissions
   */
  public grant(identity: iam.IGrantable, ...actions: string[]): iam.Grant {
    return iam.Grant.addToPrincipal({
      grantee: identity,
      actions,
      resourceArns: [this.stateMachineArn],
    });
  }


  /**
   * Return the given named metric for this State Machine's executions
   *
   * @default - sum over 5 minutes
   */
  public metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return new cloudwatch.Metric({
      namespace: 'AWS/States',
      metricName,
      dimensionsMap: { StateMachineArn: this.stateMachineArn },
      statistic: 'sum',
      ...props,
    }).attachTo(this);
  }

  /**
   * Metric for the number of executions that failed
   *
   * @default - sum over 5 minutes
   */
  public metricFailed(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.cannedMetric(function executionsFailedSum(dimensions) {
      return {
        namespace: 'AWS/States',
        metricName: 'ExecutionsFailed',
        dimensionsMap: dimensions,
        statistic: 'Sum',
      };
    }, props);
  }

  /**
   * Metric for the number of executions that were throttled
   *
   * @default - sum over 5 minutes
   */
  public metricThrottled(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    // There's a typo in the "canned" version of this
    return this.metric('ExecutionThrottled', props);
  }

  /**
   * Metric for the number of executions that were aborted
   *
   * @default - sum over 5 minutes
   */
  public metricAborted(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.cannedMetric(function executionsAbortedSum(dimensions) {
      return {
        namespace: 'AWS/States',
        metricName: 'ExecutionsAborted',
        dimensionsMap: dimensions,
        statistic: 'Sum',
      };
    }, props);
  }

  /**
   * Metric for the number of executions that succeeded
   *
   * @default - sum over 5 minutes
   */
  public metricSucceeded(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.cannedMetric(function executionsSucceededSum(dimensions) {
      return {
        namespace: 'AWS/States',
        metricName: 'ExecutionsSucceeded',
        dimensionsMap: dimensions,
        statistic: 'Sum',
      };
    }, props);
  }

  /**
   * Metric for the number of executions that timed out
   *
   * @default - sum over 5 minutes
   */
  public metricTimedOut(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.cannedMetric(function executionsTimedOutSum(dimensions) {
      return {
        namespace: 'AWS/States',
        metricName: 'ExecutionsTimedOut',
        dimensionsMap: dimensions,
        statistic: 'Sum',
      };
    }, props);
  }

  /**
   * Metric for the number of executions that were started
   *
   * @default - sum over 5 minutes
   */
  public metricStarted(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.metric('ExecutionsStarted', props);
  }

  /**
   * Metric for the interval, in milliseconds, between the time the execution starts and the time it closes
   *
   * @default - average over 5 minutes
   */
  public metricTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return this.cannedMetric(function executionTimeAverage(dimensions) {
      return {
        namespace: 'AWS/States',
        metricName: 'ExecutionTime',
        dimensionsMap: dimensions,
        statistic: 'Average',
      };
    }, props);
  }

  /**
   * Returns the pattern for the execution ARN's of the state machine
   */
  private executionArn(): string {
    return Stack.of(this).formatArn({
      resource: 'execution',
      service: 'states',
      resourceName: Arn.split(this.stateMachineArn, ArnFormat.COLON_RESOURCE_NAME).resourceName,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });
  }

  private cannedMetric(
    fn: (dims: { StateMachineArn: string }) => cloudwatch.MetricProps,
    props?: cloudwatch.MetricOptions): cloudwatch.Metric {
    return new cloudwatch.Metric({
      ...fn({ StateMachineArn: this.stateMachineArn }),
      ...props,
    }).attachTo(this);
  }
}


export class StateMachine extends StateMachineBase {
  /**
   * Execution role of this state machine
   */
  public readonly role: iam.IRole;

  /**
   * The name of the state machine
   * @attribute
   */
  public readonly stateMachineName: string;

  /**
   * The ARN of the state machine
   */
  public readonly stateMachineArn: string;

  /**
   * Type of the state machine
   * @attribute
   */
  public readonly stateMachineType: aws_stepfunctions.StateMachineType;

  constructor(scope: Construct, id: string, props: StateMachineProps) {


    super(scope, id, {
      physicalName: props.stateMachineName,
    });

    if (props.stateMachineName !== undefined) {
      this.validateStateMachineName(props.stateMachineName);
    }

    this.role = props.role || new iam.Role(this, 'Role', {
      assumedBy: new iam.ServicePrincipal('states.amazonaws.com'),
    });

    this.stateMachineType = props.stateMachineType ?? aws_stepfunctions.StateMachineType.STANDARD;

    const resource = new aws_stepfunctions.CfnStateMachine(this, 'Resource', {
      stateMachineName: this.physicalName,
      stateMachineType: props.stateMachineType ?? undefined,
      roleArn: this.role.roleArn,
      definitionString: JSON.stringify(StateMachine.smash(props.definition, props.overrides)),
      loggingConfiguration: props.logs ? this.buildLoggingConfiguration(props.logs) : undefined,
      tracingConfiguration: props.tracingEnabled ? this.buildTracingConfiguration() : undefined,
    });

    resource.node.addDependency(this.role);


    this.stateMachineName = this.getResourceNameAttribute(resource.attrName);
    this.stateMachineArn = this.getResourceArnAttribute(resource.ref, {
      service: 'states',
      resource: 'stateMachine',
      resourceName: this.physicalName,
      arnFormat: ArnFormat.COLON_RESOURCE_NAME,
    });
  }

  /**
   * The principal this state machine is running as
   */
  public get grantPrincipal() {
    return this.role.grantPrincipal;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public static smash(definition: any, smash: any = {}) {
    let states = definition.States;
    for (let key in smash) {
      if (states[key]) {
        states[key] = mergeDeep(states[key], smash[key]);
      }
    }
    return {
      ...definition,
      States: states,
    };
  }

  /**
   * Add the given statement to the role's policy
   */
  public addToRolePolicy(statement: iam.PolicyStatement) {
    this.role.addToPrincipalPolicy(statement);
  }

  private validateStateMachineName(stateMachineName: string) {
    if (!Token.isUnresolved(stateMachineName)) {
      if (stateMachineName.length < 1 || stateMachineName.length > 80) {
        throw new Error(`State Machine name must be between 1 and 80 characters. Received: ${stateMachineName}`);
      }

      if (!stateMachineName.match(/^[a-z0-9\+\!\@\.\(\)\-\=\_\']+$/i)) {
        throw new Error(`State Machine name must match "^[a-z0-9+!@.()-=_']+$/i". Received: ${stateMachineName}`);
      }
    }
  }

  private buildLoggingConfiguration(logOptions: LogOptions): aws_stepfunctions.CfnStateMachine.LoggingConfigurationProperty {
    // https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html#cloudwatch-iam-policy
    this.addToRolePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: [
        'logs:CreateLogDelivery',
        'logs:GetLogDelivery',
        'logs:UpdateLogDelivery',
        'logs:DeleteLogDelivery',
        'logs:ListLogDeliveries',
        'logs:PutResourcePolicy',
        'logs:DescribeResourcePolicies',
        'logs:DescribeLogGroups',
      ],
      resources: ['*'],
    }));

    return {
      destinations: [{
        cloudWatchLogsLogGroup: { logGroupArn: logOptions.destination.logGroupArn },
      }],
      includeExecutionData: logOptions.includeExecutionData,
      level: logOptions.level || 'ERROR',
    };
  }

  private buildTracingConfiguration(): aws_stepfunctions.CfnStateMachine.TracingConfigurationProperty {
    this.addToRolePolicy(new iam.PolicyStatement({
      // https://docs.aws.amazon.com/xray/latest/devguide/security_iam_id-based-policy-examples.html#xray-permissions-resources
      // https://docs.aws.amazon.com/step-functions/latest/dg/xray-iam.html
      actions: [
        'xray:PutTraceSegments',
        'xray:PutTelemetryRecords',
        'xray:GetSamplingRules',
        'xray:GetSamplingTargets',
      ],
      resources: ['*'],
    }));

    return {
      enabled: true,
    };
  }
}

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
function mergeDeep(...objects: any[]) {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
}