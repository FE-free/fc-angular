import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routers } from './fcdemo.route';
let FcdemoModule = class FcdemoModule {
};
FcdemoModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(Routers),
        ],
        declarations: [],
        providers: []
    })
], FcdemoModule);
export { FcdemoModule };
//# sourceMappingURL=fcdemo.module.js.map