/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的懒加载路由
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 17:19:58
 */
import { Routes } from '@angular/router'
export const Routers: Routes = [
  {
    path: '', // demo组件
    loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
  },
  {
    path: '', // system
    loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
  }
]
