/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的懒加载路由
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:31:55
 */
import { Routes } from '@angular/router'

import { HomeComponent } from './fcsystem/components/home/home.component'
export const Routers: Routes = [
  {
    path: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '', // demo组件
    loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
  },
  {
    path: '', // system
    loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
  }
]
