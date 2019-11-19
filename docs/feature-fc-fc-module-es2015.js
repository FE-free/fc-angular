(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-fc-fc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/building/building.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/building/building.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 正在开发中\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-09 10:46:22\r\n * @LastEditTime: 2019-07-15 12:43:16\r\n -->\r\n<div class=\"fc-building\">\r\n  <span>正</span>\r\n  <span>在</span>\r\n  <span>开</span>\r\n  <span>发</span>\r\n  <span>中</span>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/home/home.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n * @Author: honghong\r\n * @LastEditors: honghong\r\n * @Description: 首页\r\n * @email: 3300536651@qq.com\r\n * @Date: 2019-04-12 16:39:30\r\n * @LastEditTime: 2019-10-16 09:41:21\r\n -->\r\n<div class=\"fc-home-page\">\r\n  <div nz-row [nzGutter]=\"20\">\r\n    <!-- 图表状态 -->\r\n    <div nz-col [nzSpan]=\"24\">\r\n      <nz-card class=\"sys-home-card fc-mtop-0\" nzTitle=\"图表状态\" [nzBordered]=\"false\">\r\n        <div class=\"fc-chart-box\">\r\n          <fc-g2bar fcId=\"chartBar\" [fcData]=\"chartBarData\"></fc-g2bar>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n    <!-- 对比图 -->\r\n    <div nz-col [nzSpan]=\"24\">\r\n      <nz-card class=\"sys-home-card fc-mtop-0\" nzTitle=\"对比图\" [nzBordered]=\"false\">\r\n        <div class=\"fc-chart-box\">\r\n          <fc-g2line fcId=\"chartLine\" [fcData]=\"chartLineData\"></fc-g2line>\r\n        </div>\r\n      </nz-card>\r\n    </div>\r\n    <!-- 工作计划 -->\r\n    <div nz-col [nzSpan]=\"12\">\r\n      <nz-card class=\"sys-home-card\" nzTitle=\"工作计划\" [nzBordered]=\"false\">\r\n        <nz-calendar class=\"fc-calendar\">\r\n          <ul *nzDateCell=\"let date\" class=\"events\">\r\n            <ng-container [ngSwitch]=\"date.getDate()\">\r\n              <ng-container *ngSwitchCase=\"8\">\r\n                <li *ngFor=\"let item of listDataMap.eight\">\r\n                  <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>\r\n                </li>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"10\">\r\n                <li *ngFor=\"let item of listDataMap.ten\">\r\n                  <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>\r\n                </li>\r\n              </ng-container>\r\n              <ng-container *ngSwitchCase=\"11\">\r\n                <li *ngFor=\"let item of listDataMap.eleven\">\r\n                  <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>\r\n                </li>\r\n              </ng-container>\r\n            </ng-container>\r\n          </ul>\r\n          <ng-container *nzMonthCell=\"let month\">\r\n            <div *ngIf=\"getMonthData(month) as monthData\" class=\"notes-month\">\r\n              <section>{{ monthData }}</section>\r\n              <span>Backlog number</span>\r\n            </div>\r\n          </ng-container>\r\n        </nz-calendar>\r\n      </nz-card>\r\n    </div>\r\n    <!-- 待办任务 -->\r\n    <div nz-col [nzSpan]=\"12\">\r\n      <nz-card class=\"sys-home-card\" nzTitle=\"待办任务\" [nzBordered]=\"false\">\r\n        <nz-list [nzDataSource]=\"toDoTaks\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\r\n          <ng-template #item let-item>\r\n            <nz-list-item>\r\n              <nz-list-item-meta [nzTitle]=\"nzTitle\"\r\n                nzAvatar=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\"\r\n                nzDescription=\"报表任务还未完成，请在2019年6月1日之前完成。\">\r\n                <ng-template #nzTitle>\r\n                  <a href=\"https://ng.ant.design\">{{ item.title }}</a>\r\n                </ng-template>\r\n              </nz-list-item-meta>\r\n            </nz-list-item>\r\n          </ng-template>\r\n        </nz-list>\r\n      </nz-card>\r\n    </div>\r\n    <!-- 系统公告 -->\r\n    <div nz-col [nzSpan]=\"12\">\r\n      <nz-card class=\"sys-home-card\" nzTitle=\"系统公告\" [nzBordered]=\"false\">\r\n        <nz-timeline class=\"fc-timeline\">\r\n          <nz-timeline-item nzColor=\"green\">\r\n            <div class=\"timelie-title\">\r\n              <span> 星期一</span>\r\n              <span class=\"time\">11:24</span>\r\n            </div>\r\n            系统维护，资料卡功能暂时受限 2015-09-01\r\n          </nz-timeline-item>\r\n          <nz-timeline-item nzColor=\"green\">\r\n            <div class=\"timelie-title\">\r\n              <span> 星期一</span>\r\n              <span class=\"time\">11:24</span>\r\n            </div>系统正在优化中，敬请期待 2015-09-01\r\n          </nz-timeline-item>\r\n          <nz-timeline-item nzColor=\"red\">\r\n            <div class=\"timelie-title\">\r\n              <span> 星期一</span>\r\n              <span class=\"time\">11:24</span>\r\n            </div>\r\n            <p>系统正在优化中，敬请期待 1</p>\r\n            <p>系统正在优化中，敬请期待 2</p>\r\n            <p>系统正在优化中，敬请期待s 3 2015-09-01</p>\r\n          </nz-timeline-item>\r\n          <nz-timeline-item>\r\n            <div class=\"timelie-title\">\r\n              <span>星期一</span>\r\n              <span class=\"time\">11:24</span>\r\n            </div>\r\n            <p>系统正在优化中，敬请期待 1</p>\r\n            <p>系统正在优化中，敬请期待 2</p>\r\n            <p>系统正在优化中，敬请期待 3 2015-09-01</p>\r\n          </nz-timeline-item>\r\n        </nz-timeline>\r\n      </nz-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/building/building.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/building/building.component.ts ***!
  \***********************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 正在开发中
 * @email: 3300536651@qq.com
 * @Date: 2019-04-09 10:46:22
 * @LastEditTime: 2019-04-17 09:54:47
 */


let BuildingComponent = class BuildingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
};
BuildingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'building',
        template: __webpack_require__(/*! raw-loader!./building.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/building/building.component.html"),
        styles: [""]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], BuildingComponent);



/***/ }),

/***/ "./src/feature/fc/fc.module.ts":
/*!*************************************!*\
  !*** ./src/feature/fc/fc.module.ts ***!
  \*************************************/
/*! exports provided: FcModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcModule", function() { return FcModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/building/building.component */ "./src/app/components/building/building.component.ts");
/* harmony import */ var src_fccomponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/fccomponents */ "./src/fccomponents/index.ts");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fc_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fc.route */ "./src/feature/fc/fc.route.ts");
/* harmony import */ var _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fcsystem/components/home/home.component */ "./src/feature/fc/fcsystem/components/home/home.component.ts");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台的模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 14:27:31
 */







let FcModule = class FcModule {
};
FcModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            src_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_fccomponents__WEBPACK_IMPORTED_MODULE_4__["FccomponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fc_route__WEBPACK_IMPORTED_MODULE_6__["Routers"])
        ],
        declarations: [
            _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_3__["BuildingComponent"]
        ],
        providers: []
    })
], FcModule);



/***/ }),

/***/ "./src/feature/fc/fc.route.ts":
/*!************************************!*\
  !*** ./src/feature/fc/fc.route.ts ***!
  \************************************/
/*! exports provided: Routers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routers", function() { return Routers; });
/* harmony import */ var src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/building/building.component */ "./src/app/components/building/building.component.ts");
/* harmony import */ var _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fcsystem/components/home/home.component */ "./src/feature/fc/fcsystem/components/home/home.component.ts");


const Routers = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'building',
        component: src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_0__["BuildingComponent"]
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcdemo-fcdemo-module */ "fcdemo-fcdemo-module").then(__webpack_require__.bind(null, /*! ./fcdemo/fcdemo.module */ "./src/feature/fc/fcdemo/fcdemo.module.ts")).then(res => res.FcdemoModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | fcsystem-fcsystem-module */ "fcsystem-fcsystem-module").then(__webpack_require__.bind(null, /*! ./fcsystem/fcsystem.module */ "./src/feature/fc/fcsystem/fcsystem.module.ts")).then(res => res.FcsystemModule)
    }
];


/***/ }),

/***/ "./src/feature/fc/fcsystem/components/home/home.component.less":
/*!*********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/home/home.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * @Author: honghong\n * @LastEditors: honghong\n * @Description: 首页的样式\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-10-16 09:50:06\n */\n.fc-home-page {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 10px;\n}\n.sys-home-card {\n  background: #fff;\n  margin-top: 10px;\n}\n.sys-home-box {\n  width: 100%;\n  height: 92px;\n  border-radius: 4px;\n  color: #fff;\n  padding: 16px;\n}\n::ng-deep .sys-home-box .ant-statistic-title {\n  color: #fff;\n}\n.sys-home-box1 {\n  background-color: #1890ff;\n}\n.sys-home-box2 {\n  background-color: #52c41a;\n}\n.sys-home-box3 {\n  background-color: #fa8c16;\n}\n.sys-home-box4 {\n  background-color: #eb2f96;\n}\n.minibar {\n  margin-top: 6px;\n  margin-left: 35px;\n}\n::ng-deep .fc-timeline .ant-timeline {\n  padding-left: 150px;\n}\n::ng-deep .fc-timeline .ant-timeline .ant-timeline-item {\n  padding-bottom: 40px;\n}\n::ng-deep .fc-timeline .ant-timeline .timelie-title {\n  position: absolute;\n  left: -150px;\n  width: 115px;\n  text-align: right;\n}\n::ng-deep .fc-timeline .ant-timeline .time {\n  display: block;\n}\n::ng-deep .fc-calendar .events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n::ng-deep .fc-calendar .events .ant-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n::ng-deep .fc-calendar .notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n::ng-deep .fc-calendar .notes-month section {\n  font-size: 28px;\n}\n.fc-chart-box {\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlL2ZjL2Zjc3lzdGVtL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic3JjL2ZlYXR1cmUvZmMvZmNzeXN0ZW0vY29tcG9uZW50cy9ob21lL0Q6LzIwMTkvY29kZS9mYy1hbmd1bGFyL3NyYy9mZWF0dXJlL2ZjL2Zjc3lzdGVtL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0U7QUNDRjtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QURDRjtBQ0VBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBREFGO0FDR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURERjtBQ0lBO0VBQ0UsV0FBQTtBREZGO0FDS0E7RUFDRSx5QkFBQTtBREhGO0FDTUE7RUFDRSx5QkFBQTtBREpGO0FDT0E7RUFDRSx5QkFBQTtBRExGO0FDUUE7RUFDRSx5QkFBQTtBRE5GO0FDU0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QURQRjtBQ1dBO0VBQ0UsbUJBQUE7QURURjtBQ1lBO0VBQ0Usb0JBQUE7QURWRjtBQ2FBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEWEY7QUNjQTtFQUNFLGNBQUE7QURaRjtBQ2dCQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QURkRjtBQ2lCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FEZkY7QUNrQkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QURoQkY7QUNtQkE7RUFDRSxlQUFBO0FEakJGO0FDb0JBO0VBQ0Usa0JBQUE7QURsQkYiLCJmaWxlIjoic3JjL2ZlYXR1cmUvZmMvZmNzeXN0ZW0vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogaG9uZ2hvbmdcbiAqIEBMYXN0RWRpdG9yczogaG9uZ2hvbmdcbiAqIEBEZXNjcmlwdGlvbjog6aaW6aG155qE5qC35byPXG4gKiBAZW1haWw6IDMzMDA1MzY2NTFAcXEuY29tXG4gKiBARGF0ZTogMjAxOS0wNC0xNiAxNTo1Nzo0M1xuICogQExhc3RFZGl0VGltZTogMjAxOS0xMC0xNiAwOTo1MDowNlxuICovXG4uZmMtaG9tZS1wYWdlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uc3lzLWhvbWUtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uc3lzLWhvbWUtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbn1cbjo6bmctZGVlcCAuc3lzLWhvbWUtYm94IC5hbnQtc3RhdGlzdGljLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uc3lzLWhvbWUtYm94MSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG59XG4uc3lzLWhvbWUtYm94MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM0MWE7XG59XG4uc3lzLWhvbWUtYm94MyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYThjMTY7XG59XG4uc3lzLWhvbWUtYm94NCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjJmOTY7XG59XG4ubWluaWJhciB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG46Om5nLWRlZXAgLmZjLXRpbWVsaW5lIC5hbnQtdGltZWxpbmUge1xuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xufVxuOjpuZy1kZWVwIC5mYy10aW1lbGluZSAuYW50LXRpbWVsaW5lIC5hbnQtdGltZWxpbmUtaXRlbSB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuOjpuZy1kZWVwIC5mYy10aW1lbGluZSAuYW50LXRpbWVsaW5lIC50aW1lbGllLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTUwcHg7XG4gIHdpZHRoOiAxMTVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG46Om5nLWRlZXAgLmZjLXRpbWVsaW5lIC5hbnQtdGltZWxpbmUgLnRpbWUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLmV2ZW50cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuOjpuZy1kZWVwIC5mYy1jYWxlbmRhciAubm90ZXMtbW9udGgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xuICBmb250LXNpemU6IDI4cHg7XG59XG4uZmMtY2hhcnQtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiLypcbiAqIEBBdXRob3I6IGhvbmdob25nXG4gKiBATGFzdEVkaXRvcnM6IGhvbmdob25nXG4gKiBARGVzY3JpcHRpb246IOmmlumhteeahOagt+W8j1xuICogQGVtYWlsOiAzMzAwNTM2NjUxQHFxLmNvbVxuICogQERhdGU6IDIwMTktMDQtMTYgMTU6NTc6NDNcbiAqIEBMYXN0RWRpdFRpbWU6IDIwMTktMTAtMTYgMDk6NTA6MDZcbiAqL1xuLmZjLWhvbWUtcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3lzLWhvbWUtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zeXMtaG9tZS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG46Om5nLWRlZXAgLnN5cy1ob21lLWJveCAuYW50LXN0YXRpc3RpYy10aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc3lzLWhvbWUtYm94MSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG59XG5cbi5zeXMtaG9tZS1ib3gyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcbn1cblxuLnN5cy1ob21lLWJveDMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE4YzE2O1xufVxuXG4uc3lzLWhvbWUtYm94NCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYjJmOTY7XG59XG5cbi5taW5pYmFyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLy8g5pe26Ze06L20XG46Om5nLWRlZXAgLmZjLXRpbWVsaW5lIC5hbnQtdGltZWxpbmUge1xuICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xufVxuXG46Om5nLWRlZXAgLmZjLXRpbWVsaW5lIC5hbnQtdGltZWxpbmUgLmFudC10aW1lbGluZS1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbjo6bmctZGVlcCAuZmMtdGltZWxpbmUgLmFudC10aW1lbGluZSAudGltZWxpZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1MHB4O1xuICB3aWR0aDogMTE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG46Om5nLWRlZXAgLmZjLXRpbWVsaW5lIC5hbnQtdGltZWxpbmUgLnRpbWUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLy8g5pel5Y6GXG46Om5nLWRlZXAgLmZjLWNhbGVuZGFyIC5ldmVudHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLmV2ZW50cyAuYW50LWJhZGdlLXN0YXR1cyB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLmZjLWNhbGVuZGFyIC5ub3Rlcy1tb250aCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG46Om5nLWRlZXAgLmZjLWNhbGVuZGFyIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uZmMtY2hhcnQtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/feature/fc/fcsystem/components/home/home.component.ts":
/*!*******************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/home/home.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 首页
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-10-14 14:21:48
 */


let HomeComponent = class HomeComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 首页卡片样式
        this.homeBodyStyle = {
            background: '#fff'
        };
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
        // 迷你柱状图1的数据
        this.miniBarData_1 = [
            {
                index: 0,
                value: 74
            },
            {
                index: 1,
                value: 60
            },
            {
                index: 2,
                value: 50
            },
            {
                index: 3,
                value: 10
            },
            {
                index: 4,
                value: 30
            },
            {
                index: 5,
                value: 50
            },
            {
                index: 6,
                value: 35
            },
            {
                index: 7,
                value: 60
            },
            {
                index: 8,
                value: 90
            },
            {
                index: 9,
                value: 100
            }
        ];
        // 折线图数据
        this.chartLineData = [
            {
                date: '2018/8/1',
                type: 'download',
                value: 4623
            },
            {
                date: '2018/8/1',
                type: 'register',
                value: 2208
            },
            {
                date: '2018/8/1',
                type: 'bill',
                value: 182
            },
            {
                date: '2018/8/2',
                type: 'download',
                value: 6145
            },
            {
                date: '2018/8/2',
                type: 'register',
                value: 2016
            },
            {
                date: '2018/8/2',
                type: 'bill',
                value: 257
            },
            {
                date: '2018/8/3',
                type: 'download',
                value: 508
            },
            {
                date: '2018/8/3',
                type: 'register',
                value: 2916
            },
            {
                date: '2018/8/3',
                type: 'bill',
                value: 289
            },
            {
                date: '2018/8/4',
                type: 'download',
                value: 6268
            },
            {
                date: '2018/8/4',
                type: 'register',
                value: 4512
            },
            {
                date: '2018/8/4',
                type: 'bill',
                value: 428
            },
            {
                date: '2018/8/5',
                type: 'download',
                value: 6411
            },
            {
                date: '2018/8/5',
                type: 'register',
                value: 8281
            },
            {
                date: '2018/8/5',
                type: 'bill',
                value: 619
            },
            {
                date: '2018/8/6',
                type: 'download',
                value: 1890
            },
            {
                date: '2018/8/6',
                type: 'register',
                value: 2008
            },
            {
                date: '2018/8/6',
                type: 'bill',
                value: 87
            },
            {
                date: '2018/8/7',
                type: 'download',
                value: 4251
            },
            {
                date: '2018/8/7',
                type: 'register',
                value: 1963
            },
            {
                date: '2018/8/7',
                type: 'bill',
                value: 706
            },
            {
                date: '2018/8/8',
                type: 'download',
                value: 2978
            },
            {
                date: '2018/8/8',
                type: 'register',
                value: 2367
            },
            {
                date: '2018/8/8',
                type: 'bill',
                value: 387
            },
            {
                date: '2018/8/9',
                type: 'download',
                value: 3880
            },
            {
                date: '2018/8/9',
                type: 'register',
                value: 2956
            },
            {
                date: '2018/8/9',
                type: 'bill',
                value: 488
            },
            {
                date: '2018/8/10',
                type: 'download',
                value: 3606
            },
            {
                date: '2018/8/10',
                type: 'register',
                value: 678
            },
            {
                date: '2018/8/10',
                type: 'bill',
                value: 507
            },
            {
                date: '2018/8/11',
                type: 'download',
                value: 4311
            },
            {
                date: '2018/8/11',
                type: 'register',
                value: 3188
            },
            {
                date: '2018/8/11',
                type: 'bill',
                value: 548
            },
            {
                date: '2018/8/12',
                type: 'download',
                value: 4116
            },
            {
                date: '2018/8/12',
                type: 'register',
                value: 3491
            },
            {
                date: '2018/8/12',
                type: 'bill',
                value: 456
            },
            {
                date: '2018/8/13',
                type: 'download',
                value: 6419
            },
            {
                date: '2018/8/13',
                type: 'register',
                value: 2852
            },
            {
                date: '2018/8/13',
                type: 'bill',
                value: 689
            },
            {
                date: '2018/8/14',
                type: 'download',
                value: 1643
            },
            {
                date: '2018/8/14',
                type: 'register',
                value: 4788
            },
            {
                date: '2018/8/14',
                type: 'bill',
                value: 280
            },
            {
                date: '2018/8/15',
                type: 'download',
                value: 445
            },
            {
                date: '2018/8/15',
                type: 'register',
                value: 4319
            },
            {
                date: '2018/8/15',
                type: 'bill',
                value: 176
            }
        ];
        // 待办任务
        this.toDoTaks = [
            {
                title: ' 报表任务 1'
            },
            {
                title: '报表任务 2'
            },
            {
                title: '报表任务 3'
            },
            {
                title: '报表任务 4'
            }
        ];
        // 日历数据
        this.listDataMap = {
            eight: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' }
            ],
            ten: [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' }
            ],
            eleven: [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event........' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' }
            ]
        };
    }
    /**
     * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
     */
    ngOnInit() { }
    /**
     * 每当 Angular 初始化完组件视图及其子视图之后调用。
     */
    ngAfterViewInit() {
    }
    /**
     * @description: 日历
     * @param {type}
     * @return:
     */
    getMonthData(date) {
        if (date.getMonth() === 8) {
            return 1394;
        }
        return null;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.less */ "./src/feature/fc/fcsystem/components/home/home.component.less")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], HomeComponent);



/***/ })

}]);
//# sourceMappingURL=feature-fc-fc-module-es2015.js.map