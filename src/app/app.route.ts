/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 根模块的路由，本项目的路由使用懒加载模式，参考网址：https://angular.cn/guide/lazy-loading-ngmodules
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-11 17:44:06
 */
import { Routes } from '@angular/router';
import { UserService } from 'src/fccore/service/user.service';
import { BuildingComponent } from './components/building/building.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

const SignIn: string = 'signin';
export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [UserService], // 路由守卫
    children: [
      {
        path: 'error', // 错误
        component: ErrorComponent
      },
      {
        path: 'fc', // 项目的业务模块
        loadChildren: '../feature/fc/fc.module#FcModule'
      }
    ]
  },
  {
    path: SignIn, // 登录
    component: SigninComponent
  },
  {
    path: 'forgot', // 忘记密码
    component: ForgotComponent
  },
  {
    path: 'lockscreen', // 锁屏
    component: LockscreenComponent
  },
  {
    path: 'signup', // 注册
    component: SignupComponent
  }
]
