(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-sysmessage-sysmessage-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 消息详情\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-04-17 12:33:56\r\n -->\r\nSysmessagedetailComponent\r\n"

/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysmessage/sysmessage.module.ts":
/*!****************************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysmessage/sysmessage.module.ts ***!
  \****************************************************************************/
/*! exports provided: SysmessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysmessageModule", function() { return SysmessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _sysmessage_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sysmessage.route */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessage.route.ts");
/* harmony import */ var _sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sysmessagedetail.component */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






var SysmessageModule = /** @class */ (function () {
    function SysmessageModule() {
    }
    SysmessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_sysmessage_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
                src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
            ],
            declarations: [
                _sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_6__["SysmessagedetailComponent"]
            ],
            providers: []
        })
    ], SysmessageModule);
    return SysmessageModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcsystem/components/sysmessage/sysmessage.route.ts":
/*!***************************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/sysmessage/sysmessage.route.ts ***!
  \***************************************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sysmessagedetail.component */ "./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.ts");

var Routers = [
    {
        path: 'sysmessageDetail',
        component: _sysmessagedetail_component__WEBPACK_IMPORTED_MODULE_0__["SysmessagedetailComponent"]
    }
];


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
 * @Author: honghong
 * @LastEditors: honghong
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
    SysmessagedetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    SysmessagedetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'sys-messagedetail',
            template: __webpack_require__(/*! raw-loader!./sysmessagedetail.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/sysmessage/sysmessagedetail.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SysmessagedetailComponent);
    return SysmessagedetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-sysmessage-sysmessage-module-es5.js.map