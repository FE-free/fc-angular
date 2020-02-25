import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { FcboxgeometryComponent } from './fcboxgeometry/fcboxgeometry.component';
import { Routers } from './fcthreejs.route';
let FcthreejsModule = class FcthreejsModule {
};
FcthreejsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
        ],
        declarations: [
            FcboxgeometryComponent // 立方体
        ],
        providers: []
    })
], FcthreejsModule);
export { FcthreejsModule };
//# sourceMappingURL=fcthreejs.module.js.map