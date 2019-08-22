/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-22 15:07:26
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from 'ng2-ckeditor';
import { SharedModule } from 'src/shared';
import { DemockeeditorComponent } from './fcckeeditor/fcckeeditor.component';
import { Routers } from './fceditor.route';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FormsModule,
    CKEditorModule,
  ],
  declarations: [
    DemockeeditorComponent
  ],
  providers: []
})
export class FceditorModule { }
