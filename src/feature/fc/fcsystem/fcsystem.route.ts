/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 系统模块的路由
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 14:15:53
 */
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const Routers: Routes = [
  {
    path: '', // 消息详情
    loadChildren: () => import('./components/sysmessage/sysmessage.module').then(res => res.SysmessageModule)
  },
  {
    path: 'sysuserList', // 用户管理
    loadChildren: () => import('./components/sysuser/sysuser.module').then(res => res.SysuserModule)
  },
  {
    path: 'sysmenuList', // 菜单管理
    loadChildren: () => import('./components/sysmenu/sysmenu.module').then(res => res.SysmenuModule)
  },
  {
    path: 'sysroleList', // 权限管理
    loadChildren: () => import('./components/sysrole/sysrole.module').then(res => res.SysroleModule)
  },
  {
    path: 'syslogList', // 日志管理
    loadChildren: () => import('./components/syslog/syslog.module').then(res => res.SyslogModule)
  }
]
