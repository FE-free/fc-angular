/*
 * @Author: luohong
 * @Date: 2019-08-21 09:55:49
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-21 14:29:06
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Routes } from '@angular/router';
import { TemplatefastpositionComponent } from './templatefastposition/templatefastposition.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TemplatelistComponent } from './templatelist/templatelist.component';
import { TemplatetabformComponent } from './templatetabform/templatetabform.component';
import { TemplatetablistComponent } from './templatetablist/templatetablist.component';
import { TemplatetreeformsComponent } from './templatetreeforms/templatetreeforms.component';
import { TemplatetreelistsComponent } from './templatetreelists/templatetreelists.component';
import { TemplatetreetablistComponent } from './templatetreetablist/templatetreetablist.component';


export const Routers: Routes = [
  {
    path: 'fctemplatefastposition', // 
    component: TemplatefastpositionComponent
  },
  {
    path: 'fctemplateform', // 
    component: TemplateformComponent
  },
  {
    path: 'fctemplatelist', // 
    component: TemplatelistComponent
  },
  {
    path: 'fctemplatetabform', // 
    component: TemplatetabformComponent
  },
  {
    path: 'fctemplatetablist', // 
    component: TemplatetablistComponent
  },
  {
    path: 'fctemplatetreeforms', // 
    component: TemplatetreeformsComponent
  },
  {
    path: 'fctemplatetreelists', // 
    component: TemplatetreelistsComponent
  },
  {
    path: 'fctemplatetreetablist', // 
    component: TemplatetreetablistComponent
  },
]
