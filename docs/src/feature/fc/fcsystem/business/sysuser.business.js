import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 权限管理的业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:36:33
 */
let SysuserBusiness = class SysuserBusiness {
    constructor(http) {
        this.http = http;
    }
};
SysuserBusiness = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], SysuserBusiness);
export { SysuserBusiness };
//# sourceMappingURL=sysuser.business.js.map