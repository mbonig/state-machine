import { CdkConstruct } from '@matthewbonig/cdk-construct-library';

const lodash = 'lodash.merge';
const projenDep = 'projen@^0.88.2';
const project = new CdkConstruct({
  description: 'A Step Function state machine construct focused on working well with the Workflow Studio',
  cdkVersion: '2.85.0',
  name: 'state-machine',
  constructsVersion: '10.3.0',
  deps: [
    projenDep,
    lodash,
    'case',
    'js-yaml',
  ],
  peerDeps: [
    projenDep,
    'constructs@10.3.0',
  ],
  devDeps: [
    projenDep,
    '@types/js-yaml',
    '@matthewbonig/cdk-construct-library',
  ],
  bundledDeps: [lodash, 'case', 'js-yaml'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  disablePublishToGo: true,
  disablePublishToMaven: true,
  disablePublishToNuGet: true,

});
project.github!.actions.set('actions/upload-artifact', 'actions/upload-artifact@v4.3.6');

project.synth();
