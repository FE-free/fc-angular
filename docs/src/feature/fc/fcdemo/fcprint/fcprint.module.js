import * as tslib_1 from "tslib";
import { FcprintComponent } from './fcprint.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { Routers } from './fcprint.route';
let FcprintModule = class FcprintModule {
};
FcprintModule = tslib_1.__decorate([
    NgModule({
        imports: [
            SharedModule,
            RouterModule.forChild(Routers),
            FccomponentModule
        ],
        declarations: [
            FcprintComponent
        ],
        providers: [],
        schemas: [NO_ERRORS_SCHEMA]
    })
], FcprintModule);
export { FcprintModule };
//# sourceMappingURL=fcprint.module.js.map