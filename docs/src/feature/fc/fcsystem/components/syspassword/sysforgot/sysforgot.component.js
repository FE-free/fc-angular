import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 忘记密码
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:51
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let SysforgotComponent = class SysforgotComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
SysforgotComponent = tslib_1.__decorate([
    Component({
        selector: 'sysforgot',
        templateUrl: './sysforgot.component.html',
        styles: [`
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], SysforgotComponent);
export { SysforgotComponent };
//# sourceMappingURL=sysforgot.component.js.map