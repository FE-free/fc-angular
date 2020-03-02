import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 平台核心模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 14:49:10
 */
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DaoService } from './service/dao.service';
import { LogService } from './service/log.service';
import { CommonService } from './common/common';
import { CacheService } from './common/cache';
import { MessageService } from './service/message.service';
registerLocaleData(zh);
let FccoreModule = class FccoreModule {
};
FccoreModule = tslib_1.__decorate([
    NgModule({
        imports: [
            BrowserModule,
            FormsModule,
            HttpClientModule,
            BrowserAnimationsModule
        ],
        declarations: [],
        providers: [
            DaoService,
            LogService,
            CommonService,
            CacheService,
            MessageService
        ],
        bootstrap: []
    })
], FccoreModule);
export { FccoreModule };
//# sourceMappingURL=fccore.module.js.map