import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 前后端通道
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:25
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { CacheService } from '../common/cache';
import { CommonService } from '../common/common';
export const FCCONFIG = environment;
let DaoService = class DaoService {
    constructor(http) {
        this.FCCONFIG = environment;
        this.http = http;
        this.cacheService = CacheService;
        this.commonService = CommonService;
    }
};
DaoService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], DaoService);
export { DaoService };
//# sourceMappingURL=dao.service.js.map