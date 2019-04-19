/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 系统模块
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 10:21:10
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
    SyslogComponent // 日志管理
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // 自定义组件
})
export class FcsystemModule {}
