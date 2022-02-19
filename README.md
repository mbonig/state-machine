# Workflow Studio compatible State Machine

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

In this example, the ASL has a state called 'Read database credentials secret' and the SecretId parameter is overridden with a 
CDK generated value.
Future changes can be done by editing, debugging, and testing the state machine directly in the Workflow Studio.
Once everything is working properly, copy and paste the ASL back to your local file.

## Issues

Please open any issues you have on [Github](https://github.com/mbonig/state-machine/issues).

## Contributing

Please submit PRs from forked repositories if you'd like to contribute.