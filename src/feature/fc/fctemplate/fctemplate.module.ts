/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-21 14:26:35
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fctemplate.route';
import { TemplatefastpositionComponent } from './templatefastposition/templatefastposition.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TemplatelistComponent } from './templatelist/templatelist.component';
import { TemplatetabformComponent } from './templatetabform/templatetabform.component';
import { TemplatetablistComponent } from './templatetablist/templatetablist.component';
import { TemplatetreeformsComponent } from './templatetreeforms/templatetreeforms.component';
import { TemplatetreelistsComponent } from './templatetreelists/templatetreelists.component';
import { TemplatetreetablistComponent } from './templatetreetablist/templatetreetablist.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
  ],
  declarations: [
    TemplatefastpositionComponent,
    TemplateformComponent,
    TemplatelistComponent,
    TemplatetabformComponent,
    TemplatetablistComponent,
    TemplatetreeformsComponent,
    TemplatetreelistsComponent,
    TemplatetreetablistComponent
  ],
  providers: []
})
export class FctemplateModule { }
