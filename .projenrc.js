const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ruben Fonseca',
  authorAddress: 'fonseka@gmail.com',
  description: 'A Step Function state machine construct focused on working well with the Workflow Studio',
  cdkVersion: '2.4.0',
  defaultReleaseBranch: 'main',
  name: '@rubenfonseca/state-machine',
  repositoryUrl: 'https://github.com/rubenfonseca/state-machine.git',
  gitignore: ['.idea/'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  vscode: true,
  npmAccess: NpmAccess.RESTRICTED,
  releaseToNpm: false,
  publishToGo: {
    moduleName: 'github.com/rubenfonseca/state-machine',
  },
  depsUpgrade: true,
});

project.synth();
