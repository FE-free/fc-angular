/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 17:50:52
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fc.route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [],
  providers: []
})
export class FcModule {}
