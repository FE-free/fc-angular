import { Routes } from '@angular/router'
import { BglistinfoComponent } from './components/bglistinfo/bglistinfo.component'
import { BgcreateComponent } from './components/bgcreate/bgcreate.component'
import { BgupdateComponent } from './components/bgupdate/bgupdate.component'
import { BgremoveComponent } from './components/bgremove/bgremove.component'

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
  }
]
