/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算体系模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 12:25:12
 */
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { NgZorroAntdModule } from 'ng-zorro-antd'
import { Routers } from './tx.route'
import { BgitemComponent } from './components/bgitem/bgitem.component'
import { BgitemBusiness } from './business/bgitem.business'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    NgZorroAntdModule
  ],
  declarations: [
    BgitemComponent // 组件-预算项目
  ],
  providers: [
    BgitemBusiness // 业务-预算项目
  ]
})
export class TxModule {}
