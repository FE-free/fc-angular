/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台的模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 14:27:31
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BuildingComponent } from 'src/app/components/building/building.component';
import { FccomponentModule } from 'src/fccomponents';
import { SharedModule } from 'src/shared';
import { Routers } from './fc.route';
import { HomeComponent } from './fcsystem/components/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    FccomponentModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [
    HomeComponent,
    BuildingComponent
  ],
  providers: []
})
export class FcModule { }
