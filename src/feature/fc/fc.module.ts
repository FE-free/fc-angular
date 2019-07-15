/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-11 17:20:14
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fc.route';
import { HomeComponent } from './fcsystem/components/home/home.component';
import { BuildingComponent } from 'src/app/components/building/building.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [
    HomeComponent,
    BuildingComponent
  ],
  providers: []
})
export class FcModule {}
