(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../feature/fc/fc.module": [
		"./src/feature/fc/fc.module.ts",
		"default~fcdemo-fcdemo-module~feature-fc-fc-module",
		"feature-fc-fc-module"
	],
	"./fcdemo/fcdemo.module": [
		"./src/feature/fc/fcdemo/fcdemo.module.ts",
		"default~fcdemo-fcdemo-module~feature-fc-fc-module",
		"fcdemo-fcdemo-module"
	],
	"./fcsystem/fcsystem.module": [
		"./src/feature/fc/fcsystem/fcsystem.module.ts",
		"fcsystem-fcsystem-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./_mock/_menus.ts":
/*!*************************!*\
  !*** ./_mock/_menus.ts ***!
  \*************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = {
    P_MENUS: [
        {
            ID: '3ae5c74930da4b1e877efabee3af0005',
            PID: 'FC',
            MENUID: 'FC',
            MENUNAME: '快速开发平台',
            ENABLE: 'Y',
            WXMENU: 'N',
            MENUTYPE: 'MENU',
            HASCHILD: 'Y',
            MENUICON: 'icon iconfont icon-ppbs',
            SORT: 1000,
            ROUTER: '/fc',
            P_CHILDMENUS: [
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'BUDGET',
                    MENUID: 'BGTX',
                    MENUNAME: '主导航',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-yibiaopan',
                    PARENT: 'BUDGET',
                    SORT: 1100,
                    ROUTER: '/budget',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCHOME2',
                            MENUNAME: '分析页',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1101,
                            ROUTER: '/home1'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCHOME1',
                            MENUNAME: '监控页',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1102,
                            ROUTER: '/home2'
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCANTDESIGN',
                    MENUNAME: 'Ant Design',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-antdesign',
                    PARENT: 'BUDGET',
                    SORT: 1150,
                    ROUTER: '/antdesign',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCBUTTON',
                            MENUNAME: '按钮',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/building'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCTABLE',
                            MENUNAME: '表格',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/building'
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCCHART',
                    MENUNAME: '图表',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-tubiao',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/building',
                },
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'FCSPREAD',
                    MENUNAME: 'spread报表',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-shujubiaoge',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/building'
                },
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'BGIFRAME',
                    MENUNAME: 'iframe',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-iframe',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/building'
                },
                {
                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                    PID: 'FC',
                    MENUID: 'FCAGGRID',
                    MENUNAME: 'ag-grid表格',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'APP',
                    APPID: 'SYSMENU',
                    HASCHILD: 'N',
                    MENUICON: 'fc-icon-datatable',
                    PARENT: 'SYSTEM',
                    SORT: 1152,
                    ROUTER: '/building'
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'FCPAGES',
                    MENUNAME: '模版页面',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-pages',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fc',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCTEMPLATELIST',
                            MENUNAME: '列表页面',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/building'
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'BGBUSSINESS',
                    MENUNAME: '基础业务',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-Workorder',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/fc',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCLISTINFO',
                            MENUNAME: '查询',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/fclistinfoList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCCREATE',
                            MENUNAME: '新增',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/fccreateList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCUPDATE',
                            MENUNAME: '修改',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/fcupdateList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'FCREMOVE',
                            MENUNAME: '删除',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/fcremoveList'
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'FC',
                    MENUID: 'SYSTEM',
                    MENUNAME: '系统管理',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-peizhi',
                    PARENT: 'FC',
                    SORT: 1150,
                    ROUTER: '/system',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'FC',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '基础设置',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSTEMBASIC',
                            HASCHILD: 'Y',
                            PARENT: 'SYSTEM',
                            MENUICON: 'fc-icon-jichushezhi',
                            SORT: 1152,
                            ROUTER: '/sysmenuList',
                            P_CHILDMENUS: [
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSROLE',
                                    MENUNAME: '权限管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSROLE',
                                    MENUICON: 'fc-icon-peizhi',
                                    HASCHILD: 'N',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/sysroleList'
                                },
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSMENU',
                                    MENUNAME: '用户管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSMENU',
                                    HASCHILD: 'N',
                                    MENUICON: 'fc-icon-peizhi',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/sysmenuList'
                                },
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSMENU',
                                    MENUNAME: '菜单管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSMENU',
                                    HASCHILD: 'N',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/sysmenuList'
                                },
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'FC',
                                    MENUID: 'SYSLOG',
                                    MENUNAME: '日志管理',
                                    ENABLE: 'Y',
                                    WXMENU: 'N',
                                    MENUTYPE: 'APP',
                                    APPID: 'SYSMENU',
                                    HASCHILD: 'N',
                                    PARENT: 'SYSTEM',
                                    SORT: 1152,
                                    ROUTER: '/syslogList'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 错误\n * @email: 3300536651@qq.com\n * @Date: 2019-02-18 10:59:15\n * @LastEditTime: 2019-04-17 09:55:04\n -->\nerror页面"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/forgot/forgot.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/forgot/forgot.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 忘记密码\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 09:55:38\n -->\n忘记密码"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layout/layout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 整体布局，包括顶部工具栏、左侧导航、侧边栏、选项卡导航、内容区\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-07-15 14:30:34\n -->\n<nz-layout class=\"layout\">\n  <!-- 顶部工具栏 -->\n  <nz-header>\n    <div class=\"logo fc-header-left\">\n      <img src=\"assets/image/logo.png\" [ngStyle]=\"{'display': menuWidth===64 ?'none':'inline'}\" alt=\"logo\">\n      <img src=\"assets/image/small-logo.png\" [ngStyle]=\"{'display': menuWidth===64 ?'inline':'none'}\" alt=\"logo\">\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-toggle\"\n          [ngClass]=\"{'fc-icon-menufold-left':menuWidth===64,'fc-icon-menufold-right':menuWidth!==64}\" (click)=\"toggleLayout()\"></i>\n      </div>\n      <div class=\"fc-header-icon-wrap\">\n        <a href=\"https://github.com/luohong123/fc-angular\" target=\"_blank\"\n          title=\"icon iconfont fc-icon-github fc-header-github\"><i\n            class=\"icon iconfont fc-icon-github fc-header-github\"></i></a>\n      </div>\n    </div>\n    <div class=\"fc-header-right\">\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-icon fc-icon-information\" (click)=\"toggleSidebar()\" title=\"消息\"></i>\n      </div>\n      <div class=\"fc-header-icon-wrap\">\n        <i class=\"icon iconfont fc-header-icon fc-icon-peizhi\" title=\"设置\"></i>\n      </div>\n      <div class=\"fc-header-icon-wrap fc-header-dropdown\">\n        <a nz-dropdown [nzDropdownMenu]=\"headerMenu\" [nzPlacement]=\"'bottomRight'\" [nzOverlayStyle]=\"{top:'18px' }\">\n          <nz-avatar class=\"avatar\" [nzSize]=\"32\" nzIcon=\"user\" [nzSrc]=\"avatar\"></nz-avatar>\n          <a class=\"text\">{{companyName}}</a>\n        </a>\n        <nz-dropdown-menu #headerMenu=\"nzDropdownMenu\">\n          <ul nz-menu>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-peizhi\"></i> 设置\n            </li>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-personnel\"></i> 个人中心\n            </li>\n            <li nz-menu-item> <i class=\"icon iconfont fc-header-icon fc-icon-password\"></i> 修改密码\n            </li>\n            <li nz-menu-item (click)=\"siginout()\"> <i class=\" icon iconfont fc-header-icon fc-icon-tuichu\" ></i> 退出\n            </li>\n          </ul>\n        </nz-dropdown-menu>\n      </div>\n    </div>\n  </nz-header>\n  <nz-layout style=\"width: 100%;\">\n    <!-- 菜单导航 -->\n    <nz-sider [(nzWidth)]=\"menuWidth\" Ø class=\"fc-sidebar-menu\">\n      <ul nz-menu [nzMode]=\"'inline'\" style=\"height: calc(100% - 40px);overflow: auto;\"\n        [nzInlineCollapsed]=\"menuIsCollapsed\">\n        <ng-container *ngFor=\"let menu of _menus\">\n          <!-- 一级菜单，没有下级 -->\n          <li nz-menu-item *ngIf=\"menu.HASCHILD==='N'\" (click)=\"selectedMenu(menu)\">\n            <span title>\n              <i class=\"icon iconfont menu-icon\" [ngClass]=\"menu.MENUICON\"></i>\n              <span class=\"first-level-title\">{{menu.MENUNAME}}</span>\n            </span>\n          </li>\n          <!-- 一级菜单，有下级 -->\n          <li nz-submenu [nzOpen]=\"true\"\n            *ngIf=\"menu.HASCHILD==='Y' && menu.P_CHILDMENUS && menu.P_CHILDMENUS.length!==0\">\n            <span title>\n              <i class=\"icon iconfont menu-icon\" [ngClass]=\"menu.MENUICON\"></i>\n              <span class=\"first-level-title\">{{menu.MENUNAME}}</span></span>\n            <ul>\n              <ng-container *ngFor=\"let childMenu of menu.P_CHILDMENUS\">\n                <!-- 二级菜单，没有下级 -->\n                <li nz-menu-item *ngIf=\"childMenu.HASCHILD==='N'\" (click)=\"selectedMenu(childMenu);\">\n                  <span title>\n                    <span>{{childMenu.MENUNAME}}</span>\n                  </span>\n                </li>\n                <!-- 二级菜单，有下级 -->\n                <li nz-submenu\n                  *ngIf=\"childMenu.HASCHILD==='Y' && childMenu.P_CHILDMENUS && childMenu.P_CHILDMENUS.length!==0\">\n                  <span title>\n                    <i class=\"icon iconfont menu-icon\" [ngClass]=\"childMenu.MENUICON\"></i>\n                    <span>{{childMenu.MENUNAME}}</span>\n                  </span>\n                  <ul>\n                    <ng-container *ngFor=\"let grandSonMenu of childMenu.P_CHILDMENUS\">\n                      <!-- 三级级菜单，没有下级 -->\n                      <li nz-menu-item *ngIf=\"grandSonMenu.HASCHILD==='N'\" (click)=\"selectedMenu(grandSonMenu);\">\n                        <span title>\n                          {{grandSonMenu.MENUNAME}}</span>\n                      </li>\n                      <!-- 三级菜单，有下级 -->\n                      <li nz-submenu\n                        *ngIf=\"grandSonMenu.HASCHILD==='Y' && grandSonMenu.P_CHILDMENUS && grandSonMenu.P_CHILDMENUS.length!==0\">\n                        <span title>\n                          {{grandSonMenu.MENUNAME}}</span>\n                        <ul>\n                          <li nz-menu-item *ngFor=\"let lastChidMenu of grandSonMenu.P_CHILDMENUS\"\n                            (click)=\"selectedMenu(lastChidMenu)\">\n                            <span title>\n                              {{lastChidMenu.MENUNAME}}</span>\n                          </li>\n                        </ul>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </li>\n              </ng-container>\n            </ul>\n          </li>\n        </ng-container>\n      </ul>\n      <!-- 切换布局控制按钮 -->\n      <div class=\"layout-toggle\">\n        <i class=\"icon iconfont fc-icon-arrowleft\" [ngClass]=\"{'arrowright':menuWidth===64}\" (click)=\"toggleLayout()\">\n        </i>\n      </div>\n    </nz-sider>\n    <nz-layout>\n      <!-- 选项卡导航 -->\n      <nz-tabset class=\"fc-tabnav\" [nzType]=\"'line'\" [nzSize]=\"'small'\" [(nzSelectedIndex)]=\"fcSelectedIndex\">\n        <nz-tab *ngFor=\"let tab of fcTabs;index as i\" (nzClick)=\"selectedTabMenu(tab)\" [nzTitle]=\"titleTemplate\">\n          <ng-template #titleTemplate>\n            <div [ngClass]=\"{'tab-home':i===0}\">\n              <i *ngIf=\"tab.icon!==''\" class=\"icon iconfont\" [ngClass]=\"tab.icon\"></i>\n              {{ tab.name }}<i *ngIf=\"i>0\" nz-icon type=\"close\" class=\"ant-tabs-close-x\" (click)=\"closeTabNav(tab)\"></i>\n            </div>\n          </ng-template>\n        </nz-tab>\n      </nz-tabset>\n      <!-- 内容区 -->\n      <nz-content class=\"fc-main-wrap\">\n        <div class=\"fc-main\">\n          <router-outlet [ngStyle]=\"{'height':'100%'}\"></router-outlet>\n        </div>\n      </nz-content>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>\n<!-- 消息侧边栏 -->\n<div class=\"navside\">\n  <nz-drawer [nzWidth]=\"300\" [nzMaskStyle]=\"{'height':'auto'}\" nzWrapClassName=\"navside-drawer\" [nzClosable]=\"false\"\n    [nzVisible]=\"navsideVisible\" nzPlacement=\"right\" nzTitle=\"\" (nzOnClose)=\"closeNavSide()\" #navside>\n    <nz-tabset>\n      <nz-tab [nzTitle]=\"titleTemplate\">\n        <ng-template #titleTemplate>未读消息</ng-template>\n        <div>\n          content1\n        </div>\n      </nz-tab>\n      <nz-tab [nzTitle]=\"titleTemplate\">\n        <ng-template #titleTemplate>已读消息</ng-template>\n        content2\n      </nz-tab>\n    </nz-tabset>\n  </nz-drawer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/lockscreen/lockscreen.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/lockscreen/lockscreen.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 锁屏页面\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 10:09:46\n -->\n\n锁屏"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signin/signin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 登录\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-02-18 10:59:15\r\n * @LastEditTime: 2019-07-11 18:04:38\r\n -->\r\n<div class=\"login-in\">\r\n  <div class=\"login-bg\">\r\n    <div class=\"login-content clearfix\">\r\n      <div class=\"login-left\">\r\n        <span class=\"project-name\"><img src=\"assets/image/logo.png\" height=\"90\" alt=\"logo\"></span>\r\n        <!-- <img class=\"map-img\" src=\"../../../assets/image/login_pic.png\"> -->\r\n        <!-- <img class=\"left-img\" src=\"../../../assets/image/login_left.png\"> -->\r\n      </div>\r\n      <div class=\"login-right\">\r\n        <div class=\"login-right-content\">\r\n          <h2 class=\"login-h2\">\r\n            欢迎登录\r\n          </h2>\r\n          <div class=\"sigin-error\">\r\n            <div class=\"sigin-error-in\" *ngIf=\"hasError\">\r\n              <i class=\"icon iconfont icon-error\"></i>\r\n              <span>{{msg}}</span>\r\n            </div>\r\n          </div>\r\n          <form>\r\n            <div class=\"user-box\">\r\n              <nz-input-group [nzSuffix]=\"userIdSuffix\" [nzPrefix]=\"userIdPrefix\">\r\n                <input type=\"text\" nz-input placeholder=\"请输入用户名admin\" [(ngModel)]=\"userId\" name=\"userId\" />\r\n              </nz-input-group>\r\n              <ng-template #userIdPrefix><i class=\"icon iconfont fc-icon-personnel\"></i></ng-template>\r\n              <ng-template #userIdSuffix><i nz-icon type=\"close-circle\" (click)=\"userId =''\" *ngIf=\"userId\"></i>\r\n              </ng-template>\r\n\r\n            </div>\r\n            <div class=\"user-box\">\r\n              <nz-input-group [nzSuffix]=\"pwdSuffix\" [nzPrefix]=\"pwdPrefix\">\r\n                <input type=\"password\" nz-input placeholder=\"请输入密码admin\" [(ngModel)]=\"password\" name=\"password\" />\r\n              </nz-input-group>\r\n              <ng-template #pwdPrefix><i class=\"icon iconfont fc-icon-password\"></i></ng-template>\r\n              <ng-template #pwdSuffix><i nz-icon type=\"close-circle\" (click)=\"password = ''\" *ngIf=\"password\"></i>\r\n              </ng-template>\r\n            </div>\r\n            <div class=\"user-box login-btn\">\r\n              <button nz-button nzType=\"primary\" (click)=\"login()\" [nzBlock]=\"true\">登录</button>\r\n            </div>\r\n            <div class=\"google-download\">\r\n              <p>本系统仅支持\r\n                <a href=\"../assets/browser/chromedev_x64-v71.0.3554.0.exe\">谷歌</a>和<a\r\n                  href=\"../assets/browser/360cse_9.5.0.138.exe\">360急速</a>浏览器</p>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 注册\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-04-17 10:10:40\r\n -->\r\n注册\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: app入口
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:44:05
 * @LastEditTime: 2019-04-17 10:16:54
 */

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>"
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var src_fccore_fccore_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/fccore/fccore.module */ "./src/fccore/fccore.module.ts");
/* harmony import */ var src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/fccore/service/user.service */ "./src/fccore/service/user.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.route */ "./src/app/app.route.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/lockscreen/lockscreen.component */ "./src/app/components/lockscreen/lockscreen.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/routereusestrategy.service */ "./src/app/service/routereusestrategy.service.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./share.service */ "./src/app/share.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 根模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-15 13:04:09
 */






















Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_13__["AppRoutes"]),
                src_fccore_fccore_module__WEBPACK_IMPORTED_MODULE_10__["FccoreModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_16__["LayoutComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
                _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__["ForgotComponent"],
                _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_17__["LockscreenComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"] // 组件-注册
            ],
            providers: [
                src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _share_service__WEBPACK_IMPORTED_MODULE_22__["ShareService"],
                _service_layout_service__WEBPACK_IMPORTED_MODULE_20__["LayoutService"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_21__["FcRouteReuseStrategy"] },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/*!******************************!*\
  !*** ./src/app/app.route.ts ***!
  \******************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/fccore/service/user.service */ "./src/fccore/service/user.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/app/components/forgot/forgot.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/lockscreen/lockscreen.component */ "./src/app/components/lockscreen/lockscreen.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");







var SignIn = 'signin';
var AppRoutes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        canActivate: [src_fccore_service_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]],
        children: [
            {
                path: 'error',
                component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"]
            },
            {
                path: 'fc',
                loadChildren: '../feature/fc/fc.module#FcModule'
            }
        ]
    },
    {
        path: SignIn,
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"]
    },
    {
        path: 'forgot',
        component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_2__["ForgotComponent"]
    },
    {
        path: 'lockscreen',
        component: _components_lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__["LockscreenComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    }
];


/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 错误
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:15
 */


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html"),
            styles: ["\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/forgot/forgot.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/forgot/forgot.component.ts ***!
  \*******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 忘记密码
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:51
 */


var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(router) {
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'forgot',
            template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/forgot/forgot.component.html"),
            styles: ["\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var src_app_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/fccore/service/common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 整体布局包括顶部工具栏、左侧菜单、侧边栏、选项卡导航主体内容区
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-15 14:26:30
 */






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, activatedRoute, mainService, shareService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        this.shareService = shareService;
        // 路由打开记录
        this.selectMenu = {};
        // 当前所有菜单
        this._menus = [];
        // 默认选中的索引
        this.fcSelectedIndex = 0;
        // 选项卡
        this.fcTabs = [];
        // 单位名称
        this.companyName = 'admin';
        // 菜单是否收起
        this.menuIsCollapsed = false;
        // 消息侧边栏
        this.navsideVisible = false;
        // 菜单导航的宽度
        this.menuWidth = 200;
        // 头像
        this.avatar = 'assets/image/avatar.jpeg';
        // 项目名
        this.projectName = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].projectName;
        this.fcTabs = [];
        // 点击左侧导航
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].subscribe('selectedMenu', function (event) {
            if (event) {
                _this.selectMenu_1 = event.param;
                var tabOne = _this.fcTabs.filter(function (tab) { return tab.content.MENUID === _this.selectMenu_1.MENUID; });
                if (tabOne.length > 0) {
                    _this.fcSelectedIndex = tabOne[0].index;
                    _this.selectedTabMenu(tabOne[0]);
                }
                else {
                    var tab = {
                        id: _this.selectMenu_1.ID,
                        index: _this.fcTabs.length,
                        enabled: false,
                        name: _this.selectMenu_1.MENUNAME,
                        close: true,
                        icon: _this.selectMenu_1.MENUICON,
                        content: _this.selectMenu_1,
                        refresh: 'Y'
                    };
                    if (_this.fcTabs.length === 0) {
                        tab.enabled = true;
                        tab.close = false;
                    }
                    _this.fcTabs.push(tab);
                    _this.fcSelectedIndex = tab.index;
                    _this.selectedTabMenu(tab);
                }
            }
        });
    }
    /**
     * 发起事件
     */
    LayoutComponent.prototype.select = function () {
        this.shareService.switchProjectSubject.next({
            eventName: 'changeDate',
            param: {} // 参数
        });
    };
    /**
     * 显示时加载
     */
    LayoutComponent.prototype.ngOnInit = function () {
        // 所有的菜单
        this.allMenus = this.mainService.getMenus().P_MENUS;
        this._menus = this.allMenus[0].P_CHILDMENUS;
        // 默认选择某个菜单
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('selectedMenu', {
            ID: '0',
            MENUID: 'HOME',
            ROUTER: 'home',
            PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].pid,
            MENUTYPE: 'INURL',
            MENUNAME: '首页',
            MENUICON: 'fc-icon-shouye'
        });
        // 导航选项卡
        if (this.fcTabs) {
            this.fcTabs = [];
            this.fcSelectedIndex = 0;
            if (this.fcTabs.length === 0) {
                this.fcTabs.push({
                    id: '0',
                    index: 0,
                    enabled: true,
                    name: '首页',
                    close: false,
                    icon: 'fc-icon-shouye',
                    refresh: 'N',
                    content: {
                        ID: '0',
                        MENUID: 'HOME',
                        ROUTER: 'home',
                        PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].pid,
                        MENUTYPE: 'INURL'
                    }
                });
            }
        }
        this.router.navigate(['/' + _environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].pid.toLocaleLowerCase() + '/home']);
    };
    /**
     * 切换项目
     * @param item
     */
    LayoutComponent.prototype.switchProject = function (menu) {
        var _this = this;
        this._menus = [];
        this.allMenus.forEach(function (element) {
            if (element.PID === menu.PID) {
                _this._menus = element.P_CHILDMENUS;
                _this.projectName = element.MENUNAME;
            }
        });
    };
    LayoutComponent.prototype.toggleLayout = function () {
        this.menuWidth = this.menuWidth === 64 ? 200 : 64;
        this.menuIsCollapsed = this.menuIsCollapsed === true ? false : true;
    };
    /**
     * 打开或者关闭侧边栏
     */
    LayoutComponent.prototype.toggleSidebar = function () {
        this.navsideVisible = this.navsideVisible === false ? true : false;
    };
    /**
     * 关闭侧边栏
     */
    LayoutComponent.prototype.closeNavSide = function () {
        this.navsideVisible = false;
    };
    /**
     * 点击侧边栏外的区域关闭
     */
    LayoutComponent.prototype._onOutsideClick = function (event) {
        if (this.navsideVisible) {
            var clickedEl = event.target;
            var classList = clickedEl.classList;
            // 点击的区域不包括此组件本身且不包含顶部工具栏的消息按钮
            if (!!classList.contains('ant-drawer') &&
                !classList.contains('fc-icon-information')) {
                this.navsideVisible = false;
            }
        }
    };
    /**
     * 选中菜单
     * @param menu
     */
    LayoutComponent.prototype.selectedMenu = function (menu) {
        menu.select = true;
        src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('selectedMenu', menu);
    };
    /**
     * @description: 选中选项卡导航
     * @param {type}
     * @return:
     */
    LayoutComponent.prototype.selectedTabMenu = function (tabMenu) {
        var refresh = 'Y';
        // 判断路由是否打开过，如果已打开不刷新，反之，刷新
        refresh = (this.selectMenu[tabMenu.content.MENUID] && this.selectMenu[tabMenu.content.MENUID] !== '') ? 'N' : "Y";
        if (!this.selectMenu[tabMenu.content.MENUID]) {
            // 将该路由存放在路由打开记录中
            this.selectMenu[tabMenu.content.MENUID] = tabMenu.content.MENUID;
        }
        else {
            refresh = 'N';
        }
        this.mainService.navMenu(this.router, tabMenu.content, refresh);
    };
    /**
     * 关闭选项卡导航
     * @param tab
     */
    LayoutComponent.prototype.closeTabNav = function (tab) {
        this.selectMenu[tab.content.MENUID] = "";
        if (tab.close) {
            this.fcTabs.splice(this.fcTabs.indexOf(tab), 1);
            var i_1 = 0;
            this.fcTabs.forEach(function (item) {
                item.index = i_1++;
            });
            if (this.fcTabs.length > 0) {
                // 如果关闭的选项卡索引 等于 激活的选项卡, 关闭选项卡后，打开选中索引前一个
                if (this.fcSelectedIndex && tab.index > this.fcSelectedIndex) {
                    src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('selectedMenu', this.fcTabs[this.fcSelectedIndex]['content']);
                }
                else {
                    src_fccore_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('selectedMenu', this.fcTabs[this.fcSelectedIndex - 1]['content']);
                }
            }
        }
    };
    /**
     * 退出登录
     */
    LayoutComponent.prototype.siginout = function () {
        this.siginoutVisible = false;
        this.router.navigate(['/signin']);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navside', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        // 项目名
        )
    ], LayoutComponent.prototype, "navside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LayoutComponent.prototype, "_onOutsideClick", null);
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layout/layout.component.html"),
            styles: ["\n      .layout {\n        width: 100%;\n        height: 100%;\n      }\n      .logo {\n        height: 64px;\n        line-height: 64px;\n        float: left;\n      }\n      .logo:after, .fc-header-right:after {\n        content:'';\n        display: block;\n        clear: both;\n      }\n      .logo img{\n        margin-right: 20px;\n        vertical-align: top;\n        height: 50px;\n        margin-top: 7px;\n        margin-left: -10px;\n        float: left;\n      }\n      .logo .iconfont {\n        color: #fff;\n        font-size: 30px;\n        cursor: pointer;\n      }\n      .logo-text {\n        color: #fff;\n        font-size: 20px;\n      }\n      .fc-header-icon-wrap {\n        float: left;\n        transition: .2s;\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        line-height: 40px;\n        cursor: pointer;\n        margin-top: 12px;\n        margin-right: 10px;\n      }\n      .fc-header-icon-wrap:hover {\n        background: #40a9ff;\n        color: #fff;\n      }\n      .fc-header-dropdown {\n        width: auto;\n      }\n      .fc-header-left .icon {\n        float: none;\n        font-size: 24px;\n        cursor: pointer;\n      }\n      .fc-header-right {\n        height: 64px;\n        line-height: 64px;\n        float: right;\n        overflow: hidden;\n      }\n      .fc-header-right .fc-header-icon {\n        font-size: 24px;\n        color: #fff;\n        cursor: pointer;\n      }\n      .fc-header-right .text {\n        font-size: 16px;\n        color: #fff;\n        margin-right: 15px;\n        cursor: pointer;\n      }\n      .fc-header-right .text .iconfont {\n        margin-right: 5px;\n      }\n      .fc-header-right .avatar {\n        cursor: pointer;\n        float: left;\n        margin: 4px 10px 0 10px;\n      }\n      .sidebar-nav {\n        position: relative;\n      }\n      .layout-toggle {\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        background-color: #f5f5f5;\n        border-right: 1px solid #e8e8e8;\n      }\n      .layout-toggle .iconfont {\n        color: #333333;\n        font-size: 18px;\n        cursor: pointer;\n        transition: transform ease-in 0.8;\n        display: inline-block;\n      }\n      .layout-toggle .iconfont.arrowright {\n        transform: rotate(180deg);\n      }\n      .layout-toggle .iconfont:hover {\n        color: #000000;\n        font-weight: bold;\n      }\n      .fc-main-wrap {\n        background: #f2f6f9;\n      }\n      .fc-main {\n        width: 100%;\n        height: 100%;\n        overflow: hidden;\n      }\n      ::ng-deep .navside-drawer.ant-drawer-content-wrapper {\n        background-color: #ffffff;\n        top: 64px;\n        height: calc(100% - 64px);\n      }\n      ::ng-deep .navside-drawer .ant-drawer-body {\n        padding: 0;\n      }\n      ::ng-deep .ant-tabs .anticon-close {\n        cursor: pointer;\n      }\n      ::ng-deep .fc-sidebar-menu {\n        background: #ffffff;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-item {\n        padding: 0!important;\n        text-align: center;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed {\n        width: 64px;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .first-level-title {\n        display: none;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed > .ant-menu-submenu {\n        text-align: center;\n      }\n      ::ng-deep\n        .fc-sidebar-menu\n        .ant-menu-inline-collapsed\n        > .ant-menu-submenu\n        > .ant-menu-submenu-title {\n        padding: 0 !important;\n      }\n      ::ng-deep .fc-sidebar-menu .menu-icon {\n        color: #333333;\n        margin-right: 10px;\n      }\n      ::ng-deep .fc-sidebar-menu .ant-menu-inline-collapsed .menu-icon {\n        margin-right: 0px;\n      }\n      ::ng-deep .ant-menu-popup::before {\n        opacity: 1;\n        background-color: red;\n      }\n      ::ng-deep .ant-menu-popup {\n        z-index: 1000;\n      }\n      ::ng-deep .fc-tabnav {\n        min-height: 40px;\n        background-color: #ffffff;\n        box-shadow: 0 3px 5px -6px #1890ff;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-bar {\n        margin-bottom: 0;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab {\n        margin-left: 0px;\n        margin-right: 0px;\n        padding: 8px 5px 8px 16px;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav-wrap {\n        margin-bottom: 0;\n      }\n      ::ng-deep .fc-tabnav .ant-tabs-nav .ant-tabs-tab .anticon {\n        margin-right: 8px;\n        font-size: 12px;\n        transform: scale(0.9);\n        margin-left: 10px;\n      }\n      .tab-home {\n        padding-right: 15px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"],
            src_app_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/lockscreen/lockscreen.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/lockscreen/lockscreen.component.ts ***!
  \***************************************************************/
/*! exports provided: LockscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockscreenComponent", function() { return LockscreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 锁屏
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 10:10:10
 */


var LockscreenComponent = /** @class */ (function () {
    function LockscreenComponent(router) {
        this.router = router;
    }
    LockscreenComponent.prototype.ngOnInit = function () {
    };
    LockscreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'lockscreen',
            template: __webpack_require__(/*! raw-loader!./lockscreen.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/lockscreen/lockscreen.component.html"),
            styles: ["\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LockscreenComponent);
    return LockscreenComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signin/signin.component.ts ***!
  \*******************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fccore/service/cache.service */ "./src/fccore/service/cache.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 登录
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-05 12:46:04
 */




var SigninComponent = /** @class */ (function () {
    function SigninComponent(router) {
        this.router = router;
        this.hasError = false;
        this.msg = '用户名或者密码错误';
        this.userId = '';
        this.password = '';
        this._projectName = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].projectName;
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (this.loginValid(this.userId, this.password)) {
            this.router.navigate(['/' + src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].pid.toLocaleLowerCase() + '/home']);
        }
    };
    /**
     * 根据用户密码登录，并存储当前用户的相关信息
     */
    SigninComponent.prototype.login = function () {
        if (this.loginValid(this.userId, this.password)) {
            this.hasError = false;
            src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS("userinfo", { USERCODE: 'admin' });
            src_fccore_service_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS("token", 'ab2be4ef08c0418bab13a6a88c9772e7');
            this.router.navigate(['/' + src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_3__["environment"].pid.toLocaleLowerCase() + '/home']);
        }
        else {
            this.hasError = true;
        }
    };
    SigninComponent.prototype.loginValid = function (userId, password) {
        if (userId === 'admin' && password === 'admin') {
            return true;
        }
        else {
            return false;
        }
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'signin',
            template: __webpack_require__(/*! raw-loader!./signin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.less */ "./src/app/components/signin/signin.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.less":
/*!***********************************************!*\
  !*** ./src/app/components/signin/signin.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 登录页面的样式\n * @email: 3300536651@qq.com\n * @Date: 2019-04-01 14:01:49\n * @LastEditTime: 2019-07-05 12:47:47\n */\n.login-in {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.login-bg {\n  width: 100%;\n  height: 100%;\n  background: url('login_bg.jpeg') no-repeat fixed top;\n  background-size: 100% 100%;\n  position: fixed;\n}\n.login-bg .login-content {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -348px;\n  margin-top: -210px;\n  min-height: 400px;\n  height: 400px;\n  box-shadow: 0 1px 5px 0px rgba(50, 50, 50, 0.2);\n  background: #fff;\n}\n.login-bg .login-content .login-left {\n  float: left;\n  width: 390px;\n  height: 100%;\n  background: #4E8AEC;\n  position: relative;\n}\n.login-bg .login-content .login-left .map-img {\n  width: 336px;\n  height: 300px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -168px;\n  margin-top: -150px;\n}\n.login-bg .login-content .login-left .left-img {\n  width: 365px;\n  height: 156px;\n  position: absolute;\n  left: 50%;\n  margin-left: -182px;\n  top: 130px;\n}\n.login-bg .login-content .login-right {\n  float: right;\n  width: 296px;\n  height: 100%;\n  background: #fff;\n  position: relative;\n}\n.login-bg .login-content .login-right .login-right-content {\n  width: 80%;\n  position: absolute;\n  left: 30px;\n  top: 60px;\n}\n.login-bg .login-content .login-right .login-h2 {\n  width: 100%;\n  font-size: 16px;\n  color: #323232;\n  text-align: center;\n  margin-bottom: 20px;\n  font-weight: 400;\n}\n.login-bg .login-content .login-right .login-date {\n  margin-bottom: 5px !important;\n}\n.login-bg .login-content .login-right .user-box {\n  width: 100%;\n  height: 30px;\n  border-radius: 3px;\n  margin-bottom: 20px;\n}\n.login-bg .login-content .login-right .user-box .user-input {\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  line-height: 30px;\n  outline: none;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  color: #666;\n  font-size: 12px;\n}\n.login-bg .login-content .login-right .user-box input::-webkit-input-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::-moz-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::-ms-input-placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input::placeholder {\n  color: #cccccc !important;\n  font-size: 12px !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-webkit-input-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-moz-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::-ms-input-placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box input:focus::placeholder {\n  color: transparent !important;\n}\n.login-bg .login-content .login-right .user-box .user-input:hover {\n  color: #666;\n  background-color: #ffffff;\n  border-color: #666;\n}\n.login-bg .login-content .login-right .user-box .user-input:focus {\n  color: #666;\n  border-color: #666 !important;\n  background-color: #fff;\n}\n.login-bg .login-content .login-right .save-word {\n  width: 100%;\n  text-align: center;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-inner-container {\n  width: 14px;\n  height: 14px;\n  border-color: #929292;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-layout .mat-checkbox-label {\n  font-size: 12px;\n  color: #666;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-frame {\n  border-width: 1px;\n}\n.login-bg .login-content .login-right .save-word .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background: #3f77e4;\n}\n.login-bg .login-content .login-right .login-button {\n  display: block;\n  width: 100%;\n  height: 30px;\n  outline: none;\n  border: none;\n  background: #3f77e4;\n  font-size: 12px;\n  color: #fff;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.login-bg .login-content .login-right .login-button:hover {\n  background: #3f77e4;\n}\n.login-bg .login-content .login-right .login-btn {\n  margin-top: 7px;\n  margin-bottom: 54px;\n}\n.login-bg .login-content .login-right .google-download {\n  width: 100%;\n}\n.login-bg .login-content .login-right .google-download p {\n  font-size: 12px;\n  text-align: center;\n  color: #666;\n}\n.login-bg .login-content .login-right .google-download a {\n  font-size: 12px;\n  color: #ff7573;\n  cursor: pointer;\n}\n.login-bg .user-input.ng-invalid {\n  border: 1px solid #ff7573 !important;\n}\n.login-bg .user-input.ng-valid {\n  border: 1px solid #aaa !important;\n}\n.login-bg .user-box {\n  position: relative;\n}\n.login-bg .required-color {\n  width: 100%;\n  height: 20px;\n  position: absolute;\n  left: 0;\n  top: 30px;\n  font-size: 12px;\n  text-align: center;\n  color: #ff7573;\n  z-index: 9;\n  border-radius: 2px;\n}\n.login-bg .required-color p {\n  height: 20px;\n  line-height: 20px;\n}\n/* 块级按钮文字不浮动 */\n:host ::ng-deep .login-btn .fc-button-block > span {\n  float: none;\n}\n.sigin-body .sigin-error {\n  width: 100%;\n  margin-bottom: 30px;\n  line-height: 24px;\n  box-sizing: border-box;\n  font-size: 14px;\n  margin-top: 20px;\n}\n.sigin-error-in {\n  background: #FEEEEB;\n  border: 1px solid #F15532;\n  color: #F15533;\n  text-align: left;\n  padding: 3px 6px;\n  margin-bottom: 20px;\n}\n.project-name {\n  font-size: 30px;\n  color: #fff;\n  display: block;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 40%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiLCIvQXBwbGljYXRpb25zL2hvbmdob25nL2dpdGh1Yi9mYy1hbmd1bGFyL3NyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7RUFPRTtBQ0NGO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBREFGO0FDR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7QURERjtBQ0tBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREhGO0FDTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FESkY7QUNPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FETEY7QUNRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURORjtBQ1NBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QURQRjtBQ1VBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEUkY7QUNXQTtFQUNFLDZCQUFBO0FEVEY7QUNZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRFZGO0FDYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FEWEY7QUNjQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QURaRjtBQ1VBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBRFpGO0FDVUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FEWkY7QUNVQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QURaRjtBQ2VBO0VBQ0UsNkJBQUE7QURiRjtBQ1lBO0VBQ0UsNkJBQUE7QURiRjtBQ1lBO0VBQ0UsNkJBQUE7QURiRjtBQ1lBO0VBQ0UsNkJBQUE7QURiRjtBQ2dCQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FEZEY7QUNpQkE7RUFDRSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBRGZGO0FDa0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FEaEJGO0FDbUJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBRGpCRjtBQ29CQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FEbEJGO0FDcUJBO0VBQ0UsaUJBQUE7QURuQkY7QUNzQkE7RUFDRSxtQkFBQTtBRHBCRjtBQ3VCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRHJCRjtBQ3dCQTtFQUNFLG1CQUFBO0FEdEJGO0FDeUJBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEdkJGO0FDMEJBO0VBQ0UsV0FBQTtBRHhCRjtBQzJCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUR6QkY7QUM0QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQxQkY7QUM2QkE7RUFDRSxvQ0FBQTtBRDNCRjtBQzhCQTtFQUNFLGlDQUFBO0FENUJGO0FDK0JBO0VBQ0Usa0JBQUE7QUQ3QkY7QUNnQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEOUJGO0FDaUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FEL0JGO0FBQ0EsY0FBYztBQ29DZDtFQUNFLFdBQUE7QURsQ0Y7QUNxQ0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEbkNGO0FDc0NBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURwQ0Y7QUN1Q0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FEckNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogbHVvaG9uZ1xuICogQExhc3RFZGl0b3JzOiBsdW9ob25nXG4gKiBARGVzY3JpcHRpb246IOeZu+W9lemhtemdoueahOagt+W8j1xuICogQGVtYWlsOiAzMzAwNTM2NjUxQHFxLmNvbVxuICogQERhdGU6IDIwMTktMDQtMDEgMTQ6MDE6NDlcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMTktMDctMDUgMTI6NDc6NDdcbiAqL1xuLmxvZ2luLWluIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubG9naW4tYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbl9iZy5qcGVnJykgbm8tcmVwZWF0IGZpeGVkIHRvcDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zNDhweDtcbiAgbWFyZ2luLXRvcDogLTIxMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWxlZnQge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDM5MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM0RThBRUM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubWFwLWltZyB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2OHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLWxlZnQgLmxlZnQtaW1nIHtcbiAgd2lkdGg6IDM2NXB4O1xuICBoZWlnaHQ6IDE1NnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xODJweDtcbiAgdG9wOiAxMzBweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAyOTZweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1yaWdodC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDYwcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1oMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzIzMjMyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1kYXRlIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IC51c2VyLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2NjY2MgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IC51c2VyLWlucHV0OmhvdmVyIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogIzY2Njtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IC51c2VyLWlucHV0OmZvY3VzIHtcbiAgY29sb3I6ICM2NjY7XG4gIGJvcmRlci1jb2xvcjogIzY2NiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWlubmVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1jb2xvcjogIzkyOTI5Mjtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY2Njtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5zYXZlLXdvcmQgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMzZjc3ZTQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWJ0biB7XG4gIG1hcmdpbi10b3A6IDdweDtcbiAgbWFyZ2luLWJvdHRvbTogNTRweDtcbn1cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmdvb2dsZS1kb3dubG9hZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuZ29vZ2xlLWRvd25sb2FkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5nb29nbGUtZG93bmxvYWQgYSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNmZjc1NzM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sb2dpbi1iZyAudXNlci1pbnB1dC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmNzU3MyAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWJnIC51c2VyLWlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWJnIC51c2VyLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sb2dpbi1iZyAucmVxdWlyZWQtY29sb3Ige1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMzBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmY3NTczO1xuICB6LWluZGV4OiA5O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLyog5Z2X57qn5oyJ6ZKu5paH5a2X5LiN5rWu5YqoICovXG46aG9zdCA6Om5nLWRlZXAgLmxvZ2luLWJ0biAuZmMtYnV0dG9uLWJsb2NrID4gc3BhbiB7XG4gIGZsb2F0OiBub25lO1xufVxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2lnaW4tZXJyb3ItaW4ge1xuICBiYWNrZ3JvdW5kOiAjRkVFRUVCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjE1NTMyO1xuICBjb2xvcjogI0YxNTUzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogM3B4IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wcm9qZWN0LW5hbWUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDQwJTtcbn1cbiIsIi8qXG4gKiBAQXV0aG9yOiBsdW9ob25nXG4gKiBATGFzdEVkaXRvcnM6IGx1b2hvbmdcbiAqIEBEZXNjcmlwdGlvbjog55m75b2V6aG16Z2i55qE5qC35byPXG4gKiBAZW1haWw6IDMzMDA1MzY2NTFAcXEuY29tXG4gKiBARGF0ZTogMjAxOS0wNC0wMSAxNDowMTo0OVxuICogQExhc3RFZGl0VGltZTogMjAxOS0wNy0wNSAxMjo0Nzo0N1xuICovXG4ubG9naW4taW4ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxvZ2luLWJnIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9naW5fYmcuanBlZycpIG5vLXJlcGVhdCBmaXhlZCB0b3A7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0zNDhweDtcbiAgbWFyZ2luLXRvcDogLTIxMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNXB4IDBweCByZ2JhKDUwLCA1MCwgNTAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzOTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNEU4QUVDO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubWFwLWltZyB7XG4gIHdpZHRoOiAzMzZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE2OHB4O1xuICBtYXJnaW4tdG9wOiAtMTUwcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tbGVmdCAubGVmdC1pbWcge1xuICB3aWR0aDogMzY1cHg7XG4gIGhlaWdodDogMTU2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE4MnB4O1xuICB0b3A6IDEzMHB4O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogMjk2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1yaWdodC1jb250ZW50IHtcbiAgd2lkdGg6IDgwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IDYwcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmxvZ2luLWgyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzMjMyMzI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tZGF0ZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnVzZXItYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2NjY2NjICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCBpbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAudXNlci1ib3ggLnVzZXItaW5wdXQ6aG92ZXIge1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjNjY2O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC51c2VyLWJveCAudXNlci1pbnB1dDpmb2N1cyB7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItY29sb3I6ICM2NjYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuc2F2ZS13b3JkIC5tYXQtY2hlY2tib3gtaW5uZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjOTI5MjkyO1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5zYXZlLXdvcmQgLm1hdC1jaGVja2JveC1sYXlvdXQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLnNhdmUtd29yZCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5sb2dpbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjM2Y3N2U0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzNmNzdlNDtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAubG9naW4tYnRuIHtcbiAgbWFyZ2luLXRvcDogN3B4O1xuICBtYXJnaW4tYm90dG9tOiA1NHB4O1xufVxuXG4ubG9naW4tYmcgLmxvZ2luLWNvbnRlbnQgLmxvZ2luLXJpZ2h0IC5nb29nbGUtZG93bmxvYWQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvZ2luLWJnIC5sb2dpbi1jb250ZW50IC5sb2dpbi1yaWdodCAuZ29vZ2xlLWRvd25sb2FkIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi5sb2dpbi1iZyAubG9naW4tY29udGVudCAubG9naW4tcmlnaHQgLmdvb2dsZS1kb3dubG9hZCBhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmNzU3MztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4tYmcgLnVzZXItaW5wdXQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjc1NzMgIWltcG9ydGFudDtcbn1cblxuLmxvZ2luLWJnIC51c2VyLWlucHV0Lm5nLXZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FhYSAhaW1wb3J0YW50O1xufVxuXG4ubG9naW4tYmcgLnVzZXItYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmNzU3MztcbiAgei1pbmRleDogOTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4ubG9naW4tYmcgLnJlcXVpcmVkLWNvbG9yIHAge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi8qIOWdl+e6p+aMiemSruaWh+Wtl+S4jea1ruWKqCAqL1xuXG46aG9zdCA6Om5nLWRlZXAgLmxvZ2luLWJ0biAuZmMtYnV0dG9uLWJsb2NrPnNwYW4ge1xuICBmbG9hdDogbm9uZTtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaWdpbi1lcnJvci1pbiB7XG4gIGJhY2tncm91bmQ6ICNGRUVFRUI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMTU1MzI7XG4gIGNvbG9yOiAjRjE1NTMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHggNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucHJvamVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiA0MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 注册
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 10:10:48
 */




var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, fb) {
        this.router = router;
        this.fb = fb;
        this._projectName = _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].projectName;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            uname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    SignupComponent.prototype.getFormControl = function (name) {
        return this.validateForm.controls[name];
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
            styles: ["\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/service/layout.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/layout.service.ts ***!
  \*******************************************/
/*! exports provided: LayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutService", function() { return LayoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _mock_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _mock/_menus */ "./_mock/_menus.ts");
/* harmony import */ var _share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share.service */ "./src/app/share.service.ts");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: layout业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 14:06:29
 */






var LayoutService = /** @class */ (function () {
    function LayoutService(Router, messageService, shareService) {
        this.Router = Router;
        this.messageService = messageService;
        this.shareService = shareService;
        // 项目名称
        this.pid = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_6__["environment"].pid.toLocaleLowerCase();
    }
    /**
     * @description: 获取菜单信息
     * @param {type} []
     * @return:  []
     */
    LayoutService.prototype.getMenus = function () {
        return _mock_menus__WEBPACK_IMPORTED_MODULE_4__["menus"];
    };
    /**
     * 跳转路由
     * @param menu
     */
    LayoutService.prototype.navMenu = function (router, menu, refresh) {
        if (refresh === undefined) {
            refresh = 'Y';
        }
        if (menu.MENUTYPE === 'APP') {
            // 开启加载条
            // this.messageService.startAntLoading();
            var params = {
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
            // LogService.debug(params);
            router
                .navigate(['/' + this.pid + '/' + menu.ROUTER], params)
                .then(function () {
                // this.providers.msgService.endAntLoading();
            })
                .catch(function (error) {
                console.log(error);
                // this.providers.msgService.endAntLoading();
                router.navigate(['/error']);
            });
        }
        else if (menu.MENUTYPE === 'INURL') {
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
                .then(function () {
            })
                .catch(function (error) {
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
                .then(function () {
            })
                .catch(function (error) {
                console.log(error);
                router.navigate(['/error']);
            });
        }
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"],
            _share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"]])
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "./src/app/service/routereusestrategy.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/service/routereusestrategy.service.ts ***!
  \*******************************************************/
/*! exports provided: FcRouteReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcRouteReuseStrategy", function() { return FcRouteReuseStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 路由复用策略,跳转路由时，params的refresh='Y'时，刷新页面，refresh='N'时，不刷新页面，保留用户操作状态
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-07-05 12:15:00
 */


var FcRouteReuseStrategy = /** @class */ (function () {
    function FcRouteReuseStrategy() {
    }
    /**
     * @description: 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.shouldDetach = function (route) {
        if (route.routeConfig.path === 'home' || route.routeConfig.path === 'error') {
            return false; // 不允许路由复用
        }
        if (route.routeConfig['data'] && !route.routeConfig['data']['keepAlive']) {
            return false; // 不允许路由复用
        }
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        return true;
    };
    /**
     * @description: 当路由离开时会触发，存储路由,按path作为key存储路由快照&组件当前实例对象
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.store = function (route, handle) {
        if (route.routeConfig.path === 'signin') {
            FcRouteReuseStrategy.handlers = {};
        }
        var url = this.getRouteUrl(route);
        FcRouteReuseStrategy.handlers[url] = handle;
    };
    /**
     * @description:若 path 在缓存中有的都认为允许还原路由
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.shouldAttach = function (route) {
        if (route.queryParams['refresh'] === 'Y') {
            return false;
        }
        var url = this.getRouteUrl(route);
        return !!FcRouteReuseStrategy.handlers[url];
    };
    /**
     * @description: 从缓存中获取快照，若无则返回null
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig || route.queryParams['refresh'] === 'Y' || route.routeConfig.loadChildren) {
            return null;
        }
        var url = this.getRouteUrl(route);
        var rtn = FcRouteReuseStrategy.handlers[url];
        if (rtn !== undefined) {
            return rtn;
        }
        else {
            return null;
        }
    };
    /**
     * @description: 进入路由触发，判断是否同一路由
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return (
        // 同一路由时复用路由
        future.routeConfig === curr.routeConfig && JSON.stringify(future.params) === JSON.stringify(curr.params));
    };
    /**
     * @description:获取路由路径
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.getRouteUrl = function (route) {
        var path = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_1__["environment"].pid + '_' + route['routeConfig'].path;
        // let path = route['_routerState'].url.replace(/\//g, '_')
        return path;
    };
    /**
     * @description:
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.prototype.getRouteUrl0 = function (route) {
        var namedOutletCount = 0;
        return (route.pathFromRoot.reduce(function (path, route) {
            var config = route.routeConfig;
            if (config) {
                if (config.outlet && config.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_0__["PRIMARY_OUTLET"]) {
                    path += "(" + config.outlet + ":";
                    namedOutletCount++;
                }
                else {
                    path += '/';
                }
                return (path += config.path);
            }
            return path;
        }, '') + (namedOutletCount ? new Array(namedOutletCount + 1).join(')') : ''));
    };
    /**
     * @description: 删除快照
     * @param {type}
     * @return:
     */
    FcRouteReuseStrategy.deleteRouteSnapshot = function (name) {
        if (FcRouteReuseStrategy.handlers[name]) {
            delete FcRouteReuseStrategy.handlers[name];
        }
        else {
            FcRouteReuseStrategy.waitDelete = name;
        }
    };
    FcRouteReuseStrategy.handlers = {};
    return FcRouteReuseStrategy;
}());



/***/ }),

/***/ "./src/app/share.service.ts":
/*!**********************************!*\
  !*** ./src/app/share.service.ts ***!
  \**********************************/
/*! exports provided: ShareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function() { return ShareService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 单例服务，参考网址: https://angular.cn/guide/singleton-services
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-05-07 18:12:10
 */


var ShareService = /** @class */ (function () {
    function ShareService() {
        // 切换项目名称
        this.switchProjectSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShareService);
    return ShareService;
}());



/***/ }),

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 开发环境的环境配置
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 17:46:33
 */
// 当前环境的文件内容将在构建期间覆盖这些内容。
// 构建系统默认使用`environment.ts`的开发环境，但是如果你这样做的话
// 开发环境使用`ng build --env = dev` 会使用`environment.dev.ts`代替。
// 可以在`.angular-cli.json`中找到environment映射到文件的列表。
// 开发环境
var environment = {
    production: true,
    pid: "FC",
    projectName: "fc-angular",
    systemurl: "/server/",
    apiurl: "/server/api/",
    logurl: "/server/api/",
    authurl: "/server/api/",
    wsurl: "",
    license: ''
};


/***/ }),

/***/ "./src/fccore/fccore.module.ts":
/*!*************************************!*\
  !*** ./src/fccore/fccore.module.ts ***!
  \*************************************/
/*! exports provided: FccoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FccoreModule", function() { return FccoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _service_dao_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/dao.service */ "./src/fccore/service/dao.service.ts");
/* harmony import */ var _service_log_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/log.service */ "./src/fccore/service/log.service.ts");
/* harmony import */ var _service_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _service_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/message.service */ "./src/fccore/service/message.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台核心模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 14:49:10
 */












Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
var FccoreModule = /** @class */ (function () {
    function FccoreModule() {
    }
    FccoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            declarations: [],
            providers: [
                _service_dao_service__WEBPACK_IMPORTED_MODULE_8__["DaoService"],
                _service_log_service__WEBPACK_IMPORTED_MODULE_9__["LogService"],
                _service_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"],
                _service_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"],
                _service_message_service__WEBPACK_IMPORTED_MODULE_12__["MessageService"]
            ],
            bootstrap: []
        })
    ], FccoreModule);
    return FccoreModule;
}());



/***/ }),

/***/ "./src/fccore/service/cache.service.ts":
/*!*********************************************!*\
  !*** ./src/fccore/service/cache.service.ts ***!
  \*********************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 缓存服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:41:24
 */
var CacheService = /** @class */ (function () {
    function CacheService() {
    }
    CacheService.set = function (key, value) {
        if (value instanceof Object) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            window.localStorage.setItem(key, value);
        }
    };
    ;
    CacheService.get = function (key, defaultValue) {
        var v = window.localStorage.getItem(key);
        if (v === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(v);
            }
            catch (e) {
                return v;
            }
        }
    };
    ;
    CacheService.clear = function () {
        window.localStorage.clear();
    };
    ;
    CacheService.clearByKey = function (key) {
        window.localStorage.removeItem(key);
    };
    ;
    CacheService.setS = function (key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };
    ;
    CacheService.getS = function (key, defaultValue) {
        var obj = window.sessionStorage.getItem(key);
        if (obj === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(obj);
            }
            catch (e) {
                return obj;
            }
        }
    };
    ;
    CacheService.clearS = function () {
        window.sessionStorage.clear();
    };
    ;
    CacheService.clearSByKey = function (key) {
        window.sessionStorage.removeItem(key);
    };
    ;
    CacheService.objToString = function (obj) {
        var _this = this;
        if (obj && obj !== null) {
            if (typeof (obj) === 'string') {
                return obj;
            }
            if (typeof (obj) === 'object') {
                var rtn_1 = {};
                Object.keys(obj).forEach(function (key) {
                    var value = obj[key];
                    if (typeof (value) === 'object') {
                        rtn_1[key] = _this.objToString(value);
                    }
                    else {
                        rtn_1[key] = value;
                    }
                });
                return JSON.stringify(rtn_1);
            }
            if (typeof (obj) === 'number') {
                return obj + "";
            }
        }
        else {
            return "";
        }
    };
    ;
    return CacheService;
}());



/***/ }),

/***/ "./src/fccore/service/common.service.ts":
/*!**********************************************!*\
  !*** ./src/fccore/service/common.service.ts ***!
  \**********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:42:53
 */


var CommonService = /** @class */ (function () {
    function CommonService() {
        this.base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        this.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    }
    /**
     * 发生事件
     * @param actCode 事件名称
     */
    CommonService.event = function (eventName, param) {
        this.eventEmit.emit({
            eventName: eventName,
            param: param
        });
    };
    /**
     * 订阅事件
     * @param 获取
     * @param 方法
     */
    CommonService.subscribe = function (actCode, func) {
        return this.eventEmit.subscribe(function (value) {
            if (value.eventName === actCode) {
                return func(value);
            }
            else {
                return func(null);
            }
        });
    };
    /**
     * base64编码
     * @param {Object} str
     */
    CommonService.prototype.base64encode = function (str) {
        var out, i, len;
        var c1, c2, c3;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += '==';
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += this.base64EncodeChars.charAt(c1 >> 2);
                out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
                out += this.base64EncodeChars.charAt((c2 & 0xf) << 2);
                out += '=';
                break;
            }
            c3 = str.charCodeAt(i++);
            out += this.base64EncodeChars.charAt(c1 >> 2);
            out += this.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            out += this.base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
            out += this.base64EncodeChars.charAt(c3 & 0x3f);
        }
        return out;
    };
    /**
     * base64解码
     * @param {Object} str
     */
    CommonService.prototype.base64decode = function (str) {
        var c1, c2, c3, c4;
        var i, len, out;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            /* c1 */
            do {
                c1 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            /* c2 */
            do {
                c2 = this.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = this.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = this.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    };
    /**
     * utf16转utf8
     * @param {Object} str
     */
    CommonService.prototype.utf16to8 = function (str) {
        var out, i, len, c;
        out = '';
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if (c >= 0x0001 && c <= 0x007f) {
                out += str.charAt(i);
            }
            else if (c > 0x07ff) {
                out += String.fromCharCode(0xe0 | ((c >> 12) & 0x0f));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3f));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
            }
            else {
                out += String.fromCharCode(0xc0 | ((c >> 6) & 0x1f));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3f));
            }
        }
        return out;
    };
    /**
     * utf8转utf16
     * @param {Object} str
     */
    CommonService.prototype.utf8to16 = function (str) {
        var out, i, len, c;
        var char2, char3;
        out = '';
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += str.charAt(i - 1);
                    break;
                case 12:
                case 13:
                    // 110x xxxx 10xx xxxx
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                    break;
                case 14:
                    // 1110 xxxx10xx xxxx10xx xxxx
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0));
                    break;
            }
        }
        return out;
    };
    /**
     * 加密
     */
    CommonService.enCode64 = function (str) {
        if (str == undefined) {
            return '';
        }
        return this.base64encode(this.utf16to8(str));
    };
    /**
     * base64解密
     */
    CommonService.deCode64 = function (str) {
        if (str == undefined) {
            return '';
        }
        return this.utf8to16(this.base64decode(str));
    };
    /**
     * 根据模块及资源获取到url
     * @param moduleId 模块id
     * @param resId 资源id
     */
    CommonService.getUrlBy = function (moduleId, resId, act) {
        return moduleId + '/' + resId + '/' + act;
    };
    /**
     * 获取随机数
     * @param n 范围内的数值
     */
    CommonService.Random = function (n) {
        var chars = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        ];
        var res = '';
        for (var i = 0; i < n; i++) {
            var id = Math.ceil(Math.random() * 35);
            res += chars[id];
        }
        return res;
    };
    /**
     * 获取当前时间戳
     */
    CommonService.getMilliseconds = function () {
        return Date.now();
    };
    /**
     * 获取时间戳
     * @param date 当前时间
     */
    CommonService.getMillisecondsFromDate = function (date) {
        return Date.parse(date);
    };
    /**
     * 秒数转时间
     * @param seconds 秒数
     */
    CommonService.getDateByMilliseconds = function (seconds) {
        return new Date(seconds);
    };
    /**
     * 获取当前时间秒数
     */
    CommonService.getTimestamp = function () {
        return this.getMilliseconds() / 1000;
    };
    /**
     * 根据指定日期获取秒数
     * @param date 指定日期
     */
    CommonService.getTimestampFromDate = function (date) {
        return Date.parse(date) / 1000;
    };
    /**
     * 秒数转日期
     * @param seconds 秒数
     */
    CommonService.getDateByTimetamp = function (seconds) {
        return new Date(seconds * 1000);
    };
    /**
     * 获取当前年月
     * @param seg 分隔符 / -
     */
    CommonService.getYearMonth = function (seg) {
        if (seg === void 0) {
            seg = '-';
        }
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        if (month < 10) {
            return myDate.getFullYear() + seg + '0' + month;
        }
        else {
            return myDate.getFullYear() + seg + month;
        }
    };
    /**
     * 获取当前年月日
     * @param seg 分隔符
     */
    CommonService.getDate = function (seg) {
        if (seg === void 0) {
            seg = '-';
        }
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var value = '';
        if (month < 10) {
            value = myDate.getFullYear() + seg + '0' + month;
        }
        else {
            value = myDate.getFullYear() + seg + month;
        }
        if (day < 10) {
            value += seg + '0' + day;
        }
        else {
            value += seg + day;
        }
        return value;
    };
    /**
     * @description: 时间格式化处理
     * @param {type} 格式化字符串
     * @return:
     */
    CommonService.dateFormat = function (date, fmt) {
        var o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp('(' + k + ')').test(fmt))
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        return fmt;
    };
    /**
     * @description: 时间格式化处理
     * @param {type} 格式化字符串
     * @return:
     */
    CommonService.stringDateFormat = function (dateStr, fmt) {
        return this.dateFormat(this.stringToDate(dateStr), fmt);
    };
    /**
     * @description: 时间戳格式化处理
     * @param {type} 格式化
     * @return:
     */
    CommonService.timestampFormat = function (timestamp, fmt) {
        return this.dateFormat(new Date(timestamp), fmt);
    };
    /**
     * 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
     * result （分钟）
     */
    CommonService.stringToDate = function (fDate) {
        if (!fDate) {
            return null;
        }
        var fullDate = fDate.split('-');
        if (fullDate.length > 1) {
            return new Date(Date.parse(fDate.replace(/-/g, '/')));
        }
        fullDate = fDate.split('/');
        if (fullDate.length > 1) {
            return new Date(Date.parse(fDate.replace(/\//g, '/')));
        }
        var year = '';
        var month = '';
        var day = '';
        if (fDate.length > 7) {
            year = fDate.substr(0, 4);
            month = fDate.substr(4, 2);
            day = fDate.substr(6, 2);
        }
        var hour = '';
        var min = '';
        if (fDate.length > 11) {
            hour = fDate.substr(8, 2);
            min = fDate.substr(10, 2);
        }
        var second = '';
        if (fDate.length > 13) {
            second = fDate.substr(12, 2);
        }
        if (fDate.length === 8)
            return new Date(Date.parse(year + '/' + month + '/' + day));
        if (fDate.length === 12)
            return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min));
        if (fDate.length === 14)
            return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + second));
    };
    /**
     * 数值格式化
     * @param num 数值
     * @param format 格式化
     */
    CommonService.numberFormat = function (num, format) {
        var numberal = window['numeral'](num);
        return numberal.format(format);
    };
    /****
     * 替换文件
     * text :为源文件
     * rep:需要替换的符号
     * rex:替换后的符号
     * **/
    CommonService.textReplaceAll = function (text, regexp, replacement) {
        return text.replace(regexp, replacement);
    };
    /**
     * md5加密
     * @param string 被md5加密的字符串
     */
    CommonService.md5Encode = function (str) {
        function RotateLeft(lValue, iShiftBits) {
            return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
        }
        function AddUnsigned(lX, lY) {
            var lX4, lY4, lX8, lY8, lResult;
            lX8 = lX & 0x80000000;
            lY8 = lY & 0x80000000;
            lX4 = lX & 0x40000000;
            lY4 = lY & 0x40000000;
            lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
            if (lX4 & lY4) {
                return lResult ^ 0x80000000 ^ lX8 ^ lY8;
            }
            if (lX4 | lY4) {
                if (lResult & 0x40000000) {
                    return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
                }
                else {
                    return lResult ^ 0x40000000 ^ lX8 ^ lY8;
                }
            }
            else {
                return lResult ^ lX8 ^ lY8;
            }
        }
        function F(x, y, z) {
            return (x & y) | (~x & z);
        }
        function G(x, y, z) {
            return (x & z) | (y & ~z);
        }
        function H(x, y, z) {
            return x ^ y ^ z;
        }
        function I(x, y, z) {
            return y ^ (x | ~z);
        }
        function FF(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function GG(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function HH(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function II(a, b, c, d, x, s, ac) {
            a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
            return AddUnsigned(RotateLeft(a, s), b);
        }
        function ConvertToWordArray(str) {
            var lWordCount;
            var lMessageLength = str.length;
            var lNumberOfWords_temp1 = lMessageLength + 8;
            var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
            var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
            var lWordArray = Array(lNumberOfWords - 1);
            var lBytePosition = 0;
            var lByteCount = 0;
            while (lByteCount < lMessageLength) {
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition);
                lByteCount++;
            }
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
            lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
            lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
            return lWordArray;
        }
        function WordToHex(lValue) {
            var WordToHexValue = '', WordToHexValue_temp = '', lByte, lCount;
            for (lCount = 0; lCount <= 3; lCount++) {
                lByte = (lValue >>> (lCount * 8)) & 255;
                WordToHexValue_temp = '0' + lByte.toString(16);
                WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
            }
            return WordToHexValue;
        }
        function Utf8Encode(str) {
            str = str.replace(/\r\n/g, '\n');
            var utftext = '';
            for (var n = 0; n < str.length; n++) {
                var c = str.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if (c > 127 && c < 2048) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        }
        var x = Array();
        var k, AA, BB, CC, DD, a, b, c, d;
        var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
        var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
        var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
        var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
        str = Utf8Encode(str);
        x = ConvertToWordArray(str);
        a = 0x67452301;
        b = 0xefcdab89;
        c = 0x98badcfe;
        d = 0x10325476;
        for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
            b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
            a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
            c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
            c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
            a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
            a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
            a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
            a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
            c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
            c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
            b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
            c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
            d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
            c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
            a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
            d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
            b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
            a = AddUnsigned(a, AA);
            b = AddUnsigned(b, BB);
            c = AddUnsigned(c, CC);
            d = AddUnsigned(d, DD);
        }
        var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
        return temp.toLowerCase();
    };
    /**
     *
     * @param {当前值} value
     * @param {默认值} defaultValue
     */
    CommonService.getVbyNull = function (value, defaultValue) {
        if (value === null || value === undefined || value === 'null') {
            return defaultValue;
        }
        else {
            return value;
        }
    };
    /**
     *
     * @description 数组转树结构
     * @param list 数据列表
     * @param parentValue 上级编码的值
     * @param code 编码
     * @param name 名称
     * @param subtitle 小标题
     * @param parent 父级编码字段
     */
    CommonService.listtotree = function (list, parentValue, code, name, parent) {
        var _this = this;
        var nodes = [];
        list.forEach(function (item) {
            if (parentValue === item[parent]) {
                var node_1 = {
                    id: item.ID,
                    expanded: true,
                    code: item[code],
                    name: item[name],
                    children: [],
                    hasChildren: false,
                    DATA: item
                };
                list.forEach(function (child) {
                    if (item[code] === child[parent]) {
                        var childNode = {
                            id: item.ID,
                            expanded: false,
                            code: child[code],
                            name: child[name],
                            children: [],
                            hasChildren: false,
                            DATA: child
                        };
                        childNode.children = _this.listtotree(list, child[code], code, name, parent);
                        node_1.hasChildren = true;
                        node_1.children.push(childNode);
                    }
                });
                nodes.push(node_1);
            }
        });
        return nodes;
    };
    /**
     * 把字符串的参数替换成data中有的值参数形式为:{PARAMID:''}
     * @param data 数据对象
     * @param dataStr 字符串
     */
    CommonService.getStringFilterByParam = function (data, dataStr) {
        var rtn = '';
        var ds = dataStr.split(':{');
        ds.forEach(function (item) {
            if (item.indexOf('}') === -1) {
                rtn += item;
            }
            else {
                var dcs = item.split('}');
                if (dcs.length > 1) {
                    rtn += data[dcs[0]] + dcs[1];
                }
            }
        });
        return rtn;
    };
    /**
     *
     * @description 数组转树结构
     * @param id id值
     * @param list 数据列表
     * @param parentValue 上级编码的值
     * @param code 编码
     * @param name 名称
     * @param subtitle 小标题
     * @param parent 父级编码字段
     * @param childFieldCode 是否有子节点的名称
     */
    CommonService.listtotreeasync = function (list, code, name, childFieldCode) {
        var _this = this;
        var nodes = [];
        list.forEach(function (item) {
            var node = {
                id: item.ID,
                code: item[code],
                name: _this.getStringFilterByParam(item, name),
                subTitle: item[code],
                hasChildren: false,
                expanded: false,
                disableCheckbox: false,
                DATA: item
            };
            if (item[childFieldCode] === 'Y') {
                node.hasChildren = true;
            }
            nodes.push(node);
        });
        return nodes;
    };
    /**
     * 当前值作为observable
     * 适合在有值的适合返回
     * @param {?} 当前值
     * @return {?}
     */
    CommonService.createObservable = function (obj) {
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            observer.next(obj);
            observer.complete();
        });
    };
    /**
     * 串行执行两个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    //  createObservableConcat(obs1: Observable<any>, obs2: Observable<any>): Observable<any> {
    //   return Observable.concat(obs1, obs2)
    // }
    /**
     * 并行执行多个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    //  createObservableJoin(obs1: Observable<any>[]): Observable<any> {
    //   return Observable.forkJoin(obs1)
    // }
    /**
     * 复制对象
     * @param obj 复制对象
     */
    CommonService.cloneObj = function (obj, exceptKey) {
        if (typeof obj === 'string') {
            return obj + '';
        }
        var datas = {};
        Object.keys(obj).forEach(function (key) {
            if (exceptKey && exceptKey.length !== 0) {
                if (exceptKey !== key) {
                    datas[key] = obj[key];
                }
            }
            else {
                datas[key] = obj[key];
            }
        });
        return datas;
    };
    /**
     * 复制对象
     * @param obj 复制对象
     */
    CommonService.cloneArray = function (objs, exceptKey) {
        var _this = this;
        if (typeof objs === 'string') {
            return objs + '';
        }
        var datas = [];
        Object.keys(objs).forEach(function (key) {
            if (exceptKey && exceptKey.length !== 0) {
                if (exceptKey !== key) {
                    if (typeof objs === 'object') {
                        datas.push(_this.cloneObj(objs[key], exceptKey));
                    }
                    else {
                        datas.push(objs[key]);
                    }
                }
            }
            else {
                datas.push(_this.cloneObj(objs[key]));
            }
        });
        return datas;
    };
    CommonService.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/fccore/service/dao.service.ts":
/*!*******************************************!*\
  !*** ./src/fccore/service/dao.service.ts ***!
  \*******************************************/
/*! exports provided: FCCONFIG, DaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FCCONFIG", function() { return FCCONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoService", function() { return DaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 前后端通道
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:25
 */






var FCCONFIG = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"];
var DaoService = /** @class */ (function () {
    function DaoService(http) {
        this.FCCONFIG = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.http = http;
        this.cacheService = _cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"];
        this.commonService = _common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"];
    }
    /**
     * 获取请求选项对象
     */
    DaoService.prototype.getOptions = function () {
        var options = {};
        return options;
    };
    /**
     * 获取参数列对象
     * @param param 参数
     * @param isArray 是否是数组 默认为false
     */
    DaoService.prototype.getParamOpt = function (param) {
        if (param instanceof Array) {
            return { DATA: param };
        }
        else {
            return { DATA: [param] };
        }
    };
    /**
     * 获取默认的参数,url中的参数
     *
     */
    DaoService.prototype.getDefaultParams = function () {
        var str = 'TOKEN=';
        var token = this.cacheService.getS('token', '');
        if (token !== null) {
            str += token + '&';
        }
        else {
            str += '&';
        }
        str += 'LAT=0&LNG=0&TIMESTAMP=' + this.commonService.getTimestamp();
        return str;
    };
    /**
     *
     * @param url 请求url
     * @param params
     */
    DaoService.prototype.getWithPromise = function (url, params) {
        var rtn = '';
        Object.keys(params).forEach(function (key) {
            if (params[key] instanceof String) {
                rtn += key + '=' + encodeURIComponent(params[key]) + '&';
            }
        });
        return this.http
            .get(url + '?' + rtn)
            .toPromise()
            .catch(this.handleError);
    };
    /**
     * 执行get查询，如http://ip:port/url?param=
     * @param url 请求全路径
     * @param params 参数内容
     */
    DaoService.prototype.getBase = function (url, params) {
        var rtn = '';
        Object.keys(params).forEach(function (key) {
            rtn += key + '=' + encodeURIComponent(params[key]) + '&';
        });
        rtn += this.getDefaultParams();
        return this.http.get(url + '?' + rtn);
    };
    /**
     * 通过post方法
     * @param url 请求资源
     * @param reqOpts 请求参数
     */
    DaoService.prototype.postBase = function (url, body) {
        return this.http.post(url, body);
    };
    /**
     * 通过post方法
     * @param url 请求资源
     * @param reqOpts 请求参数
     */
    DaoService.prototype.postByParams = function (url, body) {
        return this.http.post(url, this.getParamOpt(body));
    };
    /**
     * @description 异常统一处理，抛出异常内容
     * @param err 错误内容
     */
    DaoService.prototype.handleError = function (error) {
        if (error.status === 401) {
        }
        else {
            return Promise.reject(error.message || error);
        }
    };
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.getFromApi = function (url, params) {
        return this.getBase(FCCONFIG.apiurl + url, params);
    };
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.postFromApi = function (url, params) {
        return this.postByParams(FCCONFIG.apiurl + url, params);
    };
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.getFromSystem = function (url, params) {
        return this.getBase(FCCONFIG.systemurl + url, params);
    };
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.postFromSystem = function (url, params) {
        return this.postByParams(FCCONFIG.systemurl + url, params);
    };
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.getFromLog = function (url, params) {
        return this.getBase(FCCONFIG.logurl + url, params);
    };
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.postFromLog = function (url, params) {
        return this.postByParams(FCCONFIG.logurl + url, params);
    };
    /**
     * 应用系统接口get请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.getFromAuth = function (url, params) {
        return this.getBase(FCCONFIG.authurl + url, params);
    };
    /**
     * 应用系统接口post请求
     * @param url 请求url，不包含主机及
     * @param params
     */
    DaoService.prototype.postFromAuth = function (url, params) {
        return this.postByParams(FCCONFIG.authurl + url, params);
    };
    /**
     * 连接ws并监听消息
     */
    DaoService.prototype.connectionWs = function (userId) {
        var _this = this;
        this.ws = new WebSocket(FCCONFIG.wsurl + '/' + userId);
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            ;
            (_this.ws.onmessage = function (event) {
                observer.next(event.data);
            }),
                (_this.ws.onerror = function (event) {
                    observer.error(event);
                }),
                (_this.ws.onclose = function () {
                    observer.complete();
                });
        });
    };
    /**
     * 发送消息
     * @param message 发送消息体
     */
    DaoService.prototype.sendMessage = function (message) {
        this.ws.send(message);
    };
    DaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DaoService);
    return DaoService;
}());



/***/ }),

/***/ "./src/fccore/service/log.service.ts":
/*!*******************************************!*\
  !*** ./src/fccore/service/log.service.ts ***!
  \*******************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _dao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dao.service */ "./src/fccore/service/dao.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */




var LogService = /** @class */ (function () {
    function LogService(daoService, cacheService) {
        this.daoService = daoService;
        this.cacheService = cacheService;
        this.moduleId = 'SYSTEM';
        this.resId = 'SYSLOG';
    }
    LogService.prototype.debug = function (msg) {
        if (!this.daoService.FCCONFIG.production) {
            console.log(msg);
        }
    };
    LogService.prototype.info = function (msg) {
        if (!this.daoService.FCCONFIG.production) {
            console.log(msg);
        }
    };
    LogService.prototype.error = function (msg) {
        throw new Error(msg);
    };
    /**
     * 记录行为日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    LogService.prototype.writeBehavior = function (moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(moduleId, resId, LOGTYPE.BEHAVIOR, act, LOGLEVEL.INFO, param, result, reason ? reason : '');
        }
        this.info( true ? reason : undefined);
    };
    /**
     * 记录操作日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    LogService.prototype.writeAction = function (moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(moduleId, resId, LOGTYPE.ACTION, act, LOGLEVEL.INFO, param, result, reason ? reason : '');
        }
        this.info( true ? reason : undefined);
    };
    /**
     * 记录错误日志
     * @param moduleId 模块id
     * @param resId 资源id
     * @param act 操作编码
     * @param param 操作输入参数
     * @param result 结果
     * @param reason 原因
     */
    LogService.prototype.writeError = function (moduleId, resId, act, param, result, reason) {
        if (this.daoService.FCCONFIG.production) {
            this.write(LOGTYPE.ERROR, moduleId, resId, act, LOGLEVEL.ERROR, param, result, reason ? reason : '');
        }
        this.error( true ? reason : undefined);
    };
    /**
     *
     * @param type 日志类型 操作日志：ACTION;错误日志：ERROR；行为日志：BEHAVIOR；
     * @param act 操作
     * @param level 级别
     * @param param 输入参数
     * @param result 结果
     * @param reason 原因
     */
    LogService.prototype.write = function (type, moduleId, resId, act, level, param, result, reason) {
        var userInfo = _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"].getS('userinfo');
        var log = {
            LOGTIME: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getTimestamp(),
            SYSTEM: this.daoService.FCCONFIG.pid,
            USERID: userInfo ? userInfo.USERCODE : '',
            ACTION: act,
            MODULEID: moduleId,
            RESID: resId,
            LOGTYPE: type,
            LEVEL: level,
            PARAMS: JSON.stringify(param),
            RESULT: result,
            REASON: reason,
            CLIENTTYPE: 'CLIENT'
        };
        this.daoService
            .postFromLog(_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getUrlBy(this.moduleId, this.resId, 'CREATE'), log)
            .subscribe(function () { });
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dao_service__WEBPACK_IMPORTED_MODULE_4__["DaoService"], _cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/fccore/service/message.service.ts":
/*!***********************************************!*\
  !*** ./src/fccore/service/message.service.ts ***!
  \***********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description:消息服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:53
 */
var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    return MessageService;
}());



/***/ }),

/***/ "./src/fccore/service/user.service.ts":
/*!********************************************!*\
  !*** ./src/fccore/service/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.service */ "./src/fccore/service/common.service.ts");
/* harmony import */ var _cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cache.service */ "./src/fccore/service/cache.service.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 用户服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:44:14
 */




// @Injectable() 装饰器会接受该服务的元数据对象
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
    }
    /**
     *
     * @param route
     * @param state
     */
    UserService.prototype.canActivate = function (route, state) {
        var user = this.getUserInfo();
        // 判断是否登录成功
        if (user && user.USERCODE !== undefined) {
            return true;
        }
        else {
            this.router.navigate(['/signin']);
            return false;
        }
    };
    /**
     * @description 系统登录
     * @param userId 用户编码
     * @param password 用户密码
     */
    UserService.prototype.login = function (userId, password) {
        var param = {
            USERID: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].enCode64(userId),
            PASSWORD: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].enCode64(password),
            AID: 'SYSUSER'
        };
        // this.logService.writeAction(this.moduleId, this.serviceId, InterfaceMethod.LOGIN, param, '登录', '')
        return this.daoService.getFromAuth(_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getUrlBy(this.moduleId, this.serviceId, 'LOGIN'), param);
    };
    /**
     * @description 存储用户数据
     * @param data 登陆后返回数据
     */
    UserService.prototype.storeUserInfo = function (data) {
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('userinfo', data.DATA);
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('token', data.TOKEN);
    };
    /**
     * @description 获取登录用户数据内容
     */
    UserService.prototype.getUserInfo = function () {
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].setS('admin', { USERCODE: 'admin' });
        return _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].getS('userinfo');
    };
    /**
     * @description 用户注销
     */
    UserService.prototype.logout = function (userInfo) {
        if (userInfo) {
            var param = { USERID: userInfo.USERCODE, AID: 'SYSUSER' };
            // 请求注销
            this.logService.writeAction(this.moduleId, this.serviceId, 'LOGOUT', param, '注销', '');
            return this.daoService.getFromAuth(_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].getUrlBy(this.moduleId, this.serviceId, 'LOGOUT'), param);
        }
        else {
            return _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"].createObservable({ CODE: '0', MSG: '操作成功' });
        }
    };
    /**
     * 清除用户信息
     */
    UserService.prototype.clearUserinfo = function () {
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].clearSByKey('userinfo');
        _cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"].clearSByKey('token');
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _grapecity_spread_excelio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grapecity/spread-excelio */ "./node_modules/@grapecity/spread-excelio/index.js");
/* harmony import */ var _grapecity_spread_excelio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_excelio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grapecity/spread-sheets */ "./node_modules/@grapecity/spread-sheets/index.js");
/* harmony import */ var _grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment.dev */ "./src/environments/environment.dev.ts");






_grapecity_spread_sheets__WEBPACK_IMPORTED_MODULE_3__["Spread"].Sheets.LicenseKey = _grapecity_spread_excelio__WEBPACK_IMPORTED_MODULE_2__["LicenseKey"] = "";
if (_environments_environment_dev__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/honghong/github/fc-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map