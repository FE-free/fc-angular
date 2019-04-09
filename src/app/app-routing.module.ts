import { Routes } from '@angular/router';
import { UserService } from 'src/core/service/user.service';
import { LayoutComponent } from './components/layout/layout.component';
import { SigninComponent } from './components/signin/signin.component';
import { ErrorComponent } from './components/error/error.component';
import { BuildingComponent } from './components/building/building.component';
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
        path: 'building', // 正在开发中
        component: BuildingComponent
      },
      {
        path: 'budget', // 例子
        loadChildren: '../feature/budget/budget.module#BudgetModule'
      }
    ]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
//   {
//     path: 'forgot', //忘记密码
//     component: ForgotComponent
//   },
//   {
//     path: 'lockscreen', //锁屏
//     component: LockscreenComponent
//   }
]
