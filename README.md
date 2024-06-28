# Workflow Studio compatible State Machine

[![View on Construct Hub](https://constructs.dev/badge?package=%40matthewbonig%2Fstate-machine)](https://constructs.dev/packages/@matthewbonig/state-machine)

This is a Workflow Studio compatible AWS Step Function state machine construct.

The goal of this construct is to make it easy to build and maintain your state machines using the Workflow Studio but still
leverage the AWS CDK as the source of truth for the state machine.

Read more about it [here](https://matthewbonig.com/2022/02/19/step-functions-and-the-cdk/).

## How to Use This Construct

Start by designing your initial state machine using the Workflow Studio.
When done with your first draft, copy and paste the ASL definition to a local file.

Create a new instance of this construct, handing it a fully parsed version of the ASL. 
Then add overridden values. 
The fields in the `overrides` field should match the `States` field of the ASL.

## Version Usage

The AWS CDK StateMachine construct introduced a change in version [**2.85.0**](https://github.com/aws/aws-cdk/pull/25932) that deprecated an earlier usage of 'definition'
by this construct. This construct has been updated to use the new 'definitionBody' field. 

If you are using a version of the CDK before version **2.85.0**, you should use version **0.0.28** of this construct.

If you are using a version fo the CDK great or equal to **2.85.0**, you should use version **0.0.29+** of this construct. 

### Projen component

There is a projen component included in this library which will help you in using the construct. It works similar
to the [auto-discovery feature](https://projen.io/docs/integrations/aws/#aws-lambda-functions). To use it, first add the component
to your projen project:

```js
// ...
const { StepFunctionsAutoDiscover } = require('@matthewbonig/state-machine');

const project = new awscdk.AwsCdkTypeScriptApp({
  // ...,
  deps: [
    // ...,
    '@matthewbonig/state-machine',
  ]
});

new StepFunctionsAutoDiscover(project);
```

Now projen will look for any files with a suffix `.workflow.json` and generate new files beside the .json:
* A typed `overrides` interface which is based on your workflow.
* A construct derived from StateMachine that uses this override.

Instead of using the StateMachine construct directly you can now use the generated one:

```text
.
├── MyFancyThing.workflow.json
└── MyFancyThing-statemachine.ts
```

```ts
export class SomeStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);
    const handler = new NodejsFunction(this, 'MyHandler');
    new SomeFancyThingStateMachine(this, 'MyFancyWorkflow', {
      overrides: {
        'My First State': {
          Parameters: {
            FunctionName: handler.functionName
          }
        }
      }
    })
  }
}
```

> :warning: **The interfaces and constructs generated here are NOT jsii compliant (they use Partials and Omits) and cannot be 
compiled by jsii into other languages. If you plan to distribute any libraries you cannot use this.**

### Alternative Extensions

There is an optional parameter, `extension` that you can pass to have it search for alternative extensions.
AWS recommends that ASL definition files have a `.asl.json` extension, which will be picked up by some IDE
tools. This extension was recommended after initial development of this component. Therefore, the default is
to use the original extension. But, you can override this by passing a different extension to the
AutoDiscover's constructor options. There are two constants defined, `JSON_STEPFUNCTION_EXT` and `AWS_RECOMMENDED_JSON_EXT` that you can use.

```js
// ...
const { StepFunctionsAutoDiscover, AWS_RECOMMENDED_JSON_EXT } = require('@matthewbonig/state-machine');

const project = new awscdk.AwsCdkTypeScriptApp({
  // ...,
  deps: [
    // ...,
    '@matthewbonig/state-machine',
  ]
});

new StepFunctionsAutoDiscover(project, { extension: AWS_RECOMMENDED_JSON_EXT });
```

### Yaml files

Yaml files are supported as well. You can provide an extension to the AutoDiscover component to have it search for yaml files. If the file has 'yaml' or 'yml' anywhere in the name it will be parsed as yaml. If not, it will be parsed as json.

```js
// ...
const { StepFunctionsAutoDiscover } = require('@matthewbonig/state-machine');

const project = new awscdk.AwsCdkTypeScriptApp({
  // ...,
  deps: [
    // ...,
    '@matthewbonig/state-machine',
  ]
});

new StepFunctionsAutoDiscover(project, { extension: '.yaml.asl' });
```

### Examples

```ts
const secret = new Secret(stack, 'Secret', {});
new StateMachine(stack, 'Test', {
  stateMachineName: 'A nice state machine',
  definition: JSON.parse(fs.readFileSync(path.join(__dirname, 'sample.json'), 'utf8').toString()),
  overrides: {
    'Read database credentials secret': {
      Parameters: {
        SecretId: secret.secretArn,
      },
    },
  },
});
```

You can also override nested states in arrays, for example:

```ts
new StateMachine(stack, 'Test', {
    stateMachineName: 'A-nice-state-machine',
    overrides: {
      Branches: [{
        // pass an empty object too offset overrides
      }, {
        StartAt: 'StartInstances',
        States: {
          StartInstances: {
            Parameters: {
              InstanceIds: ['INSTANCE_ID'],
            },
          },
        },
      }],
    },
    stateMachineType: StateMachineType.STANDARD,
    definition: {
      States: {
        Branches: [
          {
            StartAt: 'ResumeCluster',
            States: {
              'Redshift Pass': {
                Type: 'Pass',
                End: true,
              },
            },
          },
          {
            StartAt: 'StartInstances',
            States: {
              'StartInstances': {
                Type: 'Task',
                Parameters: {
                  InstanceIds: [
                    'MyData',
                  ],
                },
                Resource: 'arn:aws:states:::aws-sdk:ec2:startInstances',
                Next: 'DescribeInstanceStatus',
              },
              'DescribeInstanceStatus': {
                Type: 'Task',
                Next: 'EC2 Pass',
                Parameters: {
                  InstanceIds: [
                    'MyData',
                  ],
                },
                Resource: 'arn:aws:states:::aws-sdk:ec2:describeInstanceStatus',
              },
              'EC2 Pass': {
                Type: 'Pass',
                End: true,
              },
            },
          },
        ],
      },
    },
  });
```

For Python, be sure to use a context manager when opening your JSON file.  
- You do not need to `str()` the dictionary object you supply as your `definition` prop.  
- Elements of your override path **do** need to be strings.

```python
secret = Secret(stack, 'Secret')

with open('sample.json', 'r+', encoding='utf-8') as sample:
    sample_dict = json.load(sample)

state_machine = StateMachine(
    self,
    'Test',
    definition = sample_dict,
    overrides = {
    "Read database credentials secret": {
      "Parameters": {
        "SecretId": secret.secret_arn,
      },
    },
  })
```

In this example, the ASL has a state called 'Read database credentials secret' and the SecretId parameter is overridden with a 
CDK generated value.
Future changes can be done by editing, debugging, and testing the state machine directly in the Workflow Studio.
Once everything is working properly, copy and paste the ASL back to your local file.

## Issues

Please open any issues you have on [Github](https://github.com/mbonig/state-machine/issues).

## Contributing

Please submit PRs from forked repositories if you'd like to contribute.
