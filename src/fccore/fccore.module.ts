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
import { CommonService } from './service/common.service';
import { CacheService } from './service/cache.service';
import { MessageService } from './service/message.service';
registerLocaleData(zh)
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
  ],
  providers: [
   DaoService,
   LogService,
   CommonService,
   CacheService,
   MessageService
  ],
  bootstrap: []
})
export class FccoreModule {
}
