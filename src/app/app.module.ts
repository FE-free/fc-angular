import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import zh from '@angular/common/locales/zh'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouteReuseStrategy, RouterModule } from '@angular/router'
import { NgZorroAntdModule } from 'ng-zorro-antd'
import { CoreModule } from 'src/core/core.module'
import { UserService } from 'src/core/service/user.service'
import { AppComponent } from './app.component'
import { BuildingComponent } from './components/building/building.component'
import { ErrorComponent } from './components/error/error.component'
import { LayoutComponent } from './components/layout/layout.component'
import { SigninComponent } from './components/signin/signin.component'
import { LayoutService } from './service/layout.service'
import { FcRouteReuseStrategy } from './service/routereusestrategy.service'
import { SystemService } from './service/system.services'
import { AppRoutes } from './app.route'
import { ForgotComponent } from './components/forgot/forgot.component'
import { LockscreenComponent } from './components/lockscreen/lockscreen.component'
import { SignupComponent } from './components/signup/signup.component';
import { ShareService } from './service/share.service';
registerLocaleData(zh)
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    NgZorroAntdModule.forRoot()
  ],
  declarations: [
    AppComponent, // app入口
    LayoutComponent, // 组件-layout
    ErrorComponent, // 组件-错误
    SigninComponent, // 组件-登录
    BuildingComponent, // 组件-正在开发中
    ForgotComponent, // 组件-忘记密码
    LockscreenComponent, // 组件-锁屏
    SignupComponent // 组件-注册
  ],
  providers: [
    UserService, // 服务-用户
    ShareService,
    LayoutService, // 服务-layout
    { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy }, // 路由复用策略
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public systemService: SystemService) {}
}
