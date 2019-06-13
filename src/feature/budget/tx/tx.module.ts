/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算体系模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-19 17:49:57
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { BgitemBusiness } from './business/bgitem.business';
import { BgitemComponent } from './components/bgitem/bgitem.component';
import { Routers } from './tx.route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [
    BgitemComponent, // 组件-预算项目
  ],
  providers: [
    BgitemBusiness // 业务-预算项目
  ]
})
export class TxModule {}
