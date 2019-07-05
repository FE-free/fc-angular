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
export class NzSliderMarksComponent {
    constructor() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzMarksArray) {
            this.buildMarks();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} _index
     * @param {?} mark
     * @return {?}
     */
    trackById(_index, mark) {
        return mark.value;
    }
    /**
     * @private
     * @return {?}
     */
    buildMarks() {
        /** @type {?} */
        const range = this.nzMax - this.nzMin;
        this.marks = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            const style = this.buildStyles(value, range, config);
            /** @type {?} */
            const label = isConfigAObject(config) ? config.label : config;
            return {
                label,
                offset,
                style,
                value,
                config,
                active: false
            };
        }));
    }
    /**
     * @private
     * @param {?} value
     * @param {?} range
     * @param {?} config
     * @return {?}
     */
    buildStyles(value, range, config) {
        /** @type {?} */
        let style;
        if (this.nzVertical) {
            style = {
                marginBottom: '-50%',
                bottom: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        else {
            /** @type {?} */
            const marksCount = this.nzMarksArray.length;
            /** @type {?} */
            const unit = 100 / (marksCount - 1);
            /** @type {?} */
            const markWidth = unit * 0.9;
            style = {
                width: `${markWidth}%`,
                marginLeft: `${-markWidth / 2}%`,
                left: `${((value - this.nzMin) / range) * 100}%`
            };
        }
        if (isConfigAObject(config) && config.style) {
            style = Object.assign({}, style, config.style);
        }
        return style;
    }
    /**
     * @private
     * @return {?}
     */
    togglePointActive() {
        if (this.marks && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.marks.forEach((/**
             * @param {?} mark
             * @return {?}
             */
            mark => {
                /** @type {?} */
                const value = mark.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= (/** @type {?} */ (this.nzUpperBound)) && value >= (/** @type {?} */ (this.nzLowerBound)));
                mark.active = isActive;
            }));
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQXFDLE1BQU0seUJBQXlCLENBQUM7QUFVN0YsTUFBTSxPQUFPLHNCQUFzQjtJQVJuQztRQVNXLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUNuQyxpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFJbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBMEU5QyxDQUFDOzs7OztJQXRFQyxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYyxFQUFFLElBQW1CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLFVBQVU7O2NBQ1YsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUs7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxJQUFJ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O0FBQ25CO0lBQWYsWUFBWSxFQUFFOzswREFBb0I7OztJQU41Qyw4Q0FBNEM7O0lBQzVDLDhDQUE0Qzs7SUFDNUMsOENBQXNDOztJQUN0Qyx1Q0FBdUI7O0lBQ3ZCLHVDQUF1Qjs7SUFDdkIsNENBQTRDOztJQUM1Qyw0Q0FBNEM7O0lBRTVDLHVDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBpc0NvbmZpZ0FPYmplY3QsIERpc3BsYXllZE1hcmssIEV4dGVuZGVkTWFyaywgTWFyayB9IGZyb20gJy4vbnotc2xpZGVyLWRlZmluaXRpb25zJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc2VsZWN0b3I6ICduei1zbGlkZXItbWFya3MnLFxuICBleHBvcnRBczogJ256U2xpZGVyTWFya3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpMb3dlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpNYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXTtcbiAgQElucHV0KCkgbnpNaW46IG51bWJlcjtcbiAgQElucHV0KCkgbnpNYXg6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VmVydGljYWwgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SW5jbHVkZWQgPSBmYWxzZTtcblxuICBtYXJrczogRGlzcGxheWVkTWFya1tdO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcbiAgICAgIHRoaXMuYnVpbGRNYXJrcygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoX2luZGV4OiBudW1iZXIsIG1hcms6IERpc3BsYXllZE1hcmspOiBudW1iZXIge1xuICAgIHJldHVybiBtYXJrLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZE1hcmtzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uek1heCAtIHRoaXMubnpNaW47XG5cbiAgICB0aGlzLm1hcmtzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0LCBjb25maWcgfSA9IG1hcms7XG4gICAgICBjb25zdCBzdHlsZSA9IHRoaXMuYnVpbGRTdHlsZXModmFsdWUsIHJhbmdlLCBjb25maWcpO1xuICAgICAgY29uc3QgbGFiZWwgPSBpc0NvbmZpZ0FPYmplY3QoY29uZmlnKSA/IGNvbmZpZy5sYWJlbCA6IGNvbmZpZztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgc3R5bGUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBjb25maWcsXG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU3R5bGVzKHZhbHVlOiBudW1iZXIsIHJhbmdlOiBudW1iZXIsIGNvbmZpZzogTWFyayk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGxldCBzdHlsZTtcblxuICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcbiAgICAgICAgYm90dG9tOiBgJHsoKHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSkgKiAxMDB9JWBcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1hcmtzQ291bnQgPSB0aGlzLm56TWFya3NBcnJheS5sZW5ndGg7XG4gICAgICBjb25zdCB1bml0ID0gMTAwIC8gKG1hcmtzQ291bnQgLSAxKTtcbiAgICAgIGNvbnN0IG1hcmtXaWR0aCA9IHVuaXQgKiAwLjk7XG4gICAgICBzdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGAke21hcmtXaWR0aH0lYCxcbiAgICAgICAgbWFyZ2luTGVmdDogYCR7LW1hcmtXaWR0aCAvIDJ9JWAsXG4gICAgICAgIGxlZnQ6IGAkeygodmFsdWUgLSB0aGlzLm56TWluKSAvIHJhbmdlKSAqIDEwMH0lYFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBpZiAoaXNDb25maWdBT2JqZWN0KGNvbmZpZykgJiYgY29uZmlnLnN0eWxlKSB7XG4gICAgICBzdHlsZSA9IHsgLi4uc3R5bGUsIC4uLmNvbmZpZy5zdHlsZSB9O1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFya3MgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMubWFya3MuZm9yRWFjaChtYXJrID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBtYXJrLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kISk7XG5cbiAgICAgICAgbWFyay5hY3RpdmUgPSBpc0FjdGl2ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19