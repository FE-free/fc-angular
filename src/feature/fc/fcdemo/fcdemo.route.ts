/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-06-13 16:42:50
 */
import { Routes } from '@angular/router'

import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component'
import { BgcreateComponent } from './components/bgcreate/bgcreate.component'
import { BgupdateComponent } from './components/bgupdate/bgupdate.component'
import { BgremoveComponent } from './components/bgremove/bgremove.component'
import { BgspreadComponent } from './components/bgspread/bgspread.component';
import { BgiframeComponent } from './components/bgiframe/bgiframe.component';
import { BgtableComponent } from './components/bgtable/bgtable.component';
import { BgchartComponent } from './components/bgchart/bgchart.component';

export const Routers: Routes = [
  {
    path: 'bglistinfoList', // 查询
    component: BglistinfoComponent
  },
  {
    path: 'bgcreateList', // 新增
    component: BgcreateComponent
  },
  {
    path: 'bgupdateList', // 修改
    component: BgupdateComponent
  },
  {
    path: 'bgremoveList', // 删除
    component: BgremoveComponent
  },
  {
    path: 'bgspreadList', // spread报表
    component: BgspreadComponent
  },
  {
    path: 'bgtableList', // 表格
    component: BgtableComponent
  },
  {
    path: 'bgiframeList', // iframe
    component: BgiframeComponent
  },
  {
    path: 'bgchartList', // 图表
    component: BgchartComponent
  }
]
