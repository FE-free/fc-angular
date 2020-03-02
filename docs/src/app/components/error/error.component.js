import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 错误
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:15
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let ErrorComponent = class ErrorComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
ErrorComponent = tslib_1.__decorate([
    Component({
        selector: 'error',
        templateUrl: './error.component.html',
        styles: [`
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], ErrorComponent);
export { ErrorComponent };
//# sourceMappingURL=error.component.js.map