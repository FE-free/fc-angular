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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
var CalendarHeaderComponent = /** @class */ (function () {
    function CalendarHeaderComponent(dateHelper) {
        this.dateHelper = dateHelper;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    }
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CalendarHeaderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextYear = /**
     * @return {?}
     */
    function () {
        this.gotoYear(1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.previousMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(-1);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.nextMonth = /**
     * @return {?}
     */
    function () {
        this.gotoMonth(1);
    };
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changePanel = /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    function (mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseDecade = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseYear = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.onChooseMonth = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    };
    /**
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeToMonthPanel = /**
     * @return {?}
     */
    function () {
        this.changePanel('month');
        this.yearToMonth = true;
    };
    /**
     * @private
     * @return {?}
     */
    CalendarHeaderComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoMonth = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    };
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    CalendarHeaderComponent.prototype.gotoYear = /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    CalendarHeaderComponent.prototype.changeValueFromInside = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    };
    /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    CalendarHeaderComponent.prototype.formatDateTime = /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    function (localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    };
    /**
     * @private
     * @return {?}
     */
    CalendarHeaderComponent.prototype.createYearMonthDaySelectors = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var year;
        /** @type {?} */
        var month;
        /** @type {?} */
        var day;
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
        }
        year = {
            className: this.prefixCls + "-year-select",
            title: this.locale.yearSelect,
            onClick: (/**
             * @return {?}
             */
            function () { return (_this.showTimePicker ? null : _this.changePanel('year')); }),
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: this.prefixCls + "-month-select",
            title: this.locale.monthSelect,
            onClick: (/**
             * @return {?}
             */
            function () { return (_this.showTimePicker ? null : _this.changeToMonthPanel()); }),
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        var dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: this.prefixCls + "-day-select",
                label: this.formatDateTime(dayFormat)
            };
        }
        /** @type {?} */
        var result;
        if (this.locale.monthBeforeYear) {
            result = [month, (/** @type {?} */ (day)), year];
        }
        else {
            result = [year, month, (/** @type {?} */ (day))];
        }
        return result.filter((/**
         * @param {?} selector
         * @return {?}
         */
        function (selector) { return !!selector; }));
    };
    CalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'calendar-header',
                    exportAs: 'calendarHeader',
                    template: "<div class=\"{{ prefixCls }}-header\">\n  <div style=\"position: relative;\">\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-year-btn\"\n      role=\"button\"\n      (click)=\"previousYear()\"\n      title=\"{{ locale.previousYear }}\"\n    ></a>\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-month-btn\"\n      role=\"button\"\n      (click)=\"previousMonth()\"\n      title=\"{{ locale.previousMonth }}\"\n    ></a>\n\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\n        <a class=\"{{ selector.className }}\"\n          role=\"button\"\n          (click)=\"selector.onClick ? selector.onClick() : null\"\n          title=\"{{ selector.title || null }}\"\n        >\n          {{ selector.label }}\n        </a>\n      </ng-container>\n    </span>\n\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-month-btn\"\n      role=\"button\"\n      (click)=\"nextMonth()\"\n      title=\"{{ locale.nextMonth }}\"\n    ></a>\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-year-btn\"\n      role=\"button\"\n      (click)=\"nextYear()\"\n      title=\"{{ locale.nextYear }}\"\n    ></a>\n  </div>\n\n  <ng-container [ngSwitch]=\"panelMode\">\n    <ng-container *ngSwitchCase=\"'decade'\">\n      <decade-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseDecade($event)\"\n      ></decade-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'year'\">\n      <year-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledYear\"\n        (valueChange)=\"onChooseYear($event)\"\n        (decadePanelShow)=\"changePanel('decade')\"\n      ></year-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'month'\">\n      <month-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledMonth\"\n        (valueChange)=\"onChooseMonth($event)\"\n        (yearPanelShow)=\"changePanel('year')\"\n      ></month-panel>\n    </ng-container>\n  </ng-container>\n</div>"
                }] }
    ];
    /** @nocollapse */
    CalendarHeaderComponent.ctorParameters = function () { return [
        { type: DateHelperService }
    ]; };
    CalendarHeaderComponent.propDecorators = {
        locale: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledMonth: [{ type: Input }],
        disabledYear: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        chooseDecade: [{ type: Output }],
        chooseYear: [{ type: Output }],
        chooseMonth: [{ type: Output }]
    };
    return CalendarHeaderComponent;
}());
export { CalendarHeaderComponent };
if (false) {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /**
     * @type {?}
     * @private
     */
    CalendarHeaderComponent.prototype.yearToMonth;
    /**
     * @type {?}
     * @private
     */
    CalendarHeaderComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
if (false) {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /**
     * @return {?}
     */
    YearMonthDaySelector.prototype.onClick = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQXdCLGlCQUFpQixFQUEyQixNQUFNLG9CQUFvQixDQUFDO0FBR3RHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVyRDtJQStCRSxpQ0FBb0IsVUFBNkI7UUFBN0IsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFyQnhDLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsZUFBVSxHQUFZLElBQUksQ0FBQztRQUczQixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUd0QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFHNUMsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRWhELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUM3QyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUMzQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFFL0QsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUczQixnQkFBVyxHQUFZLEtBQUssQ0FBQyxDQUFDLDhJQUE4STtJQUVoSSxDQUFDOzs7O0lBRXJELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsd0JBQXdCO1NBQ3ZEO0lBQ0gsQ0FBQzs7Ozs7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L0MsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsOHRFQUE2QztpQkFDOUM7Ozs7Z0JBWjhCLGlCQUFpQjs7O3lCQWM3QyxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07NEJBRU4sS0FBSztrQ0FDTCxNQUFNOytCQUVOLE1BQU07NkJBQ04sTUFBTTs4QkFDTixNQUFNOztJQTBJVCw4QkFBQztDQUFBLEFBbEtELElBa0tDO1NBMUpZLHVCQUF1Qjs7O0lBQ2xDLHlDQUF5Qzs7SUFDekMsNkNBQW9DOztJQUNwQyw2Q0FBb0M7O0lBQ3BDLGdEQUFnRDs7SUFDaEQsK0NBQStDOztJQUMvQyxpREFBeUM7O0lBRXpDLHdDQUEwQjs7SUFDMUIsOENBQStEOztJQUUvRCw0Q0FBOEI7O0lBQzlCLGtEQUFtRTs7SUFFbkUsK0NBQWdFOztJQUNoRSw2Q0FBOEQ7O0lBQzlELDhDQUErRDs7SUFFL0QsNENBQW1DOztJQUNuQyx3REFBOEM7Ozs7O0lBRTlDLDhDQUFxQzs7Ozs7SUFFekIsNkNBQXFDOzs7OztBQXFJbkQsMENBS0M7OztJQUpDLHlDQUFrQjs7SUFDbEIscUNBQWU7O0lBQ2YscUNBQWM7Ozs7SUFDZCx5REFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERhdGVIZWxwZXJCeURhdGVQaXBlLCBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1oZWFkZXInLFxuICBleHBvcnRBczogJ2NhbGVuZGFySGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBlbmFibGVQcmV2OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGRpc2FibGVkTW9udGg6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZFllYXI6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGU+KCk7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNob29zZURlY2FkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hvb3NlWWVhciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2hvb3NlTW9udGggPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICB5ZWFyTW9udGhEYXlTZWxlY3RvcnM6IFllYXJNb250aERheVNlbGVjdG9yW107XG5cbiAgcHJpdmF0ZSB5ZWFyVG9Nb250aDogYm9vbGVhbiA9IGZhbHNlOyAvLyBJbmRpY2F0ZSB3aGV0aGVyIHNob3VsZCBjaGFuZ2UgdG8gbW9udGggcGFuZWwgd2hlbiBjdXJyZW50IGlzIHllYXIgcGFuZWwgKGlmIHJlZmVyZXI9bW9udGgsIGl0IHNob3VsZCBzaG93IG1vbnRoIHBhbmVsIHdoZW4gY2hvb3NlZCBhIHllYXIpXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLnNob3dUaW1lUGlja2VyIHx8IGNoYW5nZXMucGFuZWxNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzWWVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKC0xKTtcbiAgfVxuXG4gIG5leHRZZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoMSk7XG4gIH1cblxuICBwcmV2aW91c01vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b01vbnRoKC0xKTtcbiAgfVxuXG4gIG5leHRNb250aCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9Nb250aCgxKTtcbiAgfVxuXG4gIGNoYW5nZVBhbmVsKG1vZGU6IFBhbmVsTW9kZSwgdmFsdWU/OiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hvb3NlRGVjYWRlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCd5ZWFyJywgdmFsdWUpO1xuICAgIHRoaXMuY2hvb3NlRGVjYWRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25DaG9vc2VZZWFyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKHRoaXMueWVhclRvTW9udGggPyAnbW9udGgnIDogJ2RhdGUnLCB2YWx1ZSk7XG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxuICAgIHRoaXMuY2hvb3NlWWVhci5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hvb3NlTW9udGgodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ2RhdGUnLCB2YWx1ZSk7XG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IGZhbHNlOyAvLyBDbGVhclxuICAgIHRoaXMuY2hvb3NlTW9udGguZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBjaGFuZ2VUb01vbnRoUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgnbW9udGgnKTtcbiAgICB0aGlzLnllYXJUb01vbnRoID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnllYXJNb250aERheVNlbGVjdG9ycyA9IHRoaXMuY3JlYXRlWWVhck1vbnRoRGF5U2VsZWN0b3JzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnb3RvTW9udGgoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh0aGlzLnZhbHVlLmFkZE1vbnRocyhhbW91bnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGVUaW1lKGxvY2FsZUZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kYXRlSGVscGVyLmZvcm1hdCh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIGxvY2FsZUZvcm1hdCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVllYXJNb250aERheVNlbGVjdG9ycygpOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdIHtcbiAgICBsZXQgeWVhcjogWWVhck1vbnRoRGF5U2VsZWN0b3I7XG4gICAgbGV0IG1vbnRoOiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcbiAgICBsZXQgZGF5OiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcblxuICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xuICAgIGxldCB5ZWFyRm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxvY2FsZS55ZWFyRm9ybWF0O1xuICAgIGlmICh0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUpIHtcbiAgICAgIHllYXJGb3JtYXQgPSAodGhpcy5kYXRlSGVscGVyIGFzIERhdGVIZWxwZXJCeURhdGVQaXBlKS50cmFuc0NvbXBhdEZvcm1hdCh5ZWFyRm9ybWF0KTtcbiAgICB9XG4gICAgeWVhciA9IHtcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LXllYXItc2VsZWN0YCxcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS55ZWFyU2VsZWN0LFxuICAgICAgb25DbGljazogKCkgPT4gKHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicpKSxcbiAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHllYXJGb3JtYXQpXG4gICAgfTtcblxuICAgIG1vbnRoID0ge1xuICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tbW9udGgtc2VsZWN0YCxcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS5tb250aFNlbGVjdCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+ICh0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlVG9Nb250aFBhbmVsKCkpLFxuICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy5sb2NhbGUubW9udGhGb3JtYXQgfHwgJ01NTScpXG4gICAgfTtcblxuICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xuICAgIGxldCBkYXlGb3JtYXQ6IHN0cmluZyA9IHRoaXMubG9jYWxlLmRheUZvcm1hdDtcbiAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XG4gICAgICBkYXlGb3JtYXQgPSAodGhpcy5kYXRlSGVscGVyIGFzIERhdGVIZWxwZXJCeURhdGVQaXBlKS50cmFuc0NvbXBhdEZvcm1hdChkYXlGb3JtYXQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93VGltZVBpY2tlcikge1xuICAgICAgZGF5ID0ge1xuICAgICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1kYXktc2VsZWN0YCxcbiAgICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUoZGF5Rm9ybWF0KVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgcmVzdWx0OiBZZWFyTW9udGhEYXlTZWxlY3RvcltdO1xuXG4gICAgaWYgKHRoaXMubG9jYWxlLm1vbnRoQmVmb3JlWWVhcikge1xuICAgICAgcmVzdWx0ID0gW21vbnRoLCBkYXkhLCB5ZWFyXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gW3llYXIsIG1vbnRoLCBkYXkhXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcihzZWxlY3RvciA9PiAhIXNlbGVjdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJNb250aERheVNlbGVjdG9yIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBvbkNsaWNrPygpOiB2b2lkO1xufVxuIl19