"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const build_component_1 = require("../utils/build-component");
function default_1(options) {
    return schematics_1.chain([
        build_component_1.buildComponent(Object.assign({}, options))
    ]);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map