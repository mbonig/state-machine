# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StateMachine <a name="StateMachine" id="@matthewbonig/state-machine.StateMachine"></a>

- *Implements:* aws-cdk-lib.aws_iam.IGrantable

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
| <code><a href="#@matthewbonig/state-machine.StateMachine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addDeletionOverride">addDeletionOverride</a></code> | Syntactic sugar for `addOverride(path, undefined)`. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addDependsOn">addDependsOn</a></code> | Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addMetadata">addMetadata</a></code> | Add a value to the CloudFormation Resource Metadata. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addOverride">addOverride</a></code> | Adds an override to the synthesized CloudFormation resource. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addPropertyDeletionOverride">addPropertyDeletionOverride</a></code> | Adds an override that deletes the value of a property from the resource definition. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.addPropertyOverride">addPropertyOverride</a></code> | Adds an override to a resource property. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.applyRemovalPolicy">applyRemovalPolicy</a></code> | Sets the deletion policy of the resource based on the removal policy specified. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.getAtt">getAtt</a></code> | Returns a token for an runtime attribute of this resource. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.getMetadata">getMetadata</a></code> | Retrieve a value value from the CloudFormation Resource Metadata. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.inspect">inspect</a></code> | Examines the CloudFormation resource and discloses attributes. |

---

##### `toString` <a name="toString" id="@matthewbonig/state-machine.StateMachine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `overrideLogicalId` <a name="overrideLogicalId" id="@matthewbonig/state-machine.StateMachine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@matthewbonig/state-machine.StateMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `addDeletionOverride` <a name="addDeletionOverride" id="@matthewbonig/state-machine.StateMachine.addDeletionOverride"></a>

```typescript
public addDeletionOverride(path: string): void
```

Syntactic sugar for `addOverride(path, undefined)`.

###### `path`<sup>Required</sup> <a name="path" id="@matthewbonig/state-machine.StateMachine.addDeletionOverride.parameter.path"></a>

- *Type:* string

The path of the value to delete.

---

##### `addDependsOn` <a name="addDependsOn" id="@matthewbonig/state-machine.StateMachine.addDependsOn"></a>

```typescript
public addDependsOn(target: CfnResource): void
```

Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

This can be used for resources across stacks (or nested stack) boundaries and the dependency will automatically be transferred to the relevant scope.

###### `target`<sup>Required</sup> <a name="target" id="@matthewbonig/state-machine.StateMachine.addDependsOn.parameter.target"></a>

- *Type:* aws-cdk-lib.CfnResource

---

##### `addMetadata` <a name="addMetadata" id="@matthewbonig/state-machine.StateMachine.addMetadata"></a>

```typescript
public addMetadata(key: string, value: any): void
```

Add a value to the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@matthewbonig/state-machine.StateMachine.addMetadata.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@matthewbonig/state-machine.StateMachine.addMetadata.parameter.value"></a>

- *Type:* any

---

##### `addOverride` <a name="addOverride" id="@matthewbonig/state-machine.StateMachine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

Adds an override to the synthesized CloudFormation resource.

To add a property override, either use `addPropertyOverride` or prefix `path` with "Properties." (i.e. `Properties.TopicName`).  If the override is nested, separate each nested level using a dot (.) in the path parameter. If there is an array as part of the nesting, specify the index in the path.  To include a literal `.` in the property name, prefix with a `\`. In most programming languages you will need to write this as `"\\."` because the `\` itself will need to be escaped.  For example, ```typescript cfnResource.addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute']); cfnResource.addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE'); ``` would add the overrides ```json "Properties": {    "GlobalSecondaryIndexes": [      {        "Projection": {          "NonKeyAttributes": [ "myattribute" ]          ...        }        ...      },      {        "ProjectionType": "INCLUDE"        ...      },    ]    ... } ```

###### `path`<sup>Required</sup> <a name="path" id="@matthewbonig/state-machine.StateMachine.addOverride.parameter.path"></a>

- *Type:* string

The path of the property, you can use dot notation to override values in complex types.

Any intermdediate keys will be created as needed.

---

###### `value`<sup>Required</sup> <a name="value" id="@matthewbonig/state-machine.StateMachine.addOverride.parameter.value"></a>

- *Type:* any

The value.

Could be primitive or complex.

---

##### `addPropertyDeletionOverride` <a name="addPropertyDeletionOverride" id="@matthewbonig/state-machine.StateMachine.addPropertyDeletionOverride"></a>

```typescript
public addPropertyDeletionOverride(propertyPath: string): void
```

Adds an override that deletes the value of a property from the resource definition.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@matthewbonig/state-machine.StateMachine.addPropertyDeletionOverride.parameter.propertyPath"></a>

- *Type:* string

The path to the property.

---

##### `addPropertyOverride` <a name="addPropertyOverride" id="@matthewbonig/state-machine.StateMachine.addPropertyOverride"></a>

```typescript
public addPropertyOverride(propertyPath: string, value: any): void
```

Adds an override to a resource property.

Syntactic sugar for `addOverride("Properties.<...>", value)`.

###### `propertyPath`<sup>Required</sup> <a name="propertyPath" id="@matthewbonig/state-machine.StateMachine.addPropertyOverride.parameter.propertyPath"></a>

- *Type:* string

The path of the property.

---

###### `value`<sup>Required</sup> <a name="value" id="@matthewbonig/state-machine.StateMachine.addPropertyOverride.parameter.value"></a>

- *Type:* any

The value.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@matthewbonig/state-machine.StateMachine.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy?: RemovalPolicy, options?: RemovalPolicyOptions): void
```

Sets the deletion policy of the resource based on the removal policy specified.

The Removal Policy controls what happens to this resource when it stops being managed by CloudFormation, either because you've removed it from the CDK application or because you've made a change that requires the resource to be replaced.  The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Optional</sup> <a name="policy" id="@matthewbonig/state-machine.StateMachine.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

###### `options`<sup>Optional</sup> <a name="options" id="@matthewbonig/state-machine.StateMachine.applyRemovalPolicy.parameter.options"></a>

- *Type:* aws-cdk-lib.RemovalPolicyOptions

---

##### `getAtt` <a name="getAtt" id="@matthewbonig/state-machine.StateMachine.getAtt"></a>

```typescript
public getAtt(attributeName: string): Reference
```

Returns a token for an runtime attribute of this resource.

Ideally, use generated attribute accessors (e.g. `resource.arn`), but this can be used for future compatibility in case there is no generated attribute.

###### `attributeName`<sup>Required</sup> <a name="attributeName" id="@matthewbonig/state-machine.StateMachine.getAtt.parameter.attributeName"></a>

- *Type:* string

The name of the attribute.

---

##### `getMetadata` <a name="getMetadata" id="@matthewbonig/state-machine.StateMachine.getMetadata"></a>

```typescript
public getMetadata(key: string): any
```

Retrieve a value value from the CloudFormation Resource Metadata.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/metadata-section-structure.html

Note that this is a different set of metadata from CDK node metadata; this
metadata ends up in the stack template under the resource, whereas CDK
node metadata ends up in the Cloud Assembly.)

###### `key`<sup>Required</sup> <a name="key" id="@matthewbonig/state-machine.StateMachine.getMetadata.parameter.key"></a>

- *Type:* string

---

##### `inspect` <a name="inspect" id="@matthewbonig/state-machine.StateMachine.inspect"></a>

```typescript
public inspect(inspector: TreeInspector): void
```

Examines the CloudFormation resource and discloses attributes.

###### `inspector`<sup>Required</sup> <a name="inspector" id="@matthewbonig/state-machine.StateMachine.inspect.parameter.inspector"></a>

- *Type:* aws-cdk-lib.TreeInspector

tree inspector to collect and process attributes.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.isCfnElement">isCfnElement</a></code> | Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template). |
| <code><a href="#@matthewbonig/state-machine.StateMachine.isCfnResource">isCfnResource</a></code> | Check whether the given construct is a CfnResource. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.smash">smash</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@matthewbonig/state-machine.StateMachine.isConstruct"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/state-machine.StateMachine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isCfnElement` <a name="isCfnElement" id="@matthewbonig/state-machine.StateMachine.isCfnElement"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.isCfnElement(x: any)
```

Returns `true` if a construct is a stack element (i.e. part of the synthesized cloudformation template).

Uses duck-typing instead of `instanceof` to allow stack elements from different versions of this library to be included in the same stack.

###### `x`<sup>Required</sup> <a name="x" id="@matthewbonig/state-machine.StateMachine.isCfnElement.parameter.x"></a>

- *Type:* any

---

##### `isCfnResource` <a name="isCfnResource" id="@matthewbonig/state-machine.StateMachine.isCfnResource"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.isCfnResource(construct: IConstruct)
```

Check whether the given construct is a CfnResource.

###### `construct`<sup>Required</sup> <a name="construct" id="@matthewbonig/state-machine.StateMachine.isCfnResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `smash` <a name="smash" id="@matthewbonig/state-machine.StateMachine.smash"></a>

```typescript
import { StateMachine } from '@matthewbonig/state-machine'

StateMachine.smash(definition: any, smash: any)
```

###### `definition`<sup>Required</sup> <a name="definition" id="@matthewbonig/state-machine.StateMachine.smash.parameter.definition"></a>

- *Type:* any

---

###### `smash`<sup>Required</sup> <a name="smash" id="@matthewbonig/state-machine.StateMachine.smash.parameter.smash"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.creationStack">creationStack</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.logicalId">logicalId</a></code> | <code>string</code> | The logical ID for this CloudFormation stack element. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this element is defined. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.ref">ref</a></code> | <code>string</code> | Return a string that will be resolved to a CloudFormation `{ Ref }` for this element. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.cfnOptions">cfnOptions</a></code> | <code>aws-cdk-lib.ICfnResourceOptions</code> | Options for this resource, such as condition, update policy etc. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.cfnResourceType">cfnResourceType</a></code> | <code>string</code> | AWS resource type. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.attrArn">attrArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.attrName">attrName</a></code> | <code>string</code> | Returns the name of the state machine. For example:. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | The list of tags to add to a resource. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.roleArn">roleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role to use for this state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.definition">definition</a></code> | <code>aws-cdk-lib.aws_stepfunctions.CfnStateMachine.DefinitionProperty \| aws-cdk-lib.IResolvable</code> | The Amazon States Language definition of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.definitionS3Location">definitionS3Location</a></code> | <code>aws-cdk-lib.aws_stepfunctions.CfnStateMachine.S3LocationProperty \| aws-cdk-lib.IResolvable</code> | The name of the S3 bucket where the state machine definition is stored. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.definitionString">definitionString</a></code> | <code>string</code> | The Amazon States Language definition of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.definitionSubstitutions">definitionSubstitutions</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: string}</code> | A map (string to string) that specifies the mappings for placeholder variables in the state machine definition. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.loggingConfiguration">loggingConfiguration</a></code> | <code>aws-cdk-lib.aws_stepfunctions.CfnStateMachine.LoggingConfigurationProperty \| aws-cdk-lib.IResolvable</code> | Defines what execution history events are logged and where they are logged. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The name of the state machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.stateMachineType">stateMachineType</a></code> | <code>string</code> | Determines whether a `STANDARD` or `EXPRESS` state machine is created. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.tracingConfiguration">tracingConfiguration</a></code> | <code>aws-cdk-lib.aws_stepfunctions.CfnStateMachine.TracingConfigurationProperty \| aws-cdk-lib.IResolvable</code> | Selects whether or not the state machine's AWS X-Ray tracing is enabled. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.grantPrincipal">grantPrincipal</a></code> | <code>aws-cdk-lib.aws_iam.IPrincipal</code> | The principal to grant permissions to. |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@matthewbonig/state-machine.StateMachine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@matthewbonig/state-machine.StateMachine.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

---

##### `logicalId`<sup>Required</sup> <a name="logicalId" id="@matthewbonig/state-machine.StateMachine.property.logicalId"></a>

```typescript
public readonly logicalId: string;
```

- *Type:* string

The logical ID for this CloudFormation stack element.

The logical ID of the element is calculated from the path of the resource node in the construct tree.  To override this value, use `overrideLogicalId(newLogicalId)`.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@matthewbonig/state-machine.StateMachine.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this element is defined.

CfnElements must be defined within a stack scope (directly or indirectly).

---

##### `ref`<sup>Required</sup> <a name="ref" id="@matthewbonig/state-machine.StateMachine.property.ref"></a>

```typescript
public readonly ref: string;
```

- *Type:* string

Return a string that will be resolved to a CloudFormation `{ Ref }` for this element.

If, by any chance, the intrinsic reference of a resource is not a string, you could coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.

---

##### `cfnOptions`<sup>Required</sup> <a name="cfnOptions" id="@matthewbonig/state-machine.StateMachine.property.cfnOptions"></a>

```typescript
public readonly cfnOptions: ICfnResourceOptions;
```

- *Type:* aws-cdk-lib.ICfnResourceOptions

Options for this resource, such as condition, update policy etc.

---

##### `cfnResourceType`<sup>Required</sup> <a name="cfnResourceType" id="@matthewbonig/state-machine.StateMachine.property.cfnResourceType"></a>

```typescript
public readonly cfnResourceType: string;
```

- *Type:* string

AWS resource type.

---

##### `attrArn`<sup>Required</sup> <a name="attrArn" id="@matthewbonig/state-machine.StateMachine.property.attrArn"></a>

```typescript
public readonly attrArn: string;
```

- *Type:* string

---

##### `attrName`<sup>Required</sup> <a name="attrName" id="@matthewbonig/state-machine.StateMachine.property.attrName"></a>

```typescript
public readonly attrName: string;
```

- *Type:* string

Returns the name of the state machine. For example:.

`{ "Fn::GetAtt": ["MyStateMachine", "Name"] }`  Returns the name of your state machine:  `HelloWorld-StateMachine`  If you did not specify the name it will be similar to the following:  `MyStateMachine-1234abcdefgh`  For more information about using `Fn::GetAtt` , see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) .

---

##### `tags`<sup>Required</sup> <a name="tags" id="@matthewbonig/state-machine.StateMachine.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

The list of tags to add to a resource.

Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @` .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-tags](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-tags)

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@matthewbonig/state-machine.StateMachine.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role to use for this state machine.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-rolearn](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-rolearn)

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@matthewbonig/state-machine.StateMachine.property.definition"></a>

```typescript
public readonly definition: DefinitionProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.CfnStateMachine.DefinitionProperty | aws-cdk-lib.IResolvable

The Amazon States Language definition of the state machine.

The state machine definition must be in JSON or YAML, and the format of the object must match the format of your AWS Step Functions template file. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definition](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definition)

---

##### `definitionS3Location`<sup>Optional</sup> <a name="definitionS3Location" id="@matthewbonig/state-machine.StateMachine.property.definitionS3Location"></a>

```typescript
public readonly definitionS3Location: S3LocationProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.CfnStateMachine.S3LocationProperty | aws-cdk-lib.IResolvable

The name of the S3 bucket where the state machine definition is stored.

The state machine definition must be a JSON or YAML file.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitions3location](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitions3location)

---

##### `definitionString`<sup>Optional</sup> <a name="definitionString" id="@matthewbonig/state-machine.StateMachine.property.definitionString"></a>

```typescript
public readonly definitionString: string;
```

- *Type:* string

The Amazon States Language definition of the state machine.

The state machine definition must be in JSON. See [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitionstring](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitionstring)

---

##### `definitionSubstitutions`<sup>Optional</sup> <a name="definitionSubstitutions" id="@matthewbonig/state-machine.StateMachine.property.definitionSubstitutions"></a>

```typescript
public readonly definitionSubstitutions: IResolvable | {[ key: string ]: string};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: string}

A map (string to string) that specifies the mappings for placeholder variables in the state machine definition.

This enables the customer to inject values obtained at runtime, for example from intrinsic functions, in the state machine definition. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitionsubstitutions](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-definitionsubstitutions)

---

##### `loggingConfiguration`<sup>Optional</sup> <a name="loggingConfiguration" id="@matthewbonig/state-machine.StateMachine.property.loggingConfiguration"></a>

```typescript
public readonly loggingConfiguration: LoggingConfigurationProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.CfnStateMachine.LoggingConfigurationProperty | aws-cdk-lib.IResolvable

Defines what execution history events are logged and where they are logged.

> By default, the `level` is set to `OFF` . For more information see [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-loggingconfiguration](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-loggingconfiguration)

---

##### `stateMachineName`<sup>Optional</sup> <a name="stateMachineName" id="@matthewbonig/state-machine.StateMachine.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The name of the state machine.

A name must *not* contain:  - white space - brackets `< > { } [ ]` - wildcard characters `? *` - special characters `" # % \ ^ | ~ ` $ & , ; : /` - control characters ( `U+0000-001F` , `U+007F-009F` )  > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-statemachinename](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-statemachinename)

---

##### `stateMachineType`<sup>Optional</sup> <a name="stateMachineType" id="@matthewbonig/state-machine.StateMachine.property.stateMachineType"></a>

```typescript
public readonly stateMachineType: string;
```

- *Type:* string

Determines whether a `STANDARD` or `EXPRESS` state machine is created.

The default is `STANDARD` . You cannot update the `type` of a state machine once it has been created. For more information on `STANDARD` and `EXPRESS` workflows, see [Standard Versus Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-standard-vs-express.html) in the AWS Step Functions Developer Guide.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-statemachinetype](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-statemachinetype)

---

##### `tracingConfiguration`<sup>Optional</sup> <a name="tracingConfiguration" id="@matthewbonig/state-machine.StateMachine.property.tracingConfiguration"></a>

```typescript
public readonly tracingConfiguration: TracingConfigurationProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.CfnStateMachine.TracingConfigurationProperty | aws-cdk-lib.IResolvable

Selects whether or not the state machine's AWS X-Ray tracing is enabled.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-tracingconfiguration](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachine.html#cfn-stepfunctions-statemachine-tracingconfiguration)

---

##### `grantPrincipal`<sup>Required</sup> <a name="grantPrincipal" id="@matthewbonig/state-machine.StateMachine.property.grantPrincipal"></a>

```typescript
public readonly grantPrincipal: IPrincipal;
```

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

The principal to grant permissions to.

---

##### `role`<sup>Required</sup> <a name="role" id="@matthewbonig/state-machine.StateMachine.property.role"></a>

```typescript
public readonly role: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@matthewbonig/state-machine.StateMachine.property.CFN_RESOURCE_TYPE_NAME">CFN_RESOURCE_TYPE_NAME</a></code> | <code>string</code> | The CloudFormation resource type name for this resource class. |

---

##### `CFN_RESOURCE_TYPE_NAME`<sup>Required</sup> <a name="CFN_RESOURCE_TYPE_NAME" id="@matthewbonig/state-machine.StateMachine.property.CFN_RESOURCE_TYPE_NAME"></a>

```typescript
public readonly CFN_RESOURCE_TYPE_NAME: string;
```

- *Type:* string

The CloudFormation resource type name for this resource class.

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
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.definition">definition</a></code> | <code>any</code> | an object that represents the ASL. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.overrides">overrides</a></code> | <code>any</code> | An object that matches the schema/shape of the ASL .States map with overridden values. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | The name of the State Machine. |
| <code><a href="#@matthewbonig/state-machine.StateMachineProps.property.express">express</a></code> | <code>boolean</code> | Is this an express worklfow? |

---

##### `definition`<sup>Required</sup> <a name="definition" id="@matthewbonig/state-machine.StateMachineProps.property.definition"></a>

```typescript
public readonly definition: any;
```

- *Type:* any

an object that represents the ASL.

---

##### `overrides`<sup>Required</sup> <a name="overrides" id="@matthewbonig/state-machine.StateMachineProps.property.overrides"></a>

```typescript
public readonly overrides: any;
```

- *Type:* any

An object that matches the schema/shape of the ASL .States map with overridden values.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@matthewbonig/state-machine.StateMachineProps.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

The name of the State Machine.

---

##### `express`<sup>Optional</sup> <a name="express" id="@matthewbonig/state-machine.StateMachineProps.property.express"></a>

```typescript
public readonly express: boolean;
```

- *Type:* boolean
- *Default:* false - a Standard workflow

Is this an express worklfow?

---



