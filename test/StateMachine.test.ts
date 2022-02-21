import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as logs from 'aws-cdk-lib/aws-logs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { IStateMachine, LogLevel, StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import * as cdk from 'aws-cdk-lib/core';
import { StateMachine } from '../src/StateMachine';

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

describe('State Machine', () => {

  const basicPassWorkflow = {
    StartAt: 'Pass',
    States: {
      Pass: {
        Type: 'Pass',
        End: true,
      },
    },
  };
  test('Instantiate Standard State Machine', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new StateMachine(stack, 'MyStateMachine', {
      stateMachineName: 'MyStateMachine',
      definition: basicPassWorkflow,
      stateMachineType: StateMachineType.STANDARD,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::StepFunctions::StateMachine', {
      StateMachineName: 'MyStateMachine',
      StateMachineType: 'STANDARD',
      DefinitionString: JSON.stringify(basicPassWorkflow),
    });

  });

  test('Instantiate Express State Machine', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new StateMachine(stack, 'MyStateMachine', {
      stateMachineName: 'MyStateMachine',
      definition: basicPassWorkflow,
      stateMachineType: StateMachineType.EXPRESS,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::StepFunctions::StateMachine', {
      StateMachineName: 'MyStateMachine',
      StateMachineType: 'EXPRESS',
      DefinitionString: JSON.stringify(basicPassWorkflow),
    });

  });

  test('State Machine with invalid name', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const createStateMachine = (name: string) => {
      new StateMachine(stack, name + 'StateMachine', {
        stateMachineName: name,
        definition: basicPassWorkflow,
      });
    };
    const tooShortName = '';
    const tooLongName = 'M'.repeat(81);
    const invalidCharactersName = '*';

    // THEN
    expect(() => {
      createStateMachine(tooShortName);
    }).toThrow(`State Machine name must be between 1 and 80 characters. Received: ${tooShortName}`);

    expect(() => {
      createStateMachine(tooLongName);
    }).toThrow(`State Machine name must be between 1 and 80 characters. Received: ${tooLongName}`);

    expect(() => {
      createStateMachine(invalidCharactersName);
    }).toThrow(`State Machine name must match "^[a-z0-9+!@.()-=_']+$/i". Received: ${invalidCharactersName}`);
  });

  test('State Machine with valid name', () => {
    // GIVEN
    const stack = new cdk.Stack();
    const newStateMachine = new StateMachine(stack, 'dummyStateMachineToken', {
      definition: basicPassWorkflow,
    });

    // WHEN
    const nameContainingToken = newStateMachine.stateMachineName + '-Name';
    const validName = 'AWS-Stepfunctions_Name.Test(@aws-cdk+)!=\'1\'';

    // THEN
    expect(() => {
      new StateMachine(stack, 'TokenTest-StateMachine', {
        stateMachineName: nameContainingToken,
        definition: basicPassWorkflow,
        stateMachineType: StateMachineType.EXPRESS,
      });
    }).not.toThrow();

    expect(() => {
      new StateMachine(stack, 'ValidNameTest-StateMachine', {
        stateMachineName: validName,
        definition: basicPassWorkflow,
        stateMachineType: StateMachineType.EXPRESS,
      });
    }).not.toThrow();
  });

  test('log configuration', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const logGroup = new logs.LogGroup(stack, 'MyLogGroup');

    new StateMachine(stack, 'MyStateMachine', {
      definition: basicPassWorkflow,
      logs: {
        destination: logGroup,
        level: LogLevel.FATAL,
        includeExecutionData: false,
      },
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::StepFunctions::StateMachine', {
      DefinitionString: JSON.stringify(basicPassWorkflow),
      LoggingConfiguration: {
        Destinations: [{
          CloudWatchLogsLogGroup: {
            LogGroupArn: {
              'Fn::GetAtt': ['MyLogGroup5C0DAD85', 'Arn'],
            },
          },
        }],
        IncludeExecutionData: false,
        Level: 'FATAL',
      },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [{
          Action: [
            'logs:CreateLogDelivery',
            'logs:GetLogDelivery',
            'logs:UpdateLogDelivery',
            'logs:DeleteLogDelivery',
            'logs:ListLogDeliveries',
            'logs:PutResourcePolicy',
            'logs:DescribeResourcePolicies',
            'logs:DescribeLogGroups',
          ],
          Effect: 'Allow',
          Resource: '*',
        }],
        Version: '2012-10-17',
      },
      PolicyName: 'MyStateMachineRoleDefaultPolicyE468EB18',
      Roles: [
        {
          Ref: 'MyStateMachineRoleD59FFEBC',
        },
      ],
    });
  });

  test('tracing configuration', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    new StateMachine(stack, 'MyStateMachine', {
      definition: basicPassWorkflow,
      tracingEnabled: true,
    });

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::StepFunctions::StateMachine', {
      DefinitionString: JSON.stringify(basicPassWorkflow),
      TracingConfiguration: {
        Enabled: true,
      },
    });

    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [{
          Action: [
            'xray:PutTraceSegments',
            'xray:PutTelemetryRecords',
            'xray:GetSamplingRules',
            'xray:GetSamplingTargets',
          ],
          Effect: 'Allow',
          Resource: '*',
        }],
        Version: '2012-10-17',
      },
      PolicyName: 'MyStateMachineRoleDefaultPolicyE468EB18',
      Roles: [
        {
          Ref: 'MyStateMachineRoleD59FFEBC',
        },
      ],
    });
  });

  test('grant access', () => {
    // GIVEN
    const stack = new cdk.Stack();

    // WHEN
    const sm = new StateMachine(stack, 'MyStateMachine', {
      definition: basicPassWorkflow,
    });
    const bucket = new s3.Bucket(stack, 'MyBucket');
    bucket.grantRead(sm);

    // THEN
    Template.fromStack(stack).hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              's3:GetObject*',
              's3:GetBucket*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              {
                'Fn::GetAtt': [
                  'MyBucketF68F3FF0',
                  'Arn',
                ],
              },
              {
                'Fn::Join': [
                  '',
                  [
                    {
                      'Fn::GetAtt': [
                        'MyBucketF68F3FF0',
                        'Arn',
                      ],
                    },
                    '/*',
                  ],
                ],
              },
            ],
          },
        ],
        Version: '2012-10-17',
      },
      PolicyName: 'MyStateMachineRoleDefaultPolicyE468EB18',
      Roles: [
        {
          Ref: 'MyStateMachineRoleD59FFEBC',
        },
      ],
    });
  });

  describe('StateMachine.fromStateMachineArn()', () => {
    let stack: cdk.Stack;

    beforeEach(() => {
      const app = new cdk.App();
      stack = new cdk.Stack(app, 'Base', {
        env: {
          account: '111111111111',
          region: 'stack-region',
        },
      });
    });

    describe('for a state machine in a different account and region', () => {
      let mach: IStateMachine;

      beforeEach(() => {
        mach = StateMachine.fromStateMachineArn(
          stack,
          'iMach',
          'arn:aws:states:machine-region:222222222222:stateMachine:machine-name',
        );
      });

      test('the state machine\'s region is taken from the ARN', () => {
        expect(mach.env.region).toBe('machine-region');
      });

      test('the state machine\'s account is taken from the ARN', () => {
        expect(mach.env.account).toBe('222222222222');
      });
    });
  });
});