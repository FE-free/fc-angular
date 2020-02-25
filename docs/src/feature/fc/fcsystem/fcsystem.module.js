import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 系统模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:36:54
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routers } from './fcsystem.route';
let FcsystemModule = class FcsystemModule {
};
FcsystemModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(Routers)
        ],
        declarations: [],
        providers: [],
        schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
    })
], FcsystemModule);
export { FcsystemModule };
//# sourceMappingURL=fcsystem.module.js.map