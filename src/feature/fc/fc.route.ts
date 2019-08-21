/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的懒加载路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-08-21 16:32:00
 */
import { Routes } from '@angular/router';
import { BuildingComponent } from 'src/app/components/building/building.component';
import { FciframeComponent } from './fciframe/fciframe.component';
import { FchomeComponent } from './fchome/fchome.component';

export const Routers: Routes = [
  {
    path: '',
    redirectTo: 'fchome',
    pathMatch: 'full',
  },
  {
    path: 'fchome',
    component: FchomeComponent
  },
  {
    path: 'fcbuilding', // 正在开发中
    component: BuildingComponent
  },
  {
    path: 'fciframe', // 正在开发中
    component: FciframeComponent
  },
  {
    path: '', // 图表
    loadChildren: './fcchart/fcchart.module#FcchartModule'
  },
  {
    path: '', // 地图
    loadChildren: './fcmap/fcmap.module#FcmapModule'
  },
  {
    path: '', // 报表
    loadChildren: './fcspread/fcspread.module#FcspreadModule'
  },
  {
    path: '', // system
    loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
  },
  {
    path: '', // 表格
    loadChildren: './fctable/fctable.module#FctableModule'
  },
  {
    path: '', // 模版页面
    loadChildren: './fctemplate/fctemplate.module#FctemplateModule'
  },
  {
    path: '', // 可视化
    loadChildren: './fcvisual/fcvisual.module#FcvisualModule'
  },
  {
    path: '', // 富文本
    loadChildren: './fceditor/fceditor.module#FceditorModule'
  }
]
