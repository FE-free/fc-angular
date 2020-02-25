import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 菜单管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:39
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let SysmenuComponent = class SysmenuComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
    }
};
SysmenuComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-menu',
        templateUrl: './sysmenu.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], SysmenuComponent);
export { SysmenuComponent };
//# sourceMappingURL=sysmenu.component.js.map