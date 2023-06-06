import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const lodash = 'lodash.merge';
const projenDep = 'projen@^0.71.34';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@gmail.com',
  description: 'A Step Function state machine construct focused on working well with the Workflow Studio',
  cdkVersion: '2.53.0',
  defaultReleaseBranch: 'main',
  constructsVersion: '10.1.203',
  name: '@matthewbonig/state-machine',
  repositoryUrl: 'https://github.com/mbonig/state-machine.git',
  deps: [
    projenDep,
    lodash,
    'case',
    'js-yaml',
  ],
  peerDeps: [
    projenDep,
    'constructs',
  ],
  devDeps: [
    '@types/js-yaml',
    projenDep,
  ],
  bundledDeps: [lodash, 'case', 'js-yaml'],
  npmAccess: NpmAccess.PUBLIC,
  gitignore: ['.idea/'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  // temporarily disabling go compilation
  /*publishToGo: {
    moduleName: 'github.com/mbonig/state-machine',
  },*/
  projenrcTs: true,
  depsUpgrade: false,
  publishToPypi: {
    distName: 'mbonig.state-machine',
    module: 'mbonig.state_machine',
  },
});

project.synth();
