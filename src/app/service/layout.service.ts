import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { menus } from '_mock/_menus';
import { ShareService } from './share.service';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // 项目名称
  pid: any
  constructor(
    private Router: Router,
    private messageService: NzMessageService,
    private shareService: ShareService
  ) {
    this.shareService.switchProjectSubject.subscribe(data => {
      if (data) {
        this.pid = data.param.PID.toLocaleLowerCase()
      }
    })
  }
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
