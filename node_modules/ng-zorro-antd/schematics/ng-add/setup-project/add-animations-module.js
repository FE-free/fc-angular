"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const config_1 = require("@schematics/angular/utility/config");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const chalk_1 = require("chalk");
const browserAnimationsModuleName = 'BrowserAnimationsModule';
const noopAnimationsModuleName = 'NoopAnimationsModule';
const animationsModulePath = '@angular/platform-browser/animations';
function addAnimationsModule(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_1.getProjectFromWorkspace(workspace, options.project);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, schematics_1.getProjectMainFile(project));
        if (options.animations) {
            if (schematics_1.hasNgModuleImport(host, appModulePath, noopAnimationsModuleName)) {
                console.log();
                return console.log(chalk_1.default.yellow(`Could not set up "${chalk_1.default.blue(browserAnimationsModuleName)}" ` +
                    `because "${chalk_1.default.blue(noopAnimationsModuleName)}" is already imported. Please manually ` +
                    `set up browser animations.`));
            }
            schematics_1.addModuleImportToRootModule(host, browserAnimationsModuleName, animationsModulePath, project);
        }
        else if (!schematics_1.hasNgModuleImport(host, appModulePath, browserAnimationsModuleName)) {
            schematics_1.addModuleImportToRootModule(host, noopAnimationsModuleName, animationsModulePath, project);
        }
        return host;
    };
}
exports.addAnimationsModule = addAnimationsModule;
//# sourceMappingURL=add-animations-module.js.map