import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: layout业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-24 11:09:21
 */
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment.dev';
import { LogService } from 'src/fccore/service/log.service';
import { menus } from '_mock/_menus';
let LayoutService = class LayoutService {
    constructor(messageService) {
        this.messageService = messageService;
        // 项目名称
        this.pid = environment.pid.toLocaleLowerCase();
    }
    /**
     * @description: 获取菜单信息
     * @param {type} []
     * @return:  []
     */
    getMenus() {
        return menus;
    }
    /**
     * 跳转路由
     * @param menu
     */
    navMenu(router, menu, refresh) {
        if (refresh === undefined) {
            refresh = 'Y';
        }
        if (menu.MENUTYPE === 'APP') {
            // 开启加载条
            // let loadId = this.messageService.loading('loading...').messageId;
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
            };
            LogService.debug(params);
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], params)
                .then(() => {
                // this.providers.msgService.endAntLoading();
            })
                .catch(error => {
                console.log(error);
                // this.messageService.remove(loadId);
                router.navigate(['/error']);
            });
        }
        else if (menu.MENUTYPE === 'OUTURL') {
            window.open(menu.ROUTER, '_blank');
        }
        else if (menu.MENUTYPE === 'INURL') {
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
                console.log(error);
            });
        }
        else {
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
                console.log(error);
                router.navigate(['/error']);
            });
        }
    }
};
LayoutService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [NzMessageService])
], LayoutService);
export { LayoutService };
//# sourceMappingURL=layout.service.js.map