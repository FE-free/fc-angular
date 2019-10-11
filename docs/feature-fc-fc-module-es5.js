(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feature-fc-fc-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/building/building.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/building/building.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 正在开发中\n * @email: 3300536651@qq.com\n * @Date: 2019-04-09 10:46:22\n * @LastEditTime: 2019-07-15 12:43:16\n -->\n<div class=\"fc-building\">\n  <span>正</span>\n  <span>在</span>\n  <span>开</span>\n  <span>发</span>\n  <span>中</span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/home/home.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/feature/fc/fcsystem/components/home/home.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 首页\n * @email: 3300536651@qq.com\n * @Date: 2019-04-12 16:39:30\n * @LastEditTime: 2019-07-12 17:43:22\n -->\n<div class=\"fc-home-page\">\n  <div nz-row [nzGutter]=\"20\">\n    <!-- 图表状态 -->\n    <div nz-col [nzSpan]=\"12\">\n      <nz-card class=\"sys-home-card fc-mtop-0\" nzTitle=\"图表状态\" [nzBordered]=\"false\">\n        <div>\n          <div id=\"chartBar\"></div>\n        </div>\n      </nz-card>\n    </div>\n    <!-- 对比图 -->\n    <div nz-col [nzSpan]=\"12\">\n      <nz-card class=\"sys-home-card fc-mtop-0\" nzTitle=\"对比图\" [nzBordered]=\"false\">\n        <div id=\"chartLine\"></div>\n      </nz-card>\n    </div>\n    <!-- 工作计划 -->\n    <div nz-col [nzSpan]=\"12\">\n      <nz-card class=\"sys-home-card\" nzTitle=\"工作计划\" [nzBordered]=\"false\">\n          <nz-calendar class=\"fc-calendar\">\n              <ul *nzDateCell=\"let date\" class=\"events\">\n                <ng-container [ngSwitch]=\"date.getDate()\">\n                  <ng-container *ngSwitchCase=\"8\">\n                    <li *ngFor=\"let item of listDataMap.eight\">\n                      <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngSwitchCase=\"10\">\n                    <li *ngFor=\"let item of listDataMap.ten\">\n                      <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>\n                    </li>\n                  </ng-container>\n                  <ng-container *ngSwitchCase=\"11\">\n                    <li *ngFor=\"let item of listDataMap.eleven\">\n                      <nz-badge [nzStatus]=\"item.type\" [nzText]=\"item.content\"></nz-badge>\n                    </li>\n                  </ng-container>\n                </ng-container>\n              </ul>\n              <ng-container *nzMonthCell=\"let month\">\n                <div *ngIf=\"getMonthData(month) as monthData\" class=\"notes-month\">\n                  <section>{{ monthData }}</section>\n                  <span>Backlog number</span>\n                </div>\n              </ng-container>\n            </nz-calendar>\n      </nz-card>\n    </div>\n    <!-- 待办任务 -->\n    <div nz-col [nzSpan]=\"12\">\n      <nz-card class=\"sys-home-card\" nzTitle=\"待办任务\" [nzBordered]=\"false\">\n        <nz-list [nzDataSource]=\"toDoTaks\" [nzRenderItem]=\"item\" [nzItemLayout]=\"'horizontal'\">\n          <ng-template #item let-item>\n            <nz-list-item>\n              <nz-list-item-meta [nzTitle]=\"nzTitle\"\n                nzAvatar=\"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png\"\n                nzDescription=\"报表任务还未完成，请在2019年6月1日之前完成。\">\n                <ng-template #nzTitle>\n                  <a href=\"https://ng.ant.design\">{{ item.title }}</a>\n                </ng-template>\n              </nz-list-item-meta>\n            </nz-list-item>\n          </ng-template>\n        </nz-list>\n      </nz-card>\n    </div>\n    <!-- 系统公告 -->\n    <div nz-col [nzSpan]=\"12\">\n      <nz-card class=\"sys-home-card\" nzTitle=\"系统公告\" [nzBordered]=\"false\">\n        <nz-timeline class=\"fc-timeline\">\n          <nz-timeline-item nzColor=\"green\">\n            <div class=\"timelie-title\">\n              <span> 星期一</span>\n              <span class=\"time\">11:24</span>\n            </div>\n            系统维护，资料卡功能暂时受限 2015-09-01\n          </nz-timeline-item>\n          <nz-timeline-item nzColor=\"green\">\n            <div class=\"timelie-title\">\n              <span> 星期一</span>\n              <span class=\"time\">11:24</span>\n            </div>系统正在优化中，敬请期待 2015-09-01\n          </nz-timeline-item>\n          <nz-timeline-item nzColor=\"red\">\n            <div class=\"timelie-title\">\n              <span> 星期一</span>\n              <span class=\"time\">11:24</span>\n            </div>\n            <p>系统正在优化中，敬请期待 1</p>\n            <p>系统正在优化中，敬请期待 2</p>\n            <p>系统正在优化中，敬请期待s 3 2015-09-01</p>\n          </nz-timeline-item>\n          <nz-timeline-item>\n            <div class=\"timelie-title\">\n              <span>星期一</span>\n              <span class=\"time\">11:24</span>\n            </div>\n            <p>系统正在优化中，敬请期待 1</p>\n            <p>系统正在优化中，敬请期待 2</p>\n            <p>系统正在优化中，敬请期待 3 2015-09-01</p>\n          </nz-timeline-item>\n        </nz-timeline>\n      </nz-card>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 正在开发中
 * @email: 3300536651@qq.com
 * @Date: 2019-04-09 10:46:22
 * @LastEditTime: 2019-04-17 09:54:47
 */


var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(router) {
        this.router = router;
    }
    BuildingComponent.prototype.ngOnInit = function () { };
    BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'building',
            template: __webpack_require__(/*! raw-loader!./building.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/building/building.component.html"),
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared */ "./src/shared/index.ts");
/* harmony import */ var _fc_route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fc.route */ "./src/feature/fc/fc.route.ts");
/* harmony import */ var _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fcsystem/components/home/home.component */ "./src/feature/fc/fcsystem/components/home/home.component.ts");
/* harmony import */ var src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/building/building.component */ "./src/app/components/building/building.component.ts");

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 平台的模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-11 17:20:14
 */






var FcModule = /** @class */ (function () {
    function FcModule() {
    }
    FcModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                src_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_fc_route__WEBPACK_IMPORTED_MODULE_4__["Routers"])
            ],
            declarations: [
                _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_6__["BuildingComponent"]
            ],
            providers: []
        })
    ], FcModule);
    return FcModule;
}());



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
/* harmony import */ var _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fcsystem/components/home/home.component */ "./src/feature/fc/fcsystem/components/home/home.component.ts");
/* harmony import */ var src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/building/building.component */ "./src/app/components/building/building.component.ts");


var Routers = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _fcsystem_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    },
    {
        path: 'building',
        component: src_app_components_building_building_component__WEBPACK_IMPORTED_MODULE_1__["BuildingComponent"]
    },
    {
        path: '',
        loadChildren: './fcdemo/fcdemo.module#FcdemoModule'
    },
    {
        path: '',
        loadChildren: './fcsystem/fcsystem.module#FcsystemModule'
    }
];


/***/ }),

/***/ "./src/feature/fc/fcsystem/components/home/home.component.less":
/*!*********************************************************************!*\
  !*** ./src/feature/fc/fcsystem/components/home/home.component.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * @Author: luohong\n * @LastEditors: luohong\n * @Description: 首页的样式\n * @email: 3300536651@qq.com\n * @Date: 2019-04-16 15:57:43\n * @LastEditTime: 2019-04-18 14:34:43\n */\n.fc-home-page {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  padding: 10px;\n}\n.sys-home-card {\n  background: #fff;\n  margin-top: 10px;\n}\n.sys-home-box {\n  width: 100%;\n  height: 92px;\n  border-radius: 4px;\n  color: #fff;\n  padding: 16px;\n}\n::ng-deep .sys-home-box .ant-statistic-title {\n  color: #fff;\n}\n.sys-home-box1 {\n  background-color: #1890ff;\n}\n.sys-home-box2 {\n  background-color: #52c41a;\n}\n.sys-home-box3 {\n  background-color: #fa8c16;\n}\n.sys-home-box4 {\n  background-color: #eb2f96;\n}\n.minibar {\n  margin-top: 6px;\n  margin-left: 35px;\n}\n::ng-deep #chartLine .custom-tooltip {\n  width: 100% !important;\n  height: 10% !important;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n::ng-deep #chartLine .custom-tooltip-item {\n  width: 150px;\n  height: 50px;\n  position: relative;\n  float: left;\n  margin-left: 20px;\n  border-left-style: solid;\n  border-left-width: 5px;\n}\n::ng-deep #chartLine .custom-tooltip-item:first-child {\n  margin-left: 0;\n}\n::ng-deep #chartLine .custom-tooltip-item-name {\n  width: 80%;\n  height: 20px;\n  position: absolute;\n  top: 0px;\n  left: 10px;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n::ng-deep #chartLine .custom-tooltip-item-value {\n  width: 80%;\n  height: 30px;\n  position: absolute;\n  bottom: 0px;\n  left: 10px;\n  color: #262626;\n  font-size: 22px;\n}\n::ng-deep .fc-timeline .ant-timeline {\n  padding-left: 150px;\n}\n::ng-deep .fc-timeline .ant-timeline .ant-timeline-item {\n  padding-bottom: 40px;\n}\n::ng-deep .fc-timeline .ant-timeline .timelie-title {\n  position: absolute;\n  left: -150px;\n  width: 115px;\n  text-align: right;\n}\n::ng-deep .fc-timeline .ant-timeline .time {\n  display: block;\n}\n::ng-deep .fc-calendar .events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n::ng-deep .fc-calendar .events .ant-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n::ng-deep .fc-calendar .notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n::ng-deep .fc-calendar .notes-month section {\n  font-size: 28px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9mZWF0dXJlL2ZjL2Zjc3lzdGVtL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwiL0FwcGxpY2F0aW9ucy9ob25naG9uZy9naXRodWIvZmMtYW5ndWxhci9zcmMvZmVhdHVyZS9mYy9mY3N5c3RlbS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztFQU9FO0FDQ0Y7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEQ0Y7QUNFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURBRjtBQ0dBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FEREY7QUNJQTtFQUNFLFdBQUE7QURGRjtBQ0tBO0VBQ0UseUJBQUE7QURIRjtBQ01BO0VBQ0UseUJBQUE7QURKRjtBQ09BO0VBQ0UseUJBQUE7QURMRjtBQ1FBO0VBQ0UseUJBQUE7QURORjtBQ1NBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEUEY7QUNXQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEVEY7QUNZQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FEVkY7QUNhQTtFQUNFLGNBQUE7QURYRjtBQ2NBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FEWkY7QUNlQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEYkY7QUNpQkE7RUFDRSxtQkFBQTtBRGZGO0FDaUJBO0VBQ0Usb0JBQUE7QURmRjtBQ2tCQTtFQUNFLGtCQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBRGhCSjtBQ21CQTtFQUNFLGNBQUE7QURqQkY7QUNxQkE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEbkJGO0FDc0JBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QURwQkY7QUN1QkE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QURyQkY7QUN3QkE7RUFDRSxlQUFBO0FEdEJGIiwiZmlsZSI6InNyYy9mZWF0dXJlL2ZjL2Zjc3lzdGVtL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGx1b2hvbmdcbiAqIEBMYXN0RWRpdG9yczogbHVvaG9uZ1xuICogQERlc2NyaXB0aW9uOiDpppbpobXnmoTmoLflvI9cbiAqIEBlbWFpbDogMzMwMDUzNjY1MUBxcS5jb21cbiAqIEBEYXRlOiAyMDE5LTA0LTE2IDE1OjU3OjQzXG4gKiBATGFzdEVkaXRUaW1lOiAyMDE5LTA0LTE4IDE0OjM0OjQzXG4gKi9cbi5mYy1ob21lLXBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5zeXMtaG9tZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zeXMtaG9tZS1ib3gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuOjpuZy1kZWVwIC5zeXMtaG9tZS1ib3ggLmFudC1zdGF0aXN0aWMtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zeXMtaG9tZS1ib3gxIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBmZjtcbn1cbi5zeXMtaG9tZS1ib3gyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcbn1cbi5zeXMtaG9tZS1ib3gzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhOGMxNjtcbn1cbi5zeXMtaG9tZS1ib3g0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViMmY5Njtcbn1cbi5taW5pYmFyIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbjo6bmctZGVlcCAjY2hhcnRMaW5lIC5jdXN0b20tdG9vbHRpcCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cbjo6bmctZGVlcCAjY2hhcnRMaW5lIC5jdXN0b20tdG9vbHRpcC1pdGVtIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XG59XG46Om5nLWRlZXAgI2NoYXJ0TGluZSAuY3VzdG9tLXRvb2x0aXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuOjpuZy1kZWVwICNjaGFydExpbmUgLmN1c3RvbS10b29sdGlwLWl0ZW0tbmFtZSB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogMjBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAjY2hhcnRMaW5lIC5jdXN0b20tdG9vbHRpcC1pdGVtLXZhbHVlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuOjpuZy1kZWVwIC5mYy10aW1lbGluZSAuYW50LXRpbWVsaW5lIHtcbiAgcGFkZGluZy1sZWZ0OiAxNTBweDtcbn1cbjo6bmctZGVlcCAuZmMtdGltZWxpbmUgLmFudC10aW1lbGluZSAuYW50LXRpbWVsaW5lLWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbjo6bmctZGVlcCAuZmMtdGltZWxpbmUgLmFudC10aW1lbGluZSAudGltZWxpZS10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTE1MHB4O1xuICB3aWR0aDogMTE1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuOjpuZy1kZWVwIC5mYy10aW1lbGluZSAuYW50LXRpbWVsaW5lIC50aW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgLmZjLWNhbGVuZGFyIC5ldmVudHMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLmZjLWNhbGVuZGFyIC5ldmVudHMgLmFudC1iYWRnZS1zdGF0dXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLm5vdGVzLW1vbnRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG59XG46Om5nLWRlZXAgLmZjLWNhbGVuZGFyIC5ub3Rlcy1tb250aCBzZWN0aW9uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuIiwiLypcbiAqIEBBdXRob3I6IGx1b2hvbmdcbiAqIEBMYXN0RWRpdG9yczogbHVvaG9uZ1xuICogQERlc2NyaXB0aW9uOiDpppbpobXnmoTmoLflvI9cbiAqIEBlbWFpbDogMzMwMDUzNjY1MUBxcS5jb21cbiAqIEBEYXRlOiAyMDE5LTA0LTE2IDE1OjU3OjQzXG4gKiBATGFzdEVkaXRUaW1lOiAyMDE5LTA0LTE4IDE0OjM0OjQzXG4gKi9cbi5mYy1ob21lLXBhZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnN5cy1ob21lLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3lzLWhvbWUtYm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuOjpuZy1kZWVwIC5zeXMtaG9tZS1ib3ggLmFudC1zdGF0aXN0aWMtdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnN5cy1ob21lLWJveDEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xufVxuXG4uc3lzLWhvbWUtYm94MiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM0MWE7XG59XG5cbi5zeXMtaG9tZS1ib3gzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhOGMxNjtcbn1cblxuLnN5cy1ob21lLWJveDQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWIyZjk2O1xufVxuXG4ubWluaWJhciB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi8vIOaKmOe6v+WbvuaPkOekulxuOjpuZy1kZWVwICNjaGFydExpbmUgLmN1c3RvbS10b29sdGlwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4XG59XG5cbjo6bmctZGVlcCAjY2hhcnRMaW5lIC5jdXN0b20tdG9vbHRpcC1pdGVtIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHhcbn1cblxuOjpuZy1kZWVwICNjaGFydExpbmUgLmN1c3RvbS10b29sdGlwLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMFxufVxuXG46Om5nLWRlZXAgI2NoYXJ0TGluZSAuY3VzdG9tLXRvb2x0aXAtaXRlbS1uYW1lIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgZm9udC1zaXplOiAxNHB4XG59XG5cbjo6bmctZGVlcCAjY2hhcnRMaW5lIC5jdXN0b20tdG9vbHRpcC1pdGVtLXZhbHVlIHtcbiAgd2lkdGg6IDgwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBjb2xvcjogIzI2MjYyNjtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4vLyDml7bpl7TovbRcbjo6bmctZGVlcCAuZmMtdGltZWxpbmUgLmFudC10aW1lbGluZSB7XG4gIHBhZGRpbmctbGVmdDogMTUwcHg7XG59XG46Om5nLWRlZXAgLmZjLXRpbWVsaW5lIC5hbnQtdGltZWxpbmUgLmFudC10aW1lbGluZS1pdGVte1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuOjpuZy1kZWVwIC5mYy10aW1lbGluZSAuYW50LXRpbWVsaW5lIC50aW1lbGllLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xNTBweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbjo6bmctZGVlcCAuZmMtdGltZWxpbmUgLmFudC10aW1lbGluZSAudGltZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vLyDml6XljoZcbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLmV2ZW50cyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuOjpuZy1kZWVwIC5mYy1jYWxlbmRhciAuZXZlbnRzIC5hbnQtYmFkZ2Utc3RhdHVzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLm5vdGVzLW1vbnRoIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbjo6bmctZGVlcCAuZmMtY2FsZW5kYXIgLm5vdGVzLW1vbnRoIHNlY3Rpb24ge1xuICBmb250LXNpemU6IDI4cHg7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @antv/g2 */ "./node_modules/@antv/g2/build/g2.js");
/* harmony import */ var _antv_g2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_antv_g2__WEBPACK_IMPORTED_MODULE_3__);

/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 首页
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-12 10:58:26
 */



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 首页卡片样式
        this.homeBodyStyle = {
            background: '#fff'
        };
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
    HomeComponent.prototype.ngOnInit = function () { };
    /**
     * 每当 Angular 初始化完组件视图及其子视图之后调用。
     */
    HomeComponent.prototype.ngAfterViewInit = function () {
        // 加载柱状图的数据
        this.chartData();
    };
    /**
     * 柱状图的数据
     */
    HomeComponent.prototype.chartData = function () {
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
        this.chartBar = new _antv_g2__WEBPACK_IMPORTED_MODULE_3__["Chart"]({
            container: 'chartBar',
            forceFit: true,
            height: 300,
            padding: { top: 20, right: 20, bottom: 30, left: 30 }
        });
        this.chartBar.source(this.chartBarData);
        this.chartBar.scale('sales', {
            tickInterval: 20
        });
        this.chartBar.interval().position('year*sales');
        // 渲染柱状图
        this.chartBar.render();
        // 渲染折线图
        this.createChartLine('chartLine', this.chartLineData);
    };
    /**
     * 迷你
     * @param containerId
     * @param data
     * @param sum
     */
    HomeComponent.prototype.createMiniBarChart = function (containerId, data, sum) {
        var chart = new _antv_g2__WEBPACK_IMPORTED_MODULE_3__["Chart"]({
            container: containerId,
            forceFit: true,
            height: 35,
            padding: [36, 30, 30, 30]
        });
        chart.source(data);
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            type: 'mini'
        });
        chart
            .interval()
            .position('index*value')
            .opacity(0.85)
            .color('#fff');
        // 渲染迷你柱状图
        chart.render();
    };
    /**
     * 创建多折线图
     * @param containerId
     * @param data
     */
    HomeComponent.prototype.createChartLine = function (containerId, data) {
        this.chartLine = new _antv_g2__WEBPACK_IMPORTED_MODULE_3__["Chart"]({
            container: containerId,
            forceFit: true,
            height: 300,
            padding: [100, 20, 30, 45] // 上右下左
        });
        this.chartLine.source(data);
        this.chartLine.tooltip({
            follow: false,
            crosshairs: 'y',
            htmlContent: function htmlContent(title, items) {
                var alias = {
                    download: '当日累计下载量',
                    register: '当日累计注册量',
                    bill: '当日累计成交量'
                };
                var html = '<div class="custom-tooltip">';
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var color = item.color;
                    var name = alias[item.name];
                    var value = item.value;
                    var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + color + '">';
                    var domName = '<div class="custom-tooltip-item-name">' + name + '</div>';
                    var domValue = '<div class="custom-tooltip-item-value">' + value + '</div>';
                    var domTail = '</div>';
                    html += domHead + domName + domValue + domTail;
                }
                return html + '</div>';
            }
        });
        this.chartLine.axis('date', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                }
            }
        });
        this.chartLine.axis('value', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                },
                formatter: function formatter(text) {
                    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                }
            }
        });
        this.chartLine.legend(false);
        this.chartLine
            .line()
            .position('date*value')
            .color('type');
        this.chartLine.render();
        this.chartLine.showTooltip({
            x: 300 - 20,
            y: 100
        });
    };
    /**
     * @description: 日历
     * @param {type}
     * @return:
     */
    HomeComponent.prototype.getMonthData = function (date) {
        if (date.getMonth() === 8) {
            return 1394;
        }
        return null;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/feature/fc/fcsystem/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/feature/fc/fcsystem/components/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=feature-fc-fc-module-es5.js.map