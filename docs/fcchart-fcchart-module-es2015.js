(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcchart-fcchart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 首页\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-10-14 15:22:15\r\n -->\r\n<div nz-row [nzGutter]=\"20\" class=\"fc-row\">\r\n  <!-- 饼图 -->\r\n  <div nz-col [nzSpan]=\"12\">\r\n    <nz-card class=\"fc-chart-card\" nzTitle=\"饼状图\" [nzBordered]=\"false\">\r\n      <div class=\"fc-chart-box\">\r\n        <fc-g2pie></fc-g2pie>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n\r\n\r\n  <!-- 雷达图 -->\r\n  <div nz-col [nzSpan]=\"12\">\r\n    <nz-card class=\"fc-chart-card\" nzTitle=\"雷达图\" [nzBordered]=\"false\">\r\n      <div class=\"fc-chart-box\">\r\n        <fc-g2radar fcId=\"chartRadar\" [fcData]=\"chartRadarData\"></fc-g2radar>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n  <!-- 柱状图 -->\r\n  <div nz-col [nzSpan]=\"24\">\r\n    <nz-card class=\"fc-chart-card\" nzTitle=\"柱状图\" [nzBordered]=\"false\">\r\n      <div class=\"fc-chart-box\">\r\n        <fc-g2bar fcId=\"chartBar2\" [fcData]=\"chartBarData\"></fc-g2bar>\r\n      </div>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/feature/fc/fcdemo/fcchart/fcchart.module.ts":
/*!*********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcchart/fcchart.module.ts ***!
  \*********************************************************/
/*! exports provided: FcchartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcchartModule", function() { return FcchartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/fccomponents/fccomponent.module */ "./src/fccomponents/fccomponent.module.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fcchart_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcchart.route */ "./src/feature/fc/fcdemo/fcchart/fcchart.route.ts");
/* harmony import */ var _fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fcg2/fcg2.component */ "./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */






let FcchartModule = class FcchartModule {
};
FcchartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcchart_route__WEBPACK_IMPORTED_MODULE_5__["Routers"]),
            src_fccomponents_fccomponent_module__WEBPACK_IMPORTED_MODULE_3__["FccomponentModule"]
        ],
        declarations: [
            _fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_6__["Fcg2Component"]
        ],
        providers: []
    })
], FcchartModule);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcchart/fcchart.route.ts":
/*!********************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcchart/fcchart.route.ts ***!
  \********************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcg2/fcg2.component */ "./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts");

const Routers = [
    {
        path: 'fcg2',
        component: _fcg2_fcg2_component__WEBPACK_IMPORTED_MODULE_0__["Fcg2Component"]
    }
];


/***/ }),

/***/ "./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts":
/*!**************************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.ts ***!
  \**************************************************************/
/*! exports provided: Fcg2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fcg2Component", function() { return Fcg2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 新增
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 15:56:20
 */


let Fcg2Component = class Fcg2Component {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 雷达图数据
        this.chartRadarData = [
            {
                item: 'Design',
                a: 70,
                b: 30
            }, {
                item: 'Development',
                a: 60,
                b: 70
            }, {
                item: 'Marketing',
                a: 50,
                b: 60
            }, {
                item: 'Users',
                a: 40,
                b: 50
            }, {
                item: 'Test',
                a: 60,
                b: 70
            }, {
                item: 'Language',
                a: 70,
                b: 50
            }, {
                item: 'Technology',
                a: 50,
                b: 40
            }, {
                item: 'Support',
                a: 30,
                b: 40
            }, {
                item: 'Sales',
                a: 60,
                b: 40
            }, {
                item: 'UX',
                a: 50,
                b: 60
            }
        ];
        // 柱状图的数据
        this.chartBarData = [
            {
                year: '1 月',
                sales: 58
            },
            {
                year: '2 月',
                sales: 52
            },
            {
                year: '3 月',
                sales: 61
            },
            {
                year: '4 月',
                sales: 145
            },
            {
                year: '5 月',
                sales: 148
            },
            {
                year: '6 月',
                sales: 138
            },
            {
                year: '7 月',
                sales: 178
            },
            {
                year: '8 月',
                sales: 38
            },
            {
                year: '9 月',
                sales: 58
            },
            {
                year: '10 月',
                sales: 38
            },
            {
                year: '11 月',
                sales: 88
            },
            {
                year: '12 月',
                sales: 38
            }
        ];
    }
};
Fcg2Component.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
Fcg2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'fc-g2',
        template: __webpack_require__(/*! raw-loader!./fcg2.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcdemo/fcchart/fcg2/fcg2.component.html"),
        styles: ["\n  .fc-chart-card {\n    margin-bottom : 20px;\n  }\n  .fc-chart-box {\n    width: 80%;\n  }\n  .g2-guide-html {\n    width: 100px;\n    height: 80px;\n    vertical-align: middle;\n    text-align: center;\n    line-height: 0.2;\n  }\n  .g2-guide-html .title {\n      font-size: 12px;\n      color: #8c8c8c;\n      font-weight: 300;\n  }\n  .g2-guide-html .value {\n      font-size: 32px;\n      color: #000;\n      font-weight: bold;\n  }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], Fcg2Component);



/***/ })

}]);
//# sourceMappingURL=fcchart-fcchart-module-es2015.js.map