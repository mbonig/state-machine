import * as fs from 'fs';
import { mkdtempSync } from 'fs';
import * as os from 'os';
import * as path from 'path';
import { AwsCdkTypeScriptApp } from 'projen/lib/awscdk';
import { synthSnapshot } from 'projen/lib/util/synth';
import { StepFunctionsAutoDiscover } from '../src';
import { AWS_RECOMMENDED_JSON_EXT, AWS_RECOMMENDED_YAML_EXT, JSON_STEPFUNCTION_EXT } from '../src/StepFunctionsAutoDiscover';


function setupTestProject(testFile: string, extension: string = JSON_STEPFUNCTION_EXT, srcFile: string = 'test.workflow.json') {
  const tempDir = mkdtempSync(path.join(os.tmpdir(), 'test2'));
  const project = new AwsCdkTypeScriptApp({
    name: 'test',
    defaultReleaseBranch: 'main',
    cdkVersion: '2.53.0',
    outdir: tempDir,
  });

  // add a test file...
  fs.mkdirSync(path.join(project.outdir, project.srcdir));
  fs.copyFileSync(
    path.join(__dirname, 'step-functions', testFile),
    path.join(project.outdir, project.srcdir, srcFile),
  );
  new StepFunctionsAutoDiscover(project, { extension: extension });
  return project;
}


describe('Json', () => {
  test('simple case', () => {
    const project = setupTestProject('test.workflow.json');
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });

  test('more complex case', async () => {
    const project = setupTestProject('test2.workflow.json');
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });
});

describe('yaml', () => {
  test('handles yaml file', async () => {
    const project = setupTestProject('test.yaml.asl', AWS_RECOMMENDED_YAML_EXT, 'test.yaml.asl' );
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });

  test('handles yml file', async () => {
    const project = setupTestProject('test.yaml.asl', '.yml.asl', 'test.yml.asl' );
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });

});

describe('Extension parameter', () => {
  test('takes another extension', async () => {
    const project = setupTestProject('test.json.asl', AWS_RECOMMENDED_JSON_EXT, 'test.json.asl');
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });

  test('fails when extension does not start with a .', () => {
    expect(() => setupTestProject('test.json.asl', 'asdfasdf', 'test.json.asl')).toThrow('extension must start with a .');
  });
});

