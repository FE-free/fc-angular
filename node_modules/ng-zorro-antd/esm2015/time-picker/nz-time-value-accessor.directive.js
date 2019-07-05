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
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateHelperService } from 'ng-zorro-antd/i18n';
export class NzTimeValueAccessorDirective {
    /**
     * @param {?} dateHelper
     * @param {?} elementRef
     */
    constructor(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    keyup() {
        this.changed();
    }
    /**
     * @return {?}
     */
    blur() {
        this.touched();
    }
    /**
     * @return {?}
     */
    changed() {
        if (this._onChange) {
            /** @type {?} */
            const value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange((/** @type {?} */ (value)));
        }
    }
    /**
     * @return {?}
     */
    touched() {
        if (this._onTouch) {
            this._onTouch();
        }
    }
    /**
     * @return {?}
     */
    setRange() {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouch = fn;
    }
}
NzTimeValueAccessorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[nzTime]',
                exportAs: 'nzTime',
                providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }]
            },] }
];
/** @nocollapse */
NzTimeValueAccessorDirective.ctorParameters = () => [
    { type: DateHelperService },
    { type: ElementRef }
];
NzTimeValueAccessorDirective.propDecorators = {
    nzTime: [{ type: Input }],
    keyup: [{ type: HostListener, args: ['keyup',] }],
    blur: [{ type: HostListener, args: ['blur',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype._onChange;
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype._onTouch;
    /** @type {?} */
    NzTimeValueAccessorDirective.prototype.nzTime;
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype.dateHelper;
    /**
     * @type {?}
     * @private
     */
    NzTimeValueAccessorDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU92RCxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQWlDdkMsWUFBb0IsVUFBNkIsRUFBVSxVQUFzQjtRQUE3RCxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDOzs7O0lBM0JyRixLQUFLO1FBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFHRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztrQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQUEsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRyxDQUFDOzs7OztJQUlELFVBQVUsQ0FBQyxLQUFXO1FBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBeUI7UUFDeEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3BHOzs7O1lBTlEsaUJBQWlCO1lBSE4sVUFBVTs7O3FCQWEzQixLQUFLO29CQUVMLFlBQVksU0FBQyxPQUFPO21CQUtwQixZQUFZLFNBQUMsTUFBTTs7Ozs7OztJQVRwQixpREFBeUM7Ozs7O0lBQ3pDLGdEQUE2Qjs7SUFDN0IsOENBQXdCOzs7OztJQThCWixrREFBcUM7Ozs7O0lBQUUsa0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2lucHV0W256VGltZV0nLFxuICBleHBvcnRBczogJ256VGltZScsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlLCBtdWx0aTogdHJ1ZSB9XVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9vblRvdWNoOiAoKSA9PiB2b2lkO1xuICBASW5wdXQoKSBuelRpbWU6IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcpXG4gIGtleXVwKCk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy50b3VjaGVkKCk7XG4gIH1cblxuICBjaGFuZ2VkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vbkNoYW5nZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIucGFyc2VUaW1lKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlKTtcbiAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlISk7XG4gICAgfVxuICB9XG5cbiAgdG91Y2hlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb25Ub3VjaCkge1xuICAgICAgdGhpcy5fb25Ub3VjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFJhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge31cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHZhbHVlLCB0aGlzLm56VGltZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoID0gZm47XG4gIH1cbn1cbiJdfQ==