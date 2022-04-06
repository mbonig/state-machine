# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StateMachine <a name="StateMachine" id="@rubenfonseca/state-machine.StateMachine"></a>

#### Initializers <a name="Initializers" id="@rubenfonseca/state-machine.StateMachine.Initializer"></a>

```typescript
import { StateMachine } from '@rubenfonseca/state-machine'

new StateMachine(scope: Construct, id: string, props: StateMachineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.Initializer.parameter.props">props</a></code> | <code><a href="#@rubenfonseca/state-machine.StateMachineProps">StateMachineProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@rubenfonseca/state-machine.StateMachine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@rubenfonseca/state-machine.StateMachine.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.Initializer.parameter.props"></a>

- *Type:* <a href="#@rubenfonseca/state-machine.StateMachineProps">StateMachineProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.addToRolePolicy">addToRolePolicy</a></code> | Add the given statement to the role's policy. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.grant">grant</a></code> | Grant the given identity custom permissions. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.grantExecution">grantExecution</a></code> | Grant the given identity permissions on all executions of the state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.grantRead">grantRead</a></code> | Grant the given identity permissions to read results from state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.grantStartExecution">grantStartExecution</a></code> | Grant the given identity permissions to start an execution of this state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.grantStartSyncExecution">grantStartSyncExecution</a></code> | Grant the given identity permissions to start a synchronous execution of this state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.grantTaskResponse">grantTaskResponse</a></code> | Grant the given identity task response permissions on a state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metric">metric</a></code> | Return the given named metric for this State Machine's executions. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricAborted">metricAborted</a></code> | Metric for the number of executions that were aborted. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricFailed">metricFailed</a></code> | Metric for the number of executions that failed. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricStarted">metricStarted</a></code> | Metric for the number of executions that were started. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricSucceeded">metricSucceeded</a></code> | Metric for the number of executions that succeeded. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricThrottled">metricThrottled</a></code> | Metric for the number of executions that were throttled. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricTime">metricTime</a></code> | Metric for the interval, in milliseconds, between the time the execution starts and the time it closes. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.metricTimedOut">metricTimedOut</a></code> | Metric for the number of executions that timed out. |

---

##### `toString` <a name="toString" id="@rubenfonseca/state-machine.StateMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@rubenfonseca/state-machine.StateMachine.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@rubenfonseca/state-machine.StateMachine.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addToRolePolicy` <a name="addToRolePolicy" id="@rubenfonseca/state-machine.StateMachine.addToRolePolicy"></a>

```typescript
public addToRolePolicy(statement: PolicyStatement): void
```

Add the given statement to the role's policy.

###### `statement`<sup>Required</sup> <a name="statement" id="@rubenfonseca/state-machine.StateMachine.addToRolePolicy.parameter.statement"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

##### `grant` <a name="grant" id="@rubenfonseca/state-machine.StateMachine.grant"></a>

```typescript
public grant(identity: IGrantable, actions: string): Grant
```

Grant the given identity custom permissions.

###### `identity`<sup>Required</sup> <a name="identity" id="@rubenfonseca/state-machine.StateMachine.grant.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@rubenfonseca/state-machine.StateMachine.grant.parameter.actions"></a>

- *Type:* string

---

##### `grantExecution` <a name="grantExecution" id="@rubenfonseca/state-machine.StateMachine.grantExecution"></a>

```typescript
public grantExecution(identity: IGrantable, actions: string): Grant
```

Grant the given identity permissions on all executions of the state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@rubenfonseca/state-machine.StateMachine.grantExecution.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `actions`<sup>Required</sup> <a name="actions" id="@rubenfonseca/state-machine.StateMachine.grantExecution.parameter.actions"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@rubenfonseca/state-machine.StateMachine.grantRead"></a>

```typescript
public grantRead(identity: IGrantable): Grant
```

Grant the given identity permissions to read results from state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@rubenfonseca/state-machine.StateMachine.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantStartExecution` <a name="grantStartExecution" id="@rubenfonseca/state-machine.StateMachine.grantStartExecution"></a>

```typescript
public grantStartExecution(identity: IGrantable): Grant
```

Grant the given identity permissions to start an execution of this state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@rubenfonseca/state-machine.StateMachine.grantStartExecution.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantStartSyncExecution` <a name="grantStartSyncExecution" id="@rubenfonseca/state-machine.StateMachine.grantStartSyncExecution"></a>

```typescript
public grantStartSyncExecution(identity: IGrantable): Grant
```

Grant the given identity permissions to start a synchronous execution of this state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@rubenfonseca/state-machine.StateMachine.grantStartSyncExecution.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantTaskResponse` <a name="grantTaskResponse" id="@rubenfonseca/state-machine.StateMachine.grantTaskResponse"></a>

```typescript
public grantTaskResponse(identity: IGrantable): Grant
```

Grant the given identity task response permissions on a state machine.

###### `identity`<sup>Required</sup> <a name="identity" id="@rubenfonseca/state-machine.StateMachine.grantTaskResponse.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `metric` <a name="metric" id="@rubenfonseca/state-machine.StateMachine.metric"></a>

```typescript
public metric(metricName: string, props?: MetricOptions): Metric
```

Return the given named metric for this State Machine's executions.

###### `metricName`<sup>Required</sup> <a name="metricName" id="@rubenfonseca/state-machine.StateMachine.metric.parameter.metricName"></a>

- *Type:* string

---

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metric.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricAborted` <a name="metricAborted" id="@rubenfonseca/state-machine.StateMachine.metricAborted"></a>

```typescript
public metricAborted(props?: MetricOptions): Metric
```

Metric for the number of executions that were aborted.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricAborted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricFailed` <a name="metricFailed" id="@rubenfonseca/state-machine.StateMachine.metricFailed"></a>

```typescript
public metricFailed(props?: MetricOptions): Metric
```

Metric for the number of executions that failed.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricFailed.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricStarted` <a name="metricStarted" id="@rubenfonseca/state-machine.StateMachine.metricStarted"></a>

```typescript
public metricStarted(props?: MetricOptions): Metric
```

Metric for the number of executions that were started.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricStarted.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricSucceeded` <a name="metricSucceeded" id="@rubenfonseca/state-machine.StateMachine.metricSucceeded"></a>

```typescript
public metricSucceeded(props?: MetricOptions): Metric
```

Metric for the number of executions that succeeded.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricSucceeded.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricThrottled` <a name="metricThrottled" id="@rubenfonseca/state-machine.StateMachine.metricThrottled"></a>

```typescript
public metricThrottled(props?: MetricOptions): Metric
```

Metric for the number of executions that were throttled.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricThrottled.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTime` <a name="metricTime" id="@rubenfonseca/state-machine.StateMachine.metricTime"></a>

```typescript
public metricTime(props?: MetricOptions): Metric
```

Metric for the interval, in milliseconds, between the time the execution starts and the time it closes.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricTime.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

##### `metricTimedOut` <a name="metricTimedOut" id="@rubenfonseca/state-machine.StateMachine.metricTimedOut"></a>

```typescript
public metricTimedOut(props?: MetricOptions): Metric
```

Metric for the number of executions that timed out.

###### `props`<sup>Optional</sup> <a name="props" id="@rubenfonseca/state-machine.StateMachine.metricTimedOut.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.fromStateMachineArn">fromStateMachineArn</a></code> | Import a state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.smash">smash</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@rubenfonseca/state-machine.StateMachine.isConstruct"></a>

```typescript
import { StateMachine } from '@rubenfonseca/state-machine'

StateMachine.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@rubenfonseca/state-machine.StateMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isResource` <a name="isResource" id="@rubenfonseca/state-machine.StateMachine.isResource"></a>

```typescript
import { StateMachine } from '@rubenfonseca/state-machine'

StateMachine.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@rubenfonseca/state-machine.StateMachine.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromStateMachineArn` <a name="fromStateMachineArn" id="@rubenfonseca/state-machine.StateMachine.fromStateMachineArn"></a>

```typescript
import { StateMachine } from '@rubenfonseca/state-machine'

StateMachine.fromStateMachineArn(scope: Construct, id: string, stateMachineArn: string)
```

Import a state machine.

###### `scope`<sup>Required</sup> <a name="scope" id="@rubenfonseca/state-machine.StateMachine.fromStateMachineArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@rubenfonseca/state-machine.StateMachine.fromStateMachineArn.parameter.id"></a>

- *Type:* string

---

###### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@rubenfonseca/state-machine.StateMachine.fromStateMachineArn.parameter.stateMachineArn"></a>

- *Type:* string

---

##### `smash` <a name="smash" id="@rubenfonseca/state-machine.StateMachine.smash"></a>

```typescript
import { StateMachine } from '@rubenfonseca/state-machine'

StateMachine.smash(definition: any, smash?: any)
```

###### `definition`<sup>Required</sup> <a name="definition" id="@rubenfonseca/state-machine.StateMachine.smash.parameter.definition"></a>

- *Type:* any

---

###### `smash`<sup>Optional</sup> <a name="smash" id="@rubenfonseca/state-machine.StateMachine.smash.parameter.smash"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal this state machine is running as. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Execution role of this state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.stateMachineArn">stateMachineArn</a></code> | <code>string</code> | The ARN of the state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The name of the state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachine.property.stateMachineType">stateMachineType</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachineType</code> | Type of the state machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="@rubenfonseca/state-machine.StateMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@rubenfonseca/state-machine.StateMachine.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK (generally, those created by creating new class instances like Role, Bucket, etc.), this is always the same as the environment of the stack they belong to; however, for imported resources (those obtained from static methods like fromRoleArn, fromBucketName, etc.), that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@rubenfonseca/state-machine.StateMachine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@rubenfonseca/state-machine.StateMachine.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal this state machine is running as.

---

##### `role`<sup>Required</sup> <a name="role" id="@rubenfonseca/state-machine.StateMachine.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Execution role of this state machine.

---

##### `stateMachineArn`<sup>Required</sup> <a name="stateMachineArn" id="@rubenfonseca/state-machine.StateMachine.property.stateMachineArn"></a>

```typescript
public readonly stateMachineArn: string;
```

- *Type:* string

The ARN of the state machine.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@rubenfonseca/state-machine.StateMachine.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The name of the state machine.

---

##### `stateMachineType`<sup>Required</sup> <a name="stateMachineType" id="@rubenfonseca/state-machine.StateMachine.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: StateMachineType;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachineType

Type of the state machine.

---


## Structs <a name="Structs" id="Structs"></a>

### StateMachineProps <a name="StateMachineProps" id="@rubenfonseca/state-machine.StateMachineProps"></a>

#### Initializer <a name="Initializer" id="@rubenfonseca/state-machine.StateMachineProps.Initializer"></a>

```typescript
import { StateMachineProps } from '@rubenfonseca/state-machine'

const stateMachineProps: StateMachineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.definition">definition</a></code> | <code>any</code> | An object that can be serialized into an ASL. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.logs">logs</a></code> | <code>aws-cdk-lib.aws_stepfunctions.LogOptions</code> | Defines what execution history events are logged and where they are logged. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.overrides">overrides</a></code> | <code>any</code> | An object that matches the schema/shape of the ASL .States map with overridden values. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The execution role for the state machine service. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | A name for the state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.stateMachineType">stateMachineType</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachineType</code> | Type of the state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.timeout">timeout</a></code> | <code>aws-cdk-lib.Duration</code> | Maximum run time for this state machine. |
| <code><a href="#@rubenfonseca/state-machine.StateMachineProps.property.tracingEnabled">tracingEnabled</a></code> | <code>boolean</code> | Specifies whether Amazon X-Ray tracing is enabled for this state machine. |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@rubenfonseca/state-machine.StateMachineProps.property.definition"></a>

```typescript
public readonly definition: any;
```

- *Type:* any

An object that can be serialized into an ASL.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@rubenfonseca/state-machine.StateMachineProps.property.logs"></a>

```typescript
public readonly logs: LogOptions;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.LogOptions
- *Default:* No logging

Defines what execution history events are logged and where they are logged.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@rubenfonseca/state-machine.StateMachineProps.property.overrides"></a>

```typescript
public readonly overrides: any;
```

- *Type:* any

An object that matches the schema/shape of the ASL .States map with overridden values.

---

##### `role`<sup>Optional</sup> <a name="role" id="@rubenfonseca/state-machine.StateMachineProps.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is automatically created

The execution role for the state machine service.

---

##### `stateMachineName`<sup>Optional</sup> <a name="stateMachineName" id="@rubenfonseca/state-machine.StateMachineProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string
- *Default:* A name is automatically generated

A name for the state machine.

---

##### `stateMachineType`<sup>Optional</sup> <a name="stateMachineType" id="@rubenfonseca/state-machine.StateMachineProps.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: StateMachineType;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachineType
- *Default:* StateMachineType.STANDARD

Type of the state machine.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@rubenfonseca/state-machine.StateMachineProps.property.timeout"></a>

```typescript
public readonly timeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* No timeout

Maximum run time for this state machine.

---

##### `tracingEnabled`<sup>Optional</sup> <a name="tracingEnabled" id="@rubenfonseca/state-machine.StateMachineProps.property.tracingEnabled"></a>

```typescript
public readonly tracingEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Specifies whether Amazon X-Ray tracing is enabled for this state machine.

---



