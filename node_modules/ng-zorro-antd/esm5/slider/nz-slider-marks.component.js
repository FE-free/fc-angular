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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { isConfigAObject } from './nz-slider-definitions';
var NzSliderMarksComponent = /** @class */ (function () {
    function NzSliderMarksComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderMarksComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    NzSliderMarksComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    function (_index, mark) {
        return mark.value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderMarksComponent.prototype.buildMarks = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var value = mark.value, offset = mark.offset, config = mark.config;
            /** @type {?} */
            var style = _this.buildStyles(value, range, config);
            /** @type {?} */
            var label = isConfigAObject(config) ? config.label : config;
            return {
                label: label,
                offset: offset,
                style: style,
                value: value,
                config: config,
                active: false
            };
        }));
    };
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    NzSliderMarksComponent.prototype.buildStyles = /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    function (value, range, config) {
        /** @type {?} */
        var style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        else {
            /** @type {?} */
            var marksCount = this.nzMarksArray.length;
            /** @type {?} */
            var unit = 100 / (marksCount - 1);
            /** @type {?} */
            var markWidth = unit * 0.9;
            style = {
                width: markWidth + "%",
                marginLeft: -markWidth / 2 + "%",
                left: ((value - this.nzMin) / range) * 100 + "%"
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = tslib_1.__assign({}, style, config.style);
        }
        return style;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderMarksComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            function (mark) {
                /** @type {?} */
                var value = mark.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    };
    NzSliderMarksComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-slider-marks',
                    exportAs: 'nzSliderMarks',
                    template: "<div class=\"ant-slider-mark\">\n  <span\n    class=\"ant-slider-mark-text\"\n    *ngFor=\"let attr of marks; trackBy: trackById\"\n    [class.ant-slider-mark-active]=\"attr.active\"\n    [ngStyle]=\"attr.style\"\n    [innerHTML]=\"attr.label\">\n  </span>\n</div>"
                }] }
    ];
    NzSliderMarksComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "nzVertical", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderMarksComponent.prototype, "nzIncluded", void 0);
    return NzSliderMarksComponent;
}());
export { NzSliderMarksComponent };
if (false) {
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderMarksComponent.prototype.marks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQXFDLE1BQU0seUJBQXlCLENBQUM7QUFFN0Y7SUFBQTtRQVNXLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUNuQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFJbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBMEU5QyxDQUFDOzs7OztJQXRFQyw0Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUFVLE1BQWMsRUFBRSxJQUFtQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTywyQ0FBVTs7OztJQUFsQjtRQUFBLGlCQWlCQzs7WUFoQk8sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFB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QkFDTCxLQUFLOztJQURtQjtRQUFmLFlBQVksRUFBRTs7OERBQW9CO0lBQ25CO1FBQWYsWUFBWSxFQUFFOzs4REFBb0I7SUEwRTlDLDZCQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0FqRlksc0JBQXNCOzs7SUFDakMsOENBQTRDOztJQUM1Qyw4Q0FBNEM7O0lBQzVDLDhDQUFzQzs7SUFDdEMsdUNBQXVCOztJQUN2Qix1Q0FBdUI7O0lBQ3ZCLDRDQUE0Qzs7SUFDNUMsNENBQTRDOztJQUU1Qyx1Q0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgaXNDb25maWdBT2JqZWN0LCBEaXNwbGF5ZWRNYXJrLCBFeHRlbmRlZE1hcmssIE1hcmsgfSBmcm9tICcuL256LXNsaWRlci1kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLW1hcmtzJyxcbiAgZXhwb3J0QXM6ICduelNsaWRlck1hcmtzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXNsaWRlci1tYXJrcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJNYXJrc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW107XG4gIEBJbnB1dCgpIG56TWluOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56TWF4OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XG5cbiAgbWFya3M6IERpc3BsYXllZE1hcmtbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkTWFya3MoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBtYXJrOiBEaXNwbGF5ZWRNYXJrKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbWFyay52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRNYXJrcygpOiB2b2lkIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMubnpNYXggLSB0aGlzLm56TWluO1xuXG4gICAgdGhpcy5tYXJrcyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xuICAgICAgY29uc3Qgc3R5bGUgPSB0aGlzLmJ1aWxkU3R5bGVzKHZhbHVlLCByYW5nZSwgY29uZmlnKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gaXNDb25maWdBT2JqZWN0KGNvbmZpZykgPyBjb25maWcubGFiZWwgOiBjb25maWc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhYmVsLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHN0eWxlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN0eWxlcyh2YWx1ZTogbnVtYmVyLCByYW5nZTogbnVtYmVyLCBjb25maWc6IE1hcmspOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgc3R5bGU7XG5cbiAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnLTUwJScsXG4gICAgICAgIGJvdHRvbTogYCR7KCh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UpICogMTAwfSVgXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtYXJrc0NvdW50ID0gdGhpcy5uek1hcmtzQXJyYXkubGVuZ3RoO1xuICAgICAgY29uc3QgdW5pdCA9IDEwMCAvIChtYXJrc0NvdW50IC0gMSk7XG4gICAgICBjb25zdCBtYXJrV2lkdGggPSB1bml0ICogMC45O1xuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBgJHttYXJrV2lkdGh9JWAsXG4gICAgICAgIG1hcmdpbkxlZnQ6IGAkey1tYXJrV2lkdGggLyAyfSVgLFxuICAgICAgICBsZWZ0OiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKGlzQ29uZmlnQU9iamVjdChjb25maWcpICYmIGNvbmZpZy5zdHlsZSkge1xuICAgICAgc3R5bGUgPSB7IC4uLnN0eWxlLCAuLi5jb25maWcuc3R5bGUgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVBvaW50QWN0aXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1hcmtzICYmIHRoaXMubnpMb3dlckJvdW5kICE9PSBudWxsICYmIHRoaXMubnpVcHBlckJvdW5kICE9PSBudWxsKSB7XG4gICAgICB0aGlzLm1hcmtzLmZvckVhY2gobWFyayA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbWFyay52YWx1ZTtcbiAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kISAmJiB2YWx1ZSA+PSB0aGlzLm56TG93ZXJCb3VuZCEpO1xuXG4gICAgICAgIG1hcmsuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==