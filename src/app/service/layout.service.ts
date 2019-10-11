/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: layout业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-24 11:09:21
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { menus } from '_mock/_menus';
import { ShareService } from '../share.service';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // 项目名称
  pid = environment.pid.toLocaleLowerCase()
  constructor(
    private Router: Router,
    private messageService: NzMessageService,
    private shareService: ShareService
  ) {
  }
  /**
   * @description: 获取菜单信息
   * @param {type} []
   * @return:  []
   */
  getMenus() {
    return menus
  }
  /**
   * 跳转路由
   * @param menu
   */
  navMenu(router: Router, menu: any, refresh?: string) {
    if (refresh === undefined) {
      refresh = 'Y'
    }
    if (menu.MENUTYPE === 'APP') {
      // 开启加载条
      // this.messageService.startAntLoading();
      let params = {
        queryParams: {
          refresh: refresh,
          ID: menu.ID,
          MENUID: menu.MENUID,
          MENUNAME: menu.MENUNAME,
          MENUICON: menu.MENUICON,
          MENUTYPE: menu.MENUTYPE,
          ROUTER: menu.ROUTER,
          PID: menu.PID,
          APPID: menu.APPID,
          PARAM: menu.param
        }
      }
      // LogService.debug(params);
      router
        .navigate(['/' + this.pid + '/' + menu.ROUTER], params)
        .then(() => {
          // this.providers.msgService.endAntLoading();
        })
        .catch(error => {
          console.log(error)
          // this.providers.msgService.endAntLoading();
          router.navigate(['/error'])
        })
    } else if (menu.MENUTYPE === 'INURL') {
      // 开启加载条
      // this.providers.msgService.startAntLoading();
      router
        .navigate(['/' + this.pid + '/' + menu.ROUTER], {
          queryParams: {
            refresh: refresh,
            ID: menu.ID,
            MENUID: menu.MENUID,
            MENUNAME: menu.MENUNAME,
            MENUICON: menu.MENUICON,
            MENUTYPE: menu.MENUTYPE,
            ROUTER: menu.ROUTER,
            PID: menu.PID,
            APPID: menu.APPID,
            PARAM: menu.param
          }
        })
        .then(() => {
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      router
        .navigate(['/' + this.pid + '/' + menu.ROUTER], {
          queryParams: {
            refresh: refresh,
            ID: menu.ID,
            MENUID: menu.MENUID,
            MENUNAME: menu.MENUNAME,
            MENUTYPE: menu.MENUTYPE,
            ROUTER: menu.ROUTER,
            PID: menu.PID,
            APPID: menu.APPID,
            PARAM: menu.param,
            MENUURL: menu.MENUURL
          }
        })
        .then(() => {
        })
        .catch(error => {
          console.log(error)
          router.navigate(['/error'])
        })
    }
  }
}
