(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fciframe-fciframe-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fciframe/fciframe.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fciframe/fciframe.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: iframe\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-04-17 12:26:37\r\n -->\r\n<iframe style=\"width:100%;height:800px;\" [src]=\"iframeUrl\">\r\n</iframe>\r\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/fciframe/fciframe.component.ts":
/*!**************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fciframe/fciframe.component.ts ***!
  \**************************************************************/
/*! exports provided: FciframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FciframeComponent", function() { return FciframeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: iframe
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-15 14:03:06
 */



var FciframeComponent = /** @class */ (function () {
    function FciframeComponent(router, activedRoute, sanitizer) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sanitizer = sanitizer;
        // iframe页里的内容并不属于节点的信息,所以路由复用会重新渲染iframe的内容
        var url = 'https://ng.ant.design/components/form/zh';
        this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    FciframeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
    ]; };
    FciframeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fciframe',
            template: __webpack_require__(/*! raw-loader!./fciframe.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fciframe/fciframe.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], FciframeComponent);
    return FciframeComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fciframe/fciframe.module.ts":
/*!***********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fciframe/fciframe.module.ts ***!
  \***********************************************************/
/*! exports provided: FciframeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FciframeModule", function() { return FciframeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fciframe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fciframe.component */ "./src/feature/fc/fcdemo/fciframe/fciframe.component.ts");
/* harmony import */ var _fciframe_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fciframe.route */ "./src/feature/fc/fcdemo/fciframe/fciframe.route.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






var FciframeModule = /** @class */ (function () {
    function FciframeModule() {
    }
    FciframeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fciframe_route__WEBPACK_IMPORTED_MODULE_6__["Routers"]),
                src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
            ],
            declarations: [
                _fciframe_component__WEBPACK_IMPORTED_MODULE_5__["FciframeComponent"]
            ],
            providers: []
        })
    ], FciframeModule);
    return FciframeModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fciframe/fciframe.route.ts":
/*!**********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fciframe/fciframe.route.ts ***!
  \**********************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fciframe_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fciframe.component */ "./src/feature/fc/fcdemo/fciframe/fciframe.component.ts");

var Routers = [
    {
        path: 'fciframe',
        component: _fciframe_component__WEBPACK_IMPORTED_MODULE_0__["FciframeComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=fciframe-fciframe-module-es5.js.map