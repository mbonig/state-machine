import * as fs from 'fs';
import * as path from 'path';
import { basename, dirname, extname, join } from 'path';
import { pascal } from 'case';
import * as yaml from 'js-yaml';
import { Component, Project, SourceCode } from 'projen';
import { AwsCdkTypeScriptApp } from 'projen/lib/awscdk';
import { AwsCdkDeps } from 'projen/lib/awscdk/awscdk-deps';
import { AutoDiscoverBase } from 'projen/lib/cdk';
import { buildStateType } from './BuildStateType';

/**
 * The original extension used to search for ASL files.
 */
export const JSON_STEPFUNCTION_EXT = '.workflow.json';

/**
 * The AWS-recommended extension for ASL files.
 */
export const AWS_RECOMMENDED_JSON_EXT = '.json.asl';

/**
 * The AWS-recommended extension for YAML ASL files.
 */
export const AWS_RECOMMENDED_YAML_EXT = '.yaml.asl';

export interface StepFunctionsAutoDiscoverOptions {
  /**
   * An optional extension to use for discovering state machine files.
   *
   * @default '.workflow.json' (JSON_STEPFUNCTION_EXT)
   */
  readonly extension?: string;
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
    if (_options?.extension) {
      if (!_options.extension.startsWith('.')) {
        throw new Error('extension must start with a .');
      }
    }
    let extension = _options?.extension || JSON_STEPFUNCTION_EXT;
    super(project, {
      extension: extension,
      projectdir: project.srcdir,
    });
    for (const entrypoint of this.entrypoints) {
      new StepFunctionsStateMachine(this.project, {
        workflowAsl: entrypoint,
        cdkDeps: project.cdkDeps,
        extension,
      });
    }
  }
}

export interface StepFunctionsStateMachineOptions {
  readonly extension: string;
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

    const extension = options.extension ?? JSON_STEPFUNCTION_EXT;
    const workflowAsl = options.workflowAsl;

    if (
      !workflowAsl.endsWith(extension)
    ) {
      throw new Error(
        `${workflowAsl} must have a ${extension} extension`,
      );
    }
    const basePath = join(
      dirname(workflowAsl),
      basename(
        workflowAsl,
        extension,
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

    let isYaml = /(yaml|yml)/.test(extension);
    if (isYaml) {
      src.line('import * as yaml from \'js-yaml\';');
    }

    src.open(`export interface ${constructName}Overrides {`);

    let workflowDefinition: any;
    if (isYaml) {
      workflowDefinition = yaml.load(fs.readFileSync(join(project.outdir, workflowAsl)).toString());
    } else {
      workflowDefinition = JSON.parse(fs.readFileSync(join(project.outdir, workflowAsl)).toString());

    }
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
    if (isYaml) {
      src.line(`definition: yaml.load(fs.readFileSync(path.join(__dirname, '${relativeFile}')).toString()),`);
      src.line('aslYaml: true,');
    } else {
      src.line(`definition: JSON.parse(fs.readFileSync(path.join(__dirname, '${relativeFile}')).toString()),`);

    }
    src.close('});');
    src.close('}');
    src.close('}');

    this.project.logger.verbose(
      `${basePath}: construct "${constructName}" generated under "${constructFile}"`,
    );
  }
}
