import { Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as aws_stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import { DefinitionBody, LogOptions, StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';
import * as yaml from 'js-yaml';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const merge = require('lodash.merge');

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

  /**
   * Should the ASL definition be written as YAML
   *
   * @default false
   */
  readonly aslYaml?: boolean;

}

export class StateMachine extends aws_stepfunctions.StateMachine {

  constructor(scope: Construct, id: string, props: StateMachineProps) {
    const mergedDefinition = merge(props.definition, { States: props.overrides });
    let definitionString: string;
    if (props.aslYaml) {
      definitionString = yaml.dump(mergedDefinition);
    } else {
      definitionString = JSON.stringify(mergedDefinition);
    }
    const propsMinusDefinition = {
      ...props,
      definition: undefined,
    };
    super(scope, id, {
      ...propsMinusDefinition,
      definitionBody: DefinitionBody.fromString(definitionString),
    });
  }
}

