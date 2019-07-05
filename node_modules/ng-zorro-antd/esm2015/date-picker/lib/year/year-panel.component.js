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
import { CandyDate } from '../candy-date/candy-date';
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class YearPanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    /**
     * @return {?}
     */
    get currentYear() {
        return this.value.getYear();
    }
    /**
     * @return {?}
     */
    get startYear() {
        return parseInt(`${this.currentYear / 10}`, 10) * 10;
    }
    /**
     * @return {?}
     */
    get endYear() {
        return this.startYear + 9;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousDecade() {
        this.gotoYear(-10);
    }
    /**
     * @return {?}
     */
    nextDecade() {
        this.gotoYear(10);
    }
    /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    trackPanelYear(_index, yearData) {
        return yearData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    }
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    }
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    chooseYear(year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    }
    /**
     * @private
     * @return {?}
     */
    makePanelYears() {
        /** @type {?} */
        const years = [];
        /** @type {?} */
        const currentYear = this.currentYear;
        /** @type {?} */
        const startYear = this.startYear;
        /** @type {?} */
        const endYear = this.endYear;
        /** @type {?} */
        const previousYear = startYear - 1;
        /** @type {?} */
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const year = previousYear + index;
                /** @type {?} */
                const content = String(year);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setYear(year).nativeDate) : false;
                /** @type {?} */
                const cell = (years[rowIndex][colIndex] = {
                    disabled,
                    content,
                    year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-cell-disabled`]: disabled,
                    [`${this.prefixCls}-last-decade-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-decade-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.previousDecade());
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.nextDecade());
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.chooseYear(cell.year));
                }
                index++;
            }
        }
        return years;
    }
}
YearPanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'year-panel',
                exportAs: 'yearPanel',
                template: "<div class=\"{{ prefixCls }}\">\n  <div>\n    <div class=\"{{ prefixCls }}-header\">\n      <a\n        class=\"{{ prefixCls }}-prev-decade-btn\"\n        role=\"button\"\n        (click)=\"previousDecade()\"\n        title=\"{{ locale.previousDecade }}\"\n      ></a>\n      <a\n        class=\"{{ prefixCls }}-decade-select\"\n        role=\"button\"\n        (click)=\"decadePanelShow.emit()\"\n        title=\"{{ locale.decadeSelect }}\"\n      >\n        <span class=\"{{ prefixCls }}-decade-select-content\">\n          {{ startYear }}-{{ endYear }}\n        </span>\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\n      </a>\n\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\n    </div>\n    <div class=\"{{ prefixCls }}-body\">\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n        <tbody class=\"{{ prefixCls }}-tbody\">\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\n              role=\"gridcell\"\n              title=\"{{ yearCell.title }}\"\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\n              [ngClass]=\"yearCell.classMap\"\n            >\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>",
                styles: [
                    // Support disabledDate
                    `
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,
      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {
        color: rgba(0, 0, 0, 0.25);
        background: #f5f5f5;
        cursor: not-allowed;
      }
    `]
            }] }
];
/** @nocollapse */
YearPanelComponent.ctorParameters = () => [];
YearPanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }],
    decadePanelShow: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.disabledDate;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
if (false) {
    /** @type {?} */
    PanelYearData.prototype.disabled;
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3llYXIveWVhci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUUvQyxPQUFPLEdBQUcsQ0FBQzs7TUFDWCxPQUFPLEdBQUcsQ0FBQztBQXFCakIsTUFBTSxPQUFPLGtCQUFrQjtJQXVCN0I7UUFuQm1CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUk1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFZOUQsY0FBUyxHQUFXLHlCQUF5QixDQUFDO0lBRy9CLENBQUM7Ozs7SUFiaEIsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7SUFDRCxJQUFJLFNBQVM7UUFDWCxPQUFPLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBT0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJ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QXdCOztJQUN4QixnQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUvY2FuZHktZGF0ZSc7XG5cbmNvbnN0IE1BWF9ST1cgPSA0O1xuY29uc3QgTUFYX0NPTCA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ3llYXItcGFuZWwnLFxuICBleHBvcnRBczogJ3llYXJQYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAneWVhci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIC8vIFN1cHBvcnQgZGlzYWJsZWREYXRlXG4gICAgYFxuICAgICAgLmFudC1jYWxlbmRhci15ZWFyLXBhbmVsLWNlbGwtZGlzYWJsZWQgLmFudC1jYWxlbmRhci15ZWFyLXBhbmVsLXllYXIsXG4gICAgICAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwtY2VsbC1kaXNhYmxlZCAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwteWVhcjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBZZWFyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRlY2FkZVBhbmVsU2hvdyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBnZXQgY3VycmVudFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS5nZXRZZWFyKCk7XG4gIH1cbiAgZ2V0IHN0YXJ0WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUludChgJHt0aGlzLmN1cnJlbnRZZWFyIC8gMTB9YCwgMTApICogMTA7XG4gIH1cbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5O1xuICB9XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyLXllYXItcGFuZWwnO1xuICBwYW5lbFllYXJzOiBQYW5lbFllYXJEYXRhW11bXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzRGVjYWRlKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoLTEwKTtcbiAgfVxuXG4gIG5leHREZWNhZGUoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigxMCk7XG4gIH1cblxuICB0cmFja1BhbmVsWWVhcihfaW5kZXg6IG51bWJlciwgeWVhckRhdGE6IFBhbmVsWWVhckRhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiB5ZWFyRGF0YS5jb250ZW50O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMucGFuZWxZZWFycyA9IHRoaXMubWFrZVBhbmVsWWVhcnMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNldFllYXIoeWVhcik7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VQYW5lbFllYXJzKCk6IFBhbmVsWWVhckRhdGFbXVtdIHtcbiAgICBjb25zdCB5ZWFyczogUGFuZWxZZWFyRGF0YVtdW10gPSBbXTtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMuY3VycmVudFllYXI7XG4gICAgY29uc3Qgc3RhcnRZZWFyID0gdGhpcy5zdGFydFllYXI7XG4gICAgY29uc3QgZW5kWWVhciA9IHRoaXMuZW5kWWVhcjtcbiAgICBjb25zdCBwcmV2aW91c1llYXIgPSBzdGFydFllYXIgLSAxO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4KyspIHtcbiAgICAgIHllYXJzW3Jvd0luZGV4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3QgeWVhciA9IHByZXZpb3VzWWVhciArIGluZGV4O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gU3RyaW5nKHllYXIpO1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRZZWFyKHllYXIpLm5hdGl2ZURhdGUpIDogZmFsc2U7XG5cbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxZZWFyRGF0YSA9ICh5ZWFyc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgeWVhcixcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBpc0N1cnJlbnQ6IHllYXIgPT09IGN1cnJlbnRZZWFyLFxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IHllYXIgPCBzdGFydFllYXIsXG4gICAgICAgICAgaXNCaWdnZXJUaGFuRW5kOiB5ZWFyID4gZW5kWWVhcixcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcbiAgICAgICAgICBvbkNsaWNrOiBudWxsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwuaXNDdXJyZW50LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhc3QtZGVjYWRlLWNlbGxgXTogY2VsbC5pc0xvd2VyVGhhblN0YXJ0LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1kZWNhZGUtY2VsbGBdOiBjZWxsLmlzQmlnZ2VyVGhhbkVuZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjZWxsLmlzTG93ZXJUaGFuU3RhcnQpIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLnByZXZpb3VzRGVjYWRlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5pc0JpZ2dlclRoYW5FbmQpIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLm5leHREZWNhZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLmNob29zZVllYXIoY2VsbC55ZWFyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB5ZWFycztcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsWWVhckRhdGEge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgY29udGVudDogc3RyaW5nO1xuICB5ZWFyOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcbiAgaXNCaWdnZXJUaGFuRW5kOiBib29sZWFuO1xuICBjbGFzc01hcDogb2JqZWN0IHwgbnVsbDtcbiAgb25DbGljazogVm9pZEZ1bmN0aW9uIHwgbnVsbDtcbn1cbiJdfQ==