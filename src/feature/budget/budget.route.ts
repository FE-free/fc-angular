/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算项目的路由
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-18 14:16:06
 */
import { Routes } from '@angular/router'

export const Routers: Routes = [
  {
    path: '', // 快速开发平台模块
    loadChildren: '../fc/fc.module#FcModule'
  },
  {
    path: '', // 预算体系模块
    loadChildren: './tx/tx.module#TxModule'
  },
  {
    path: '', // 预算报表模块
    loadChildren: './budget_report/bgreport.module#BgreportModule'
  }
]
