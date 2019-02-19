import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { ErrorComponent } from './components/error/error.component';

// const routes: Routes = [];
export const AppRoutes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      // canActivate: [UserService],
      children: [
          {
              path: 'error',//错误
              component: ErrorComponent
          },
          // {
          //     path: '',//例子
          //     loadChildren: '../feature/fcsamples2/index.module#FcsamplesModule'
          // },
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
  // , {
  //     path: 'signin',
  //     component: SigninComponent
  // }, {
  //     path: 'forgot',//忘记密码
  //     component: ForgotComponent,
  // }, {
  //     path: 'lockscreen',//锁屏
  //     component: LockscreenComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
