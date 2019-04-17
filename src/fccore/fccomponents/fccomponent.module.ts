/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: fccomponent平台组件模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 10:46:59
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FcimgviewComponent } from './fcimgview/fcimgview.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations:[
    FcimgviewComponent // 组件-图片查看
  ],
  exports:[
    FcimgviewComponent
  ]
})
export class FccomponentModule {}
