/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 系统模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:36:54
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Routers } from './fcsystem.route';
import { SharedModule } from 'src/shared';
import { FccomponentModule } from 'src/fccomponents';

@NgModule({
  imports: [
    RouterModule.forChild(Routers)
  ],
  declarations: [

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule { }
