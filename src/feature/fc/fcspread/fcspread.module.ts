/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-21 14:40:41
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fcspread.route';
import { FcspreadbasicComponent } from './fcspreadbasic/fcspreadbasic.component';
import { SpreadSheetsModule } from 'demo/assets/plugin/spread/gc.spread.sheets.angular';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    SpreadSheetsModule
  ],
  declarations: [
    FcspreadbasicComponent
  ],
  providers: []
})
export class FcspreadModule { }
