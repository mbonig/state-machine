import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import { StateMachine } from '../src';

test('snapshot', () => {
  const stack = new Stack(new App(), 'TestingStack', {});
  new StateMachine(stack, 'Test', {
    stateMachineName: 'A-nice-state-machine',
    overrides: { one: { Parameters: { thingOne: 'test passed' } } },
    stateMachineType: StateMachineType.STANDARD,
    definition: { States: { one: { Parameters: { thingOne: 'test failed' } } } },
  });
  const assert = Template.fromStack(stack);
  expect(assert.toJSON()).toMatchSnapshot();
});
