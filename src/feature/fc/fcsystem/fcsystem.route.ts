import { Routes } from '@angular/router'
import { SysmessagedetailComponent } from './components/sysmessage/sysmessagedetail.component'
import { SysuserComponent } from './components/sysuser/sysuser.component'
import { SysmenuComponent } from './components/sysmenu/sysmenu.component'
import { SysroleComponent } from './components/sysrole/sysrole.component'
import { SyslogComponent } from './components/syslog/syslog.component'
import { HomeComponent } from './components/home/home.component';

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
