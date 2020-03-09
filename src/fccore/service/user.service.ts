import { CommonService } from 'src/fccore/common/common';
import { CacheService } from 'src/fccore/common/cache';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
// @Injectable() 装饰器会接受该服务的元数据对象
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  constructor(private router: Router) {
    this.router = router;
  }
  /**
   * 路由检查
   * @param route 路由
   * @param state 状态
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    /** @type {?} */
    const user = this.getUserInfo();
    if (user && user.USERCODE !== undefined) {
      return true;
    } else {
      this.router.navigate(['/signin']);
      return false;
    }
  }
  /**
   * @description 系统登录
   * @param userId 用户编码
   * @param password 用户密码
   */
  login(userId: string, password: string, loginDate: number): Observable<any> {
    /** @type {?} */
    const param = {
      AID: 'SYSUSER',
      LOGINDATE: loginDate
    };
    // 登录信息mock数据
    const info = JSON.stringify({
      PASSWORD: CommonService.enCode64('admin'), // admin
      USERID: CommonService.enCode64('admin') // admin
    });
    CommonService.addCookie('loginInfo', info, 0);
    const loginInfo =  CommonService.getCookie('loginInfo');
    console.log(loginInfo, '=====loginInfo');
    const validateData = JSON.parse(loginInfo);
    /** @type {?} */
    const data = {
      PASSWORD: CommonService.enCode64(password),
      USERID: CommonService.enCode64(userId)
    }
      ;
    if (validateData.USERID === data.USERID && validateData.PASSWORD === data.PASSWORD) {
      return of({
        code: '0',
        message: '登录成功'
      });
    } else {
      of({
        code: '-1',
        message: '用户名或者密码错误'
      });
    }
    return;
    // return this.daoService.
    // postFromApi(CommonService.getUrlBy
    // (this.moduleId, this.serviceId, InterfaceMethod.LOGIN), data, param);
  }
  /**
   * @description 存储用户数据
   * @param data 登陆后返回数据
   */
  // tslint:disable-next-line:no-any
  storeUserInfo(data: any): void {
    CacheService.setS('userinfo', data.DATA);
    CacheService.setS('token', data.TOKEN);
  }
  /**
   * @description 获取登录用户数据内容
   */
  // tslint:disable-next-line:no-any
  getUserInfo(): any {
    return CacheService.getS('userinfo');
  }
  /**
   * @description 用户注销
   */
  // tslint:disable-next-line:no-any
  logout(userInfo?: any): Observable<any> {
    if (userInfo) {
      /** @type {?} */
      const param = {
        AID: 'SYSUSER',
        USERID: userInfo.USERCODE
      };
      // 请求注销
      return;
      // return this.daoService.getFromAuth(CommonService.getUrlBy(this.moduleId, 
      // this.serviceId, InterfaceMethod.LOGOUT), param);
    }
  }
  /**
   * 清除用户信息
   */
  clearUserinfo(): void {
    CacheService.clearSByKey('userinfo');
    CacheService.clearSByKey('token');
  }
}
