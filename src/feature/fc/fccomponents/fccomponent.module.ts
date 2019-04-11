import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  exports: [
   ImgviewComponent, // 组件-图片查看
  ],
  providers: []
})
export class FccomponentModule {}
