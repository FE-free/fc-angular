(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fctable-fctable-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fctable/fctablebasic/fctablebasic.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fctable/fctablebasic/fctablebasic.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @Date: 2019-08-21 10:01:19\n * @LastEditors: luohong\n * @LastEditTime: 2019-08-23 15:59:03\n * @Description: \n * @email: 3300536651@qq.com\n -->\n <nz-table #headerTable [nzData]=\"listOfData\" [nzPageSize]=\"50\" [nzBordered]=\"true\" nzSize=\"small\" [nzScroll]=\"{ y: '340px' }\">\n    <thead>\n      <tr>\n        <th nzWidth=\"150px\">Name</th>\n        <th nzWidth=\"150px\">Age</th>\n        <th>Address</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let data of headerTable.data\">\n        <td>{{ data.name }}</td>\n        <td>{{ data.age }}</td>\n        <td>{{ data.address }}</td>\n      </tr>\n    </tbody>\n  </nz-table>"

/***/ }),

/***/ "./src/feature/fc/fctable/fctable.module.ts":
/*!**************************************************!*\
  !*** ./src/feature/fc/fctable/fctable.module.ts ***!
  \**************************************************/
/*! exports provided: FctableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctableModule", function() { return FctableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fctable_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fctable.route */ "./src/feature/fc/fctable/fctable.route.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _fctablebasic_fctablebasic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fctablebasic/fctablebasic.component */ "./src/feature/fc/fctable/fctablebasic/fctablebasic.component.ts");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-08-23 16:08:27
 */






var FctableModule = /** @class */ (function () {
    function FctableModule() {
    }
    FctableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fctable_route__WEBPACK_IMPORTED_MODULE_4__["Routers"]),
            ],
            declarations: [
                _fctablebasic_fctablebasic_component__WEBPACK_IMPORTED_MODULE_6__["FctablebasicComponent"]
            ],
            providers: []
        })
    ], FctableModule);
    return FctableModule;
}());



/***/ }),

/***/ "./src/feature/fc/fctable/fctable.route.ts":
/*!*************************************************!*\
  !*** ./src/feature/fc/fctable/fctable.route.ts ***!
  \*************************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var _fctablebasic_fctablebasic_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fctablebasic/fctablebasic.component */ "./src/feature/fc/fctable/fctablebasic/fctablebasic.component.ts");

var Routers = [
    {
        path: 'fctablebasic',
        component: _fctablebasic_fctablebasic_component__WEBPACK_IMPORTED_MODULE_0__["FctablebasicComponent"]
    }
];


/***/ }),

/***/ "./src/feature/fc/fctable/fctablebasic/fctablebasic.component.less":
/*!*************************************************************************!*\
  !*** ./src/feature/fc/fctable/fctablebasic/fctablebasic.component.less ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvZmVhdHVyZS9mYy9mY3RhYmxlL2ZjdGFibGViYXNpYy9mY3RhYmxlYmFzaWMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/feature/fc/fctable/fctablebasic/fctablebasic.component.ts":
/*!***********************************************************************!*\
  !*** ./src/feature/fc/fctable/fctablebasic/fctablebasic.component.ts ***!
  \***********************************************************************/
/*! exports provided: FctablebasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FctablebasicComponent", function() { return FctablebasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/*
 * @Author: luohong
 * @Date: 2019-08-21 10:01:19
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-23 15:57:41
 * @Description:
 * @email: 3300536651@qq.com
 */




var FctablebasicComponent = /** @class */ (function () {
    function FctablebasicComponent(router, activedRoute, http) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.http = http;
        this.listOfData = [];
    }
    FctablebasicComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < 100; i++) {
            this.listOfData.push({
                name: "Edward King " + i,
                age: 32,
                address: "London, Park Lane no. " + i
            });
        }
    };
    FctablebasicComponent.prototype.ngAfterViewInit = function () {
    };
    FctablebasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fc-tablebasic',
            template: __webpack_require__(/*! raw-loader!./fctablebasic.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fctable/fctablebasic/fctablebasic.component.html"),
            styles: [__webpack_require__(/*! ./fctablebasic.component.less */ "./src/feature/fc/fctable/fctablebasic/fctablebasic.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FctablebasicComponent);
    return FctablebasicComponent;
}());



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
//# sourceMappingURL=fctable-fctable-module-es5.js.map