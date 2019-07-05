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
export class DecadePanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    /**
     * @return {?}
     */
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    /**
     * @return {?}
     */
    get endYear() {
        return this.startYear + 99;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousCentury() {
        this.gotoYear(-100);
    }
    /**
     * @return {?}
     */
    nextCentury() {
        this.gotoYear(100);
    }
    /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    trackPanelDecade(_index, decadeData) {
        return decadeData.content;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
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
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    }
    /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    chooseDecade(startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    }
    /**
     * @private
     * @return {?}
     */
    makePanelDecades() {
        /** @type {?} */
        const decades = [];
        /** @type {?} */
        const currentYear = this.value.getYear();
        /** @type {?} */
        const startYear = this.startYear;
        /** @type {?} */
        const endYear = this.endYear;
        /** @type {?} */
        const previousYear = startYear - 10;
        /** @type {?} */
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const start = previousYear + index * 10;
                /** @type {?} */
                const end = previousYear + index * 10 + 9;
                /** @type {?} */
                const content = `${start}-${end}`;
                /** @type {?} */
                const cell = (decades[rowIndex][colIndex] = {
                    content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-last-century-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-century-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.previousCentury());
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.nextCentury());
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    () => this.chooseDecade(start));
                }
                index++;
            }
        }
        return decades;
    }
}
DecadePanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'decade-panel',
                exportAs: 'decadePanel',
                template: "<div class=\"{{ prefixCls }}\">\n  <div class=\"{{ prefixCls }}-header\">\n    <a\n      class=\"{{ prefixCls }}-prev-century-btn\"\n      role=\"button\"\n      (click)=\"previousCentury()\"\n      title=\"{{ locale.previousCentury }}\"\n    ></a>\n\n    <div class=\"{{ prefixCls }}-century\">\n      {{ startYear }}-{{ endYear }}\n    </div>\n    <a\n      class=\"{{ prefixCls }}-next-century-btn\"\n      role=\"button\"\n      (click)=\"nextCentury()\"\n      title=\"{{ locale.nextCentury }}\"\n    ></a>\n  </div>\n  <div class=\"{{ prefixCls }}-body\">\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n      <tbody class=\"{{ prefixCls }}-tbody\">\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\n            role=\"gridcell\"\n            title=\"{{ cell.title }}\"\n            (click)=\"cell.onClick()\"\n            [ngClass]=\"cell.classMap\"\n          >\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
DecadePanelComponent.ctorParameters = () => [];
DecadePanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DecadePanelComponent.prototype.locale;
    /** @type {?} */
    DecadePanelComponent.prototype.value;
    /** @type {?} */
    DecadePanelComponent.prototype.valueChange;
    /** @type {?} */
    DecadePanelComponent.prototype.prefixCls;
    /** @type {?} */
    DecadePanelComponent.prototype.panelDecades;
}
/**
 * @record
 */
export function PanelDecadeData() { }
if (false) {
    /** @type {?} */
    PanelDecadeData.prototype.content;
    /** @type {?} */
    PanelDecadeData.prototype.title;
    /** @type {?} */
    PanelDecadeData.prototype.isCurrent;
    /** @type {?} */
    PanelDecadeData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelDecadeData.prototype.isBiggerThanEnd;
    /** @type {?|undefined} */
    PanelDecadeData.prototype.classMap;
    /** @type {?} */
    PanelDecadeData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztNQUUvQyxPQUFPLEdBQUcsQ0FBQzs7TUFDWCxPQUFPLEdBQUcsQ0FBQztBQVVqQixNQUFNLE9BQU8sb0JBQW9CO0lBZ0IvQjtRQVptQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFTL0QsY0FBUyxHQUFXLDJCQUEyQixDQUFDO0lBR2pDLENBQUM7Ozs7SUFWaEIsSUFBSSxTQUFTO1FBQ1gsT0FBTyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7OztJQU9ELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FB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RSxDQUFBLENBQUM7aUJBQ3pDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPOzs7b0JBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2lCQUMvQztnQkFFRCxLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0Y7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUExR0YsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIseW5DQUEwQzthQUMzQzs7Ozs7cUJBRUUsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU07Ozs7SUFIUCxzQ0FBeUM7O0lBRXpDLHFDQUEwQjs7SUFDMUIsMkNBQStEOztJQVMvRCx5Q0FBZ0Q7O0lBQ2hELDRDQUFrQzs7Ozs7QUF1RnBDLHFDQVFDOzs7SUFQQyxrQ0FBZ0I7O0lBQ2hCLGdDQUFjOztJQUNkLG9DQUFtQjs7SUFDbkIsMkNBQTBCOztJQUMxQiwwQ0FBeUI7O0lBQ3pCLG1DQUF5Qjs7SUFDekIsa0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnZGVjYWRlLXBhbmVsJyxcbiAgZXhwb3J0QXM6ICdkZWNhZGVQYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWNhZGVQYW5lbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgZ2V0IHN0YXJ0WWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiBwYXJzZUludChgJHt0aGlzLnZhbHVlLmdldFllYXIoKSAvIDEwMH1gLCAxMCkgKiAxMDA7XG4gIH1cbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFllYXIgKyA5OTtcbiAgfVxuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhci1kZWNhZGUtcGFuZWwnO1xuICBwYW5lbERlY2FkZXM6IFBhbmVsRGVjYWRlRGF0YVtdW107XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcmV2aW91c0NlbnR1cnkoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigtMTAwKTtcbiAgfVxuXG4gIG5leHRDZW50dXJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoMTAwKTtcbiAgfVxuXG4gIHRyYWNrUGFuZWxEZWNhZGUoX2luZGV4OiBudW1iZXIsIGRlY2FkZURhdGE6IFBhbmVsRGVjYWRlRGF0YSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlY2FkZURhdGEuY29udGVudDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnBhbmVsRGVjYWRlcyA9IHRoaXMubWFrZVBhbmVsRGVjYWRlcygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlLXJlbmRlciBwYW5lbCBjb250ZW50IGJ5IHRoZSBoZWFkZXIncyBidXR0b25zIChOT1RFOiBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlKVxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KTtcbiAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7IC8vIERvIG5vdCB0cnkgdG8gdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VEZWNhZGUoc3RhcnRZZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRZZWFyKHN0YXJ0WWVhcik7XG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYWtlUGFuZWxEZWNhZGVzKCk6IFBhbmVsRGVjYWRlRGF0YVtdW10ge1xuICAgIGNvbnN0IGRlY2FkZXM6IFBhbmVsRGVjYWRlRGF0YVtdW10gPSBbXTtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMudmFsdWUuZ2V0WWVhcigpO1xuICAgIGNvbnN0IHN0YXJ0WWVhciA9IHRoaXMuc3RhcnRZZWFyO1xuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XG4gICAgY29uc3QgcHJldmlvdXNZZWFyID0gc3RhcnRZZWFyIC0gMTA7XG5cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XG4gICAgICBkZWNhZGVzW3Jvd0luZGV4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IE1BWF9DT0w7IGNvbEluZGV4KyspIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwO1xuICAgICAgICBjb25zdCBlbmQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwICsgOTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGAke3N0YXJ0fS0ke2VuZH1gO1xuXG4gICAgICAgIGNvbnN0IGNlbGw6IFBhbmVsRGVjYWRlRGF0YSA9IChkZWNhZGVzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBpc0N1cnJlbnQ6IGN1cnJlbnRZZWFyID49IHN0YXJ0ICYmIGN1cnJlbnRZZWFyIDw9IGVuZCxcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiBlbmQgPCBzdGFydFllYXIsXG4gICAgICAgICAgaXNCaWdnZXJUaGFuRW5kOiBzdGFydCA+IGVuZFllYXIsXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXG4gICAgICAgICAgb25DbGljazogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBjZWxsLmNsYXNzTWFwID0ge1xuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbGBdOiB0cnVlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtY2VsbGBdOiBjZWxsLmlzQ3VycmVudCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxhc3QtY2VudHVyeS1jZWxsYF06IGNlbGwuaXNMb3dlclRoYW5TdGFydCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtY2VudHVyeS1jZWxsYF06IGNlbGwuaXNCaWdnZXJUaGFuRW5kXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNlbGwuaXNMb3dlclRoYW5TdGFydCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMucHJldmlvdXNDZW50dXJ5KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2VsbC5pc0JpZ2dlclRoYW5FbmQpIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLm5leHRDZW50dXJ5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5jaG9vc2VEZWNhZGUoc3RhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2FkZXM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbERlY2FkZURhdGEge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcbiAgaXNCaWdnZXJUaGFuRW5kOiBib29sZWFuO1xuICBjbGFzc01hcD86IG9iamVjdCB8IG51bGw7XG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XG59XG4iXX0=