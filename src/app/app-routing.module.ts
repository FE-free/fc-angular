import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ErrorComponent } from './components/error/error.component';
import { SigninComponent } from './components/signin/signin.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { UserService } from 'src/core/service/user.service';

// const routes: Routes = [];
export const AppRoutes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      canActivate: [UserService],
      children: [
          {
              path: 'error',//错误
              component: ErrorComponent
          },
          {
              path: 'budget',//例子
              loadChildren: '../feature/budget/budget.module#BudgetModule'
          }
          // {
          //     path: 'system',//平台功能
          //     loadChildren: '../feature/fcsystem/index.module#SystemModule'
          // },
          // {
          //     path: 'backing',//基础服务
          //     loadChildren: '../feature/fcbacking/index.module#BackingModule'
          // }
      ]
  }
  , {
      path: 'signin',
      component: SigninComponent
  }, {
      path: 'forgot',//忘记密码
      component: ForgotComponent,
  }, {
      path: 'lockscreen',//锁屏
      component: LockscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
