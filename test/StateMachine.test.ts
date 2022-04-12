import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StateMachineType } from 'aws-cdk-lib/aws-stepfunctions';
import { StateMachine } from '../src';

test('simple snapshot', () => {
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

test('handles arrays', () => {
  const stack = new Stack(new App(), 'TestingStack', {});
  new StateMachine(stack, 'Test', {
    stateMachineName: 'A-nice-state-machine',
    overrides: {
      Branches: [{
        StartAt: 'ResumeCluster',
        States: {
          ResumeCluster: {
            Parameters: {
              ClusterIdentifier: 'CLUSTER_NAME',
            },
          },
          DescribeClusters: {
            Parameters: {
              ClusterIdentifier: 'CLUSTER_NAME',
            },
          },
        },
      }, {
        StartAt: 'StartInstances',
        States: {
          StartInstances: {
            Parameters: {
              InstanceIds: ['INSTANCE_ID'],
            },
          },
          DescribeInstanceStatus: {
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
              'ResumeCluster': {
                Type: 'Task',
                Parameters: {
                  ClusterIdentifier: 'MyData',
                },
                Resource: 'arn:aws:states:::aws-sdk:redshift:resumeCluster',
                Next: 'DescribeClusters',
              },
              'DescribeClusters': {
                Type: 'Task',
                Parameters: {
                  ClusterIdentifier: '',
                },
                Resource: 'arn:aws:states:::aws-sdk:redshift:describeClusters',
                Next: 'Evaluate Cluster Status',
              },
              'Evaluate Cluster Status': {
                Type: 'Choice',
                Choices: [
                  {
                    Variable: '$.Clusters[0].ClusterStatus',
                    StringEquals: 'available',
                    Next: 'Redshift Pass',
                  },
                ],
                Default: 'Redshift Wait',
              },
              'Redshift Pass': {
                Type: 'Pass',
                End: true,
              },
              'Redshift Wait': {
                Type: 'Wait',
                Seconds: 5,
                Next: 'DescribeClusters',
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
                Next: 'Evaluate Instance Status',
                Parameters: {
                  InstanceIds: [
                    'MyData',
                  ],
                },
                Resource: 'arn:aws:states:::aws-sdk:ec2:describeInstanceStatus',
              },
              'Evaluate Instance Status': {
                Type: 'Choice',
                Choices: [
                  {
                    And: [
                      {
                        Variable: '$.InstanceStatuses[0].InstanceState.Name',
                        StringEquals: 'running',
                      },
                      {
                        Variable: '$.InstanceStatuses[0].SystemStatus.Details[0].Status',
                        StringEquals: 'passed',
                      },
                      {
                        Variable: '$.InstanceStatuses[0].InstanceStatus.Details[0].Status',
                        StringEquals: 'passed',
                      },
                    ],
                    Next: 'EC2 Pass',
                  },
                ],
                Default: 'EC2 Wait',
              },
              'EC2 Pass': {
                Type: 'Pass',
                End: true,
              },
              'EC2 Wait': {
                Type: 'Wait',
                Seconds: 5,
                Next: 'DescribeInstanceStatus',
              },
            },
          },
        ],
      },
    },
  });
  const assert = Template.fromStack(stack);
  assert.hasResourceProperties('AWS::StepFunctions::StateMachine', {
    DefinitionString: JSON.stringify({
      States: {
        Branches: [
          {
            StartAt: 'ResumeCluster',
            States: {
              'ResumeCluster': {
                Type: 'Task',
                Parameters: {
                  ClusterIdentifier: 'CLUSTER_NAME',
                },
                Resource: 'arn:aws:states:::aws-sdk:redshift:resumeCluster',
                Next: 'DescribeClusters',
              },
              'DescribeClusters': {
                Type: 'Task',
                Parameters: {
                  ClusterIdentifier: 'CLUSTER_NAME',
                },
                Resource: 'arn:aws:states:::aws-sdk:redshift:describeClusters',
                Next: 'Evaluate Cluster Status',
              },
              'Evaluate Cluster Status': {
                Type: 'Choice',
                Choices: [
                  {
                    Variable: '$.Clusters[0].ClusterStatus',
                    StringEquals: 'available',
                    Next: 'Redshift Pass',
                  },
                ],
                Default: 'Redshift Wait',
              },
              'Redshift Pass': {
                Type: 'Pass',
                End: true,
              },
              'Redshift Wait': {
                Type: 'Wait',
                Seconds: 5,
                Next: 'DescribeClusters',
              },
            },
          },
          {
            StartAt: 'StartInstances',
            States: {
              'StartInstances': {
                Type: 'Task',
                Parameters: {
                  InstanceIds: ['INSTANCE_ID'],
                },
                Resource: 'arn:aws:states:::aws-sdk:ec2:startInstances',
                Next: 'DescribeInstanceStatus',
              },
              'DescribeInstanceStatus': {
                Type: 'Task',
                Next: 'Evaluate Instance Status',
                Parameters: {
                  InstanceIds: ['INSTANCE_ID'],
                },
                Resource: 'arn:aws:states:::aws-sdk:ec2:describeInstanceStatus',
              },
              'Evaluate Instance Status': {
                Type: 'Choice',
                Choices: [
                  {
                    And: [
                      {
                        Variable: '$.InstanceStatuses[0].InstanceState.Name',
                        StringEquals: 'running',
                      },
                      {
                        Variable: '$.InstanceStatuses[0].SystemStatus.Details[0].Status',
                        StringEquals: 'passed',
                      },
                      {
                        Variable: '$.InstanceStatuses[0].InstanceStatus.Details[0].Status',
                        StringEquals: 'passed',
                      },
                    ],
                    Next: 'EC2 Pass',
                  },
                ],
                Default: 'EC2 Wait',
              },
              'EC2 Pass': {
                Type: 'Pass',
                End: true,
              },
              'EC2 Wait': {
                Type: 'Wait',
                Seconds: 5,
                Next: 'DescribeInstanceStatus',
              },
            },
          },
        ],
      },
    }),
  });
});
