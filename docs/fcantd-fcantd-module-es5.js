(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcantd-fcantd-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcantd/fcantd.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcantd/fcantd.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @Date: 2019-10-11 17:55:22\r\n * @LastEditors: honghong\r\n * @LastEditTime: 2019-10-14 16:24:54\r\n * @Description: \r\n * @email: 3300536651@qq.com\r\n -->\r\n<div class=\"fc-row\">\r\n  <div nz-row>\r\n    <p nz-col nzSpan=\"24\">\r\n      更多组件使用 请跳转到: <a href=\"https://ng.ant.design/docs/introduce/zh\"\r\n        target=\"_blank\">https://ng.ant.design/docs/introduce/zh</a>\r\n    </p>\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-alert nzType=\"info\" nzMessage=\"Ant Design 组件\"></nz-alert>\r\n    </div>\r\n    <div nz-col nzSpan=\"24\">\r\n      <div class=\"carousel-wrap\">\r\n        <nz-carousel nzAutoPlay>\r\n          <div nz-carousel-content *ngFor=\"let item of carsousels\">\r\n            <div class=\"carsousel-box\">\r\n              <img [src]=\"item.src\" width=\"100%\" height=\"300\" />\r\n            </div>\r\n          </div>\r\n        </nz-carousel>\r\n      </div>\r\n\r\n    </div>\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-card nzTitle=\"按钮\" class=\"fc-card\">\r\n        <button nz-button nzType=\"primary\">Primary</button>\r\n        <button nz-button nzType=\"default\">Default</button>\r\n        <button nz-button nzType=\"dashed\">Dashed</button>\r\n        <button nz-button nzType=\"danger\">Danger</button>\r\n        <button nz-button nzType=\"link\">Link</button>\r\n      </nz-card>\r\n    </div>\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-card nzTitle=\"标签\" class=\"fc-card\">\r\n        <div>\r\n          <nz-tag [nzColor]=\"'magenta'\">magenta</nz-tag>\r\n          <nz-tag [nzColor]=\"'red'\">red</nz-tag>\r\n          <nz-tag [nzColor]=\"'volcano'\">volcano</nz-tag>\r\n          <nz-tag [nzColor]=\"'orange'\">orange</nz-tag>\r\n          <nz-tag [nzColor]=\"'gold'\">gold</nz-tag>\r\n          <nz-tag [nzColor]=\"'lime'\">lime</nz-tag>\r\n          <nz-tag [nzColor]=\"'green'\">green</nz-tag>\r\n          <nz-tag [nzColor]=\"'cyan'\">cyan</nz-tag>\r\n          <nz-tag [nzColor]=\"'blue'\">blue</nz-tag>\r\n          <nz-tag [nzColor]=\"'geekblue'\">geekblue</nz-tag>\r\n          <nz-tag [nzColor]=\"'purple'\">purple</nz-tag>\r\n        </div>\r\n        <div>\r\n          <nz-tag [nzColor]=\"'#f50'\">#f50</nz-tag>\r\n          <nz-tag [nzColor]=\"'#2db7f5'\">#2db7f5</nz-tag>\r\n          <nz-tag [nzColor]=\"'#87d068'\">#87d068</nz-tag>\r\n          <nz-tag [nzColor]=\"'#108ee9'\">#108ee9</nz-tag>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n    <div nz-col nzSpan=\"24\">\r\n      <nz-card nzTitle=\"警告提示\" class=\"fc-card\">\r\n        <div>\r\n          <nz-alert nzType=\"success\" nzMessage=\"Success Text\"></nz-alert>\r\n          <nz-alert nzType=\"info\" nzMessage=\"Info Text\"></nz-alert>\r\n          <nz-alert nzType=\"warning\" nzMessage=\"Warning Text\"></nz-alert>\r\n          <nz-alert nzType=\"error\" nzMessage=\"Error Text\"></nz-alert>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n  <div nz-row nzGutter=\"16\">\r\n    <div nz-col nzSpan=\"8\">\r\n      <nz-card nzTitle=\"标题\" class=\"fc-card\">\r\n        <div>\r\n          <h1 nz-title>h1. Ant Design</h1>\r\n          <h2 nz-title>h2. Ant Design</h2>\r\n          <h3 nz-title>h3. Ant Design</h3>\r\n          <h4 nz-title>h4. Ant Design</h4>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n      <nz-card nzTitle=\"文本组件\" class=\"fc-card\">\r\n        <div>\r\n          <span nz-text>Ant Design</span>\r\n          <br>\r\n          <span nz-text nzType=\"secondary\">Ant Design</span>\r\n          <br>\r\n          <span nz-text nzType=\"warning\">Ant Design</span>\r\n          <br>\r\n          <span nz-text nzType=\"danger\">Ant Design</span>\r\n          <br>\r\n          <span nz-text nzDisabled>Ant Design</span>\r\n          <br>\r\n          <span nz-text><mark>Ant Design</mark></span>\r\n          <br>\r\n          <span nz-text><code>Ant Design</code></span>\r\n          <br>\r\n          <span nz-text><u>Ant Design</u></span>\r\n          <br>\r\n          <span nz-text><del>Ant Design</del></span>\r\n          <br>\r\n          <span nz-text><strong>Ant Design</strong></span>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n    <div nz-col nzSpan=\"8\">\r\n      <nz-card nzTitle=\"文档样例\" class=\"fc-card\">\r\n        <div>\r\n          <h2 nz-title>\r\n            设计资源\r\n          </h2>\r\n          <p nz-paragraph>\r\n            我们提供完善的设计原则、最佳实践和设计资源文件 （<span nz-text><code>Sketch</code></span> 和\r\n            <span nz-text><code>Axure</code></span>），来帮助业务快速设计出高质 量的产品原型。\r\n          </p>\r\n          <article nz-typography>\r\n            <ul>\r\n              <li>\r\n                <a href=\"/docs/spec/proximity\">设计原则</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"/docs/pattern/navigation\">设计模式</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"/docs/resource/download\">设计资源</a>\r\n              </li>\r\n            </ul>\r\n          </article>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/fcantd/fcantd.component.ts":
/*!**********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcantd/fcantd.component.ts ***!
  \**********************************************************/
/*! exports provided: FcantdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcantdComponent", function() { return FcantdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: honghong
 * @Date: 2019-10-11 17:55:30
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 16:15:13
 * @Description:
 * @email: 3300536651@qq.com
 */


var FcantdComponent = /** @class */ (function () {
    function FcantdComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.carsousels = [
            {
                id: 1,
                src: 'assets/image/1.jpeg'
            },
            {
                id: 2,
                src: 'assets/image/2.jpg'
            },
            {
                id: 3,
                src: 'assets/image/3.jpg'
            },
            {
                id: 4,
                src: 'assets/image/4.jpg'
            },
            {
                id: 5,
                src: 'assets/image/5.jpg'
            }
        ];
    }
    FcantdComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    FcantdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fc-antd',
            template: __webpack_require__(/*! raw-loader!./fcantd.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcantd/fcantd.component.html"),
            styles: ["\n      [nz-button] {\n        margin-right: 8px;\n        margin-bottom: 12px;\n      }\n      .carousel-wrap {\n        width: 100%;\n        height: 300px;\n      }\n      [nz-carousel-content]{\n        height:300px;\n        text-align: center;\n        background: #364d79;\n        color: #fff;\n        overflow: hidden;\n      }\n      .carsousel-box {\n        width: 100%;\n        height:300px;\n      }\n      [nz-carousel-content] img {\n        object-fit: cover;\n      }\n      .ant-tag {\n        margin-bottom: 8px;\n      }\n      nz-alert {\n        margin-bottom: 16px;\n      }\n    "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FcantdComponent);
    return FcantdComponent;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcantd/fcantd.module.ts":
/*!*******************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcantd/fcantd.module.ts ***!
  \*******************************************************/
/*! exports provided: FcantdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcantdModule", function() { return FcantdModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcantd_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcantd.component */ "./src/feature/fc/fcdemo/fcantd/fcantd.component.ts");
/* harmony import */ var _fcantd_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcantd.route */ "./src/feature/fc/fcdemo/fcantd/fcantd.route.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






var FcantdModule = /** @class */ (function () {
    function FcantdModule() {
    }
    FcantdModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcantd_route__WEBPACK_IMPORTED_MODULE_6__["Routers"]),
                src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
            ],
            declarations: [
                _fcantd_component__WEBPACK_IMPORTED_MODULE_5__["FcantdComponent"]
            ],
            providers: []
        })
    ], FcantdModule);
    return FcantdModule;
}());



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcantd/fcantd.route.ts":
/*!******************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcantd/fcantd.route.ts ***!
  \******************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcantd_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcantd.component */ "./src/feature/fc/fcdemo/fcantd/fcantd.component.ts");

var Routers = [
    {
        path: 'fcantd',
        component: _fcantd_component__WEBPACK_IMPORTED_MODULE_0__["FcantdComponent"]
    }
];


/***/ })

}]);
//# sourceMappingURL=fcantd-fcantd-module-es5.js.map