"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const chalk_1 = require("chalk");
const glob_1 = require("glob");
const upgrade_data_1 = require("./upgrade-data");
const ruleDirectories = glob_1.sync('upgrade-rules/**/', { cwd: __dirname, absolute: true });
/** TSLint upgrade configuration that will be passed to the CDK ng-update rule. */
const tslintUpgradeConfig = {
    upgradeData: upgrade_data_1.materialUpgradeData,
    extraRuleDirectories: ruleDirectories
};
/** Entry point for the migration schematics with target of NG-ZORRO v7 */
function updateToV7() {
    return schematics_1.createUpgradeRule(schematics_1.TargetVersion.V7, tslintUpgradeConfig);
}
exports.updateToV7 = updateToV7;
/** Post-update schematic to be called when update is finished. */
function postUpdate() {
    return () => {
        console.log();
        console.log(chalk_1.default.green('  ✓  NG-ZORRO update complete'));
        console.log();
        console.log(chalk_1.default.yellow('  ⚠  Please check the output above for any issues that were detected ' +
            'but could not be automatically fixed.'));
    };
}
exports.postUpdate = postUpdate;
//# sourceMappingURL=index.js.map