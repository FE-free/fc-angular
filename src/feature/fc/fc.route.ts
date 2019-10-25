/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台的懒加载路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 17:19:58
 */
import { Routes } from '@angular/router';
import { BuildingComponent } from 'src/app/components/building/building.component';
import { HomeComponent } from './fcsystem/components/home/home.component';
export const Routers: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'building', // 正在开发中
    component: BuildingComponent
  },
  {
    path: '', // demo组件
    loadChildren: () => import('./fcdemo/fcdemo.module').then(res => res.FcdemoModule)
  },
  {
    path: '', // system
    loadChildren: () => import('./fcsystem/fcsystem.module').then(res => res.FcsystemModule)
  }
]
