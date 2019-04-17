/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 系统模块的路由
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:32:29
 */
import { Routes } from '@angular/router';
import { SyslogComponent } from './components/syslog/syslog.component';
import { SysmenuComponent } from './components/sysmenu/sysmenu.component';
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component';
import { SysroleComponent } from './components/sysrole/sysrole.component';
import { SysuserComponent } from './components/sysuser/sysuser.component';

export const Routers: Routes = [
  {
    path: 'sysmessageDetail', // 消息详情
    component: SysmessagedetailComponent
  },
  {
    path: 'sysuserList', // 用户管理
    component: SysuserComponent
  },
  {
    path: 'sysmenuList', // 菜单管理
    component: SysmenuComponent
  },
  {
    path: 'sysroleList', // 权限管理
    component: SysroleComponent
  },
  {
    path: 'syslogList', // 日志管理
    component: SyslogComponent
  }
]
