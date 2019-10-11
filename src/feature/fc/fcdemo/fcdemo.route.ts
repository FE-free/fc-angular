/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-11 17:58:48
 */
import { Routes } from '@angular/router';

import { FciframeComponent } from './fciframe/fciframe.component';
import { FctableComponent } from './fctable/fctable.component';
import { FcchartComponent } from './fcchart/fcchart.component';
import { FcantdComponent } from './fcantd/fcantd.component';

export const Routers: Routes = [
  {
    path: 'fctable', // 表格
    component: FctableComponent
  },
  {
    path: 'fciframe', // iframe
    component: FciframeComponent
  },
  {
    path: 'fcchart', // 图表
    component: FcchartComponent
  },
  {
    path: 'fcantd', // AntDesign
    component: FcantdComponent
  }
];
