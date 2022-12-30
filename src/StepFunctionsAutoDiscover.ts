import * as fs from 'fs';
import * as path from 'path';
import { basename, dirname, extname, join } from 'path';
import { pascal } from 'case';
import { Component, Project, SourceCode } from 'projen';
import { AwsCdkTypeScriptApp } from 'projen/lib/awscdk';
import { AwsCdkDeps } from 'projen/lib/awscdk/awscdk-deps';
import { AutoDiscoverBase } from 'projen/lib/cdk';
import { buildStateType } from './BuildStateType';

const JSON_STEPFUNCTION_EXT = '.workflow.json';

/**
 * For future use. No properties, yet.
 */
export interface StepFunctionsAutoDiscoverOptions {

}

/**
 * A projen component for discovering AWS Step Function state machine workflow ASL files
 * and generating a strongly typed interface and construct to use it.
 *
 * Simply add a new instance and hand it your AwsCdkTypeScriptApp projen class:
 * ```
 * const project = new AwsCdkTypeScriptApp({ ... });
 * new StepFunctionsAutoDiscover(project);
 * ```
 *
 * And any *.workflow.json file will cause the generation of a new strongly-typed StateMachine-derived class you can use.
 * Note that these constructs are NOT jsii-compatible. If you need that,
 * please open an [issue](https://github.com/mbonig/state-machine/issues/new)
 */
export class StepFunctionsAutoDiscover extends AutoDiscoverBase {
  constructor(project: AwsCdkTypeScriptApp, _options?: StepFunctionsAutoDiscoverOptions) {
    super(project, {
      extension: JSON_STEPFUNCTION_EXT,
      projectdir: project.srcdir,
    });
    for (const entrypoint of this.entrypoints) {
      new StepFunctionsStateMachine(this.project, {
        workflowAsl: entrypoint,
        cdkDeps: project.cdkDeps,
      });
    }
  }
}

export interface StepFunctionsStateMachineOptions {
  readonly constructFile?: string;
  readonly workflowAsl: string;
  readonly constructName?: string;
  readonly cdkDeps: AwsCdkDeps;
}

/**
 * Don't use this class directly.
 */
export class StepFunctionsStateMachine extends Component {
  constructor(project: Project, options: StepFunctionsStateMachineOptions) {
    super(project);

    const workflowAsl = options.workflowAsl;

    if (
      !workflowAsl.endsWith(JSON_STEPFUNCTION_EXT)
    ) {
      throw new Error(
        `${workflowAsl} must have a ${JSON_STEPFUNCTION_EXT} extension`,
      );
    }
    const basePath = join(
      dirname(workflowAsl),
      basename(
        workflowAsl,
        JSON_STEPFUNCTION_EXT,
      ),
    );
    const constructFile = options.constructFile ?? `${basePath}-statemachine.ts`;

    if (extname(constructFile) !== '.ts') {
      throw new Error(
        `Construct file name "${constructFile}" must have a .ts extension`,
      );
    }

    // type names
    const constructName =
      options.constructName ?? pascal(basename(basePath)) + 'StateMachine';

    const src = new SourceCode(project, constructFile);
    if (src.marker) {
      src.line(`// ${src.marker}`);
    }
    src.line('import { StateMachine, StateMachineProps } from \'@matthewbonig/state-machine\';');
    src.line('import { Construct } from \'constructs\';');
    src.line('import fs from \'fs\';');
    src.line('import path from \'path\';');

    src.open(`export interface ${constructName}Overrides {`);

    const workflowDefinition = JSON.parse(fs.readFileSync(join(project.outdir, workflowAsl)).toString());
    if (!workflowDefinition.States) {
      throw new Error(`The workflow file ${workflowAsl} doesn't appear to be a valid ASL file, it doesn't contain a 'States' field`);
    }
    for (const [stateName, stateDef] of Object.entries(workflowDefinition.States)) {
      const stateType = buildStateType(stateDef);
      src.line(`readonly '${stateName}': ${stateType};`);
    }
    src.close('}');

    src.open(`export interface ${constructName}Props extends Omit<StateMachineProps, 'overrides' | 'definition'> {`);
    src.line(`readonly overrides: Partial<${constructName}Overrides>;`);
    src.close('}');


    src.open(`export class ${constructName} extends StateMachine {`);
    src.open(`constructor(scope: Construct, id: string, props: ${constructName}Props) {`);
    src.open('super(scope, id, {');
    src.line('...props,');
    const relativeFile = path.basename(workflowAsl);
    src.line(`definition: JSON.parse(fs.readFileSync(path.join(__dirname, '${relativeFile}')).toString()),`);
    src.close('});');
    src.close('}');
    src.close('}');

    this.project.logger.verbose(
      `${basePath}: construct "${constructName}" generated under "${constructFile}"`,
    );
  }
}
