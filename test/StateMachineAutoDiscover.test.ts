import * as fs from 'fs';
import { mkdtempSync } from 'fs';
import * as os from 'os';
import * as path from 'path';
import { AwsCdkTypeScriptApp } from 'projen/lib/awscdk';
import { synthSnapshot } from 'projen/lib/util/synth';
import { StepFunctionsAutoDiscover } from '../src';


describe('AutoDiscover', () => {

  function setupTestProject(testFile: string) {
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
      path.join(project.outdir, project.srcdir, 'test.workflow.json'),
    );
    new StepFunctionsAutoDiscover(project);
    return project;
  }

  test('test 1', () => {
    const project = setupTestProject('test.workflow.json');
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });

  test('test 2', async () => {
    const project = setupTestProject('test2.workflow.json');
    const snap = synthSnapshot(project);
    expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
  });
});
