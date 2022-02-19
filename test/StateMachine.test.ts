import * as fs from 'fs';
import * as path from 'path';
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { StateMachine } from '../src/StateMachine';

test('snapshot', () => {
  const stack = new Stack(new App(), 'TestingStack', {});
  const secret = new Secret(stack, 'Secret', {});
  new StateMachine(stack, 'Test', {
    stateMachineName: 'A nice state machine',
    overrides: {
      'Read database credentials secret': {
        Parameters: {
          SecretId: secret.secretArn,
        },
      },
    },
    definition: JSON.parse(fs.readFileSync(path.join(__dirname, 'sample.json'), 'utf8').toString()),
  });
  const assert = Template.fromStack(stack);
  expect(assert.toJSON()).toMatchSnapshot();
});