/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-16 15:58:10
 */
import { Routes } from '@angular/router';
import { FcantdComponent } from './fcantd/fcantd.component';
import { Fcg2Component } from './fcchart/fcg2/fcg2.component';
import { FciconComponent } from './fcicon/fcicon.component';
import { FciframeComponent } from './fciframe/fciframe.component';
import { FcspreadComponent } from './fcspread/fcspread.component';
import { FctableComponent } from './fctable/fctable.component';

export const Routers: Routes = [
  {
    path: '', // AntDesign
    loadChildren: () =>
      import('./fcantd/fcantd.module').then(res => res.FcantdModule)
  },
  {
    path: '', // 图表
    loadChildren: () =>
      import('./fcchart/fcchart.module').then(res => res.FcchartModule)
  },
  {
    path: '', // 图标
    loadChildren: () =>
      import('./fcicon/fcicon.module').then(res => res.FciconModule)
  },
  {
    path: '', // iframe
    loadChildren: () =>
      import('./fciframe/fciframe.module').then(res => res.FciframeModule)
  },
  {
    path: '', // spread报表
    loadChildren: () =>
      import('./fcspread/fcspread.module').then(res => res.FcspreadModule)
  },
  {
    path: '', // 表格
    loadChildren: () =>
      import('./fctable/fctable.module').then(res => res.FctableModule)
  },
  {
    path: '', // 模版页面
    loadChildren: () =>
      import('./fctemplate/fctemplate.module').then(res => res.FctemplateModule)
  },
  {
    path: '', // threejs
    loadChildren: () =>
      import('./fcthreejs/fcthreejs.module').then(res => res.FcthreejsModule)
  }
];
