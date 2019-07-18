/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-07-15 14:07:25
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpreadSheetsModule } from 'src/assets/plugin/spread/gc.spread.sheets.angular';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';import { Routers } from './fcdemo.route';
import { FclistinfoComponent } from './components/fclistinfo/fclistinfo.component';
import { FccreateComponent } from './components/fccreate/fccreate.component';
import { FcupdateComponent } from './components/fcupdate/fcupdate.component';
import { FcremoveComponent } from './components/fcremove/fcremove.component';
import { FcspreadComponent } from './components/fcspread/fcspread.component';
import { FctableComponent } from './components/fctable/fctable.component';
import { FcchartComponent } from './components/fcchart/fcchart.component';
import { FciframeComponent } from './components/fciframe/fciframe.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    SpreadSheetsModule,
    FccomponentModule
  ],
  declarations: [
    FclistinfoComponent, // 查询
    FccreateComponent, // 新增
    FcupdateComponent, // 修改
    FcremoveComponent, // 删除
    FcspreadComponent, // spread报表
    FctableComponent, // 表格
    FciframeComponent, // iframe
    FcchartComponent // 图表
  ],
  providers: []
})
export class FcdemoModule {}
