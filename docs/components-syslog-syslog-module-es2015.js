(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-syslog-syslog-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/syslog/syslog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/syslog/syslog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @Date: 2019-07-04 17:15:57\r\n * @LastEditors: honghong\r\n * @LastEditTime: 2019-07-04 17:15:57\r\n * @Description: \r\n * @email: 3300536651@qq.com\r\n -->\r\nsyslog\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 日志管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:35:03
 */


let SyslogComponent = class SyslogComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
SyslogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SyslogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sys-log',
        template: __webpack_require__(/*! raw-loader!./syslog.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/syslog/syslog.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SyslogComponent);



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/syslog/syslog.module.ts":
/*!********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/syslog/syslog.module.ts ***!
  \********************************************************************/
/*! exports provided: SyslogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyslogModule", function() { return SyslogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _syslog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./syslog.component */ "./src/feature/fc/fcsystem/components/syslog/syslog.component.ts");
/* harmony import */ var _syslog_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./syslog.route */ "./src/feature/fc/fcsystem/components/syslog/syslog.route.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






let SyslogModule = class SyslogModule {
};
SyslogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_syslog_route__WEBPACK_IMPORTED_MODULE_6__["Routers"]),
            src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
        ],
        declarations: [
            _syslog_component__WEBPACK_IMPORTED_MODULE_5__["SyslogComponent"]
        ],
        providers: []
    })
], SyslogModule);



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/syslog/syslog.route.ts":
/*!*******************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/syslog/syslog.route.ts ***!
  \*******************************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _syslog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syslog.component */ "./src/feature/fc/fcsystem/components/syslog/syslog.component.ts");

const Routers = [
    {
        path: 'syslogList',
        component: _syslog_component__WEBPACK_IMPORTED_MODULE_0__["SyslogComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=components-syslog-syslog-module-es2015.js.map