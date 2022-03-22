import { Duration } from 'aws-cdk-lib';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as aws_stepfunctions from 'aws-cdk-lib/aws-stepfunctions';
import { CfnStateMachine, LogOptions, Pass, StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
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

export class StateMachine extends aws_stepfunctions.StateMachine {

  constructor(scope: Construct, id: string, props: StateMachineProps) {
    super(scope, id, {
      ...props,
      definition: new Pass(scope, 'THISWILLBEDELETEDRIGHTAWAY'),
    });
    scope.node.tryRemoveChild('THISWILLBEDELETEDRIGHTAWAY');
    (this.node.defaultChild as CfnStateMachine).definitionString = JSON.stringify(StateMachine.smash(props.definition, props.overrides));
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
