(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sysrole-sysrole-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysrole/sysrole.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/sysrole/sysrole.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 权限管理\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-04-17 12:33:39\r\n -->\r\nsysrole"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 权限管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:33:47
 */


let SysroleComponent = class SysroleComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
SysroleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SysroleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sys-role',
        template: __webpack_require__(/*! raw-loader!./sysrole.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysrole/sysrole.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], SysroleComponent);



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysrole/sysrole.module.ts":
/*!**********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysrole/sysrole.module.ts ***!
  \**********************************************************************/
/*! exports provided: SysroleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysroleModule", function() { return SysroleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _sysrole_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sysrole.route */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.route.ts");
/* harmony import */ var _sysrole_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sysrole.component */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.component.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






let SysroleModule = class SysroleModule {
};
SysroleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_sysrole_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
            src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
        ],
        declarations: [
            _sysrole_component__WEBPACK_IMPORTED_MODULE_6__["SysroleComponent"]
        ],
        providers: []
    })
], SysroleModule);



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysrole/sysrole.route.ts":
/*!*********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysrole/sysrole.route.ts ***!
  \*********************************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _sysrole_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysrole.component */ "./src/feature/fc/fcsystem/components/sysrole/sysrole.component.ts");

const Routers = [
    {
        path: 'sysroleList',
        component: _sysrole_component__WEBPACK_IMPORTED_MODULE_0__["SysroleComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=components-sysrole-sysrole-module-es2015.js.map