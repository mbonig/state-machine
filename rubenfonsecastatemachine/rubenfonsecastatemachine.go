// A Step Function state machine construct focused on working well with the Workflow Studio
package rubenfonsecastatemachine

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
	_init_ "github.com/rubenfonseca/state-machine/rubenfonsecastatemachine/jsii"

	"github.com/aws/aws-cdk-go/awscdk/v2"
	"github.com/aws/aws-cdk-go/awscdk/v2/awscloudwatch"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsiam"
	"github.com/aws/aws-cdk-go/awscdk/v2/awsstepfunctions"
	"github.com/aws/constructs-go/constructs/v10"
	"github.com/rubenfonseca/state-machine/rubenfonsecastatemachine/internal"
)

type StateMachine interface {
	awsstepfunctions.StateMachine
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() *awscdk.ResourceEnvironment
	// The principal this state machine is running as.
	GrantPrincipal() awsiam.IPrincipal
	// The tree node.
	Node() constructs.Node
	// Returns a string-encoded token that resolves to the physical name that should be passed to the CloudFormation resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by CloudFormation
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	PhysicalName() *string
	// Execution role of this state machine.
	Role() awsiam.IRole
	// The stack in which this resource is defined.
	Stack() awscdk.Stack
	// The ARN of the state machine.
	StateMachineArn() *string
	// The name of the state machine.
	StateMachineName() *string
	// Type of the state machine.
	StateMachineType() awsstepfunctions.StateMachineType
	// Add the given statement to the role's policy.
	AddToRolePolicy(statement awsiam.PolicyStatement)
	// Apply the given removal policy to this resource.
	//
	// The Removal Policy controls what happens to this resource when it stops
	// being managed by CloudFormation, either because you've removed it from the
	// CDK application or because you've made a change that requires the resource
	// to be replaced.
	//
	// The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
	// account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).
	ApplyRemovalPolicy(policy awscdk.RemovalPolicy)
	GeneratePhysicalName() *string
	// Returns an environment-sensitive token that should be used for the resource's "ARN" attribute (e.g. `bucket.bucketArn`).
	//
	// Normally, this token will resolve to `arnAttr`, but if the resource is
	// referenced across environments, `arnComponents` will be used to synthesize
	// a concrete ARN with the resource's physical name. Make sure to reference
	// `this.physicalName` in `arnComponents`.
	GetResourceArnAttribute(arnAttr *string, arnComponents *awscdk.ArnComponents) *string
	// Returns an environment-sensitive token that should be used for the resource's "name" attribute (e.g. `bucket.bucketName`).
	//
	// Normally, this token will resolve to `nameAttr`, but if the resource is
	// referenced across environments, it will be resolved to `this.physicalName`,
	// which will be a concrete name.
	GetResourceNameAttribute(nameAttr *string) *string
	// Grant the given identity custom permissions.
	Grant(identity awsiam.IGrantable, actions ...*string) awsiam.Grant
	// Grant the given identity permissions on all executions of the state machine.
	GrantExecution(identity awsiam.IGrantable, actions ...*string) awsiam.Grant
	// Grant the given identity permissions to read results from state machine.
	GrantRead(identity awsiam.IGrantable) awsiam.Grant
	// Grant the given identity permissions to start an execution of this state machine.
	GrantStartExecution(identity awsiam.IGrantable) awsiam.Grant
	// Grant the given identity permissions to start a synchronous execution of this state machine.
	GrantStartSyncExecution(identity awsiam.IGrantable) awsiam.Grant
	// Grant the given identity task response permissions on a state machine.
	GrantTaskResponse(identity awsiam.IGrantable) awsiam.Grant
	// Return the given named metric for this State Machine's executions.
	Metric(metricName *string, props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the number of executions that were aborted.
	MetricAborted(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the number of executions that failed.
	MetricFailed(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the number of executions that were started.
	MetricStarted(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the number of executions that succeeded.
	MetricSucceeded(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the number of executions that were throttled.
	MetricThrottled(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the interval, in milliseconds, between the time the execution starts and the time it closes.
	MetricTime(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Metric for the number of executions that timed out.
	MetricTimedOut(props *awscloudwatch.MetricOptions) awscloudwatch.Metric
	// Returns a string representation of this construct.
	ToString() *string
}

// The jsii proxy struct for StateMachine
type jsiiProxy_StateMachine struct {
	internal.Type__awsstepfunctionsStateMachine
}

func (j *jsiiProxy_StateMachine) Env() *awscdk.ResourceEnvironment {
	var returns *awscdk.ResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) GrantPrincipal() awsiam.IPrincipal {
	var returns awsiam.IPrincipal
	_jsii_.Get(
		j,
		"grantPrincipal",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) Node() constructs.Node {
	var returns constructs.Node
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) Role() awsiam.IRole {
	var returns awsiam.IRole
	_jsii_.Get(
		j,
		"role",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) Stack() awscdk.Stack {
	var returns awscdk.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) StateMachineArn() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stateMachineArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) StateMachineName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stateMachineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_StateMachine) StateMachineType() awsstepfunctions.StateMachineType {
	var returns awsstepfunctions.StateMachineType
	_jsii_.Get(
		j,
		"stateMachineType",
		&returns,
	)
	return returns
}


func NewStateMachine(scope constructs.Construct, id *string, props *StateMachineProps) StateMachine {
	_init_.Initialize()

	j := jsiiProxy_StateMachine{}

	_jsii_.Create(
		"@rubenfonseca/state-machine.StateMachine",
		[]interface{}{scope, id, props},
		&j,
	)

	return &j
}

func NewStateMachine_Override(s StateMachine, scope constructs.Construct, id *string, props *StateMachineProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@rubenfonseca/state-machine.StateMachine",
		[]interface{}{scope, id, props},
		s,
	)
}

// Import a state machine.
func StateMachine_FromStateMachineArn(scope constructs.Construct, id *string, stateMachineArn *string) awsstepfunctions.IStateMachine {
	_init_.Initialize()

	var returns awsstepfunctions.IStateMachine

	_jsii_.StaticInvoke(
		"@rubenfonseca/state-machine.StateMachine",
		"fromStateMachineArn",
		[]interface{}{scope, id, stateMachineArn},
		&returns,
	)

	return returns
}

// Checks if `x` is a construct.
//
// Returns: true if `x` is an object created from a class which extends `Construct`.
// Deprecated: use `x instanceof Construct` instead.
func StateMachine_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"@rubenfonseca/state-machine.StateMachine",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Check whether the given construct is a Resource.
func StateMachine_IsResource(construct constructs.IConstruct) *bool {
	_init_.Initialize()

	var returns *bool

	_jsii_.StaticInvoke(
		"@rubenfonseca/state-machine.StateMachine",
		"isResource",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func StateMachine_Smash(definition interface{}, smash interface{}) interface{} {
	_init_.Initialize()

	var returns interface{}

	_jsii_.StaticInvoke(
		"@rubenfonseca/state-machine.StateMachine",
		"smash",
		[]interface{}{definition, smash},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) AddToRolePolicy(statement awsiam.PolicyStatement) {
	_jsii_.InvokeVoid(
		s,
		"addToRolePolicy",
		[]interface{}{statement},
	)
}

func (s *jsiiProxy_StateMachine) ApplyRemovalPolicy(policy awscdk.RemovalPolicy) {
	_jsii_.InvokeVoid(
		s,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (s *jsiiProxy_StateMachine) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GetResourceArnAttribute(arnAttr *string, arnComponents *awscdk.ArnComponents) *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"getResourceArnAttribute",
		[]interface{}{arnAttr, arnComponents},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GetResourceNameAttribute(nameAttr *string) *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"getResourceNameAttribute",
		[]interface{}{nameAttr},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) Grant(identity awsiam.IGrantable, actions ...*string) awsiam.Grant {
	args := []interface{}{identity}
	for _, a := range actions {
		args = append(args, a)
	}

	var returns awsiam.Grant

	_jsii_.Invoke(
		s,
		"grant",
		args,
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GrantExecution(identity awsiam.IGrantable, actions ...*string) awsiam.Grant {
	args := []interface{}{identity}
	for _, a := range actions {
		args = append(args, a)
	}

	var returns awsiam.Grant

	_jsii_.Invoke(
		s,
		"grantExecution",
		args,
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GrantRead(identity awsiam.IGrantable) awsiam.Grant {
	var returns awsiam.Grant

	_jsii_.Invoke(
		s,
		"grantRead",
		[]interface{}{identity},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GrantStartExecution(identity awsiam.IGrantable) awsiam.Grant {
	var returns awsiam.Grant

	_jsii_.Invoke(
		s,
		"grantStartExecution",
		[]interface{}{identity},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GrantStartSyncExecution(identity awsiam.IGrantable) awsiam.Grant {
	var returns awsiam.Grant

	_jsii_.Invoke(
		s,
		"grantStartSyncExecution",
		[]interface{}{identity},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) GrantTaskResponse(identity awsiam.IGrantable) awsiam.Grant {
	var returns awsiam.Grant

	_jsii_.Invoke(
		s,
		"grantTaskResponse",
		[]interface{}{identity},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) Metric(metricName *string, props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metric",
		[]interface{}{metricName, props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricAborted(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricAborted",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricFailed(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricFailed",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricStarted(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricStarted",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricSucceeded(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricSucceeded",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricThrottled(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricThrottled",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricTime(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricTime",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) MetricTimedOut(props *awscloudwatch.MetricOptions) awscloudwatch.Metric {
	var returns awscloudwatch.Metric

	_jsii_.Invoke(
		s,
		"metricTimedOut",
		[]interface{}{props},
		&returns,
	)

	return returns
}

func (s *jsiiProxy_StateMachine) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		s,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

type StateMachineProps struct {
	// An object that can be serialized into an ASL.
	Definition interface{} `json:"definition" yaml:"definition"`
	// Defines what execution history events are logged and where they are logged.
	Logs *awsstepfunctions.LogOptions `json:"logs" yaml:"logs"`
	// An object that matches the schema/shape of the ASL .States map with overridden values.
	//
	// Example:
	//   {'My First State': { Parameters: { FunctionName: 'aLambdaFunctionArn' } } }
	//
	Overrides interface{} `json:"overrides" yaml:"overrides"`
	// The execution role for the state machine service.
	Role awsiam.IRole `json:"role" yaml:"role"`
	// A name for the state machine.
	StateMachineName *string `json:"stateMachineName" yaml:"stateMachineName"`
	// Type of the state machine.
	StateMachineType awsstepfunctions.StateMachineType `json:"stateMachineType" yaml:"stateMachineType"`
	// Maximum run time for this state machine.
	Timeout awscdk.Duration `json:"timeout" yaml:"timeout"`
	// Specifies whether Amazon X-Ray tracing is enabled for this state machine.
	TracingEnabled *bool `json:"tracingEnabled" yaml:"tracingEnabled"`
}
