/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-21 10:00:05
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fcchart.route';
import { FcchartbarComponent } from './fcchartbar/fcchartbar.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
  ],
  declarations: [
    FcchartbarComponent
  ],
  providers: []
})
export class FcchartModule {}
