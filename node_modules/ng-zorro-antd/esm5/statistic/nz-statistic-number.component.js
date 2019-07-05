/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzStatisticNumberComponent = /** @class */ (function () {
    function NzStatisticNumberComponent(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.formatNumber();
    };
    /**
     * @private
     * @return {?}
     */
    NzStatisticNumberComponent.prototype.formatNumber = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        var value = String(this.nzValue);
        var _a = tslib_1.__read(value.split(decimalSeparator), 2), int = _a[0], decimal = _a[1];
        this.displayInt = int;
        this.displayDecimal = decimal ? "" + decimalSeparator + decimal : '';
    };
    NzStatisticNumberComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-statistic-number',
                    exportAs: 'nzStatisticNumber',
                    template: "<ng-container\n  *ngIf=\"nzValueTemplate\"\n  [ngTemplateOutlet]=\"nzValueTemplate\"\n  [ngTemplateOutletContext]=\"{ $implicit: nzValue }\">\n</ng-container>\n<ng-container *ngIf=\"!nzValueTemplate\">\n  <span *ngIf=\"displayInt\" class=\"ant-statistic-content-value-int\">{{ displayInt }}</span>\n  <span *ngIf=\"displayDecimal\" class=\"ant-statistic-content-value-decimal\">{{ displayDecimal }}</span>\n</ng-container>\n",
                    host: {
                        class: 'ant-statistic-content-value'
                    },
                    styles: ['nz-number { display: inline }']
                }] }
    ];
    /** @nocollapse */
    NzStatisticNumberComponent.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    NzStatisticNumberComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
    return NzStatisticNumberComponent;
}());
export { NzStatisticNumberComponent };
if (false) {
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.nzValueTemplate;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayInt;
    /** @type {?} */
    NzStatisticNumberComponent.prototype.displayDecimal;
    /**
     * @type {?}
     * @private
     */
    NzStatisticNumberComponent.prototype.locale_id;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbIm56LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxFQUNMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBR3ZCO0lBbUJFLG9DQUF1QyxTQUFpQjtRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBSHhELGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFFdUMsQ0FBQzs7OztJQUU1RCxnREFBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFTyxpREFBWTs7OztJQUFwQjs7WUFDUSxnQkFBZ0IsR0FDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUM7O1lBQ2hHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QixJQUFBLHFEQUE4QyxFQUE3QyxXQUFHLEVBQUUsZUFBd0M7UUFFcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUcsZ0JBQWdCLEdBQUcsT0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkUsQ0FBQzs7Z0JBakNGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLG9iQUFtRDtvQkFDbkQsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSw2QkFBNkI7cUJBQ3JDOzZCQUNRLCtCQUErQjtpQkFDekM7Ozs7NkNBUWMsTUFBTSxTQUFDLFNBQVM7OzswQkFONUIsS0FBSztrQ0FDTCxLQUFLOztJQW9CUixpQ0FBQztDQUFBLEFBbENELElBa0NDO1NBdEJZLDBCQUEwQjs7O0lBQ3JDLDZDQUF1Qzs7SUFDdkMscURBQTJFOztJQUUzRSxnREFBZ0I7O0lBQ2hCLG9EQUFvQjs7Ozs7SUFFUiwrQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgZ2V0TG9jYWxlTnVtYmVyU3ltYm9sLCBOdW1iZXJTeW1ib2wgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgTE9DQUxFX0lELFxuICBPbkNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U3RhdGlzdGljVmFsdWVUeXBlIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzZWxlY3RvcjogJ256LXN0YXRpc3RpYy1udW1iZXInLFxuICBleHBvcnRBczogJ256U3RhdGlzdGljTnVtYmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtc3RhdGlzdGljLWNvbnRlbnQtdmFsdWUnXG4gIH0sXG4gIHN0eWxlczogWyduei1udW1iZXIgeyBkaXNwbGF5OiBpbmxpbmUgfSddXG59KVxuZXhwb3J0IGNsYXNzIE56U3RhdGlzdGljTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpWYWx1ZTogTnpTdGF0aXN0aWNWYWx1ZVR5cGU7XG4gIEBJbnB1dCgpIG56VmFsdWVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IE56U3RhdGlzdGljVmFsdWVUeXBlIH0+O1xuXG4gIGRpc3BsYXlJbnQgPSAnJztcbiAgZGlzcGxheURlY2ltYWwgPSAnJztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgcHJpdmF0ZSBsb2NhbGVfaWQ6IHN0cmluZykge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm1hdE51bWJlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXROdW1iZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZGVjaW1hbFNlcGFyYXRvcjogc3RyaW5nID1cbiAgICAgIHR5cGVvZiB0aGlzLm56VmFsdWUgPT09ICdudW1iZXInID8gJy4nIDogZ2V0TG9jYWxlTnVtYmVyU3ltYm9sKHRoaXMubG9jYWxlX2lkLCBOdW1iZXJTeW1ib2wuRGVjaW1hbCk7XG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcodGhpcy5uelZhbHVlKTtcbiAgICBjb25zdCBbaW50LCBkZWNpbWFsXSA9IHZhbHVlLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpO1xuXG4gICAgdGhpcy5kaXNwbGF5SW50ID0gaW50O1xuICAgIHRoaXMuZGlzcGxheURlY2ltYWwgPSBkZWNpbWFsID8gYCR7ZGVjaW1hbFNlcGFyYXRvcn0ke2RlY2ltYWx9YCA6ICcnO1xuICB9XG59XG4iXX0=