(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcsystem-fcsystem-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/syslog/syslog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/syslog/syslog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "syslog"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 菜单管理\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 12:34:31\n -->\nsysmenu"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 消息详情\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 12:33:56\n -->\nSysmessagedetailComponent\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysrole/sysrole.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/sysrole/sysrole.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 权限管理\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 12:33:39\n -->\nsysrole"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysuser/sysuser.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/sysuser/sysuser.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 用户管理\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-04-17 12:33:13\n -->\nsysrole"

/***/ }),

/***/ "./src/feature/fc/fcsystem/components/syslog/syslog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/syslog/syslog.component.ts ***!
  \***********************************************************************/
/*! exports provided: SyslogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyslogComponent", function() { return SyslogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 日志管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:35:03
 */


var SyslogComponent = /** @class */ (function () {
    function SyslogComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    SyslogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'syslog',
            template: __webpack_require__(/*! raw-loader!./syslog.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/syslog/syslog.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SyslogComponent);
    return SyslogComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.ts ***!
  \*************************************************************************/
/*! exports provided: SysmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysmenuComponent", function() { return SysmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 菜单管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:39
 */


var SysmenuComponent = /** @class */ (function () {
    function SysmenuComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    SysmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sysmenu',
            template: __webpack_require__(/*! raw-loader!./sysmenu.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SysmenuComponent);
    return SysmenuComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SysmessagedetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysmessagedetailComponent", function() { return SysmessagedetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 消息详情
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:14
 */


var SysmessagedetailComponent = /** @class */ (function () {
    function SysmessagedetailComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    SysmessagedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sysmessagedetail',
            template: __webpack_require__(/*! raw-loader!./sysmessagedetail.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SysmessagedetailComponent);
    return SysmessagedetailComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysrole/sysrole.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysrole/sysrole.component.ts ***!
  \*************************************************************************/
/*! exports provided: SysroleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysroleComponent", function() { return SysroleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 权限管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:33:47
 */


var SysroleComponent = /** @class */ (function () {
    function SysroleComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    SysroleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sysrole',
            template: __webpack_require__(/*! raw-loader!./sysrole.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysrole/sysrole.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SysroleComponent);
    return SysroleComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysuser/sysuser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysuser/sysuser.component.ts ***!
  \*************************************************************************/
/*! exports provided: SysuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysuserComponent", function() { return SysuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 用户管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:33:22
 */


var SysuserComponent = /** @class */ (function () {
    function SysuserComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
    SysuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sysuser',
            template: __webpack_require__(/*! raw-loader!./sysuser.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysuser/sysuser.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SysuserComponent);
    return SysuserComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/fcsystem.module.ts":
/*!****************************************************!*\
  !*** ./src/feature/fc/fcsystem/fcsystem.module.ts ***!
  \****************************************************/
/*! exports provided: FcsystemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcsystemModule", function() { return FcsystemModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _components_syslog_syslog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/syslog/syslog.component */ "./src/feature/fc/fcsystem/components/syslog/syslog.component.ts");
/* harmony import */ var _components_sysmenu_sysmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sysmenu/sysmenu.component */ "./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.ts");
/* harmony import */ var _components_sysmessage_sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sysmessage/sysmessagedetail.component */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.ts");
/* harmony import */ var _components_sysrole_sysrole_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sysrole/sysrole.component */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.component.ts");
/* harmony import */ var _components_sysuser_sysuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sysuser/sysuser.component */ "./src/feature/fc/fcsystem/components/sysuser/sysuser.component.ts");
/* harmony import */ var _fcsystem_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fcsystem.route */ "./src/feature/fc/fcsystem/fcsystem.route.ts");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 系统模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-08-21 10:53:51
 */









var FcsystemModule = /** @class */ (function () {
    function FcsystemModule() {
    }
    FcsystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcsystem_route__WEBPACK_IMPORTED_MODULE_9__["Routers"])
            ],
            declarations: [
                _components_sysmessage_sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_6__["SysmessagedetailComponent"],
                _components_sysuser_sysuser_component__WEBPACK_IMPORTED_MODULE_8__["SysuserComponent"],
                _components_sysmenu_sysmenu_component__WEBPACK_IMPORTED_MODULE_5__["SysmenuComponent"],
                _components_sysrole_sysrole_component__WEBPACK_IMPORTED_MODULE_7__["SysroleComponent"],
                _components_syslog_syslog_component__WEBPACK_IMPORTED_MODULE_4__["SyslogComponent"] // 日志管理
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]] // 自定义组件
        })
    ], FcsystemModule);
    return FcsystemModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/fcsystem.route.ts":
/*!***************************************************!*\
  !*** ./src/feature/fc/fcsystem/fcsystem.route.ts ***!
  \***************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _components_syslog_syslog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/syslog/syslog.component */ "./src/feature/fc/fcsystem/components/syslog/syslog.component.ts");
/* harmony import */ var _components_sysmenu_sysmenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sysmenu/sysmenu.component */ "./src/feature/fc/fcsystem/components/sysmenu/sysmenu.component.ts");
/* harmony import */ var _components_sysmessage_sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sysmessage/sysmessagedetail.component */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.ts");
/* harmony import */ var _components_sysrole_sysrole_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sysrole/sysrole.component */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.component.ts");
/* harmony import */ var _components_sysuser_sysuser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sysuser/sysuser.component */ "./src/feature/fc/fcsystem/components/sysuser/sysuser.component.ts");





var Routers = [
    {
        path: 'sysmessageDetail',
        component: _components_sysmessage_sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_2__["SysmessagedetailComponent"]
    },
    {
        path: 'sysuserList',
        component: _components_sysuser_sysuser_component__WEBPACK_IMPORTED_MODULE_4__["SysuserComponent"]
    },
    {
        path: 'sysmenuList',
        component: _components_sysmenu_sysmenu_component__WEBPACK_IMPORTED_MODULE_1__["SysmenuComponent"]
    },
    {
        path: 'sysroleList',
        component: _components_sysrole_sysrole_component__WEBPACK_IMPORTED_MODULE_3__["SysroleComponent"]
    },
    {
        path: 'syslogList',
        component: _components_syslog_syslog_component__WEBPACK_IMPORTED_MODULE_0__["SyslogComponent"]
    }
];


/***/ }),

/***/ "./src/shared/index.ts":
/*!*****************************!*\
  !*** ./src/shared/index.ts ***!
  \*****************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 共享模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-19 10:08:26
 * @LastEditTime: 2019-04-19 10:12:39
 */





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=fcsystem-fcsystem-module-es5.js.map