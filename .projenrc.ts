import { CdkConstruct } from '@matthewbonig/cdk-construct-library';

const lodash = 'lodash.merge';
const projenDep = 'projen@^0.71.34';
const project = new CdkConstruct({
  description: 'A Step Function state machine construct focused on working well with the Workflow Studio',
  cdkVersion: '2.85.0',
  name: 'state-machine',
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
    projenDep,
    '@types/js-yaml',
    '@matthewbonig/cdk-construct-library',
  ],
  bundledDeps: [lodash, 'case', 'js-yaml'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  disablePublishToGo: true,
});

project.synth();
