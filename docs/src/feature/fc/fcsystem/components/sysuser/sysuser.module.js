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
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { SysuserBusiness } from '../../business/sysuser.business';
import { SysuserComponent } from './sysuser.component';
import { Routers } from './sysuser.route';
let SysuserModule = class SysuserModule {
};
SysuserModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule
        ],
        declarations: [
            SysuserComponent
        ],
        providers: [SysuserBusiness]
    })
], SysuserModule);
export { SysuserModule };
//# sourceMappingURL=sysuser.module.js.map