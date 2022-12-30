import * as fs from 'fs';
import * as path from 'path';
import { AwsCdkTypeScriptApp } from 'projen/lib/awscdk';
import { synthSnapshot } from 'projen/lib/util/synth';
import { StepFunctionsAutoDiscover } from '../src/StepFunctionsAutoDiscover';

test('simple snapshot', () => {
  const project = new AwsCdkTypeScriptApp({
    name: 'test',
    defaultReleaseBranch: 'main',
    cdkVersion: '2.53.0',
  });

  // add a test file...
  fs.mkdirSync(path.join(project.outdir, project.srcdir));
  fs.copyFileSync(
    path.join(__dirname, 'step-functions', 'test.workflow.json'),
    path.join(project.outdir, project.srcdir, 'test.workflow.json'),
  );
  new StepFunctionsAutoDiscover(project);
  const snap = synthSnapshot(project);

  expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
});
