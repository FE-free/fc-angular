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
var NzTimeValueAccessorDirective = /** @class */ (function () {
    function NzTimeValueAccessorDirective(dateHelper, elementRef) {
        this.dateHelper = dateHelper;
        this.elementRef = elementRef;
    }
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.keyup = /**
     * @return {?}
     */
    function () {
        this.changed();
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.touched();
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.changed = /**
     * @return {?}
     */
    function () {
        if (this._onChange) {
            /** @type {?} */
            var value = this.dateHelper.parseTime(this.elementRef.nativeElement.value);
            this._onChange((/** @type {?} */ (value)));
        }
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.touched = /**
     * @return {?}
     */
    function () {
        if (this._onTouch) {
            this._onTouch();
        }
    };
    /**
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.setRange = /**
     * @return {?}
     */
    function () {
        this.elementRef.nativeElement.focus();
        this.elementRef.nativeElement.setSelectionRange(0, this.elementRef.nativeElement.value.length);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = this.dateHelper.format(value, this.nzTime);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimeValueAccessorDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouch = fn;
    };
    NzTimeValueAccessorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'input[nzTime]',
                    exportAs: 'nzTime',
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: NzTimeValueAccessorDirective, multi: true }]
                },] }
    ];
    /** @nocollapse */
    NzTimeValueAccessorDirective.ctorParameters = function () { return [
        { type: DateHelperService },
        { type: ElementRef }
    ]; };
    NzTimeValueAccessorDirective.propDecorators = {
        nzTime: [{ type: Input }],
        keyup: [{ type: HostListener, args: ['keyup',] }],
        blur: [{ type: HostListener, args: ['blur',] }]
    };
    return NzTimeValueAccessorDirective;
}());
export { NzTimeValueAccessorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyLyIsInNvdXJjZXMiOlsibnotdGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RDtJQXNDRSxzQ0FBb0IsVUFBNkIsRUFBVSxVQUFzQjtRQUE3RCxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7SUFBRyxDQUFDOzs7O0lBM0JyRiw0Q0FBSzs7O0lBREw7UUFFRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUdELDJDQUFJOzs7SUFESjtRQUVFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDOzs7O0lBRUQsOENBQU87OztJQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFOztnQkFDWixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzVFLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQUEsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN4QjtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBTzs7O0lBQVA7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakcsQ0FBQzs7Ozs7SUFJRCxpREFBVTs7OztJQUFWLFVBQVcsS0FBVztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7OztJQUVELHVEQUFnQjs7OztJQUFoQixVQUFpQixFQUF5QjtRQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHdEQUFpQjs7OztJQUFqQixVQUFrQixFQUFjO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUNwRzs7OztnQkFOUSxpQkFBaUI7Z0JBSE4sVUFBVTs7O3lCQWEzQixLQUFLO3dCQUVMLFlBQVksU0FBQyxPQUFPO3VCQUtwQixZQUFZLFNBQUMsTUFBTTs7SUFvQ3RCLG1DQUFDO0NBQUEsQUFuREQsSUFtREM7U0E5Q1ksNEJBQTRCOzs7Ozs7SUFDdkMsaURBQXlDOzs7OztJQUN6QyxnREFBNkI7O0lBQzdCLDhDQUF3Qjs7Ozs7SUE4Qlosa0RBQXFDOzs7OztJQUFFLGtEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpbnB1dFtuelRpbWVdJyxcbiAgZXhwb3J0QXM6ICduelRpbWUnLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSwgbXVsdGk6IHRydWUgfV1cbn0pXG5leHBvcnQgY2xhc3MgTnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgcHJpdmF0ZSBfb25DaGFuZ2U6ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfb25Ub3VjaDogKCkgPT4gdm9pZDtcbiAgQElucHV0KCkgbnpUaW1lOiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5dXAnKVxuICBrZXl1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZWQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKVxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMudG91Y2hlZCgpO1xuICB9XG5cbiAgY2hhbmdlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fb25DaGFuZ2UpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRlSGVscGVyLnBhcnNlVGltZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSk7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSEpO1xuICAgIH1cbiAgfVxuXG4gIHRvdWNoZWQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29uVG91Y2gpIHtcbiAgICAgIHRoaXMuX29uVG91Y2goKTtcbiAgICB9XG4gIH1cblxuICBzZXRSYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh2YWx1ZSwgdGhpcy5uelRpbWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaCA9IGZuO1xuICB9XG59XG4iXX0=