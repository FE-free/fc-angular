/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Pipe } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
var NzI18nPipe = /** @class */ (function () {
    function NzI18nPipe(_locale) {
        this._locale = _locale;
    }
    /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    NzI18nPipe.prototype.transform = /**
     * @param {?} path
     * @param {?=} keyValue
     * @return {?}
     */
    function (path, keyValue) {
        return this._locale.translate(path, keyValue);
    };
    NzI18nPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'nzI18n'
                },] }
    ];
    /** @nocollapse */
    NzI18nPipe.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    return NzI18nPipe;
}());
export { NzI18nPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nPipe.prototype._locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxEO0lBSUUsb0JBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFBRyxDQUFDOzs7Ozs7SUFFOUMsOEJBQVM7Ozs7O0lBQVQsVUFBVSxJQUFZLEVBQUUsUUFBaUI7UUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxRQUFRO2lCQUNmOzs7O2dCQUpRLGFBQWE7O0lBV3RCLGlCQUFDO0NBQUEsQUFURCxJQVNDO1NBTlksVUFBVTs7Ozs7O0lBQ1QsNkJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4vbnotaTE4bi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbnpJMThuJ1xufSlcbmV4cG9ydCBjbGFzcyBOekkxOG5QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvY2FsZTogTnpJMThuU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0ocGF0aDogc3RyaW5nLCBrZXlWYWx1ZT86IG9iamVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZS50cmFuc2xhdGUocGF0aCwga2V5VmFsdWUpO1xuICB9XG59XG4iXX0=