package statemachine

import (
	"reflect"

	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

func init() {
	_jsii_.RegisterClass(
		"state-machine.StateMachine",
		reflect.TypeOf((*StateMachine)(nil)).Elem(),
		[]_jsii_.Member{
			_jsii_.MemberMethod{JsiiMethod: "addToRolePolicy", GoMethod: "AddToRolePolicy"},
			_jsii_.MemberMethod{JsiiMethod: "applyRemovalPolicy", GoMethod: "ApplyRemovalPolicy"},
			_jsii_.MemberProperty{JsiiProperty: "env", GoGetter: "Env"},
			_jsii_.MemberMethod{JsiiMethod: "generatePhysicalName", GoMethod: "GeneratePhysicalName"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceArnAttribute", GoMethod: "GetResourceArnAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "getResourceNameAttribute", GoMethod: "GetResourceNameAttribute"},
			_jsii_.MemberMethod{JsiiMethod: "grant", GoMethod: "Grant"},
			_jsii_.MemberMethod{JsiiMethod: "grantExecution", GoMethod: "GrantExecution"},
			_jsii_.MemberProperty{JsiiProperty: "grantPrincipal", GoGetter: "GrantPrincipal"},
			_jsii_.MemberMethod{JsiiMethod: "grantRead", GoMethod: "GrantRead"},
			_jsii_.MemberMethod{JsiiMethod: "grantStartExecution", GoMethod: "GrantStartExecution"},
			_jsii_.MemberMethod{JsiiMethod: "grantStartSyncExecution", GoMethod: "GrantStartSyncExecution"},
			_jsii_.MemberMethod{JsiiMethod: "grantTaskResponse", GoMethod: "GrantTaskResponse"},
			_jsii_.MemberMethod{JsiiMethod: "metric", GoMethod: "Metric"},
			_jsii_.MemberMethod{JsiiMethod: "metricAborted", GoMethod: "MetricAborted"},
			_jsii_.MemberMethod{JsiiMethod: "metricFailed", GoMethod: "MetricFailed"},
			_jsii_.MemberMethod{JsiiMethod: "metricStarted", GoMethod: "MetricStarted"},
			_jsii_.MemberMethod{JsiiMethod: "metricSucceeded", GoMethod: "MetricSucceeded"},
			_jsii_.MemberMethod{JsiiMethod: "metricThrottled", GoMethod: "MetricThrottled"},
			_jsii_.MemberMethod{JsiiMethod: "metricTime", GoMethod: "MetricTime"},
			_jsii_.MemberMethod{JsiiMethod: "metricTimedOut", GoMethod: "MetricTimedOut"},
			_jsii_.MemberProperty{JsiiProperty: "node", GoGetter: "Node"},
			_jsii_.MemberProperty{JsiiProperty: "physicalName", GoGetter: "PhysicalName"},
			_jsii_.MemberProperty{JsiiProperty: "role", GoGetter: "Role"},
			_jsii_.MemberProperty{JsiiProperty: "stack", GoGetter: "Stack"},
			_jsii_.MemberProperty{JsiiProperty: "stateMachineArn", GoGetter: "StateMachineArn"},
			_jsii_.MemberProperty{JsiiProperty: "stateMachineName", GoGetter: "StateMachineName"},
			_jsii_.MemberProperty{JsiiProperty: "stateMachineType", GoGetter: "StateMachineType"},
			_jsii_.MemberMethod{JsiiMethod: "toString", GoMethod: "ToString"},
		},
		func() interface{} {
			j := jsiiProxy_StateMachine{}
			_jsii_.InitJsiiProxy(&j.Type__awsstepfunctionsStateMachine)
			return &j
		},
	)
	_jsii_.RegisterStruct(
		"state-machine.StateMachineProps",
		reflect.TypeOf((*StateMachineProps)(nil)).Elem(),
	)
}
