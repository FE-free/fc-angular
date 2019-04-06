import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from 'src/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LockscreenComponent } from './components/lockscreen/lockscreen.component';
import { SigninComponent } from './components/signin/signin.component';
import { FcRouterService } from './service/router.service';
import { SystemService } from './service/services.services';
import { UserService } from './service/user.service';
registerLocaleData(zh)
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorComponent,
    SigninComponent,
    ForgotComponent,
    LockscreenComponent
  ],
  providers: [
    UserService,
    { provide: RouteReuseStrategy, useClass: FcRouterService },
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
