/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents/fccomponent.module';
import { SharedModule } from 'src/shared';
import { FcantdComponent } from './fcantd.component';
import { Routers } from './fcantd.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule
  ],
  declarations: [
    FcantdComponent
  ],
  providers: []
})
export class FcantdModule { }
