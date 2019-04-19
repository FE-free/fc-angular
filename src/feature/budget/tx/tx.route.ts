/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算体系的路由模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 14:10:59
 */
import { Routes } from '@angular/router'

import { BgitemComponent } from './components/bgitem/bgitem.component';
export const Routers: Routes = [
  {
    path: 'bgitemList', // 预算项目
    component: BgitemComponent
  }
]
