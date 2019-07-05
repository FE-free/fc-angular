"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const add_animations_module_1 = require("./add-animations-module");
const add_icon_assets_1 = require("./add-icon-assets");
const add_required_modules_1 = require("./add-required-modules");
const hammerjs_import_1 = require("./hammerjs-import");
const register_locale_1 = require("./register-locale");
const theming_1 = require("./theming");
function default_1(options) {
    return schematics_1.chain([
        add_required_modules_1.addRequiredModules(options),
        add_animations_module_1.addAnimationsModule(options),
        register_locale_1.registerLocale(options),
        theming_1.addThemeToAppStyles(options),
        options.dynamicIcon ? add_icon_assets_1.addIconToAssets(options) : schematics_1.noop(),
        options.gestures ? hammerjs_import_1.hammerjsImport(options) : schematics_1.noop()
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map