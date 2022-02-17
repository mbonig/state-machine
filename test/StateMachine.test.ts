import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StateMachine } from '../src/StateMachine';

test('snapshot', () => {
  const stack = new Stack(new App(), 'TestingStack', {});
  new StateMachine(stack, 'Test', {
    stateMachineName: 'A nice state machine',
    overrides: {},
    express: false,
    definition: '',
  });
  const assert = Template.fromStack(stack);
  expect(assert.toJSON()).toMatchSnapshot();
});