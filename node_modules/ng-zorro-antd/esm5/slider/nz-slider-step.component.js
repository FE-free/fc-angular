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
var NzSliderStepComponent = /** @class */ (function () {
    function NzSliderStepComponent() {
        this.nzLowerBound = null;
        this.nzUpperBound = null;
        this.nzVertical = false;
        this.nzIncluded = false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderStepComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzMarksArray) {
            this.buildSteps();
        }
        if (changes.nzMarksArray || changes.nzLowerBound || changes.nzUpperBound) {
            this.togglePointActive();
        }
    };
    /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    NzSliderStepComponent.prototype.trackById = /**
     * @param {?} _index
     * @param {?} step
     * @return {?}
     */
    function (_index, step) {
        return step.value;
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderStepComponent.prototype.buildSteps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var orient = this.nzVertical ? 'bottom' : 'left';
        this.steps = this.nzMarksArray.map((/**
         * @param {?} mark
         * @return {?}
         */
        function (mark) {
            var _a;
            var value = mark.value, offset = mark.offset, config = mark.config;
            return {
                value: value,
                offset: offset,
                config: config,
                active: false,
                style: (_a = {},
                    _a[orient] = offset + "%",
                    _a)
            };
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzSliderStepComponent.prototype.togglePointActive = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.steps.forEach((/**
             * @param {?} step
             * @return {?}
             */
            function (step) {
                /** @type {?} */
                var value = step.value;
                /** @type {?} */
                var isActive = (!_this.nzIncluded && value === _this.nzUpperBound) ||
                    (_this.nzIncluded && value <= (/** @type {?} */ (_this.nzUpperBound)) && value >= (/** @type {?} */ (_this.nzLowerBound)));
                step.active = isActive;
            }));
        }
    };
    NzSliderStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-slider-step',
                    exportAs: 'nzSliderStep',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-slider-step\">\n  <span\n    class=\"ant-slider-dot\"\n    *ngFor=\"let mark of steps; trackBy: trackById\"\n    [class.ant-slider-dot-active]=\"mark.active\"\n    [ngStyle]=\"mark.style\">\n  </span>\n</div>"
                }] }
    ];
    NzSliderStepComponent.propDecorators = {
        nzLowerBound: [{ type: Input }],
        nzUpperBound: [{ type: Input }],
        nzMarksArray: [{ type: Input }],
        nzVertical: [{ type: Input }],
        nzIncluded: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderStepComponent.prototype, "nzVertical", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSliderStepComponent.prototype, "nzIncluded", void 0);
    return NzSliderStepComponent;
}());
export { NzSliderStepComponent };
if (false) {
    /** @type {?} */
    NzSliderStepComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderStepComponent.prototype.steps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlsRDtJQUFBO1FBU1csaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBQ25DLGlCQUFZLEdBQWtCLElBQUksQ0FBQztRQUVuQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxLQUFLLENBQUM7SUE4QzlDLENBQUM7Ozs7O0lBMUNDLDJDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7OztJQUVELHlDQUFTOzs7OztJQUFULFVBQVUsTUFBYyxFQUFFLElBQW1CO1FBQzNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLDBDQUFVOzs7O0lBQWxCOztZQUNRLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFFbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7O1lBQzdCLElBQUEsa0JBQUssRUFBRSxvQkFBTSxFQUFFLG9CQUFNO1lBRTdCLE9BQU87Z0JBQ0wsS0FBSyxPQUFBO2dCQUNMLE1BQU0sUUFBQTtnQkFDTixNQUFNLFFBQUE7Z0JBQ04sTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsS0FBSztvQkFDSCxHQUFDLE1BQU0sSUFBTSxNQUFNLE1BQUc7dUJBQ3ZCO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxpREFBaUI7Ozs7SUFBekI7UUFBQSxpQkFVQztRQVRDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUMxRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7O29CQUNmLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSzs7b0JBQ2xCLFFBQVEsR0FDWixDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLEtBQUssS0FBSSxDQUFDLFlBQVksQ0FBQztvQkFDakQsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssSUFBSSxtQkFBQSxLQUFJLENBQUMsWUFBWSxFQUFDLElBQUksS0FBSyxJQUFJLG1CQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQztnQkFDakYsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDekIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNk9BQThDO2lCQUMvQzs7OytCQUVFLEtBQUs7K0JBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs7SUFEbUI7UUFBZixZQUFZLEVBQUU7OzZEQUFvQjtJQUNuQjtRQUFmLFlBQVksRUFBRTs7NkRBQW9CO0lBOEM5Qyw0QkFBQztDQUFBLEFBM0RELElBMkRDO1NBbkRZLHFCQUFxQjs7O0lBQ2hDLDZDQUE0Qzs7SUFDNUMsNkNBQTRDOztJQUM1Qyw2Q0FBc0M7O0lBQ3RDLDJDQUE0Qzs7SUFDNUMsMkNBQTRDOztJQUU1QyxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgRGlzcGxheWVkU3RlcCwgRXh0ZW5kZWRNYXJrIH0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2xpZGVyLXN0ZXAnLFxuICBleHBvcnRBczogJ256U2xpZGVyU3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLXN0ZXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56VXBwZXJCb3VuZDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW107XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelZlcnRpY2FsID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekluY2x1ZGVkID0gZmFsc2U7XG5cbiAgc3RlcHM6IERpc3BsYXllZFN0ZXBbXTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5KSB7XG4gICAgICB0aGlzLmJ1aWxkU3RlcHMoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpNYXJrc0FycmF5IHx8IGNoYW5nZXMubnpMb3dlckJvdW5kIHx8IGNoYW5nZXMubnpVcHBlckJvdW5kKSB7XG4gICAgICB0aGlzLnRvZ2dsZVBvaW50QWN0aXZlKCk7XG4gICAgfVxuICB9XG5cbiAgdHJhY2tCeUlkKF9pbmRleDogbnVtYmVyLCBzdGVwOiBEaXNwbGF5ZWRTdGVwKTogbnVtYmVyIHtcbiAgICByZXR1cm4gc3RlcC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdGVwcygpOiB2b2lkIHtcbiAgICBjb25zdCBvcmllbnQgPSB0aGlzLm56VmVydGljYWwgPyAnYm90dG9tJyA6ICdsZWZ0JztcblxuICAgIHRoaXMuc3RlcHMgPSB0aGlzLm56TWFya3NBcnJheS5tYXAobWFyayA9PiB7XG4gICAgICBjb25zdCB7IHZhbHVlLCBvZmZzZXQsIGNvbmZpZyB9ID0gbWFyaztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIG9mZnNldCxcbiAgICAgICAgY29uZmlnLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIFtvcmllbnRdOiBgJHtvZmZzZXR9JWBcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RlcHMgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RlcHMuZm9yRWFjaChzdGVwID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBzdGVwLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQhICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kISk7XG4gICAgICAgIHN0ZXAuYWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==