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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
export class CalendarFooterComponent {
    constructor() {
        this.showToday = false;
        this.hasTimePicker = false;
        this.isRange = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.timePickerDisabled = false;
        this.okDisabled = false;
        this.clickOk = new EventEmitter();
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
    }
}
CalendarFooterComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-footer',
                exportAs: 'calendarFooter',
                template: "<div class=\"{{ prefixCls }}-footer {{ isRange ? prefixCls + '-range-bottom' : '' }} {{ hasTimePicker ? prefixCls + '-footer-show-ok' : '' }}\">\n  <div *ngIf=\"rangeQuickSelector\" class=\"{{ prefixCls }}-footer-extra {{ prefixCls }}-range-quick-selector\">\n    <ng-container *ngTemplateOutlet=\"rangeQuickSelector\"></ng-container>\n  </div>\n  <div *ngIf=\"extraFooter\" class=\"{{ prefixCls }}-footer-extra {{ isRange ? prefixCls + '-range-quick-selector' : '' }}\">\n    <ng-container [ngSwitch]=\"true\">\n      <ng-container *ngSwitchCase=\"isTemplateRef(extraFooter)\">\n        <ng-container *ngTemplateOutlet=\"extraFooter\"></ng-container>\n      </ng-container>\n      <ng-container *ngSwitchCase=\"isNonEmptyString(extraFooter)\">\n        <span [innerHTML]=\"extraFooter\"></span>\n      </ng-container>\n    </ng-container>\n  </div>\n  <span *ngIf=\"showToday || hasTimePicker\" class=\"{{ prefixCls }}-footer-btn\">\n    <today-button\n      *ngIf=\"showToday\"\n      [locale]=\"locale\"\n      [disabledDate]=\"disabledDate\"\n      [hasTimePicker]=\"hasTimePicker\"\n      (clickToday)=\"clickToday.emit($event)\"\n    ></today-button>\n    <time-picker-button\n      *ngIf=\"hasTimePicker\"\n      [locale]=\"locale\"\n      [timePickerDisabled]=\"timePickerDisabled\"\n      [showTimePicker]=\"showTimePicker\"\n      (showTimePickerChange)=\"showTimePickerChange.emit($event)\"\n    ></time-picker-button>\n    <ok-button\n      *ngIf=\"hasTimePicker\"\n      [okDisabled]=\"okDisabled\"\n      [locale]=\"locale\"\n      (clickOk)=\"clickOk.emit()\"\n    ></ok-button>\n  </span>\n</div>"
            }] }
];
CalendarFooterComponent.propDecorators = {
    locale: [{ type: Input }],
    showToday: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    isRange: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    showTimePickerChange: [{ type: Output }],
    timePickerDisabled: [{ type: Input }],
    okDisabled: [{ type: Input }],
    disabledDate: [{ type: Input }],
    extraFooter: [{ type: Input }],
    rangeQuickSelector: [{ type: Input }],
    clickOk: [{ type: Output }],
    clickToday: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalendarFooterComponent.prototype.locale;
    /** @type {?} */
    CalendarFooterComponent.prototype.showToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.hasTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.isRange;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarFooterComponent.prototype.showTimePickerChange;
    /** @type {?} */
    CalendarFooterComponent.prototype.timePickerDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.okDisabled;
    /** @type {?} */
    CalendarFooterComponent.prototype.disabledDate;
    /** @type {?} */
    CalendarFooterComponent.prototype.extraFooter;
    /** @type {?} */
    CalendarFooterComponent.prototype.rangeQuickSelector;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickOk;
    /** @type {?} */
    CalendarFooterComponent.prototype.clickToday;
    /** @type {?} */
    CalendarFooterComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarFooterComponent.prototype.isTemplateRef;
    /** @type {?} */
    CalendarFooterComponent.prototype.isNonEmptyString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWXJFLE1BQU0sT0FBTyx1QkFBdUI7SUFScEM7UUFVVyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBQy9CLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDdEIseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU3RCx1QkFBa0IsR0FBWSxLQUFLLENBQUM7UUFDcEMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUtsQixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUNuQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUU5RCxjQUFTLEdBQVcsY0FBYyxDQUFDO1FBQ25DLGtCQUFhLEdBQUcsYUFBYSxDQUFDO1FBQzlCLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBQ3RDLENBQUM7OztZQTdCQSxTQUFTLFNBQUM7Z0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztnQkFFL0MsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsd2xEQUE2QzthQUM5Qzs7O3FCQUVFLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO3NCQUNMLEtBQUs7NkJBRUwsS0FBSzttQ0FDTCxNQUFNO2lDQUVOLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7aUNBQ0wsS0FBSztzQkFFTCxNQUFNO3lCQUNOLE1BQU07Ozs7SUFmUCx5Q0FBeUM7O0lBQ3pDLDRDQUFvQzs7SUFDcEMsZ0RBQXdDOztJQUN4QywwQ0FBa0M7O0lBRWxDLGlEQUF5Qzs7SUFDekMsdURBQXNFOztJQUV0RSxxREFBNkM7O0lBQzdDLDZDQUFxQzs7SUFDckMsK0NBQTRDOztJQUM1Qyw4Q0FBaUQ7O0lBQ2pELHFEQUErQzs7SUFFL0MsMENBQXNEOztJQUN0RCw2Q0FBOEQ7O0lBRTlELDRDQUFtQzs7SUFDbkMsZ0RBQThCOztJQUM5QixtREFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm9uRW1wdHlTdHJpbmcsIGlzVGVtcGxhdGVSZWYgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItZm9vdGVyJyxcbiAgZXhwb3J0QXM6ICdjYWxlbmRhckZvb3RlcicsXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItZm9vdGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckZvb3RlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoYXNUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2hvd1RpbWVQaWNrZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgdGltZVBpY2tlckRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG9rRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgZXh0cmFGb290ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nO1xuICBASW5wdXQoKSByYW5nZVF1aWNrU2VsZWN0b3I6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja09rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tUb2RheSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcbn1cbiJdfQ==