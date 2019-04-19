/*
 * @Author: luohong
 * @LastEditors: Please set LastEditors
 * @Description: 平台的模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 09:42:04
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fc.route';
import { HomeComponent } from './fcsystem/components/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [HomeComponent],
  providers: []
})
export class FcModule {}
