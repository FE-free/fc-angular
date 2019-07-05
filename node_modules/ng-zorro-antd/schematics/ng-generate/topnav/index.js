"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const schematics_2 = require("@angular/cdk/schematics");
const schema_1 = require("@schematics/angular/application/schema");
const config_1 = require("@schematics/angular/utility/config");
const root_module_1 = require("../../utils/root-module");
function default_1(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_2.getProjectFromWorkspace(workspace, options.project);
        const prefix = options.prefix || project.prefix;
        const style = options.style || schema_1.Style.Css;
        return schematics_1.chain([
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files/src'), [
                schematics_1.applyTemplates(Object.assign({ prefix,
                    style }, core_1.strings, options)),
                schematics_1.move(project.sourceRoot),
                schematics_1.forEach((fileEntry) => {
                    if (host.exists(fileEntry.path)) {
                        host.overwrite(fileEntry.path, fileEntry.content);
                    }
                    return fileEntry;
                })
            ]), schematics_1.MergeStrategy.Overwrite),
            root_module_1.addModule('AppRoutingModule', './app-routing.module')
        ]);
    };
}
exports.default = default_1;
//# sourceMappingURL=index.js.map