/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 系统模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:36:54
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FccomponentModule } from 'src/fccomponents';
import { SharedModule } from 'src/shared';
import { SysuserBusiness } from './business/sysuser.business';
import { SyslogComponent } from './components/syslog/syslog.component';
import { SysmenuComponent } from './components/sysmenu/sysmenu.component';
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component';
import { SysroleComponent } from './components/sysrole/sysrole.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';
import { Routers } from './fcsystem.route';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers),
    FccomponentModule,
    HttpClientModule
  ],
  declarations: [
    SysmessagedetailComponent, // 消息详情
    SysuserComponent, // 用户管理
    SysmenuComponent, // 菜单管理
    SysroleComponent, // 权限管理
    SyslogComponent // 日志管理
  ],
  providers: [SysuserBusiness],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule { }
