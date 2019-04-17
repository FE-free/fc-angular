/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算报表模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 11:45:37
 */
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { BgrptaskBusiness } from './business/bgrptask.business';
import { BgrptaskComponent } from './components/bgrptask/bgrptask.component';
import { Routers } from './bgreport.route';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(Routers)],
  declarations: [
    BgrptaskComponent
  ],
  providers: [
    BgrptaskBusiness
  ]
})
export class BgreportModule { }
