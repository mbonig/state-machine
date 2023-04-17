# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StateMachine <a name="StateMachine" id="@matthewbonig/state-machine.StateMachine"></a>

#### Initializers <a name="Initializers" id="@matthewbonig/state-machine.StateMachine.Initializer"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

new StateMachine(scope: Construct, id: string, props: StateMachineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@matthewbonig/state-machine.StateMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/state-machine.StateMachine.Initializer.parameter.props">props</a></code> | <code><a href="#@matthewbonig/state-machine.StateMachineProps">StateMachineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/state-machine.StateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/state-machine.StateMachine.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.Initializer.parameter.props"></a>

- *Type:* <a href="#@matthewbonig/state-machine.StateMachineProps">StateMachineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addToRolePolicy">addToRolePolicy</a></code> | Add the given statement to the role's policy. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.grant">grant</a></code> | Grant the given identity custom permissions. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.grantExecution">grantExecution</a></code> | Grant the given identity permissions on all executions of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.grantRead">grantRead</a></code> | Grant the given identity permissions to read results from state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.grantStartExecution">grantStartExecution</a></code> | Grant the given identity permissions to start an execution of this state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.grantStartSyncExecution">grantStartSyncExecution</a></code> | Grant the given identity permissions to start a synchronous execution of this state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.grantTaskResponse">grantTaskResponse</a></code> | Grant the given identity task response permissions on a state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metric">metric</a></code> | Return the given named metric for this State Machine's executions. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricAborted">metricAborted</a></code> | Metric for the number of executions that were aborted. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricFailed">metricFailed</a></code> | Metric for the number of executions that failed. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricStarted">metricStarted</a></code> | Metric for the number of executions that were started. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricSucceeded">metricSucceeded</a></code> | Metric for the number of executions that succeeded. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricThrottled">metricThrottled</a></code> | Metric for the number of executions that were throttled. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricTime">metricTime</a></code> | Metric for the interval, in milliseconds, between the time the execution starts and the time it closes. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.metricTimedOut">metricTimedOut</a></code> | Metric for the number of executions that timed out. |

---

##### `toString` <a name="toString" id="@matthewbonig/state-machine.StateMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@matthewbonig/state-machine.StateMachine.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@matthewbonig/state-machine.StateMachine.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@matthewbonig/state-machine.StateMachine.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Add the given statement to the role's policy.

###### `statement`<sup>Required</sup> <a name="statement" id="@matthewbonig/state-machine.StateMachine.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `grant` <a name="grant" id="@matthewbonig/state-machine.StateMachine.grant"></a>

```typescript
public grant(identity: IGrantable, actions: string): Grant
```

Grant the given identity custom permissions.

###### `identity`<sup>Required</sup> <a name="identity" id="@matthewbonig/state-machine.StateMachine.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@matthewbonig/state-machine.StateMachine.grant.parameter.actions"></a>

- *Type:* string

---

##### `grantExecution` <a name="grantExecution" id="@matthewbonig/state-machine.StateMachine.grantExecution"></a>

```typescript
public grantExecution(identity: IGrantable, actions: string): Grant
```

Grant the given identity permissions on all executions of the state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@matthewbonig/state-machine.StateMachine.grantExecution.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@matthewbonig/state-machine.StateMachine.grantExecution.parameter.actions"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@matthewbonig/state-machine.StateMachine.grantRead"></a>

```typescript
public grantRead(identity: IGrantable): Grant
```

Grant the given identity permissions to read results from state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@matthewbonig/state-machine.StateMachine.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantStartExecution` <a name="grantStartExecution" id="@matthewbonig/state-machine.StateMachine.grantStartExecution"></a>

```typescript
public grantStartExecution(identity: IGrantable): Grant
```

Grant the given identity permissions to start an execution of this state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@matthewbonig/state-machine.StateMachine.grantStartExecution.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantStartSyncExecution` <a name="grantStartSyncExecution" id="@matthewbonig/state-machine.StateMachine.grantStartSyncExecution"></a>

```typescript
public grantStartSyncExecution(identity: IGrantable): Grant
```

Grant the given identity permissions to start a synchronous execution of this state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@matthewbonig/state-machine.StateMachine.grantStartSyncExecution.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantTaskResponse` <a name="grantTaskResponse" id="@matthewbonig/state-machine.StateMachine.grantTaskResponse"></a>

```typescript
public grantTaskResponse(identity: IGrantable): Grant
```

Grant the given identity task response permissions on a state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@matthewbonig/state-machine.StateMachine.grantTaskResponse.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@matthewbonig/state-machine.StateMachine.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this State Machine's executions.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@matthewbonig/state-machine.StateMachine.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAborted` <a name="metricAborted" id="@matthewbonig/state-machine.StateMachine.metricAborted"></a>

```typescript
public metricAborted(props?: MetricOptions): Metric
```

Metric for the number of executions that were aborted.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricAborted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricFailed` <a name="metricFailed" id="@matthewbonig/state-machine.StateMachine.metricFailed"></a>

```typescript
public metricFailed(props?: MetricOptions): Metric
```

Metric for the number of executions that failed.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricFailed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStarted` <a name="metricStarted" id="@matthewbonig/state-machine.StateMachine.metricStarted"></a>

```typescript
public metricStarted(props?: MetricOptions): Metric
```

Metric for the number of executions that were started.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricStarted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSucceeded` <a name="metricSucceeded" id="@matthewbonig/state-machine.StateMachine.metricSucceeded"></a>

```typescript
public metricSucceeded(props?: MetricOptions): Metric
```

Metric for the number of executions that succeeded.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricSucceeded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottled` <a name="metricThrottled" id="@matthewbonig/state-machine.StateMachine.metricThrottled"></a>

```typescript
public metricThrottled(props?: MetricOptions): Metric
```

Metric for the number of executions that were throttled.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricThrottled.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTime` <a name="metricTime" id="@matthewbonig/state-machine.StateMachine.metricTime"></a>

```typescript
public metricTime(props?: MetricOptions): Metric
```

Metric for the interval, in milliseconds, between the time the execution starts and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimedOut` <a name="metricTimedOut" id="@matthewbonig/state-machine.StateMachine.metricTimedOut"></a>

```typescript
public metricTimedOut(props?: MetricOptions): Metric
```

Metric for the number of executions that timed out.

###### `props`<sup>Optional</sup> <a name="props" id="@matthewbonig/state-machine.StateMachine.metricTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.fromStateMachineArn">fromStateMachineArn</a></code> | Import a state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.fromStateMachineName">fromStateMachineName</a></code> | Import a state machine via resource name. |

---

##### `isConstruct` <a name="isConstruct" id="@matthewbonig/state-machine.StateMachine.isConstruct"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/state-machine.StateMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@matthewbonig/state-machine.StateMachine.isOwnedResource"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@matthewbonig/state-machine.StateMachine.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@matthewbonig/state-machine.StateMachine.isResource"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@matthewbonig/state-machine.StateMachine.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromStateMachineArn` <a name="fromStateMachineArn" id="@matthewbonig/state-machine.StateMachine.fromStateMachineArn"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.fromStateMachineArn(scope: Construct, id: string, stateMachineArn: string)
```

Import a state machine.

###### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/state-machine.StateMachine.fromStateMachineArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/state-machine.StateMachine.fromStateMachineArn.parameter.id"></a>

- *Type:* string

---

###### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@matthewbonig/state-machine.StateMachine.fromStateMachineArn.parameter.stateMachineArn"></a>

- *Type:* string

---

##### `fromStateMachineName` <a name="fromStateMachineName" id="@matthewbonig/state-machine.StateMachine.fromStateMachineName"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.fromStateMachineName(scope: Construct, id: string, stateMachineName: string)
```

Import a state machine via resource name.

###### `scope`<sup>Required</sup> <a name="scope" id="@matthewbonig/state-machine.StateMachine.fromStateMachineName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@matthewbonig/state-machine.StateMachine.fromStateMachineName.parameter.id"></a>

- *Type:* string

---

###### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@matthewbonig/state-machine.StateMachine.fromStateMachineName.parameter.stateMachineName"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this state machine is running as. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role of this state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | The ARN of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The name of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stateMachineType">stateMachineType</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachineType</code> | Type of the state machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/state-machine.StateMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@matthewbonig/state-machine.StateMachine.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@matthewbonig/state-machine.StateMachine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@matthewbonig/state-machine.StateMachine.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this state machine is running as.

---

##### `role`<sup>Required</sup> <a name="role" id="@matthewbonig/state-machine.StateMachine.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role of this state machine.

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@matthewbonig/state-machine.StateMachine.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

The ARN of the state machine.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@matthewbonig/state-machine.StateMachine.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The name of the state machine.

---

##### `stateMachineType`<sup>Required</sup> <a name="stateMachineType" id="@matthewbonig/state-machine.StateMachine.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: StateMachineType;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachineType

Type of the state machine.

---


## Structs <a name="Structs" id="Structs"></a>

### StateMachineProps <a name="StateMachineProps" id="@matthewbonig/state-machine.StateMachineProps"></a>

#### Initializer <a name="Initializer" id="@matthewbonig/state-machine.StateMachineProps.Initializer"></a>

```typescript
import { StateMachineProps } from '@matthewbonig/state-machine'

const stateMachineProps: StateMachineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.definition">definition</a></code> | <code>any</code> | An object that can be serialized into an ASL. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.aslYaml">aslYaml</a></code> | <code>boolean</code> | Should the ASL definition be written as YAML. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.logs">logs</a></code> | <code>aws-cdk-lib.aws_stepfunctions.LogOptions</code> | Defines what execution history events are logged and where they are logged. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.overrides">overrides</a></code> | <code>any</code> | An object that matches the schema/shape of the ASL .States map with overridden values. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role for the state machine service. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | A name for the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.stateMachineType">stateMachineType</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachineType</code> | Type of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Maximum run time for this state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.tracingEnabled">tracingEnabled</a></code> | <code>boolean</code> | Specifies whether Amazon X-Ray tracing is enabled for this state machine. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@matthewbonig/state-machine.StateMachineProps.property.definition"></a>

```typescript
public readonly definition: any;
```

- *Type:* any

An object that can be serialized into an ASL.

---

##### `aslYaml`<sup>Optional</sup> <a name="aslYaml" id="@matthewbonig/state-machine.StateMachineProps.property.aslYaml"></a>

```typescript
public readonly aslYaml: boolean;
```

- *Type:* boolean
- *Default:* false

Should the ASL definition be written as YAML.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@matthewbonig/state-machine.StateMachineProps.property.logs"></a>

```typescript
public readonly logs: LogOptions;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.LogOptions
- *Default:* No logging

Defines what execution history events are logged and where they are logged.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@matthewbonig/state-machine.StateMachineProps.property.overrides"></a>

```typescript
public readonly overrides: any;
```

- *Type:* any

An object that matches the schema/shape of the ASL .States map with overridden values.

---

*Example*

```typescript
{'My First State': { Parameters: { FunctionName: 'aLambdaFunctionArn' } } }
```


##### `role`<sup>Optional</sup> <a name="role" id="@matthewbonig/state-machine.StateMachineProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is automatically created

The execution role for the state machine service.

---

##### `stateMachineName`<sup>Optional</sup> <a name="stateMachineName" id="@matthewbonig/state-machine.StateMachineProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string
- *Default:* A name is automatically generated

A name for the state machine.

---

##### `stateMachineType`<sup>Optional</sup> <a name="stateMachineType" id="@matthewbonig/state-machine.StateMachineProps.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: StateMachineType;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachineType
- *Default:* StateMachineType.STANDARD

Type of the state machine.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@matthewbonig/state-machine.StateMachineProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* No timeout

Maximum run time for this state machine.

---

##### `tracingEnabled`<sup>Optional</sup> <a name="tracingEnabled" id="@matthewbonig/state-machine.StateMachineProps.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether Amazon X-Ray tracing is enabled for this state machine.

---

### StepFunctionsAutoDiscoverOptions <a name="StepFunctionsAutoDiscoverOptions" id="@matthewbonig/state-machine.StepFunctionsAutoDiscoverOptions"></a>

#### Initializer <a name="Initializer" id="@matthewbonig/state-machine.StepFunctionsAutoDiscoverOptions.Initializer"></a>

```typescript
import { StepFunctionsAutoDiscoverOptions } from '@matthewbonig/state-machine'

const stepFunctionsAutoDiscoverOptions: StepFunctionsAutoDiscoverOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscoverOptions.property.extension">extension</a></code> | <code>string</code> | An optional extension to use for discovering state machine files. |

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@matthewbonig/state-machine.StepFunctionsAutoDiscoverOptions.property.extension"></a>

```typescript
public readonly extension: string;
```

- *Type:* string
- *Default:* '.workflow.json' (JSON_STEPFUNCTION_EXT)

An optional extension to use for discovering state machine files.

---

## Classes <a name="Classes" id="Classes"></a>

### StepFunctionsAutoDiscover <a name="StepFunctionsAutoDiscover" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover"></a>

A projen component for discovering AWS Step Function state machine workflow ASL files and generating a strongly typed interface and construct to use it.

Simply add a new instance and hand it your AwsCdkTypeScriptApp projen class:
```
const project = new AwsCdkTypeScriptApp({ ... });
new StepFunctionsAutoDiscover(project);
```

And any *.workflow.json file will cause the generation of a new strongly-typed StateMachine-derived class you can use.
Note that these constructs are NOT jsii-compatible. If you need that,
please open an [issue](https://github.com/mbonig/state-machine/issues/new)

#### Initializers <a name="Initializers" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.Initializer"></a>

```typescript
import { StepFunctionsAutoDiscover } from '@matthewbonig/state-machine'

new StepFunctionsAutoDiscover(project: AwsCdkTypeScriptApp, _options?: StepFunctionsAutoDiscoverOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.Initializer.parameter.project">project</a></code> | <code>projen.awscdk.AwsCdkTypeScriptApp</code> | *No description.* |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.Initializer.parameter._options">_options</a></code> | <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscoverOptions">StepFunctionsAutoDiscoverOptions</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.Initializer.parameter.project"></a>

- *Type:* projen.awscdk.AwsCdkTypeScriptApp

---

##### `_options`<sup>Optional</sup> <a name="_options" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.Initializer.parameter._options"></a>

- *Type:* <a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscoverOptions">StepFunctionsAutoDiscoverOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `postSynthesize` <a name="postSynthesize" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |
| <code><a href="#@matthewbonig/state-machine.StepFunctionsAutoDiscover.property.entrypoints">entrypoints</a></code> | <code>string[]</code> | Auto-discovered entry points with paths relative to the project directory. |

---

##### `project`<sup>Required</sup> <a name="project" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---

##### `entrypoints`<sup>Required</sup> <a name="entrypoints" id="@matthewbonig/state-machine.StepFunctionsAutoDiscover.property.entrypoints"></a>

```typescript
public readonly entrypoints: string[];
```

- *Type:* string[]

Auto-discovered entry points with paths relative to the project directory.

---



