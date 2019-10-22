/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 用户服务、路由守卫
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:44:14
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// @Injectable() 装饰器会接受该服务的元数据对象
@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  private router
  constructor(router: Router) {
    this.router = router
  }
  /**
   *
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true
  }
  /**
   * @description 系统登录
   * @param userId 用户编码
   * @param password 用户密码
   */
  login(userId: string, password: string): Observable<any> {
    return
  }
}
