/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: fccomponent平台组件模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-14 11:01:07
 */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared';
import { FcimgviewComponent } from './fcimgview/fcimgview.component';
import { Fcg2radarComponent } from './fcg2radar/fcg2radar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FcimgviewComponent, // 组件-图片查看
    Fcg2radarComponent
  ],
  exports: [
    FcimgviewComponent,
    Fcg2radarComponent
  ]
})
export class FccomponentModule { }
