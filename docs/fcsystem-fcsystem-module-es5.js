(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcsystem-fcsystem-module"],{

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
/* harmony import */ var _fcsystem_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fcsystem.route */ "./src/feature/fc/fcsystem/fcsystem.route.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 系统模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:36:54
 */



var FcsystemModule = /** @class */ (function () {
    function FcsystemModule() {
    }
    FcsystemModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcsystem_route__WEBPACK_IMPORTED_MODULE_3__["Routers"])
            ],
            declarations: [],
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
var Routers = [
    {
        path: '',
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-sysmessage-sysmessage-module */ "components-sysmessage-sysmessage-module").then(__webpack_require__.bind(null, /*! ./components/sysmessage/sysmessage.module */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessage.module.ts")).then(function (res) { return res.SysmessageModule; }); }
    },
    {
        path: 'sysuserList',
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-sysuser-sysuser-module */ "components-sysuser-sysuser-module").then(__webpack_require__.bind(null, /*! ./components/sysuser/sysuser.module */ "./src/feature/fc/fcsystem/components/sysuser/sysuser.module.ts")).then(function (res) { return res.SysuserModule; }); }
    },
    {
        path: 'sysmenuList',
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-sysmenu-sysmenu-module */ "components-sysmenu-sysmenu-module").then(__webpack_require__.bind(null, /*! ./components/sysmenu/sysmenu.module */ "./src/feature/fc/fcsystem/components/sysmenu/sysmenu.module.ts")).then(function (res) { return res.SysmenuModule; }); }
    },
    {
        path: 'sysroleList',
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-sysrole-sysrole-module */ "components-sysrole-sysrole-module").then(__webpack_require__.bind(null, /*! ./components/sysrole/sysrole.module */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.module.ts")).then(function (res) { return res.SysroleModule; }); }
    },
    {
        path: 'syslogList',
        loadChildren: function () { return __webpack_require__.e(/*! import() | components-syslog-syslog-module */ "components-syslog-syslog-module").then(__webpack_require__.bind(null, /*! ./components/syslog/syslog.module */ "./src/feature/fc/fcsystem/components/syslog/syslog.module.ts")).then(function (res) { return res.SyslogModule; }); }
    }
];


/***/ })

}]);
//# sourceMappingURL=fcsystem-fcsystem-module-es5.js.map