/*
 * @Author: luohong
 * @LastEditors: Please set LastEditors
 * @Description: 平台的模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 09:42:04
 */
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { Routers } from './fc.route'
import { HomeComponent } from './fcsystem/components/home/home.component'
import { NgZorroAntdModule } from 'ng-zorro-antd'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    NgZorroAntdModule
  ],
  declarations: [HomeComponent],
  providers: []
})
export class FcModule {}
