import * as tslib_1 from "tslib";
var ForbiddenValidatorDirective_1;
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
export function forbiddenNameValidator(reg) {
    return (control) => {
        if (control.value && control.value.length === 4) {
            const forbidden = !reg.test(control.value); // 用于检测一个字符串是否匹配某个模式
            return forbidden ? { 'fcVerifyCodeName': { value: control.value } } : null;
        }
    };
}
let ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = class ForbiddenValidatorDirective {
    /**
     * 验证码是否输入正确
     * @param control
     */
    validate(control) {
        // 执行对大小写不敏感的匹配
        console.log(forbiddenNameValidator(new RegExp(this.fcVerifyCodeName, 'i'))(control), 'result');
        return this.fcVerifyCodeName ? forbiddenNameValidator(new RegExp(this.fcVerifyCodeName, 'i'))(control)
            : null;
    }
};
tslib_1.__decorate([
    Input('fcVerifyCodeName'),
    tslib_1.__metadata("design:type", String)
], ForbiddenValidatorDirective.prototype, "fcVerifyCodeName", void 0);
ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[fcVerifyCodeName]',
        providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective_1, multi: true }]
    })
], ForbiddenValidatorDirective);
export { ForbiddenValidatorDirective };
//# sourceMappingURL=forbidden-name.directive.js.map