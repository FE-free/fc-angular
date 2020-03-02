import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 正在开发中
 * @email: 3300536651@qq.com
 * @Date: 2019-04-09 10:46:22
 * @LastEditTime: 2019-04-17 09:54:47
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
let BuildingComponent = class BuildingComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
};
BuildingComponent = tslib_1.__decorate([
    Component({
        selector: 'building',
        templateUrl: './building.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], BuildingComponent);
export { BuildingComponent };
//# sourceMappingURL=building.component.js.map