import { Routes } from '@angular/router';
import { FctemplatelistComponent } from './fctemplatelist/fctemplatelist.component';
import { FctemplateformComponent } from './fctemplateform/fctemplateform.component';
import { FctemplatedetailComponent } from './fctempatedetail/fctemplatedetail.component';
import { FctemplatetreelistComponent } from './fctemplatetreelist/fctemplatetreelist.component';


export const Routers: Routes = [
  {
    path: 'fctemplatelist', // 列表
    component: FctemplatelistComponent
  },
  {
    path: 'fctemplateform', // 表单
    component: FctemplateformComponent
  },
  {
    path: 'fctemplatedetail', // 详情
    component: FctemplatedetailComponent
  },
  {
    path: 'fctemplatetreelist', // 左树右列表
    component: FctemplatetreelistComponent
  },
];
