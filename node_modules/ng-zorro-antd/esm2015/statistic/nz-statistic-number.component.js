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
import { getLocaleNumberSymbol, NumberSymbol } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, LOCALE_ID, TemplateRef, ViewEncapsulation } from '@angular/core';
export class NzStatisticNumberComponent {
    /**
     * @param {?} locale_id
     */
    constructor(locale_id) {
        this.locale_id = locale_id;
        this.displayInt = '';
        this.displayDecimal = '';
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.formatNumber();
    }
    /**
     * @private
     * @return {?}
     */
    formatNumber() {
        /** @type {?} */
        const decimalSeparator = typeof this.nzValue === 'number' ? '.' : getLocaleNumberSymbol(this.locale_id, NumberSymbol.Decimal);
        /** @type {?} */
        const value = String(this.nzValue);
        const [int, decimal] = value.split(decimalSeparator);
        this.displayInt = int;
        this.displayDecimal = decimal ? `${decimalSeparator}${decimal}` : '';
    }
}
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
NzStatisticNumberComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NzStatisticNumberComponent.propDecorators = {
    nzValue: [{ type: Input }],
    nzValueTemplate: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0YXRpc3RpYy8iLCJzb3VyY2VzIjpbIm56LXN0YXRpc3RpYy1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RFLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsU0FBUyxFQUVULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFldkIsTUFBTSxPQUFPLDBCQUEwQjs7OztJQU9yQyxZQUF1QyxTQUFpQjtRQUFqQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBSHhELGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFFdUMsQ0FBQzs7OztJQUU1RCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sWUFBWTs7Y0FDWixnQkFBZ0IsR0FDcEIsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUM7O2NBQ2hHLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztjQUM1QixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBRXBELElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkUsQ0FBQzs7O1lBakNGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLG9iQUFtRDtnQkFDbkQsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSw2QkFBNkI7aUJBQ3JDO3lCQUNRLCtCQUErQjthQUN6Qzs7Ozt5Q0FRYyxNQUFNLFNBQUMsU0FBUzs7O3NCQU41QixLQUFLOzhCQUNMLEtBQUs7Ozs7SUFETiw2Q0FBdUM7O0lBQ3ZDLHFEQUEyRTs7SUFFM0UsZ0RBQWdCOztJQUNoQixvREFBb0I7Ozs7O0lBRVIsK0NBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGdldExvY2FsZU51bWJlclN5bWJvbCwgTnVtYmVyU3ltYm9sIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIExPQ0FMRV9JRCxcbiAgT25DaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9IGZyb20gJy4vbnotc3RhdGlzdGljLWRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICduei1zdGF0aXN0aWMtbnVtYmVyJyxcbiAgZXhwb3J0QXM6ICduelN0YXRpc3RpY051bWJlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGF0aXN0aWMtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LXN0YXRpc3RpYy1jb250ZW50LXZhbHVlJ1xuICB9LFxuICBzdHlsZXM6IFsnbnotbnVtYmVyIHsgZGlzcGxheTogaW5saW5lIH0nXVxufSlcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56VmFsdWU6IE56U3RhdGlzdGljVmFsdWVUeXBlO1xuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9PjtcblxuICBkaXNwbGF5SW50ID0gJyc7XG4gIGRpc3BsYXlEZWNpbWFsID0gJyc7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChMT0NBTEVfSUQpIHByaXZhdGUgbG9jYWxlX2lkOiBzdHJpbmcpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtYXROdW1iZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0TnVtYmVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRlY2ltYWxTZXBhcmF0b3I6IHN0cmluZyA9XG4gICAgICB0eXBlb2YgdGhpcy5uelZhbHVlID09PSAnbnVtYmVyJyA/ICcuJyA6IGdldExvY2FsZU51bWJlclN5bWJvbCh0aGlzLmxvY2FsZV9pZCwgTnVtYmVyU3ltYm9sLkRlY2ltYWwpO1xuICAgIGNvbnN0IHZhbHVlID0gU3RyaW5nKHRoaXMubnpWYWx1ZSk7XG4gICAgY29uc3QgW2ludCwgZGVjaW1hbF0gPSB2YWx1ZS5zcGxpdChkZWNpbWFsU2VwYXJhdG9yKTtcblxuICAgIHRoaXMuZGlzcGxheUludCA9IGludDtcbiAgICB0aGlzLmRpc3BsYXlEZWNpbWFsID0gZGVjaW1hbCA/IGAke2RlY2ltYWxTZXBhcmF0b3J9JHtkZWNpbWFsfWAgOiAnJztcbiAgfVxufVxuIl19