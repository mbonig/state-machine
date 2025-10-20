import { CdkConstruct } from '@matthewbonig/cdk-construct-library';

const lodash = 'lodash.merge';
// const projenDep = 'projen@^0.88.2';
const cdkVersion = '2.200.0'; // Required minimum CDK version of consumers of the library
const cdkCliVersion = '2.1029.2';
const projenVersion = '^0.95.4'; // Does not affect consumers of the library
const minConstructsVersion = '10.0.5'; // Minimum version to support CDK v2
const project = new CdkConstruct({
  description: 'A Step Function state machine construct focused on working well with the Workflow Studio',
  cdkVersion: cdkVersion,
  projenVersion: projenVersion,
  name: 'state-machine',
  deps: [
    lodash,
    'case',
    'js-yaml',
  ],
  peerDeps: [
    'aws-cdk-lib', // recommend using version 189 or greater due to security updates
    'projen',
  ],
  devDeps: [
    `aws-cdk@${cdkCliVersion}`,
    `aws-cdk-lib@${cdkVersion}`,
    `constructs@^${minConstructsVersion}`,
    'eslint@^9',
    '@typescript-eslint/eslint-plugin@^8',
    '@typescript-eslint/parser@^8',
    'esbuild',
    'projen',
    '@types/js-yaml',
    '@matthewbonig/cdk-construct-library@0.0.14',
  ],
  bundledDeps: [lodash, 'case', 'js-yaml'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  disablePublishToGo: true,
  disablePublishToMaven: true,
  disablePublishToNuGet: true,

});


// Package Resolutions
project.package.addField('resolutions', {
  constructs: '^10.0.5',
  projen: `${projenVersion}`,
});

project.synth();
