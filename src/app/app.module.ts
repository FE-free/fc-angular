import { HashLocationStrategy, LocationStrategy, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from 'src/core/core.module';
import { UserService } from 'src/core/service/user.service';
import { AppComponent } from './app.component';
import { BuildingComponent } from './components/building/building.component';
import { ErrorComponent } from './components/error/error.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SigninComponent } from './components/signin/signin.component';
import { LayoutService } from './service/layout.service';
import { FcRouteReuseStrategy } from './service/routereusestrategy.service';
import { SystemService } from './service/system.services';
import { AppRoutes } from './app.route';
registerLocaleData(zh)
@NgModule({
  imports: [
    BrowserModule,
    NgZorroAntdModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    CoreModule
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    ErrorComponent,
    SigninComponent,
    BuildingComponent
    // ForgotComponent,
    // LockscreenComponent
  ],
  providers: [
    UserService,
    LayoutService,
    { provide: RouteReuseStrategy, useClass: FcRouteReuseStrategy },
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
