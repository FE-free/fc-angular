import { Routes } from '@angular/router'
import { LayoutComponent } from './components/layout/layout.component'
import { SigninComponent } from './components/signin/signin.component'
import { ErrorComponent } from './components/error/error.component'
import { BuildingComponent } from './components/building/building.component'
import { ForgotComponent } from './components/forgot/forgot.component'
import { LockscreenComponent } from './components/lockscreen/lockscreen.component'
import { SignupComponent } from './components/signup/signup.component'
import { UserService } from 'src/fccore/service/user.service';
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
        path: 'brouteuilding', // 正在开发中
        component: BuildingComponent
      },
      {
        path: 'fc', // 快速开发平台模块
        loadChildren: '../feature/fc/fc.module#FcModule'
      },
      {
        path: 'budget', // 项目的业务模块
        loadChildren: '../feature/budget/budget.module#BudgetModule'
      }
    ]
  },
  {
    path: 'signin', // 登录
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
