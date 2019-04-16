import { Routes } from '@angular/router'
import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component'
import { BgcreateComponent } from './components/bgcreate/bgcreate.component'
import { BgupdateComponent } from './components/bgupdate/bgupdate.component'
import { BgremoveComponent } from './components/bgremove/bgremove.component'
import { BgspreadComponent } from './components/bgspread/bgspread.component';
import { BgiframeComponent } from './components/bgiframe/bgiframe.component';
import { BgtableComponent } from './components/bgtable/bgtable.component';

export const Routers: Routes = [
  {
    path: 'bglistinfoList', // 查询
    component: BglistinfoComponent
  },
  {
    path: 'bgcreateList', // 新增
    component: BgcreateComponent
  },
  {
    path: 'bgupdateList', // 修改
    component: BgupdateComponent
  },
  {
    path: 'bgremoveList', // 删除
    component: BgremoveComponent
  },
  {
    path: 'bgspreadList', // spread报表
    component: BgspreadComponent
  },
  {
    path: 'bgtableList', // 表格
    component: BgtableComponent
  },
  {
    path: 'bgiframeList', // iframe
    component: BgiframeComponent
  }
]
