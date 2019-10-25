/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 共享模块
 * @email: 3300536651@qq.com
 * @Date: 2019-04-19 10:08:26
 * @LastEditTime: 2019-04-19 10:12:39
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import * as MOCKDATA from '../../_mock';
// 只对开发环境有效
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        HttpClientModule
    ],
    declarations: [
        ForbiddenValidatorDirective, // 模版驱动表单-自定义验证指令
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        ForbiddenValidatorDirective
    ],
})
export class SharedModule { }
