/*
 * @Author: luohong
 * @Date: 2019-08-21 09:55:49
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-21 09:55:49
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Routes } from '@angular/router'

import { FcchartbarComponent } from './fcchartbar/fcchartbar.component';

export const Routers: Routes = [
  {
    path: 'fcchartbarList', // 图表-柱状图
    component: FcchartbarComponent
  }
]
