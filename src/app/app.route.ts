import { Routes } from '@angular/router'
import { UserService } from 'src/core/service/user.service'
import { LayoutComponent } from './components/layout/layout.component'
import { SigninComponent } from './components/signin/signin.component'
import { ErrorComponent } from './components/error/error.component'
import { BuildingComponent } from './components/building/building.component'
export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [UserService],
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
    path: 'signin',
    component: SigninComponent
  }
  //   {
  //     path: 'forgot', //忘记密码
  //     component: ForgotComponent
  //   },
  //   {
  //     path: 'lockscreen', //锁屏
  //     component: LockscreenComponent
  //   }
]
