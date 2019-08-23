/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-23 16:08:27
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { Routers } from './fctable.route';
import { HttpClientModule } from '@angular/common/http';
import { FctablebasicComponent } from './fctablebasic/fctablebasic.component';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(Routers),
  ],
  declarations: [
    FctablebasicComponent
  ],
  providers: []
})
export class FctableModule {}
