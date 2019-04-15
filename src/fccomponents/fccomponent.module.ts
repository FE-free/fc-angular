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
