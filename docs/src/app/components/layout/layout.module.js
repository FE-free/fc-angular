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
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { ErrorComponent } from '../error/error.component';
import { LockscreenComponent } from '../lockscreen/lockscreen.component';
import { SyseditpasswordComponent } from './dialog/syseditpassword.dialog';
import { LayoutComponent } from './layout.component';
let LayoutModule = class LayoutModule {
};
LayoutModule = tslib_1.__decorate([
    NgModule({
        entryComponents: [
            SyseditpasswordComponent
        ],
        imports: [
            SharedModule,
            FccomponentModule
        ],
        declarations: [
            LayoutComponent,
            SyseditpasswordComponent,
            ErrorComponent,
            LockscreenComponent,
        ],
        providers: []
    })
], LayoutModule);
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map