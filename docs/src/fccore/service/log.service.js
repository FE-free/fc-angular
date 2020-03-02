import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */
import { Injectable } from '@angular/core';
import { CacheService } from '../common/cache';
import { DaoService } from './dao.service';
import { environment } from 'src/environments/environment';
const isDev = !environment.production;
let LogService = class LogService {
    constructor(daoService, cacheService) {
        this.daoService = daoService;
        this.cacheService = cacheService;
    }
    static debug(msg, describtion) {
        if (isDev) {
            console.log(msg, describtion);
        }
    }
    info(msg) {
        if (isDev) {
            console.log(msg);
        }
    }
    error(msg) {
        throw new Error(msg);
    }
};
LogService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [DaoService, CacheService])
], LogService);
export { LogService };
//# sourceMappingURL=log.service.js.map