/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-21 16:31:10
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fcvisual.route';
import { FcearthComponent } from './fcearth/fcearth.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
  ],
  declarations: [
    FcearthComponent
  ],
  providers: []
})
export class FcvisualModule {}
