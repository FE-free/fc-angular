import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ImgviewComponent } from './fcimgview/imgview.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    SpreadSheetsModule
  ],
  declarations:[
    ImgviewComponent // 组件-图片查看
  ],
  exports: [
  //  ImgviewComponent, // 组件-图片查看
  ],
  providers: []
})
export class FccomponentModule {}
