/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: fccomponent平台组件模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-19 10:23:45
 */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared';
import { FcimgviewComponent } from './fcimgview/fcimgview.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FcimgviewComponent // 组件-图片查看
  ],
  exports: [
    FcimgviewComponent
  ]
})
export class FccomponentModule { }
