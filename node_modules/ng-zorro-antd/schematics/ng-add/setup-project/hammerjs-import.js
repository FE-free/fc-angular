"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const config_1 = require("@schematics/angular/utility/config");
const chalk_1 = require("chalk");
const hammerjsImportStatement = `import 'hammerjs';`;
/** Adds HammerJS to the main file of the specified Angular CLI project. */
function hammerjsImport(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_1.getProjectFromWorkspace(workspace, options.project);
        const mainFile = schematics_1.getProjectMainFile(project);
        const recorder = host.beginUpdate(mainFile);
        const buffer = host.read(mainFile);
        if (!buffer) {
            console.log();
            return console.error(chalk_1.default.red(`Could not read the project main file (${chalk_1.default.blue(mainFile)}). Please manually ` +
                `import HammerJS in your main TypeScript file.`));
        }
        const fileContent = buffer.toString('utf8');
        if (fileContent.includes(hammerjsImportStatement)) {
            console.log();
            return console.log(`HammerJS is already imported in the project main file (${chalk_1.default.blue(mainFile)}).`);
        }
        recorder.insertRight(0, `${hammerjsImportStatement}\n`);
        host.commitUpdate(recorder);
    };
}
exports.hammerjsImport = hammerjsImport;
//# sourceMappingURL=hammerjs-import.js.map