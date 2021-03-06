const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
let lodash = 'lodash.merge';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@gmail.com',
  description: 'A Step Function state machine construct focused on working well with the Workflow Studio',
  cdkVersion: '2.4.0',
  defaultReleaseBranch: 'main',
  name: '@matthewbonig/state-machine',
  repositoryUrl: 'https://github.com/mbonig/state-machine.git',
  deps: [lodash],
  bundledDeps: [lodash],
  npmAccess: NpmAccess.PUBLIC,
  gitignore: ['.idea/'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  publishToGo: {
    moduleName: 'github.com/mbonig/state-machine',
  },
  depsUpgrade: false,
  publishToPypi: {
    distName: 'mbonig.state-machine',
    module: 'mbonig.state_machine',
  },
});

project.synth();
