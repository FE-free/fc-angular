(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./_mock/menus.ts":
/*!************************!*\
  !*** ./_mock/menus.ts ***!
  \************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = {
    P_MENUS: [
        {
            ID: '3ae5c74930da4b1e877efabee3af0005',
            PID: 'BUDGET',
            MENUID: 'BUDGET',
            MENUNAME: '全面预算管理系统',
            ENABLE: 'Y',
            WXMENU: 'N',
            MENUTYPE: 'MENU',
            HASCHILD: 'Y',
            MENUICON: 'icon iconfont icon-ppbs',
            SORT: 1000,
            ROUTER: '/budget',
            P_CHILDMENUS: [
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'BUDGET',
                    MENUID: 'BGBUSSINESS',
                    MENUNAME: '业务组件',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-nhs',
                    PARENT: 'BUDGET',
                    SORT: 1150,
                    ROUTER: '/budget',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'BGLISTINFO',
                            MENUNAME: '查询',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/bglistinfoList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'BGCREATE',
                            MENUNAME: '新增',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/bgcreateList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'BGUPDATE',
                            MENUNAME: '修改',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/bgupdateList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'BGREMOVE',
                            MENUNAME: '删除',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/bgremoveList'
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'BUDGET',
                    MENUID: 'BGDEMO',
                    MENUNAME: 'UI示例',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-nhs',
                    PARENT: 'BUDGET',
                    SORT: 1150,
                    ROUTER: '/budget',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'BGSPREAD',
                            MENUNAME: 'spread报表',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/bgspreadList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'BGTABLE',
                            MENUNAME: '表格',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/bgtableList'
                        }
                    ]
                },
                {
                    ID: '3ae5c74930dab18e877efabee3af0004',
                    PID: 'BUDGET',
                    MENUID: 'SYSTEM',
                    MENUNAME: '系统管理',
                    ENABLE: 'Y',
                    WXMENU: 'N',
                    MENUTYPE: 'MENU',
                    HASCHILD: 'Y',
                    MENUICON: 'fc-icon-nhs',
                    PARENT: 'BUDGET',
                    SORT: 1150,
                    ROUTER: '/budget',
                    P_CHILDMENUS: [
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'SYSEDITPASSWORD',
                            MENUNAME: '修改密码',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'N',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/editpasswordList'
                        },
                        {
                            ID: '63fbb2f0708f4fd68db04a92dd5df121',
                            PID: 'BUDGET',
                            MENUID: 'SYSTEMBASIC',
                            MENUNAME: '基础设置',
                            ENABLE: 'Y',
                            WXMENU: 'N',
                            MENUTYPE: 'APP',
                            APPID: 'SYSMENU',
                            HASCHILD: 'Y',
                            PARENT: 'SYSTEM',
                            SORT: 1152,
                            ROUTER: '/sysmenuList',
                            P_CHILDMENUS: [
                                {
                                    ID: '63fbb2f0708f4fd68db04a92dd5df121',
                                    PID: 'BUDGET',
                                    MENUID: 'SYSTEMBASIC',
                                    MENUNAME: '用户管理',
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
                                    PID: 'BUDGET',
                                    MENUID: 'SYSTEMBASIC',
                                    MENUNAME: '用户管理',
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
                                    PID: 'BUDGET',
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
                                    PID: 'BUDGET',
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

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../feature/budget/budget.module": [
		"./src/feature/budget/budget.module.ts",
		"feature-budget-budget-module"
	],
	"./components/fcdemo/fcdemo.module": [
		"./src/feature/budget/components/fcdemo/fcdemo.module.ts",
		"components-fcdemo-fcdemo-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var src_core_service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/core/service/user.service */ "./src/core/service/user.service.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_building_building_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/building/building.component */ "./src/app/components/building/building.component.ts");





var AppRoutes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"],
        canActivate: [src_core_service_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"]],
        children: [
            {
                path: 'error',
                component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
            },
            {
                path: 'building',
                component: _components_building_building_component__WEBPACK_IMPORTED_MODULE_4__["BuildingComponent"]
            },
            {
                path: 'budget',
                loadChildren: '../feature/budget/budget.module#BudgetModule'
            }
        ]
    },
    {
        path: 'signin',
        component: _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_2__["SigninComponent"]
    },
];


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
/* harmony import */ var src_core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/core/core.module */ "./src/core/core.module.ts");
/* harmony import */ var src_core_service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/core/service/user.service */ "./src/core/service/user.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var _service_layout_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/layout.service */ "./src/app/service/layout.service.ts");
/* harmony import */ var _service_services_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/services.services */ "./src/app/service/services.services.ts");
/* harmony import */ var _components_building_building_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/building/building.component */ "./src/app/components/building/building.component.ts");
/* harmony import */ var _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/routereusestrategy.service */ "./src/app/service/routereusestrategy.service.ts");





















Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
var AppModule = /** @class */ (function () {
    function AppModule(systemService) {
        this.systemService = systemService;
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutes"]),
                src_core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_15__["LayoutComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
                _components_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"],
                _components_building_building_component__WEBPACK_IMPORTED_MODULE_19__["BuildingComponent"],
            ],
            providers: [
                src_core_service_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                _service_layout_service__WEBPACK_IMPORTED_MODULE_17__["LayoutService"],
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouteReuseStrategy"], useClass: _service_routereusestrategy_service__WEBPACK_IMPORTED_MODULE_20__["FcRouteReuseStrategy"] },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_services_services__WEBPACK_IMPORTED_MODULE_18__["SystemService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/building/building.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/building/building.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "正在开发中"

/***/ }),

/***/ "./src/app/components/building/building.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/building/building.component.ts ***!
  \***********************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(router) {
        this.router = router;
    }
    BuildingComponent.prototype.ngOnInit = function () { };
    BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'building',
            template: __webpack_require__(/*! ./building.component.html */ "./src/app/components/building/building.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "error页面"

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



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router) {
        this.router = router;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: ["\n  \n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/layout/layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"layout\">\n  <!-- 顶部工具栏 -->\n  <nz-header>\n    <div class=\"logo\">\n      <i class=\"icon iconfont fc-icon-tielu\"></i>\n      <span class=\"logo-text\">东软越通后台管理系统</span>\n    </div>\n    <div class=\"fc-header-right\">\n      <a class=\"text\">{{companyName}}</a>\n      <i class=\"icon iconfont yt-header-icon fc-icon-information\" (click)=\"toggleSidebar()\" title=\"消息\"></i>\n      <i class=\"icon iconfont yt-header-icon fc-icon-peizhi\" title=\"设置\"></i>\n      <i class=\"icon iconfont yt-header-icon fc-icon-wode\" title=\"我的\"></i>\n      <i class=\"icon iconfont yt-header-icon fc-icon-tuichu\" (click)=\"siginout()\" title=\"退出\"></i>\n    </div>\n  </nz-header>\n  <nz-layout style=\"width: 100%;\">\n    <!-- 菜单导航 -->\n    <nz-sider [(nzWidth)]=\"menuWidth\" class=\"sidebar-menu\" style=\"background:#fff;\">\n      <ul nz-menu [nzMode]=\"'inline'\" style=\"height: calc(100% - 40px);\" [nzInlineCollapsed]=\"menuIsCollapsed\">\n        <ng-container *ngFor=\"let menu of _menus\">\n          <!-- 一级菜单，没有下级 -->\n          <li nz-menu-item *ngIf=\"menu.HASCHILD==='N'\" (click)=\"selectedMenu(menu)\">\n            <span title><i nz-icon type=\"user\"></i>{{menu.MENUNAME}}</span>\n          </li>\n          <!-- 一级菜单，有下级 -->\n          <li nz-submenu *ngIf=\"menu.HASCHILD==='Y' && menu.P_CHILDMENUS && menu.P_CHILDMENUS.length!==0\">\n            <span title><i nz-icon type=\"user\"></i>{{menu.MENUNAME}}</span>\n            <ul>\n              <ng-container *ngFor=\"let childMenu of menu.P_CHILDMENUS\">\n                <!-- 二级菜单，没有下级 -->\n                <li nz-menu-item *ngIf=\"childMenu.HASCHILD==='N'\" (click)=\"selectedMenu(childMenu);\">\n                  <span title><i nz-icon type=\"user\"></i>{{childMenu.MENUNAME}}</span>\n                </li>\n                <!-- 二级菜单，有下级 -->\n                <li nz-submenu\n                  *ngIf=\"childMenu.HASCHILD==='Y' && childMenu.P_CHILDMENUS && childMenu.P_CHILDMENUS.length!==0\">\n                  <span title><i nz-icon type=\"user\"></i>{{childMenu.MENUNAME}}</span>\n                  <ul>\n                    <ng-container *ngFor=\"let grandSonMenu of childMenu.P_CHILDMENUS\">\n                      <!-- 三级级菜单，没有下级 -->\n                      <li nz-menu-item *ngIf=\"grandSonMenu.HASCHILD==='N'\" (click)=\"selectedMenu(grandSonMenu);\">\n                        <span title><i nz-icon type=\"user\"></i>{{grandSonMenu.MENUNAME}}</span>\n                      </li>\n                      <!-- 三级菜单，有下级 -->\n                      <li nz-submenu\n                        *ngIf=\"grandSonMenu.HASCHILD==='Y' && grandSonMenu.P_CHILDMENUS && grandSonMenu.P_CHILDMENUS.length!==0\">\n                        <span title><i nz-icon type=\"user\"></i>{{grandSonMenu.MENUNAME}}</span>\n                        <ul>\n                          <li nz-menu-item *ngFor=\"let lastChidMenu of grandSonMenu.P_CHILDMENUS\"\n                            (click)=\"selectedMenu(lastChidMenu)\">\n                            <span title><i nz-icon type=\"user\"></i>{{lastChidMenu.MENUNAME}}</span>\n                          </li>\n                        </ul>\n                      </li>\n                    </ng-container>\n                  </ul>\n                </li>\n              </ng-container>\n            </ul>\n          </li>\n        </ng-container>\n      </ul>\n      <!-- 切换布局控制按钮 -->\n      <div class=\"layout-toggle\">\n        <i class=\"icon iconfont fc-icon-arrowleft\" (click)=\"toggleLayout()\">\n        </i>\n      </div>\n    </nz-sider>\n    <nz-layout style=\"padding:0 24px 24px\">\n      <!-- 选项卡导航 -->\n      <nz-tabset [nzType]=\"'card'\" [nzSelectedIndex]=\"index\">\n        <nz-tab *ngFor=\"let tab of fcTabs\" (nzClick)=\"selectedTabMenu(tab)\" [nzTitle]=\"titleTemplate\">\n          <ng-template #titleTemplate>\n            <div>{{ tab.name }}<i nz-icon type=\"close\" class=\"ant-tabs-close-x\" (click)=\"closeTab(tab)\"></i></div>\n          </ng-template>\n        </nz-tab>\n      </nz-tabset>\n      <nz-content style=\"background:#fff; padding: 24px; min-height: 280px;height: 500px;overflow: auto;\">\n        <div style=\"color: red;font-size:100px;\">\n          <!-- 内容区 -->\n          <router-outlet [ngStyle]=\"{'height':'100%'}\"></router-outlet>\n        </div>\n      </nz-content>\n    </nz-layout>\n  </nz-layout>\n</nz-layout>\n<!-- 消息侧边栏 -->\n<nz-drawer [nzWidth]=\"300\" [nzMaskStyle]=\"{'top': '64px','background':'red'}\"nzWrapClassName=\"navside\" [nzMask]=\"false\" [nzClosable]=\"false\" [nzVisible]=\"navsideVisible\"\n  nzPlacement=\"right\" nzTitle=\"\" (nzOnClose)=\"closeNavSide()\">\n  <nz-tabset>\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>未读消息</ng-template>\n      <div>\n        content1\n      </div>\n    </nz-tab>\n    <nz-tab [nzTitle]=\"titleTemplate\">\n      <ng-template #titleTemplate>已读消息</ng-template>\n      content2\n    </nz-tab>\n  </nz-tabset>\n</nz-drawer>\n"

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
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment.dev */ "./src/environments/environment.dev.ts");
/* harmony import */ var src_core_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/service/common.service */ "./src/core/service/common.service.ts");






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, activatedRoute, mainService) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.mainService = mainService;
        //导航栏状态
        this._navbarStatus = 'closed';
        //菜单栏状态
        this._navmenuStatus = 'opened';
        //路由打开记录
        this.selectMenu = {};
        // 当前所有菜单
        this._menus = [];
        //子菜单
        this._childMenus = [];
        //布局比例
        this._layoutSpans = '0,1';
        this.fcSelectedIndex = 0;
        this.fcTabs = [];
        // 单位名称
        this.companyName = '总公司';
        //
        this.menuIsCollapsed = false;
        // 消息侧边栏
        this.navsideVisible = false;
        // 菜单导航的宽度
        this.menuWidth = 200;
        this.siginoutVisible = false;
        //监听路由变化
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                //
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                //
                _this.siginoutVisible = false;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                //
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                //
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RoutesRecognized"]) {
                //
            }
        });
        this.fcTabs = [];
        // 点击左侧导航
        src_core_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].subscribe('selectedMenu', function (event) {
            if (event) {
                var selectMenu_1_1 = event.param;
                var tabOne = _this.fcTabs.filter(function (tab) { return tab.content.MENUID === selectMenu_1_1.MENUID; });
                if (tabOne.length > 0) {
                    _this.fcSelectedIndex = tabOne[0].index;
                    _this.selectedTabMenu(tabOne[0]);
                }
                else {
                    var tab = {
                        id: selectMenu_1_1.ID,
                        index: _this.fcTabs.length,
                        enabled: false,
                        name: selectMenu_1_1.MENUNAME,
                        close: true,
                        icon: selectMenu_1_1.MENUICON,
                        content: selectMenu_1_1,
                        refresh: 'Y'
                    };
                    if (_this.fcTabs.length === 0) {
                        tab.enabled = true;
                        tab.close = false;
                    }
                    _this.fcTabs.push(tab);
                    _this.fcSelectedIndex = _this.fcTabs.length - 1;
                    _this.selectedTabMenu(tab);
                }
            }
        });
        //初始化消息配置
        // this._navSideOption = LayoutBusiness.initNavSideOptions();
        // 初始化消息
        // LayoutBusiness.getRealMessage().subscribe(data => {
        //   if (data.length !== 0) {
        //     this._navSideOption.fcValues1.unshift(JSON.parse(data));
        //     this._navSideOption.fcValues1.unshift(JSON.parse(data));
        //   }
        // });
        //如果是产品是tab的显示模式,默认选中第一个导航
        // SystemBusiness.getProduct(environment.pid).subscribe(result => {
        //   if (result.CODE === '0') {
        //     this.productObj = result.DATA[0];
        //     if (undefined !== this.productObj && null !== this.productObj && '' !== this.productObj) {
        //       if (this.productObj.DISPLAYMODE === 'TAB') {
        //         if (this._menus && this._menus.length !== 0) {
        //           // this.selectedtabmain(this._menus[0]);
        //         }
        //       }
        //     }
        //   }
        // });
    }
    /**
     * 显示时加载
     */
    LayoutComponent.prototype.ngOnInit = function () {
        this._menus = this.mainService.getMenus().P_MENUS[0].P_CHILDMENUS;
        //默认选中第一个选项卡
        this.childTabSelectedIndex = 0;
        // 默认选择某个菜单
        src_core_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('selectedMenu', {
            ID: '0',
            MENUID: 'HOME',
            ROUTER: 'home',
            PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].pid,
            MENUTYPE: 'INURL',
            MENUNAME: '首页',
            MENUICON: 'fc-icon-home'
        });
        //导航选项卡
        if (this.fcTabs) {
            this.fcTabs = [];
            this.fcSelectedIndex = 0;
            //把弹出确认框变量存入到服务里
            // MessageService.confirmModal = this.confirmmodal;
            if (this.fcTabs.length === 0) {
                this.fcTabs.push({
                    id: '0',
                    index: 0,
                    enabled: true,
                    name: '首页',
                    close: false,
                    icon: 'fc-icon-home',
                    refresh: 'Y',
                    content: { ID: '0', MENUID: 'HOME', ROUTER: 'home', PID: _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].pid, MENUTYPE: 'INURL' }
                });
                console.log(this.fcTabs);
            }
        }
        this.router.navigate(['/' + 'budget' + '/home']);
    };
    /**
     * 切换布局
     */
    LayoutComponent.prototype.toggleLayout = function () {
        this.menuWidth = this.menuWidth === 50 ? 200 : 50;
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
     * 选中
     * @param menu
     */
    LayoutComponent.prototype.selectedMenu = function (menu) {
        menu.select = true;
        src_core_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('selectedMenu', menu);
        console.log(menu);
    };
    LayoutComponent.prototype.selectedTabMenu = function (tabMenu) {
        src_core_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"].event('tabClicked', tabMenu);
        this.mainService.navMenu(this.router, tabMenu.content, tabMenu.refresh);
    };
    /**
     * 关闭
     * @param tabMenu
     */
    LayoutComponent.prototype.closeTabMenu = function (tabMenu) {
        this.fcTabs.splice(this.fcTabs.indexOf(tabMenu), 1);
    };
    /**
     * 退出登录
     */
    LayoutComponent.prototype.siginout = function () {
        this.siginoutVisible = false;
        this.router.navigate(['/signin']);
    };
    /**
     * 导航栏事件
     * @param event
     */
    // navbarEvent(event: FCEVENT) {
    //   switch (event.eventName) {
    //     case 'toggle'://展开收起消息
    //       this._navbarStatus = event.param;
    //       break;
    //     case 'selectDropdown'://下拉菜单
    //     case 'selectMenu'://下拉菜单
    //       if (undefined !== this.productObj && '' !== this.productObj && null !== this.productObj) {
    //         // 切换布局 有选项卡模式和左侧菜单模式
    //         if (this.productObj.DISPLAYMODE === 'TAB') {
    //           this._layoutSpans = "0,1";
    //         } else {
    //           this._layoutSpans = "2,9";
    //         }
    //       }
    //       if (undefined !== event.param && null !== event.param && '' !== event.param) {
    //         this._menus = event.param.P_CHILDMENUS;
    //       }
    //       let menu = this._menus[0];
    //       if (menu.HASCHILD === 'Y') {
    //         menu.opened = true;
    //         let childMenu = menu.P_CHILDMENUS[0];
    //         if (childMenu.HASCHILD === 'Y') {
    //           childMenu.opened = true;
    //           let gChildMenu = childMenu.P_CHILDMENUS[0];
    //           gChildMenu.select = true;
    //         } else {
    //           childMenu.select = true;
    //         }
    //         break;
    //       } else {
    //         menu.select = true;
    //       }
    //       break;
    //     case 'logout'://登出
    //       SystemBusiness.userService.logout().subscribe(result => {
    //         //清除用户缓存
    //         SystemBusiness.userService.clearUserinfo();
    //         // 清除菜单缓存
    //         // SystemBusiness.menuService.removeMenus();
    //         // 清除tab页面
    //         // if (this.productObj.DISPLAYMODE === 'MENU') {
    //         //   this.fcnavtab.fcTabs = [];
    //         //   this.fcnavtab.fcSelectedIndex = undefined;
    //         // }
    //         SystemBusiness.navigate(['/signin']);
    //       })
    //       break;
    //     case 'editUser'://修改密码
    //       SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/sysprofileList"]);
    //       break;
    //     case 'changeLayout': //切换布局 有选项卡模式和左侧菜单模式
    //       if (event.param === '选项卡') {
    //         this.productObj.DISPLAYMODE = 'TAB';
    //         this._layoutSpans = "0,1";
    //         this.theme = 'default';
    //       } else if (event.param === '菜单') {
    //         this.productObj.DISPLAYMODE = 'MENU';
    //         this._layoutSpans = "2,9";
    //         this.theme = 'blue';
    //       }
    //       break;
    //     case 'changeThemes': //切换皮肤 有default、blue、dark
    //       if (event.param === 'default') {
    //         this.theme = 'default';
    //       } else if (event.param === 'blue') {
    //         this.theme = 'blue';
    //       } else if (event.param === 'dark') {
    //         this.theme = 'dark';
    //       }
    //       break;
    //   }
    // }
    /**
     * 导航父级选项卡跳转路由
     * @param menu
     */
    LayoutComponent.prototype.selectedtabmain = function (menu, refresh) {
        if (refresh === undefined) {
            refresh = 'Y';
        }
        this.childTabSelectedIndex = 0;
        if (menu.P_CHILDMENUS && menu.P_CHILDMENUS.length !== 0) {
            this._childMenus = Object.assign([], menu.P_CHILDMENUS);
            this.selectedtabsub(this._childMenus[0]);
        }
        else {
            this._childMenus.length = 0;
            // SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/" + menu.ROUTER], {
            //   queryParams: { refresh: refresh, MENUICON: menu.MENUICON }
            // });
        }
    };
    /**
     * 导航子级选项卡跳转路由
     * @param menu
     */
    LayoutComponent.prototype.selectedtabsub = function (menu) {
        // SystemBusiness.navigate(["/" + environment.pid.toLocaleLowerCase() + "/" + menu.ROUTER], { queryParams: { refresh: 'Y', MENUICON: menu.MENUICON } });
    };
    /**
     *  菜单事件
     * @param event
     */
    // navmenuEvent(event: FCEVENT) {
    //   switch (event.eventName) {
    //     case 'toggle'://展开收起左侧导航
    //       this._navmenuStatus = event.param;
    //       if (this._navmenuStatus === "closed") {
    //         this._layoutSpans = "3,85";
    //       } else if (this._navmenuStatus === "opened") {
    //         this._layoutSpans = "2,9";
    //       }
    //       break;
    //     case 'select':
    //       //导航并存储列表
    //       event.param.refresh = 'Y';
    //       CommonService.event('selectedMenu', event.param);
    //       break;
    //   }
    // }
    /**
     * 多tab页面事件
     * @param event tab页面事件
     */
    // navtabEvent(event: FCEVENT): void {
    //   switch (event.eventName) {
    //     case 'closed':
    //       this.selectMenu[event.param.MENUID] = "";
    //       break;
    //     case 'selected':
    //       if (!this.selectMenu[event.param.MENUID]) {
    //         //将该路由存放在路由打开记录中
    //         this.selectMenu[event.param.MENUID] = event.param.MENUID;
    //       }
    //       CommonService.event('tabClicked', event.param);
    //       // LayoutBusiness.navMenu(event.param);
    //       break;
    //   }
    // }
    /**
     * 侧边栏页面事件
     * @param event tab页面事件
     */
    // navsideEvent(event: FCEVENT): void {
    //   switch (event.eventName) {
    //     case 'closed':
    //       // 删除缓存
    //       break;
    //     case 'click':
    //       //点击一项
    //       debugger;
    //       // LayoutBusiness.navMessage(event.param);
    //       break;
    //     case 'toggle':
    //       this._navbarStatus = event.param;
    //   }
    // }
    /**
     *
     */
    LayoutComponent.prototype.ngOnDestroy = function () {
        // SystemBusiness.daoService.ws.close();
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/components/layout/layout.component.html"),
            styles: ["\n      .layout {\n        width: 100%;\n        height: 100%;\n      }\n      .logo {\n        overflow: auto;\n        float: left;\n      }\n      .logo .iconfont {\n        color: #fff;\n        font-size: 30px;\n        float: left;\n        margin-right: 10px;\n      }\n      .logo-text {\n        color: #fff;\n        float: left;\n        font-size: 20px;\n      }\n      .fc-header-right {\n        float: right;\n      }\n      .fc-header-right .yt-header-icon {\n        font-size: 26px;\n        color: #fff;\n        margin-right: 15px;\n        cursor: pointer;\n        float: left;\n      }\n      .fc-header-right .text {\n        font-size: 16px;\n        color: #fff;\n        margin-right: 15px;\n        cursor: pointer;\n        float: left;\n      }\n      .sidebar-nav {\n        position: relative;\n      }\n      .layout-toggle {\n        positon: absolute;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        background-color: #f5f5f5;\n      }\n      .layout-toggle .iconfont {\n        color: #333333;\n        font-size: 18px;\n        cursor: pointer;\n      }\n      .layout-toggle .iconfont:hover {\n        color: #000000;\n        font-weight: bold;\n      }\n      ::ng-deep .navside.ant-drawer-content-wrapper {\n        background-color: #ffffff;\n        top: 64px;\n        height: calc(100% - 64px);\n      }\n      ::ng-deep .navside .ant-drawer-body {\n        padding: 0;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_service_layout_service__WEBPACK_IMPORTED_MODULE_3__["LayoutService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/signin/signin.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signin/signin.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sigin-wrap\">\r\n  <div class=\"sigin\">\r\n    <div class=\"sigin-topbar\">\r\n      <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"javascript:;\">\r\n              <i class=\"anticon anticon-api\" style=\"font-size: 30px;\r\n              color: #fff;\r\n              margin-left: 30px;\r\n              margin-top: 15px;\"></i>\r\n              <span style=\"color:#ffffff;font-size:30px;\">{{_projectName}}</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"sigin-body\">\r\n      <div class=\"sigin-body-box\">\r\n        <!-- <div class=\"sigin-body-txt-box\">\r\n        </div> -->\r\n        <div class=\"sigin-module\">\r\n          <h2>登录</h2>\r\n          <div class=\"sigin-error\">\r\n            <div class=\"sigin-error-in\" *ngIf=\"hasError\">\r\n              <i class=\"icon iconfont icon-error\"></i>\r\n              <span>{{msg}}用户名或者密码错误</span>\r\n            </div>\r\n          </div>\r\n          <form class=\"sigin-form\">\r\n            <div class=\"form-group\">\r\n              <nz-input-group [nzSuffix]=\"suffixTemplate\" [nzPrefix]=\"prefixTemplate\">\r\n                <input type=\"text\" nz-input placeholder=\"请输入用户名admin\" [(ngModel)]=\"userId\" name=\"username\" />\r\n              </nz-input-group>\r\n              <ng-template #prefixTemplate><i nz-icon type=\"user\"></i></ng-template>\r\n              <ng-template #suffixTemplate><i nz-icon type=\"close-circle\" (click)=\"userId = ''\" *ngIf=\"username\"></i>\r\n              </ng-template>\r\n\r\n              <!--  没有单独的验证组件 -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <nz-input-group [nzSuffix]=\"pwdSuffixTemplate\" [nzPrefix]=\"pwdPrefixTemplate\">\r\n                <input type=\"text\" nz-input placeholder=\"请输入密码admin\" [(ngModel)]=\"password\" name=\"password\" />\r\n              </nz-input-group>\r\n              <ng-template #pwdSuffixTemplate><i nz-icon type=\"user\"></i></ng-template>\r\n              <ng-template #pwdPrefixTemplate><i nz-icon type=\"close-circle\" (click)=\"password = ''\"\r\n                  *ngIf=\"password\"></i>\r\n              </ng-template>\r\n              <!-- 没有单独的验证组件 -->\r\n            </div>\r\n\r\n            <p class=\"login-p\">本系统推荐使用谷歌或火狐浏览器</p>\r\n            <div class=\"sigin-submit\">\r\n              <button nz-button nzType=\"primary\" (click)=\"login()\">登录</button>\r\n            </div>\r\n            <div class=\"sigin-other\">\r\n              <span>\r\n                <a href=\"javascript:;\" class=\"sigin-other-link\">忘记密码</a>\r\n              </span>\r\n              <span>\r\n                <a href=\"javascript:;\" class=\"sigin-other-link\">忘记用户名</a>\r\n              </span>\r\n              <span>\r\n                <a href=\"javascript:;\" class=\"sigin-other-link\" routerLink=\"/signup\">我要注册</a>\r\n              </span>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/core/service/cache.service */ "./src/core/service/cache.service.ts");
/* harmony import */ var src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.dev */ "./src/environments/environment.dev.ts");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(router) {
        this.router = router;
        this.hasError = false;
        this.msg = '';
        this.userId = '';
        this.password = '';
        this._projectName = src_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].projectName;
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (this.loginValid(this.userId, this.password)) {
            this.router.navigate(['/' + 'budget' + '/home']);
        }
    };
    /**
     * 根据用户密码登录，并存储当前用户的相关信息
     */
    SigninComponent.prototype.login = function () {
        if (this.loginValid(this.userId, this.password)) {
            this.hasError = false;
            src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].setS("userinfo", { USERCODE: 'admin' });
            src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].setS("token", 'ab2be4ef08c0418bab13a6a88c9772e7');
            this.router.navigate(['/' + 'budget' + '/home']);
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
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/components/signin/signin.component.html"),
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

module.exports = ".sigin-wrap {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: auto;\n  background-image: url('login_bg.png');\n  background-size: 100% 100%;\n}\n.sigin {\n  width: 100%;\n  height: 100%;\n}\n.navbar-brand > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.sigin-body {\n  padding: 74px 0 118px;\n  text-align: center;\n}\n.sigin-body .sigin-error {\n  width: 100%;\n  margin-bottom: 30px;\n  line-height: 24px;\n  box-sizing: border-box;\n  font-size: 14px;\n  margin-top: 20px;\n}\n.sigin-error-in {\n  background: #FEEEEB;\n  border: 1px solid #F15532;\n  color: #F15533;\n  text-align: left;\n  padding: 3px 6px;\n}\n.sigin-body .sigin-body-box {\n  width: 990px;\n  margin: auto;\n  position: relative;\n  height: 388px;\n}\n.sigin-body .sigin-body-box .sigin-body-txt-box {\n  text-align: left;\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #ffffff;\n}\n.sigin-body .sigin-body-box .sigin-body-txt-box .start-button {\n  margin-top: 20px;\n}\n.sigin-body .sigin-body-box .sigin-body-txt-box .start-button .start-button-last {\n  margin-left: 20px;\n}\n.sigin-body .sigin-body-box .sigin-module {\n  width: 350px;\n  padding: 30px 20px 40px;\n  background: #0175e1;\n  position: absolute;\n  right: 0;\n  top: 30px;\n  opacity: 0.7;\n}\n.sigin-module h2 {\n  color: #fff;\n}\n.sigin-body .sigin-body-box .sigin-form .form-group {\n  margin-bottom: 20px;\n}\n.sigin-body .sigin-body-box .sigin-form .sigin-submit {\n  margin-top: 30px;\n}\n.sigin-body .sigin-body-box .sigin-other {\n  width: 100%;\n  text-align: right;\n  margin-top: 10px;\n}\n.sigin-body .sigin-body-box .sigin-other .sigin-other-link {\n  font-size: 12px;\n  color: #fff;\n  margin-left: 15px;\n}\n.fc-copyright {\n  padding: 20px;\n}\n.fc-copyright .fc-copyright-in {\n  width: 100%;\n  max-width: 1200px;\n  color: #73777a;\n  font-size: 14px;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.fc-copyright .fc-copyright-in .big a {\n  font-size: 16px;\n  color: #9b9ea0;\n  margin-right: 35px;\n}\n.fc-copyright .fc-copyright-in .big a:hover {\n  color: #108ee9;\n}\n.fc-copyright .fc-copyright-in .link-wrap {\n  padding-top: 32px;\n}\n.fc-copyright .fc-copyright-in .link-wrap .link-item {\n  display: inline-block;\n  font-size: 14px;\n  color: #73777a;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.fc-copyright .fc-copyright-in .link-wrap .link-item:hover {\n  color: #108ee9;\n}\n.fc-copyright .fc-copyright-in .copyright {\n  color: #73777a;\n  font-size: 14px;\n  margin-top: 10px;\n}\n.login-p {\n  color: #fff;\n  text-align: center;\n  letter-spacing: 1px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvaG9uZ2hvbmcvY29kZS9hbmd1bGFyLXl5dC9zcmMvYXBwL2NvbXBvbmVudHMvc2lnbmluL3NpZ25pbi5sZXNzIiwic3JjL2FwcC9jb21wb25lbnRzL3NpZ25pbi9zaWduaW4ubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtBQ0NGO0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDRkY7QURLQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNIRjtBRE1BO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0pGO0FET0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNORjtBRFNBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtBQ1BGO0FEVUE7RUFDRSxnQkFBQTtBQ1JGO0FEV0E7RUFDRSxpQkFBQTtBQ1RGO0FEWUE7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7QUNYRjtBRGNBO0VBQ0UsbUJBQUE7QUNaRjtBRGVBO0VBQ0UsZ0JBQUE7QUNiRjtBRGdCQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDZEY7QURpQkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDZkY7QURzQkE7RUFDRSxhQUFBO0FDcEJGO0FEdUJBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNyQkY7QUR3QkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsY0FBQTtBQ3ZCRjtBRDBCQTtFQUNFLGlCQUFBO0FDeEJGO0FEMkJBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxjQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzNCRjtBRDhCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDNUJGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnaW4td3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2UvbG9naW5fYmcucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cbn1cblxuLnNpZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm5hdmJhci1icmFuZD5pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnNpZ2luLWJvZHkge1xuICBwYWRkaW5nOiA3NHB4IDAgMTE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaWdpbi1lcnJvci1pbiB7XG4gIGJhY2tncm91bmQ6ICNGRUVFRUI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGMTU1MzI7XG4gIGNvbG9yOiAjRjE1NTMzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAzcHggNnB4O1xufVxuXG4uc2lnaW4tYm9keSAuc2lnaW4tYm9keS1ib3gge1xuICB3aWR0aDogOTkwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM4OHB4O1xufVxuXG4uc2lnaW4tYm9keSAuc2lnaW4tYm9keS1ib3ggLnNpZ2luLWJvZHktdHh0LWJveCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWJvZHktYm94IC5zaWdpbi1ib2R5LXR4dC1ib3ggLnN0YXJ0LWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCAuc2lnaW4tYm9keS10eHQtYm94IC5zdGFydC1idXR0b24gLnN0YXJ0LWJ1dHRvbi1sYXN0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCAuc2lnaW4tbW9kdWxlIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogIzAxNzVlMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zaWdpbi1tb2R1bGUgaDIge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWJvZHktYm94IC5zaWdpbi1mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnNpZ2luLWJvZHkgLnNpZ2luLWJvZHktYm94IC5zaWdpbi1mb3JtIC5zaWdpbi1zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2lnaW4tYm9keSAuc2lnaW4tYm9keS1ib3ggLnNpZ2luLW90aGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2lnaW4tYm9keSAuc2lnaW4tYm9keS1ib3ggLnNpZ2luLW90aGVyIC5zaWdpbi1vdGhlci1saW5rIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi8vIC5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCAuc2lnaW4tb3RoZXIgLnNpZ2luLW90aGVyLWxpbms6aG92ZXIge1xuLy8gICAgIGNvbG9yOiAjMTA4ZWU5O1xuLy8gfVxuXG4uZmMtY29weXJpZ2h0IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmZjLWNvcHlyaWdodCAuZmMtY29weXJpZ2h0LWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBjb2xvcjogIzczNzc3YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZmMtY29weXJpZ2h0IC5mYy1jb3B5cmlnaHQtaW4gLmJpZyBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzliOWVhMDtcbiAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xufVxuXG4uZmMtY29weXJpZ2h0IC5mYy1jb3B5cmlnaHQtaW4gLmJpZyBhOmhvdmVyIHtcbiAgY29sb3I6ICMxMDhlZTk7XG59XG5cbi5mYy1jb3B5cmlnaHQgLmZjLWNvcHlyaWdodC1pbiAubGluay13cmFwIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG5cbi5mYy1jb3B5cmlnaHQgLmZjLWNvcHlyaWdodC1pbiAubGluay13cmFwIC5saW5rLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM3Mzc3N2E7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZjLWNvcHlyaWdodCAuZmMtY29weXJpZ2h0LWluIC5saW5rLXdyYXAgLmxpbmstaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjMTA4ZWU5O1xufVxuXG4uZmMtY29weXJpZ2h0IC5mYy1jb3B5cmlnaHQtaW4gLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAjNzM3NzdhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5sb2dpbi1wIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cbiIsIi5zaWdpbi13cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9sb2dpbl9iZy5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbn1cbi5zaWdpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmF2YmFyLWJyYW5kID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uc2lnaW4tYm9keSB7XG4gIHBhZGRpbmc6IDc0cHggMCAxMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZ2luLWJvZHkgLnNpZ2luLWVycm9yIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uc2lnaW4tZXJyb3ItaW4ge1xuICBiYWNrZ3JvdW5kOiAjRkVFRUVCO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRjE1NTMyO1xuICBjb2xvcjogI0YxNTUzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogM3B4IDZweDtcbn1cbi5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCB7XG4gIHdpZHRoOiA5OTBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzg4cHg7XG59XG4uc2lnaW4tYm9keSAuc2lnaW4tYm9keS1ib3ggLnNpZ2luLWJvZHktdHh0LWJveCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCAuc2lnaW4tYm9keS10eHQtYm94IC5zdGFydC1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNpZ2luLWJvZHkgLnNpZ2luLWJvZHktYm94IC5zaWdpbi1ib2R5LXR4dC1ib3ggLnN0YXJ0LWJ1dHRvbiAuc3RhcnQtYnV0dG9uLWxhc3Qge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCAuc2lnaW4tbW9kdWxlIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHggNDBweDtcbiAgYmFja2dyb3VuZDogIzAxNzVlMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAzMHB4O1xuICBvcGFjaXR5OiAwLjc7XG59XG4uc2lnaW4tbW9kdWxlIGgyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc2lnaW4tYm9keSAuc2lnaW4tYm9keS1ib3ggLnNpZ2luLWZvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnNpZ2luLWJvZHkgLnNpZ2luLWJvZHktYm94IC5zaWdpbi1mb3JtIC5zaWdpbi1zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLnNpZ2luLWJvZHkgLnNpZ2luLWJvZHktYm94IC5zaWdpbi1vdGhlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zaWdpbi1ib2R5IC5zaWdpbi1ib2R5LWJveCAuc2lnaW4tb3RoZXIgLnNpZ2luLW90aGVyLWxpbmsge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5mYy1jb3B5cmlnaHQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLmZjLWNvcHlyaWdodCAuZmMtY29weXJpZ2h0LWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBjb2xvcjogIzczNzc3YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZjLWNvcHlyaWdodCAuZmMtY29weXJpZ2h0LWluIC5iaWcgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM5YjllYTA7XG4gIG1hcmdpbi1yaWdodDogMzVweDtcbn1cbi5mYy1jb3B5cmlnaHQgLmZjLWNvcHlyaWdodC1pbiAuYmlnIGE6aG92ZXIge1xuICBjb2xvcjogIzEwOGVlOTtcbn1cbi5mYy1jb3B5cmlnaHQgLmZjLWNvcHlyaWdodC1pbiAubGluay13cmFwIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG4uZmMtY29weXJpZ2h0IC5mYy1jb3B5cmlnaHQtaW4gLmxpbmstd3JhcCAubGluay1pdGVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNzM3NzdhO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmMtY29weXJpZ2h0IC5mYy1jb3B5cmlnaHQtaW4gLmxpbmstd3JhcCAubGluay1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICMxMDhlZTk7XG59XG4uZmMtY29weXJpZ2h0IC5mYy1jb3B5cmlnaHQtaW4gLmNvcHlyaWdodCB7XG4gIGNvbG9yOiAjNzM3NzdhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubG9naW4tcCB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG4iXX0= */"

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
/* harmony import */ var _mock_menus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _mock/menus */ "./_mock/menus.ts");





var LayoutService = /** @class */ (function () {
    function LayoutService(Router, messageService) {
        this.Router = Router;
        this.messageService = messageService;
    }
    /**
     * 获取菜单信息
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
                .navigate(['/' + 'budget' + '/' + menu.ROUTER], params)
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
                .then(function () {
                // this.providers.msgService.endAntLoading();
            })
                .catch(function (error) {
                console.log(error);
                // this.providers.msgService.endAntLoading();
            });
        }
        else {
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
                .then(function () {
                // this.providers.msgService.endAntLoading();
            })
                .catch(function (error) {
                console.log(error);
                // this.providers.msgService.endAntLoading();
                router.navigate(['/error']);
            });
        }
    };
    LayoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
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

var FcRouteReuseStrategy = /** @class */ (function () {
    function FcRouteReuseStrategy() {
    }
    // //是否允许路由复用
    // shouldDetach(route: ActivatedRouteSnapshot): boolean {
    //   if (route.routeConfig.path === 'home') {
    //     return false;
    //   }
    //   return true;
    // }
    /** 表示对所有路由允许复用 如果你有路由不想利用可以在这加一些业务逻辑判断 */
    FcRouteReuseStrategy.prototype.shouldDetach = function (route) {
        if (route.routeConfig.path === 'home' || route.routeConfig.path === 'error') {
            return false;
        }
        if (!route.routeConfig || route.routeConfig.loadChildren) {
            return false;
        }
        return true;
    };
    /** 当路由离开时会触发。按path作为key存储路由快照&组件当前实例对象 */
    FcRouteReuseStrategy.prototype.store = function (route, handle) {
        if (route.routeConfig.path === 'signin') {
            FcRouteReuseStrategy.handlers = {};
        }
        // 当路由离开并且需要删除时候删除
        var url = this.getRouteUrl(route);
        window.sessionStorage.getItem('removeRouter');
        if (route.queryParams['deleteRouter']) {
            FcRouteReuseStrategy.deleteRouteSnapshot(url);
        }
        else {
            FcRouteReuseStrategy.handlers[url] = handle;
        }
    };
    /** 若 path 在缓存中有的都认为允许还原路由 */
    FcRouteReuseStrategy.prototype.shouldAttach = function (route) {
        // console.log('===shouldAttach-route', route);
        if (route.queryParams['refresh'] === 'Y') {
            return false;
        }
        return !!FcRouteReuseStrategy.handlers[this.getRouteUrl(route)];
    };
    /** 从缓存中获取快照，若无则返回null */
    FcRouteReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig) {
            return null;
        }
        if (route.queryParams['refresh'] === 'Y') {
            return null;
        }
        if (route.routeConfig.loadChildren)
            return null;
        var url = this.getRouteUrl(route);
        var rtn = FcRouteReuseStrategy.handlers[url];
        if (rtn !== undefined) {
            return rtn;
        }
        else {
            return null;
        }
    };
    /** 进入路由触发，判断是否同一路由 */
    FcRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return (JSON.stringify(future.params) === JSON.stringify(curr.params) && future.routeConfig === curr.routeConfig);
    };
    FcRouteReuseStrategy.prototype.getRouteUrl = function (route) {
        var path = route['_routerState'].url.replace(/\//g, '_');
        return path;
    };
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

/***/ "./src/app/service/services.services.ts":
/*!**********************************************!*\
  !*** ./src/app/service/services.services.ts ***!
  \**********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SystemService = /** @class */ (function () {
    function SystemService(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        // 初始化此工程方法
        this.init();
    }
    /**
     * 初始化服务类库
     * @param providers 服务类库
     */
    SystemService.prototype.init = function () {
        // 初始化angular相关的工具服务类
        // ParentBusiness.pInit(this.providers, this.activatedRoute, this.router);
    };
    SystemService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/core/core.module.ts":
/*!*********************************!*\
  !*** ./src/core/core.module.ts ***!
  \*********************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");








Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_3___default.a);
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            declarations: [],
            providers: [],
            bootstrap: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/core/service/cache.service.ts":
/*!*******************************************!*\
  !*** ./src/core/service/cache.service.ts ***!
  \*******************************************/
/*! exports provided: CacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
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

/***/ "./src/core/service/common.service.ts":
/*!********************************************!*\
  !*** ./src/core/service/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);


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
     * 时间格式化处理
     * @param 格式化字符串
     * @param 格式化日期格式化
     * */
    CommonService.dateFormat = function (date, fmt) {
        var o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            S: date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp('(' + k + ')').test(fmt))
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        return fmt;
    };
    /**
     * 时间格式化处理
     * @param 格式化字符串
     * @param 格式化日期格式化
     * */
    CommonService.stringDateFormat = function (dateStr, fmt) {
        return this.dateFormat(this.stringToDate(dateStr), fmt);
    };
    /**
     * 时间戳格式化处理
     * @param 格式化
     * @param 时间戳
     * */
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
        return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
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
    CommonService.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    return CommonService;
}());



/***/ }),

/***/ "./src/core/service/constant.ts":
/*!**************************************!*\
  !*** ./src/core/service/constant.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/core/service/user.service.ts":
/*!******************************************!*\
  !*** ./src/core/service/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/core/service/cache.service */ "./src/core/service/cache.service.ts");
/* harmony import */ var src_core_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/core/service/common.service */ "./src/core/service/common.service.ts");
/* harmony import */ var src_core_service_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/core/service/constant */ "./src/core/service/constant.ts");
/* harmony import */ var src_core_service_constant__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(src_core_service_constant__WEBPACK_IMPORTED_MODULE_5__);






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
            USERID: src_core_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"].enCode64(userId),
            PASSWORD: src_core_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"].enCode64(password),
            AID: 'SYSUSER'
        };
        // this.logService.writeAction(this.moduleId, this.serviceId, InterfaceMethod.LOGIN, param, '登录', '')
        return this.daoService.getFromAuth(src_core_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"].getUrlBy(this.moduleId, this.serviceId, src_core_service_constant__WEBPACK_IMPORTED_MODULE_5__["InterfaceMethod"].LOGIN), param);
    };
    /**
     * @description 存储用户数据
     * @param data 登陆后返回数据
     */
    UserService.prototype.storeUserInfo = function (data) {
        src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].setS('userinfo', data.DATA);
        src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].setS('token', data.TOKEN);
    };
    /**
     * @description 获取登录用户数据内容
     */
    UserService.prototype.getUserInfo = function () {
        src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].setS('admin', { USERCODE: 'admin' });
        return src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].getS('userinfo');
    };
    /**
     * @description 用户注销
     */
    UserService.prototype.logout = function (userInfo) {
        if (userInfo) {
            var param = { USERID: userInfo.USERCODE, AID: 'SYSUSER' };
            //请求注销
            this.logService.writeAction(this.moduleId, this.serviceId, src_core_service_constant__WEBPACK_IMPORTED_MODULE_5__["InterfaceMethod"].LOGOUT, param, '注销', '');
            return this.daoService.getFromAuth(src_core_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"].getUrlBy(this.moduleId, this.serviceId, src_core_service_constant__WEBPACK_IMPORTED_MODULE_5__["InterfaceMethod"].LOGOUT), param);
        }
        else {
            return src_core_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"].createObservable({ CODE: '0', MSG: '操作成功' });
        }
    };
    /**
     * 清除用户信息
     */
    UserService.prototype.clearUserinfo = function () {
        src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].clearSByKey('userinfo');
        src_core_service_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"].clearSByKey('token');
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

/***/ "./src/environments/environment.dev.ts":
/*!*********************************************!*\
  !*** ./src/environments/environment.dev.ts ***!
  \*********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// 开发环境
var environment = {
    production: false,
    pid: "BUDGET",
    projectName: "全面预算管理系统",
    systemurl: "/server/",
    apiurl: "/server/api/",
    logurl: "/server/api/",
    authurl: "/server/api/",
    // wsurl: "ws://192.168.61.223:9000/server/msg",
    wsurl: "ws://10.3.28.64:9080/server/msg",
    license: ''
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment.dev */ "./src/environments/environment.dev.ts");





if (_environments_environment_dev__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/honghong/code/angular-yyt/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map