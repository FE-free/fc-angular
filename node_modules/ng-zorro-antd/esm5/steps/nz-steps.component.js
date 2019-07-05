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
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
var NzStepsComponent = /** @class */ (function () {
    function NzStepsComponent() {
        this.nzCurrent = 0;
        this.nzDirection = 'horizontal';
        this.nzLabelPlacement = 'horizontal';
        this.nzSize = 'default';
        this.nzStartIndex = 0;
        this.nzStatus = 'process';
        this.showProcessDot = false;
        this.destroy$ = new Subject();
    }
    Object.defineProperty(NzStepsComponent.prototype, "nzProgressDot", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof TemplateRef) {
                this.showProcessDot = true;
                this.customProcessDotTemplate = value;
            }
            else {
                this.showProcessDot = toBoolean(value);
            }
            this.updateChildrenSteps();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzStartIndex || changes.nzDirection || changes.nzStatus || changes.nzCurrent) {
            this.updateChildrenSteps();
        }
        if (changes.nzDirection || changes.nzProgressDot || changes.nzLabelPlacement || changes.nzSize) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateChildrenSteps();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzStepsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.updateChildrenSteps();
        if (this.steps) {
            this.steps.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            function () {
                _this.updateChildrenSteps();
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.updateChildrenSteps = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.steps) {
            /** @type {?} */
            var length_1 = this.steps.length;
            this.steps.toArray().forEach((/**
             * @param {?} step
             * @param {?} index
             * @return {?}
             */
            function (step, index) {
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    step.outStatus = _this.nzStatus;
                    step.showProcessDot = _this.showProcessDot;
                    if (_this.customProcessDotTemplate) {
                        step.customProcessTemplate = _this.customProcessDotTemplate;
                    }
                    step.direction = _this.nzDirection;
                    step.index = index + _this.nzStartIndex;
                    step.currentIndex = _this.nzCurrent;
                    step.last = length_1 === index + 1;
                    step.markForCheck();
                }));
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzStepsComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a["ant-steps-" + this.nzDirection] = true,
            _a["ant-steps-label-horizontal"] = this.nzDirection === 'horizontal',
            _a["ant-steps-label-vertical"] = (this.showProcessDot || this.nzLabelPlacement === 'vertical') && this.nzDirection === 'horizontal',
            _a["ant-steps-dot"] = this.showProcessDot,
            _a['ant-steps-small'] = this.nzSize === 'small',
            _a);
    };
    NzStepsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    selector: 'nz-steps',
                    exportAs: 'nzSteps',
                    template: "<div class=\"ant-steps\" [ngClass]=\"classMap\">\n  <ng-content></ng-content>\n</div>"
                }] }
    ];
    NzStepsComponent.propDecorators = {
        steps: [{ type: ContentChildren, args: [NzStepComponent,] }],
        nzCurrent: [{ type: Input }],
        nzDirection: [{ type: Input }],
        nzLabelPlacement: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStartIndex: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzProgressDot: [{ type: Input }]
    };
    return NzStepsComponent;
}());
export { NzStepsComponent };
if (false) {
    /** @type {?} */
    NzStepsComponent.prototype.steps;
    /** @type {?} */
    NzStepsComponent.prototype.nzCurrent;
    /** @type {?} */
    NzStepsComponent.prototype.nzDirection;
    /** @type {?} */
    NzStepsComponent.prototype.nzLabelPlacement;
    /** @type {?} */
    NzStepsComponent.prototype.nzSize;
    /** @type {?} */
    NzStepsComponent.prototype.nzStartIndex;
    /** @type {?} */
    NzStepsComponent.prototype.nzStatus;
    /** @type {?} */
    NzStepsComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepsComponent.prototype.customProcessDotTemplate;
    /** @type {?} */
    NzStepsComponent.prototype.classMap;
    /**
     * @type {?}
     * @private
     */
    NzStepsComponent.prototype.destroy$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zdGVwcy8iLCJzb3VyY2VzIjpbIm56LXN0ZXBzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBSUwsU0FBUyxFQUVULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBNkIsTUFBTSxvQkFBb0IsQ0FBQztBQUUxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFLdEQ7SUFBQTtRQVdXLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxnQkFBVyxHQUFvQixZQUFZLENBQUM7UUFDNUMscUJBQWdCLEdBQThCLFlBQVksQ0FBQztRQUMzRCxXQUFNLEdBQWlCLFNBQVMsQ0FBQztRQUNqQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixhQUFRLEdBQWlCLFNBQVMsQ0FBQztRQVk1QyxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUtmLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0lBNER6QyxDQUFDO0lBM0VDLHNCQUNJLDJDQUFhOzs7OztRQURqQixVQUNrQixLQUE2RjtZQUM3RyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO2dCQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hDO1lBQ0Qs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SSxDQUFDLGNBQWM7WUFDdEMsR0FBQyxpQkFBaUIsSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87ZUFDN0MsQ0FBQztJQUNKLENBQUM7O2dCQTVGRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLGlHQUF3QztpQkFDekM7Ozt3QkFFRSxlQUFlLFNBQUMsZUFBZTs0QkFFL0IsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7Z0NBRUwsS0FBSzs7SUEyRVIsdUJBQUM7Q0FBQSxBQTdGRCxJQTZGQztTQXJGWSxnQkFBZ0I7OztJQUMzQixpQ0FBb0U7O0lBRXBFLHFDQUF1Qjs7SUFDdkIsdUNBQXFEOztJQUNyRCw0Q0FBb0U7O0lBQ3BFLGtDQUEwQzs7SUFDMUMsd0NBQTBCOztJQUMxQixvQ0FBNEM7O0lBWTVDLDBDQUF1Qjs7SUFDdkIsb0RBQXVHOztJQUV2RyxvQ0FBc0I7Ozs7O0lBRXRCLG9DQUF1QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuLCBOZ0NsYXNzVHlwZSwgTnpTaXplRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpTdGVwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1zdGVwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56RGlyZWN0aW9uVHlwZSA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBOelN0YXR1c1R5cGUgPSAnd2FpdCcgfCAncHJvY2VzcycgfCAnZmluaXNoJyB8ICdlcnJvcic7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotc3RlcHMnLFxuICBleHBvcnRBczogJ256U3RlcHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RlcHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOelN0ZXBDb21wb25lbnQpIHN0ZXBzOiBRdWVyeUxpc3Q8TnpTdGVwQ29tcG9uZW50PjtcblxuICBASW5wdXQoKSBuekN1cnJlbnQgPSAwO1xuICBASW5wdXQoKSBuekRpcmVjdGlvbjogTnpEaXJlY3Rpb25UeXBlID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBuekxhYmVsUGxhY2VtZW50OiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuICBASW5wdXQoKSBuelNpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTdGFydEluZGV4ID0gMDtcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56U3RhdHVzVHlwZSA9ICdwcm9jZXNzJztcblxuICBASW5wdXQoKVxuICBzZXQgbnpQcm9ncmVzc0RvdCh2YWx1ZTogYm9vbGVhbiB8IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPjsgc3RhdHVzOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfT4pIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgdGhpcy5zaG93UHJvY2Vzc0RvdCA9IHRydWU7XG4gICAgICB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dQcm9jZXNzRG90ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcbiAgY3VzdG9tUHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+O1xuXG4gIGNsYXNzTWFwOiBOZ0NsYXNzVHlwZTtcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpTdGFydEluZGV4IHx8IGNoYW5nZXMubnpEaXJlY3Rpb24gfHwgY2hhbmdlcy5uelN0YXR1cyB8fCBjaGFuZ2VzLm56Q3VycmVudCkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9uIHx8IGNoYW5nZXMubnpQcm9ncmVzc0RvdCB8fCBjaGFuZ2VzLm56TGFiZWxQbGFjZW1lbnQgfHwgY2hhbmdlcy5uelNpemUpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcbiAgICAgIHRoaXMuc3RlcHMuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlblN0ZXBzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUNoaWxkcmVuU3RlcHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RlcHMpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuICAgICAgdGhpcy5zdGVwcy50b0FycmF5KCkuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgc3RlcC5vdXRTdGF0dXMgPSB0aGlzLm56U3RhdHVzO1xuICAgICAgICAgIHN0ZXAuc2hvd1Byb2Nlc3NEb3QgPSB0aGlzLnNob3dQcm9jZXNzRG90O1xuICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZSkge1xuICAgICAgICAgICAgc3RlcC5jdXN0b21Qcm9jZXNzVGVtcGxhdGUgPSB0aGlzLmN1c3RvbVByb2Nlc3NEb3RUZW1wbGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RlcC5kaXJlY3Rpb24gPSB0aGlzLm56RGlyZWN0aW9uO1xuICAgICAgICAgIHN0ZXAuaW5kZXggPSBpbmRleCArIHRoaXMubnpTdGFydEluZGV4O1xuICAgICAgICAgIHN0ZXAuY3VycmVudEluZGV4ID0gdGhpcy5uekN1cnJlbnQ7XG4gICAgICAgICAgc3RlcC5sYXN0ID0gbGVuZ3RoID09PSBpbmRleCArIDE7XG4gICAgICAgICAgc3RlcC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7XG4gICAgICBbYGFudC1zdGVwcy0ke3RoaXMubnpEaXJlY3Rpb259YF06IHRydWUsXG4gICAgICBbYGFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsYF06IHRoaXMubnpEaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyxcbiAgICAgIFtgYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsYF06XG4gICAgICAgICh0aGlzLnNob3dQcm9jZXNzRG90IHx8IHRoaXMubnpMYWJlbFBsYWNlbWVudCA9PT0gJ3ZlcnRpY2FsJykgJiYgdGhpcy5uekRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnLFxuICAgICAgW2BhbnQtc3RlcHMtZG90YF06IHRoaXMuc2hvd1Byb2Nlc3NEb3QsXG4gICAgICBbJ2FudC1zdGVwcy1zbWFsbCddOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJ1xuICAgIH07XG4gIH1cbn1cbiJdfQ==