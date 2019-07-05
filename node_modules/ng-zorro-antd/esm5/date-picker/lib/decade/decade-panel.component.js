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
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var DecadePanelComponent = /** @class */ (function () {
    function DecadePanelComponent() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    Object.defineProperty(DecadePanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.value.getYear() / 100, 10) * 100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecadePanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 99;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    DecadePanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.previousCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-100);
    };
    /**
     * @return {?}
     */
    DecadePanelComponent.prototype.nextCentury = /**
     * @return {?}
     */
    function () {
        this.gotoYear(100);
    };
    /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    DecadePanelComponent.prototype.trackPanelDecade = /**
     * @param {?} _index
     * @param {?} decadeData
     * @return {?}
     */
    function (_index, decadeData) {
        return decadeData.content;
    };
    /**
     * @private
     * @return {?}
     */
    DecadePanelComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    DecadePanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    };
    /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    DecadePanelComponent.prototype.chooseDecade = /**
     * @private
     * @param {?} startYear
     * @return {?}
     */
    function (startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    };
    /**
     * @private
     * @return {?}
     */
    DecadePanelComponent.prototype.makePanelDecades = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var decades = [];
        /** @type {?} */
        var currentYear = this.value.getYear();
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 10;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var start = previousYear + index * 10;
                /** @type {?} */
                var end = previousYear + index * 10 + 9;
                /** @type {?} */
                var content = start + "-" + end;
                /** @type {?} */
                var cell = (decades[rowIndex][colIndex] = {
                    content: content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-last-century-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-century-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.previousCentury(); });
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.nextCentury(); });
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.chooseDecade(start); });
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return decades;
    };
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
    DecadePanelComponent.ctorParameters = function () { return []; };
    DecadePanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }]
    };
    return DecadePanelComponent;
}());
export { DecadePanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQUUvQyxPQUFPLEdBQUcsQ0FBQzs7SUFDWCxPQUFPLEdBQUcsQ0FBQztBQUVqQjtJQXdCRTtRQVptQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFTL0QsY0FBUyxHQUFXLDJCQUEyQixDQUFDO0lBR2pDLENBQUM7SUFWaEIsc0JBQUksMkNBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sUUFBUSxDQUFDLEtBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBQ0Qsc0JBQUkseUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7Ozs7O0lBT0QsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7Ozs7SUFFRCw4Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFR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LENBQUM7aUJBQ3pDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPOzs7b0JBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXhCLENBQXdCLENBQUEsQ0FBQztpQkFDL0M7Z0JBRUQsS0FBSyxFQUFFLENBQUM7OztZQTlCVixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsRUFBRTt3QkFBNUMsUUFBUTthQStCaEI7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7O2dCQTFHRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztvQkFFL0MsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2Qix5bkNBQTBDO2lCQUMzQzs7Ozs7eUJBRUUsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07O0lBK0ZULDJCQUFDO0NBQUEsQUEzR0QsSUEyR0M7U0FuR1ksb0JBQW9COzs7SUFDL0Isc0NBQXlDOztJQUV6QyxxQ0FBMEI7O0lBQzFCLDJDQUErRDs7SUFTL0QseUNBQWdEOztJQUNoRCw0Q0FBa0M7Ozs7O0FBdUZwQyxxQ0FRQzs7O0lBUEMsa0NBQWdCOztJQUNoQixnQ0FBYzs7SUFDZCxvQ0FBbUI7O0lBQ25CLDJDQUEwQjs7SUFDMUIsMENBQXlCOztJQUN6QixtQ0FBeUI7O0lBQ3pCLGtDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUvY2FuZHktZGF0ZSc7XG5cbmNvbnN0IE1BWF9ST1cgPSA0O1xuY29uc3QgTUFYX0NPTCA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2RlY2FkZS1wYW5lbCcsXG4gIGV4cG9ydEFzOiAnZGVjYWRlUGFuZWwnLFxuICB0ZW1wbGF0ZVVybDogJ2RlY2FkZS1wYW5lbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGVjYWRlUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIGdldCBzdGFydFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoYCR7dGhpcy52YWx1ZS5nZXRZZWFyKCkgLyAxMDB9YCwgMTApICogMTAwO1xuICB9XG4gIGdldCBlbmRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc3RhcnRZZWFyICsgOTk7XG4gIH1cblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItZGVjYWRlLXBhbmVsJztcbiAgcGFuZWxEZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXNDZW50dXJ5KCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoLTEwMCk7XG4gIH1cblxuICBuZXh0Q2VudHVyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKDEwMCk7XG4gIH1cblxuICB0cmFja1BhbmVsRGVjYWRlKF9pbmRleDogbnVtYmVyLCBkZWNhZGVEYXRhOiBQYW5lbERlY2FkZURhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWNhZGVEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbERlY2FkZXMgPSB0aGlzLm1ha2VQYW5lbERlY2FkZXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlRGVjYWRlKHN0YXJ0WWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcihzdGFydFllYXIpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhbmVsRGVjYWRlcygpOiBQYW5lbERlY2FkZURhdGFbXVtdIHtcbiAgICBjb25zdCBkZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdID0gW107XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlLmdldFllYXIoKTtcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDEwO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXgrKykge1xuICAgICAgZGVjYWRlc1tyb3dJbmRleF0gPSBbXTtcbiAgICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBNQVhfQ09MOyBjb2xJbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gcHJldmlvdXNZZWFyICsgaW5kZXggKiAxMDtcbiAgICAgICAgY29uc3QgZW5kID0gcHJldmlvdXNZZWFyICsgaW5kZXggKiAxMCArIDk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgJHtzdGFydH0tJHtlbmR9YDtcblxuICAgICAgICBjb25zdCBjZWxsOiBQYW5lbERlY2FkZURhdGEgPSAoZGVjYWRlc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgdGl0bGU6IGNvbnRlbnQsXG4gICAgICAgICAgaXNDdXJyZW50OiBjdXJyZW50WWVhciA+PSBzdGFydCAmJiBjdXJyZW50WWVhciA8PSBlbmQsXG4gICAgICAgICAgaXNMb3dlclRoYW5TdGFydDogZW5kIDwgc3RhcnRZZWFyLFxuICAgICAgICAgIGlzQmlnZ2VyVGhhbkVuZDogc3RhcnQgPiBlbmRZZWFyLFxuICAgICAgICAgIGNsYXNzTWFwOiBudWxsLFxuICAgICAgICAgIG9uQ2xpY2s6IG51bGxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNlbGVjdGVkLWNlbGxgXTogY2VsbC5pc0N1cnJlbnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1sYXN0LWNlbnR1cnktY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uZXh0LWNlbnR1cnktY2VsbGBdOiBjZWxsLmlzQmlnZ2VyVGhhbkVuZFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjZWxsLmlzTG93ZXJUaGFuU3RhcnQpIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLnByZXZpb3VzQ2VudHVyeSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGNlbGwuaXNCaWdnZXJUaGFuRW5kKSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5uZXh0Q2VudHVyeSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlRGVjYWRlKHN0YXJ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkZWNhZGVzO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxEZWNhZGVEYXRhIHtcbiAgY29udGVudDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBpc0N1cnJlbnQ6IGJvb2xlYW47XG4gIGlzTG93ZXJUaGFuU3RhcnQ6IGJvb2xlYW47XG4gIGlzQmlnZ2VyVGhhbkVuZDogYm9vbGVhbjtcbiAgY2xhc3NNYXA/OiBvYmplY3QgfCBudWxsO1xuICBvbkNsaWNrOiBWb2lkRnVuY3Rpb24gfCBudWxsO1xufVxuIl19