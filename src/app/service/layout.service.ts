import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { menus } from '_mock/menus';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  constructor(private Router: Router, private messageService: NzMessageService) {}
  /**
   * 获取菜单信息
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
        .navigate(['/' + 'budget' + '/' + menu.ROUTER], params)
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
        .navigate(['/' + 'budget' + '/' + menu.ROUTER], {
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
          // this.providers.msgService.endAntLoading();
        })
        .catch(error => {
          console.log(error)
          // this.providers.msgService.endAntLoading();
        })
    } else {
      //window.open(menu.MENUURL);
      // 开启加载条
      // this.providers.msgService.startAntLoading();
      //发出跳转报表iframe的事件
      // router.navigate(['/budget//bgreport'], {
      router
        .navigate(['/' + 'budget' + '/' + menu.ROUTER], {
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
          // this.providers.msgService.endAntLoading();
        })
        .catch(error => {
          console.log(error)
          // this.providers.msgService.endAntLoading();
          router.navigate(['/error'])
        })
    }
  }
}
