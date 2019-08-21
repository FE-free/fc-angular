/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-21 17:57:09
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fceditor.route';
import { FcckeeditorComponent } from './fcckeeditor/fcckeeditor.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    CKEditorModule,
    FormsModule,
  ],
  declarations: [
    FcckeeditorComponent
  ],
  providers: []
})
export class FceditorModule { }
