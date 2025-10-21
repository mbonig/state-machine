import { CdkConstruct } from '@matthewbonig/cdk-construct-library';

const lodash = 'lodash.merge';
const cdkVersion = '2.200.0'; // Required minimum CDK version of consumers of the library
const cdkCliVersion = '2.1029.2';
const projenVersion = '^0.98.2'; // Does not affect consumers of the library
const minConstructsVersion = '10.3.0'; // Minimum version to support CDK v2
const cdkConstructProjectVersion = '0.0.17';
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
    `constructs@^${minConstructsVersion}`,
    'projen',
  ],
  devDeps: [
    `aws-cdk@${cdkCliVersion}`,
    `aws-cdk-lib@${cdkVersion}`,
    `constructs@${minConstructsVersion}`,
    'eslint@^9',
    '@typescript-eslint/eslint-plugin@^8',
    '@typescript-eslint/parser@^8',
    'esbuild',
    'projen',
    '@types/js-yaml',
    `@matthewbonig/cdk-construct-library@${cdkConstructProjectVersion}`,
    'jsii@^5.9.0',
    'jsii-rosetta@^5.9.0',
  ],
  constructsVersion: minConstructsVersion,
  bundledDeps: [lodash, 'case', 'js-yaml'],
  keywords: ['awscdk', 'cdk', 'AWS Step Functions'],
  disablePublishToGo: true,
  disablePublishToMaven: true,
  disablePublishToNuGet: true,
});

// Package Resolutions
project.package.addField('resolutions', {
  constructs: `${minConstructsVersion}`,
  projen: `${projenVersion}`,
  jsii: '^5.9.0',
});

// Override jsii versions to fix lockfile inconsistency
project.addDevDeps('jsii@^5.9.0', 'jsii-rosetta@^5.9.0');

project.synth();
