/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算报表模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 10:22:12
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './bgreport.route';
import { BgrptaskBusiness } from './business/bgrptask.business';
import { BgrptaskComponent } from './components/bgrptask/bgrptask.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [
    BgrptaskComponent
  ],
  providers: [
    BgrptaskBusiness
  ]
})
export class BgreportModule { }
