import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 用户管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 16:29:36
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SysuserBusiness } from '../../business/sysuser.business';
let SysuserComponent = class SysuserComponent {
    constructor(router, activedRoute, sysuserBusiness) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.sysuserBusiness = sysuserBusiness;
    }
    ngOnInit() {
    }
};
SysuserComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-user',
        templateUrl: './sysuser.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute,
        SysuserBusiness])
], SysuserComponent);
export { SysuserComponent };
//# sourceMappingURL=sysuser.component.js.map