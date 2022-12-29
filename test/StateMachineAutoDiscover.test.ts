import * as fs from 'fs';
import * as path from 'path';
import { DependencyType } from 'projen';
import { AwsCdkDeps, AwsCdkDepsJs } from 'projen/lib/awscdk';
import { TypeScriptProject } from 'projen/lib/typescript';
import { synthSnapshot } from 'projen/lib/util/synth';
import { StepFunctionsAutoDiscover } from '../src/StepFunctionsAutoDiscover';


function cdkDepsForProject(
  project: TypeScriptProject,
  cdkVersion = '1.0.0',
): AwsCdkDeps {
  return new AwsCdkDepsJs(project, {
    cdkVersion: cdkVersion,
    dependencyType: DependencyType.RUNTIME,
  });
}

test('simple snapshot', () => {
  const project = new TypeScriptProject({
    name: 'test',
    defaultReleaseBranch: 'main',
  });

  // add a test file...
  fs.mkdirSync(path.join(project.outdir, project.srcdir));
  fs.copyFileSync(
    path.join(__dirname, 'step-functions', 'test.workflow.json'),
    path.join(project.outdir, project.srcdir, 'test.workflow.json'),
  );
  new StepFunctionsAutoDiscover(project, {
    srcdir: project.srcdir,
    tsconfigPath: path.join(__dirname, '..'),
    cdkDeps: cdkDepsForProject(project),
  });
  const snap = synthSnapshot(project);

  expect(snap['src/test-statemachine.ts']).toMatchSnapshot();
});
