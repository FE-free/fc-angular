/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-22 16:07:23
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { FcaggridComponent } from './fcaggrid/fcaggrid.component';
import { Routers } from './fctable.route';
import { AgGridModule } from "ag-grid-angular";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(Routers),
    AgGridModule.withComponents([])
  ],
  declarations: [
    FcaggridComponent
  ],
  providers: []
})
export class FctableModule {}
