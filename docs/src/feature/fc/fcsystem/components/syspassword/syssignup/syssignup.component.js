import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 注册
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 10:10:48
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.dev';
let SyssignupComponent = class SyssignupComponent {
    constructor(router, fb) {
        this.router = router;
        this.fb = fb;
        this._projectName = environment.projectName;
    }
    ngOnInit() {
        this.validateForm = this.fb.group({
            uname: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
};
SyssignupComponent = tslib_1.__decorate([
    Component({
        selector: 'syssignup',
        templateUrl: './syssignup.component.html',
        styles: [`
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, FormBuilder])
], SyssignupComponent);
export { SyssignupComponent };
//# sourceMappingURL=syssignup.component.js.map