/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算项目模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-19 17:50:33
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './budget.route';
import { HomeComponent } from '../fc/fcsystem/components/home/home.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations:[
    HomeComponent
  ]
})
export class BudgetModule { }
