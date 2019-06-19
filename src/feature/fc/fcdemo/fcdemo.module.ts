/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-04-17 14:46:17
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { Routers } from './fcdemo.route';
import { SharedModule } from 'src/shared';
import { BgcreateComponent } from './components/bgcreate/bgcreate.component';
import { BgiframeComponent } from './components/bgiframe/bgiframe.component';
import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component';
import { BgremoveComponent } from './components/bgremove/bgremove.component';
import { BgspreadComponent } from './components/bgspread/bgspread.component';
import { BgtableComponent } from './components/bgtable/bgtable.component';
import { BgupdateComponent } from './components/bgupdate/bgupdate.component';
import { BgchartComponent } from './components/bgchart/bgchart.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
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
    BgiframeComponent, // iframe
    BgchartComponent // 图表
  ],
  providers: []
})
export class FcdemoModule {}
