import * as fs from 'fs';
import * as path from 'path';
import { basename, dirname, extname, join } from 'path';
import { pascal } from 'case';
import { Component, Project, SourceCode } from 'projen';
import { AutoDiscoverCommonOptions } from 'projen/lib/awscdk';
import { AwsCdkDeps } from 'projen/lib/awscdk/awscdk-deps';
import { AutoDiscoverBase } from 'projen/lib/cdk';
import { buildStateType } from './BuildStateType';

const JSON_STEPFUNCTION_EXT = '.workflow.json';

export interface StepFunctionsAutoDiscoverOptions extends AutoDiscoverCommonOptions {
  /**
   * Project source tree (relative to project output directory).
   */
  readonly srcdir: string;
}

export class StepFunctionsAutoDiscover extends AutoDiscoverBase {
  constructor(project: Project, options: StepFunctionsAutoDiscoverOptions) {
    super(project, {
      extension: JSON_STEPFUNCTION_EXT,
      projectdir: options.srcdir,
    });
    for (const entrypoint of this.entrypoints) {
      new StepFunctionsStateMachine(this.project, {
        workflowAsl: entrypoint,
        cdkDeps: options.cdkDeps,
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

    const workflowDefinition = JSON.parse(fs.readFileSync(workflowAsl).toString());
    if (!workflowDefinition.States) {
      throw new Error(`The workflow file ${workflowAsl} doesn't appear to be a valid ASL file, it doesn't contain a 'States' field`);
    }
    for (const [stateName, stateDef] of Object.entries(workflowDefinition.States)) {
      const stateType = buildStateType(stateDef);
      src.line(`readonly '${stateName}': ${stateType};`);
    }
    src.close('}');

    src.open(`export interface ${constructName}Props extends Omit<StateMachineProps, 'overrides' | 'definition'> {`);
    src.line(`readonly overrides: ${constructName}Overrides;`);
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
