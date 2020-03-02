import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @Date: 2019-07-04 17:15:57
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-15 10:55:06
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
let SyseditpasswordComponent = class SyseditpasswordComponent {
    constructor(fb, subject) {
        this.fb = fb;
        this.subject = subject;
        // 原密码验证
        this.oldPasswordExplain = '';
        // 新密码验证
        this.newPasswordExplain = '';
        // 确认新密码验证
        this.confirmPasswordExplain = '';
        //验证旧密码
        this.formatOldValidator = (control) => {
            if (!control.value) {
                this.oldPasswordExplain = '旧密码不能为空！';
                return { confirm: true }; // 验证不能为空
            }
        };
        /**
         *
         *验证输入密码是否符号格式（长度不能少于多少位，必须有大小写，数字字母及特殊符号的组合）
         * @memberof EdituserComponent
         */
        this.formatValidator = (control) => {
            const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\=\,\.\?\|\(\)\{\}\[\#\@\`\~\!\<\>\;\:\'\"\_\&\%\]\*\/\\\+\^\$\-]).{6,16}$/;
            if (!control.value) {
                this.newPasswordExplain = '新密码不能为空！';
                return { format: true }; // 验证不能为空
            }
            else if (!regExp.test(control.value)) {
                this.newPasswordExplain = '请输入6-16位密码，且必须包含字母、数字、特殊字符、区分大小写！';
                return { format: true, error: true };
            }
            else if (control.value == this.validateForm.controls['oldPassword'].value) {
                this.newPasswordExplain = '新旧密码不能一致';
                return { format: true, error: true };
            }
        };
        /**
         *
         * 验证新密码输入是否一致
         * @memberof EdituserComponent
         */
        this.confirmNewPwdValidator = (control) => {
            if (!control.value) {
                return { required: true }; // 验证不能为空
            }
            else if (control.value !== this.validateForm.controls['newPassword'].value) {
                this.confirmPasswordExplain = '两次输入的密码不一致';
                return { confirm: true, error: true };
            }
        };
    }
    ngOnInit() {
        // 表单验证
        this.validateForm = this.fb.group({
            oldPassword: [null, [this.formatOldValidator]],
            newPassword: [null, [this.formatValidator]],
        });
    }
    /**
    * 获取名称
    * @param name
    */
    getFormControl(name) {
        return this.validateForm.controls[name];
    }
    /**
     *
     *确定
     */
    handleOk() {
        for (const i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
        }
        // 判断旧密码是否输入正确
        if (true) {
            //校验新密码
            this.subject.destroy('onCancel');
        }
        else {
            this.oldPasswordExplain = '旧密码输入错误！无法修改密码';
            this.validateForm.controls['oldPassword'].setErrors({ confirm: true });
            this.validateForm.controls['oldPassword'].markAsDirty();
        }
        ;
    }
    /**
     *
     *取消
     */
    handleCancel() {
        this.subject.destroy('onCancel');
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SyseditpasswordComponent.prototype, "oldPassword", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SyseditpasswordComponent.prototype, "newPassword", void 0);
SyseditpasswordComponent = tslib_1.__decorate([
    Component({
        selector: 'sys-editpassword',
        templateUrl: './syseditpassword.dialog.html',
        styles: [`
  ::ng-deep .edituser-dialog-wrap .ant-modal-body{
    padding: 16px 0 0;
  }
  ::ng-deep .edituser-dialog .edituser-dialog-footer {
    border-top: 1px solid #e9e9e9;
    padding: 10px 16px 10px 10px;
    text-align: right;
    border-radius: 0 0 4px 4px;
  }
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder, NzModalRef])
], SyseditpasswordComponent);
export { SyseditpasswordComponent };
//# sourceMappingURL=syseditpassword.dialog.js.map