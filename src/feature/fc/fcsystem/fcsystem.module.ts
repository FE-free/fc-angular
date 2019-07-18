/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 系统模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-11 17:19:17
 */
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared';
import { SyslogComponent } from './components/syslog/syslog.component';
import { SysmenuComponent } from './components/sysmenu/sysmenu.component';
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component';
import { SysroleComponent } from './components/sysrole/sysrole.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';
import { Routers } from './fcsystem.route';
import { Home2Component } from './components/home2/home2.component';
import { Home1Component } from './components/home1/home1.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(Routers)
  ],
  declarations: [
    SysmessagedetailComponent, // 消息详情
    SysuserComponent, // 用户管理
    SysmenuComponent, // 菜单管理
    SysroleComponent, // 权限管理
    SyslogComponent, // 日志管理
    Home1Component, // 首页1
    Home2Component // 首页2
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule {}
