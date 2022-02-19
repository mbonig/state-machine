const { awscdk } = require('projen');
const { NpmAccess } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Matthew Bonig',
  authorAddress: 'matthew.bonig@gmail.com',
  cdkVersion: '2.4.0',
  defaultReleaseBranch: 'main',
  name: '@matthewbonig/state-machine',
  repositoryUrl: 'https://github.com/mbonig/state-machine.git',
  npmAccess: NpmAccess.PUBLIC,
  gitignore: ['.idea/'],
});

project.synth();