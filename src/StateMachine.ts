import { IGrantable, IPrincipal, ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnStateMachine } from 'aws-cdk-lib/aws-stepfunctions';
import { Construct } from 'constructs';

export interface StateMachineProps {
  /**
   * The name of the State Machine
   */
  readonly stateMachineName: string;
  /**
   * an object that represents the ASL.
   *
   * @example JSON.parse(fs.readFileSync('myasl.json'))
   */
  readonly definition: any;

  /**
   * An object that matches the schema/shape of the ASL .States map with overridden values.
   *
   * @example {'My First State': { Parameters: { FunctionName: 'aLambdaFunctionArn' } } }
   */
  readonly overrides: any;

  /**
   * Is this an express worklfow?
   *
   * @default false - a Standard workflow
   */
  readonly express?: boolean;
}

export class StateMachine extends CfnStateMachine implements IGrantable {
  public role: Role;

  constructor(scope: Construct, id: string, props: StateMachineProps) {
    const role = new Role(scope, `${id}-Role`, { assumedBy: new ServicePrincipal('states') });
    role.addManagedPolicy(ManagedPolicy.fromAwsManagedPolicyName('CloudWatchEventsFullAccess'));
    super(scope, id, {
      stateMachineType: props.express ? 'EXPRESS' : 'STANDARD',
      stateMachineName: props.stateMachineName,
      roleArn: role.roleArn,
      definitionString: JSON.stringify(StateMachine.smash(props.definition, props.overrides)),
    });
    this.role = role;
  }

  get grantPrincipal(): IPrincipal {
    return this.role;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public static smash(definition: any, smash: any) {
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