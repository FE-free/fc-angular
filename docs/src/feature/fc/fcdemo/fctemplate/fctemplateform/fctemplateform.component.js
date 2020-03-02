/*
 * @Author: honghong
 * @Date: 2019-10-16 15:46:03
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 17:36:53
 * @Description:
 * @email: 3300536651@qq.com
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
let FctemplateformComponent = class FctemplateformComponent {
    constructor(router, activedRoute, fb) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.fb = fb;
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.validateForm.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required]],
            checkPassword: [null, [Validators.required, this.confirmationValidator]],
            nickname: [null, [Validators.required]],
            phoneNumberPrefix: ['+86'],
            phoneNumber: [null, [Validators.required]],
            website: [null, [Validators.required]],
            captcha: [null, [Validators.required]],
            agree: [false]
        });
    }
    updateConfirmValidator() {
        /** wait for refresh value */
        Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
    }
};
FctemplateformComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-templateform',
        templateUrl: './fctemplateform.component.html',
        styles: [
            `
    .fc-templateform {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .fc-templateform-content {
        height: calc(100% - 38px);
        overflow: auto;
        padding: 10px;
    }
    .fc-toolbarform {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 100;
        text-align: center;
        background-color: #e6f7ff;
    }
     
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute,
        FormBuilder])
], FctemplateformComponent);
export { FctemplateformComponent };
//# sourceMappingURL=fctemplateform.component.js.map