/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算报表模块的路由
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 11:45:56
 */
import { Routes } from '@angular/router'

import { BgrptaskComponent } from './components/bgrptask/bgrptask.component'
export const Routers: Routes = [
  {
    path: 'bgrptaskList', // 消息详情
    component: BgrptaskComponent
  }
]
