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
import { FcspreadComponent } from './fcspread.component';
import { Routers } from './fcspread.route';
import { SharedModule } from 'src/shared';
import { FccomponentModule } from 'src/fccomponents';
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
let FcspreadModule = class FcspreadModule {
};
FcspreadModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule,
            SpreadSheetsModule,
        ],
        declarations: [
            FcspreadComponent
        ],
        providers: []
    })
], FcspreadModule);
export { FcspreadModule };
//# sourceMappingURL=fcspread.module.js.map