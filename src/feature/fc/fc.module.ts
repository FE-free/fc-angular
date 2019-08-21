/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-08-21 16:32:15
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuildingComponent } from 'src/app/components/building/building.component';
import { SharedModule } from 'src/shared';
import { Routers } from './fc.route';
import { FciframeComponent } from './fciframe/fciframe.component';
import { FchomeComponent } from './fchome/fchome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [
    BuildingComponent,
    FciframeComponent,
    FchomeComponent

  ],
  providers: []
})
export class FcModule { }
