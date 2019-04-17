/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-04-17 12:30:25
 */
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { NgZorroAntdModule } from 'ng-zorro-antd'
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { Routers } from './fcdemo.route'
import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component'
import { BgcreateComponent } from './components/bgcreate/bgcreate.component'
import { BgupdateComponent } from './components/bgupdate/bgupdate.component'
import { BgremoveComponent } from './components/bgremove/bgremove.component'
import { BgspreadComponent } from './components/bgspread/bgspread.component'
import { BgtableComponent } from './components/bgtable/bgtable.component'
import { BgiframeComponent } from './components/bgiframe/bgiframe.component'
import { FccomponentModule } from 'src/fccore/fccomponents';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(Routers),
    NgZorroAntdModule,
    SpreadSheetsModule,
    FccomponentModule
  ],
  declarations: [
    BglistinfoComponent, // 查询
    BgcreateComponent, // 新增
    BgupdateComponent, // 修改
    BgremoveComponent, // 删除
    BgspreadComponent, // spread报表
    BgtableComponent, // 表格
    BgiframeComponent // iframe
  ],
  providers: []
})
export class FcdemoModule {}
