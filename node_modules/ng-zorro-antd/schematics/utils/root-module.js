"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const config_1 = require("@schematics/angular/utility/config");
const find_module_1 = require("@schematics/angular/utility/find-module");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const ts = require("typescript");
function readIntoSourceFile(host, modulePath) {
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
function addModule(moduleName, modulePath) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace);
        schematics_2.addModuleImportToRootModule(host, moduleName, modulePath, project);
        return host;
    };
}
exports.addModule = addModule;
function addDeclaration(componentName, componentPath) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace);
        const appModulePath = ng_ast_utils_1.getAppModulePath(host, schematics_2.getProjectMainFile(project));
        const source = readIntoSourceFile(host, appModulePath);
        const relativePath = find_module_1.buildRelativePath(appModulePath, componentPath);
        const declarationChanges = ast_utils_1.addDeclarationToModule(source, appModulePath, componentName, relativePath);
        const declarationRecorder = host.beginUpdate(appModulePath);
        for (const change of declarationChanges) {
            if (change instanceof change_1.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);
        return host;
    };
}
exports.addDeclaration = addDeclaration;
//# sourceMappingURL=root-module.js.map