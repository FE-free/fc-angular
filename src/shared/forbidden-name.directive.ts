import { Directive, Input } from '@angular/core';

import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
        if (control.value && control.value.length === 4) {
            const forbidden = !reg.test(control.value); // 用于检测一个字符串是否匹配某个模式
            return forbidden ? { 'fcVerifyCodeName': { value: control.value } } : null;
        }

    };
}
@Directive({
    selector: '[fcVerifyCodeName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})

export class ForbiddenValidatorDirective implements Validator {
    @Input('fcVerifyCodeName')
    fcVerifyCodeName: string;
    /**
     * 验证码是否输入正确
     * @param control 
     */
    validate(control: AbstractControl): { [key: string]: any } | null {
        // 执行对大小写不敏感的匹配
        console.log(forbiddenNameValidator(new RegExp(this.fcVerifyCodeName, 'i'))(control), 'result')
        return this.fcVerifyCodeName ? forbiddenNameValidator(new RegExp(this.fcVerifyCodeName, 'i'))(control)
            : null;
    }
}