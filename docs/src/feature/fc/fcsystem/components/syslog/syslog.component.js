import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 日志管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:35:03
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let SyslogComponent = class SyslogComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
SyslogComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-log',
        templateUrl: './syslog.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], SyslogComponent);
export { SyslogComponent };
//# sourceMappingURL=syslog.component.js.map