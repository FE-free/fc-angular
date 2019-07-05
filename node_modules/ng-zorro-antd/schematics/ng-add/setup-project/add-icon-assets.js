"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
const config_1 = require("@schematics/angular/utility/config");
const chalk_1 = require("chalk");
const iconPathSegment = '@ant-design/icons-angular';
const iconAssetObject = {
    'glob': '**/*',
    'input': './node_modules/@ant-design/icons-angular/src/inline-svg/',
    'output': '/assets/'
};
function addIconToAssets(options) {
    return (host) => {
        const workspace = config_1.getWorkspace(host);
        const project = schematics_1.getProjectFromWorkspace(workspace, options.project);
        const targetOptions = schematics_1.getProjectTargetOptions(project, 'build');
        if (!targetOptions.assets) {
            targetOptions.assets = [Object.assign({}, iconAssetObject)];
        }
        else {
            const assets = targetOptions.assets;
            const assetsString = JSON.stringify(assets);
            if (!assetsString.includes(iconPathSegment)) {
                assets.push(Object.assign({}, iconAssetObject));
            }
            else {
                console.log();
                console.log(chalk_1.default.yellow(`Could not add the icon assets to the CLI project assets ` +
                    `because there is already a icon assets file referenced.`));
                console.log(chalk_1.default.yellow(`Please manually add the following config to your assets:`));
                console.log(chalk_1.default.cyan(JSON.stringify(iconAssetObject, null, 2)));
                return host;
            }
        }
        host.overwrite('angular.json', JSON.stringify(workspace, null, 2));
        return host;
    };
}
exports.addIconToAssets = addIconToAssets;
//# sourceMappingURL=add-icon-assets.js.map