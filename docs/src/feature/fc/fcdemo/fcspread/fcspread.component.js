import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: spread
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-16 10:43:11
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let FcspreadComponent = class FcspreadComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // spread 样式
        this.spreadStyle = {
            width: '100%',
            height: '100%'
        };
    }
    /**
     * @description spreadJs 初始化
     * @param args
     */
    workbookInit(args) {
        this.spread = args.spread;
    }
};
FcspreadComponent = tslib_1.__decorate([
    Component({
        selector: 'fcspread',
        templateUrl: './fcspread.component.html',
        styles: [
            `
      .fc-spread-content {
        width: 100%;
        height: 700px;
        padding: 10px;
      }
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], FcspreadComponent);
export { FcspreadComponent };
//# sourceMappingURL=fcspread.component.js.map