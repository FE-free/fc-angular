/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-08-05 10:09:45
 */
import { Routes } from '@angular/router'

import { FclistinfoComponent } from './components/fclistinfo/fclistinfo.component'
import { FccreateComponent } from './components/fccreate/fccreate.component'
import { FcupdateComponent } from './components/fcupdate/fcupdate.component'
import { FcremoveComponent } from './components/fcremove/fcremove.component'
import { FcspreadComponent } from './components/fcspread/fcspread.component';
import { FciframeComponent } from './components/fciframe/fciframe.component';
import { FctableComponent } from './components/fctable/fctable.component';
import { FcchartComponent } from './components/fcchart/fcchart.component';

export const Routers: Routes = [
  {
    path: '', // demo组件
    loadChildren: './fcantd/fcantd.module#FcantdModule'
  },
  {
    path: 'fclistinfoList', // 查询
    component:FclistinfoComponent
  },
  {
    path: 'fccreateList', // 新增
    component: FccreateComponent
  },
  {
    path: 'fcupdateList', // 修改
    component: FcupdateComponent
  },
  {
    path: 'fcremoveList', // 删除
    component: FcremoveComponent
  },
  {
    path: 'fcspreadList', // spread报表
    component: FcspreadComponent
  },
  {
    path: 'fctableList', // 表格
    component: FctableComponent
  },
  {
    path: 'fciframeList', // iframe
    component: FciframeComponent
  },
  {
    path: 'fcchartList', // 图表
    component: FcchartComponent
  }
]
