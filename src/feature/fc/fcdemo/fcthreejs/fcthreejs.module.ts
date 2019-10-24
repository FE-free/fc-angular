import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { FcboxgeometryComponent } from './fcboxgeometry/fcboxgeometry.component';
import { Routers } from './fcthreejs.route';
@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(Routers),
    ],
    declarations: [
        FcboxgeometryComponent // 立方体
    ],
    providers: []
})
export class FcthreejsModule { }
