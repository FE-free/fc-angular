(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fcdemo-fcdemo-module"],{

/***/ "./src/feature/fc/fcdemo/fcdemo.module.ts":
/*!************************************************!*\
  !*** ./src/feature/fc/fcdemo/fcdemo.module.ts ***!
  \************************************************/
/*! exports provided: FcdemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcdemoModule", function() { return FcdemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fcdemo_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fcdemo.route */ "./src/feature/fc/fcdemo/fcdemo.route.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 示例模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 16:02:48
 * @LastEditTime: 2019-10-12 09:29:28
 */



let FcdemoModule = class FcdemoModule {
};
FcdemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fcdemo_route__WEBPACK_IMPORTED_MODULE_3__["Routers"]),
        ],
        declarations: [],
        providers: []
    })
], FcdemoModule);



/***/ }),

/***/ "./src/feature/fc/fcdemo/fcdemo.route.ts":
/*!***********************************************!*\
  !*** ./src/feature/fc/fcdemo/fcdemo.route.ts ***!
  \***********************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
const Routers = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcantd-fcantd-module */ "fcantd-fcantd-module").then(__webpack_require__.bind(null, /*! ./fcantd/fcantd.module */ "./src/feature/fc/fcdemo/fcantd/fcantd.module.ts")).then(res => res.FcantdModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcchart-fcchart-module */ "fcchart-fcchart-module").then(__webpack_require__.bind(null, /*! ./fcchart/fcchart.module */ "./src/feature/fc/fcdemo/fcchart/fcchart.module.ts")).then(res => res.FcchartModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcicon-fcicon-module */ "fcicon-fcicon-module").then(__webpack_require__.bind(null, /*! ./fcicon/fcicon.module */ "./src/feature/fc/fcdemo/fcicon/fcicon.module.ts")).then(res => res.FciconModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fciframe-fciframe-module */ "fciframe-fciframe-module").then(__webpack_require__.bind(null, /*! ./fciframe/fciframe.module */ "./src/feature/fc/fcdemo/fciframe/fciframe.module.ts")).then(res => res.FciframeModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcspread-fcspread-module */ "fcspread-fcspread-module").then(__webpack_require__.bind(null, /*! ./fcspread/fcspread.module */ "./src/feature/fc/fcdemo/fcspread/fcspread.module.ts")).then(res => res.FcspreadModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fctable-fctable-module */ "fctable-fctable-module").then(__webpack_require__.bind(null, /*! ./fctable/fctable.module */ "./src/feature/fc/fcdemo/fctable/fctable.module.ts")).then(res => res.FctableModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fctemplate-fctemplate-module */ "fctemplate-fctemplate-module").then(__webpack_require__.bind(null, /*! ./fctemplate/fctemplate.module */ "./src/feature/fc/fcdemo/fctemplate/fctemplate.module.ts")).then(res => res.FctemplateModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcthreejs-fcthreejs-module */ "fcthreejs-fcthreejs-module").then(__webpack_require__.bind(null, /*! ./fcthreejs/fcthreejs.module */ "./src/feature/fc/fcdemo/fcthreejs/fcthreejs.module.ts")).then(res => res.FcthreejsModule)
    }, {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcprint-fcprint-module */ "fcprint-fcprint-module").then(__webpack_require__.bind(null, /*! ./fcprint/fcprint.module */ "./src/feature/fc/fcdemo/fcprint/fcprint.module.ts")).then(res => res.FcprintModule)
    }
];


/***/ })

}]);
//# sourceMappingURL=fcdemo-fcdemo-module-es2015.js.map