"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular/cdk/schematics");
exports.inputNames = {
    [schematics_1.TargetVersion.V7]: [
        {
            pr: 'https://github.com/NG-ZORRO/ng-zorro-antd/pull/2969',
            changes: [
                {
                    replace: 'nzSuffix',
                    replaceWith: 'nzAddOnAfter',
                    whitelist: {
                        attributes: ['nzSearch']
                    }
                }
            ]
        }
    ]
};
//# sourceMappingURL=input-names.js.map