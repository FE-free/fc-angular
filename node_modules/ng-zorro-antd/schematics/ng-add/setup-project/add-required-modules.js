"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const config_1 = require("@schematics/angular/utility/config");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const chalk_1 = require("chalk");
const modulesMap = {
    NgZorroAntdModule: 'ng-zorro-antd',
    FormsModule: '@angular/forms',
    HttpClientModule: '@angular/common/http'
};
function addRequiredModules(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_1.getProjectFromWorkspace(workspace, options.project);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, schematics_1.getProjectMainFile(project));
        for (const module in modulesMap) {
            addModuleImportToApptModule(host, module, modulesMap[module], project, appModulePath, options);
        }
        return host;
    };
}
exports.addRequiredModules = addRequiredModules;
function addModuleImportToApptModule(host, moduleName, src, project, appModulePath, options) {
    if (schematics_1.hasNgModuleImport(host, appModulePath, moduleName)) {
        console.log(chalk_1.default.yellow(`Could not set up "${chalk_1.default.blue(moduleName)}" ` +
            `because "${chalk_1.default.blue(moduleName)}" is already imported. Please manually ` +
            `check "${chalk_1.default.blue(appModulePath)}" file.`));
        return;
    }
    schematics_1.addModuleImportToRootModule(host, moduleName, src, project);
}
//# sourceMappingURL=add-required-modules.js.map