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
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { reverseChildNodes } from 'ng-zorro-antd/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export class NzTimelineComponent {
    /**
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzReverse = false;
        this.isPendingBoolean = false;
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const modeChanges = changes.nzMode;
        /** @type {?} */
        const reverseChanges = changes.nzReverse;
        /** @type {?} */
        const pendingChanges = changes.nzPending;
        if (modeChanges && (modeChanges.previousValue !== modeChanges.currentValue || modeChanges.isFirstChange())) {
            this.updateChildren();
        }
        if (reverseChanges &&
            reverseChanges.previousValue !== reverseChanges.currentValue &&
            !reverseChanges.isFirstChange()) {
            this.reverseChildTimelineDots();
        }
        if (pendingChanges) {
            this.isPendingBoolean = pendingChanges.currentValue === true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.updateChildren();
        if (this.listOfTimeLine) {
            this.listOfTimeLine.changes.pipe(takeUntil(this.destroy$)).subscribe((/**
             * @return {?}
             */
            () => {
                this.updateChildren();
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    /**
     * @private
     * @return {?}
     */
    updateChildren() {
        if (this.listOfTimeLine && this.listOfTimeLine.length) {
            /** @type {?} */
            const length = this.listOfTimeLine.length;
            this.listOfTimeLine.toArray().forEach((/**
             * @param {?} item
             * @param {?} index
             * @return {?}
             */
            (item, index) => {
                item.isLast = !this.nzReverse ? index === length - 1 : index === 0;
                item.position =
                    this.nzMode === 'left' || !this.nzMode
                        ? undefined
                        : this.nzMode === 'right'
                            ? 'right'
                            : this.nzMode === 'alternate' && index % 2 === 0
                                ? 'left'
                                : 'right';
                item.detectChanges();
            }));
            this.cdr.markForCheck();
        }
    }
    /**
     * @private
     * @return {?}
     */
    reverseChildTimelineDots() {
        if (this.platform.isBrowser) {
            reverseChildNodes((/** @type {?} */ (this.timeline.nativeElement)));
            this.updateChildren();
        }
    }
}
NzTimelineComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline',
                exportAs: 'nzTimeline',
                template: "<ul\n  class=\"ant-timeline\"\n  [class.ant-timeline-right]=\"nzMode === 'right'\"\n  [class.ant-timeline-alternate]=\"nzMode === 'alternate'\"\n  [class.ant-timeline-pending]=\"!!nzPending\"\n  [class.ant-timeline-reverse]=\"nzReverse\"\n  #timeline>\n  <!-- User inserted timeline dots. -->\n  <ng-content></ng-content>\n  <!-- Pending dot. -->\n  <li *ngIf=\"nzPending\" class=\"ant-timeline-item ant-timeline-item-pending\">\n    <div class=\"ant-timeline-item-tail\"></div>\n    <div class=\"ant-timeline-item-head ant-timeline-item-head-custom ant-timeline-item-head-blue\">\n      <ng-container *nzStringTemplateOutlet=\"nzPendingDot\">\n        {{ nzPendingDot }}<i *ngIf=\"!nzPendingDot\" nz-icon nzType=\"loading\"></i>\n      </ng-container>\n    </div>\n    <div class=\"ant-timeline-item-content\">\n      <ng-container *nzStringTemplateOutlet=\"nzPending\">\n        {{ isPendingBoolean ? '' : nzPending }}\n      </ng-container>\n    </div>\n  </li>\n</ul>\n"
            }] }
];
/** @nocollapse */
NzTimelineComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzTimelineComponent.propDecorators = {
    timeline: [{ type: ViewChild, args: ['timeline', { static: false },] }],
    listOfTimeLine: [{ type: ContentChildren, args: [NzTimelineItemComponent,] }],
    _pendingContent: [{ type: ContentChild, args: ['pending', { static: false },] }],
    nzMode: [{ type: Input }],
    nzPending: [{ type: Input }],
    nzPendingDot: [{ type: Input }],
    nzReverse: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzTimelineComponent.prototype.timeline;
    /** @type {?} */
    NzTimelineComponent.prototype.listOfTimeLine;
    /** @type {?} */
    NzTimelineComponent.prototype._pendingContent;
    /** @type {?} */
    NzTimelineComponent.prototype.nzMode;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPending;
    /** @type {?} */
    NzTimelineComponent.prototype.nzPendingDot;
    /** @type {?} */
    NzTimelineComponent.prototype.nzReverse;
    /** @type {?} */
    NzTimelineComponent.prototype.isPendingBoolean;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzTimelineComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC90aW1lbGluZS8iLCJzb3VyY2VzIjpbIm56LXRpbWVsaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxXQUFXLEVBQ1gsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQVl2RSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQWM5QixZQUFvQixHQUFzQixFQUFVLFFBQWtCO1FBQWxELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQU43RCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBRXBDLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUUxQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQUVrQyxDQUFDOzs7OztJQUUxRSxXQUFXLENBQUMsT0FBc0I7O2NBQzFCLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTTs7Y0FDNUIsY0FBYyxHQUFHLE9BQU8sQ0FBQyxTQUFTOztjQUNsQyxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVM7UUFFeEMsSUFBSSxXQUFXLElBQUksQ0FBQyxXQUFXLENBQUMsYUFB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QUUsS0FBSyxFQUFFOzZCQUN2QyxlQUFlLFNBQUMsdUJBQXVCOzhCQUN2QyxZQUFZLFNBQUMsU0FBUyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtxQkFFekMsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQVBOLHVDQUE0RTs7SUFDNUUsNkNBQTZGOztJQUM3Riw4Q0FBK0U7O0lBRS9FLHFDQUFnQzs7SUFDaEMsd0NBQXlEOztJQUN6RCwyQ0FBa0Q7O0lBQ2xELHdDQUFvQzs7SUFFcEMsK0NBQWtDOzs7OztJQUVsQyx1Q0FBdUM7Ozs7O0lBRTNCLGtDQUE4Qjs7Ozs7SUFBRSx1Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHJldmVyc2VDaGlsZE5vZGVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgTnpUaW1lbGluZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LXRpbWVsaW5lLWl0ZW0uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgTnpUaW1lbGluZU1vZGUgPSAnbGVmdCcgfCAnYWx0ZXJuYXRlJyB8ICdyaWdodCc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yOiAnbnotdGltZWxpbmUnLFxuICBleHBvcnRBczogJ256VGltZWxpbmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdGltZWxpbmUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGltZWxpbmVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ3RpbWVsaW5lJywgeyBzdGF0aWM6IGZhbHNlIH0pIHRpbWVsaW5lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRpbWVsaW5lSXRlbUNvbXBvbmVudCkgbGlzdE9mVGltZUxpbmU6IFF1ZXJ5TGlzdDxOelRpbWVsaW5lSXRlbUNvbXBvbmVudD47XG4gIEBDb250ZW50Q2hpbGQoJ3BlbmRpbmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgX3BlbmRpbmdDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuek1vZGU6IE56VGltZWxpbmVNb2RlO1xuICBASW5wdXQoKSBuelBlbmRpbmc6IHN0cmluZyB8IGJvb2xlYW4gfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpQZW5kaW5nRG90OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpSZXZlcnNlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgaXNQZW5kaW5nQm9vbGVhbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IG1vZGVDaGFuZ2VzID0gY2hhbmdlcy5uek1vZGU7XG4gICAgY29uc3QgcmV2ZXJzZUNoYW5nZXMgPSBjaGFuZ2VzLm56UmV2ZXJzZTtcbiAgICBjb25zdCBwZW5kaW5nQ2hhbmdlcyA9IGNoYW5nZXMubnpQZW5kaW5nO1xuXG4gICAgaWYgKG1vZGVDaGFuZ2VzICYmIChtb2RlQ2hhbmdlcy5wcmV2aW91c1ZhbHVlICE9PSBtb2RlQ2hhbmdlcy5jdXJyZW50VmFsdWUgfHwgbW9kZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpKSkge1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICByZXZlcnNlQ2hhbmdlcyAmJlxuICAgICAgcmV2ZXJzZUNoYW5nZXMucHJldmlvdXNWYWx1ZSAhPT0gcmV2ZXJzZUNoYW5nZXMuY3VycmVudFZhbHVlICYmXG4gICAgICAhcmV2ZXJzZUNoYW5nZXMuaXNGaXJzdENoYW5nZSgpXG4gICAgKSB7XG4gICAgICB0aGlzLnJldmVyc2VDaGlsZFRpbWVsaW5lRG90cygpO1xuICAgIH1cbiAgICBpZiAocGVuZGluZ0NoYW5nZXMpIHtcbiAgICAgIHRoaXMuaXNQZW5kaW5nQm9vbGVhbiA9IHBlbmRpbmdDaGFuZ2VzLmN1cnJlbnRWYWx1ZSA9PT0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgIGlmICh0aGlzLmxpc3RPZlRpbWVMaW5lKSB7XG4gICAgICB0aGlzLmxpc3RPZlRpbWVMaW5lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdE9mVGltZUxpbmUgJiYgdGhpcy5saXN0T2ZUaW1lTGluZS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubGlzdE9mVGltZUxpbmUubGVuZ3RoO1xuICAgICAgdGhpcy5saXN0T2ZUaW1lTGluZS50b0FycmF5KCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaXRlbS5pc0xhc3QgPSAhdGhpcy5uelJldmVyc2UgPyBpbmRleCA9PT0gbGVuZ3RoIC0gMSA6IGluZGV4ID09PSAwO1xuICAgICAgICBpdGVtLnBvc2l0aW9uID1cbiAgICAgICAgICB0aGlzLm56TW9kZSA9PT0gJ2xlZnQnIHx8ICF0aGlzLm56TW9kZVxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDogdGhpcy5uek1vZGUgPT09ICdyaWdodCdcbiAgICAgICAgICAgID8gJ3JpZ2h0J1xuICAgICAgICAgICAgOiB0aGlzLm56TW9kZSA9PT0gJ2FsdGVybmF0ZScgJiYgaW5kZXggJSAyID09PSAwXG4gICAgICAgICAgICA/ICdsZWZ0J1xuICAgICAgICAgICAgOiAncmlnaHQnO1xuICAgICAgICBpdGVtLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZXZlcnNlQ2hpbGRUaW1lbGluZURvdHMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXZlcnNlQ2hpbGROb2Rlcyh0aGlzLnRpbWVsaW5lLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgIH1cbiAgfVxufVxuIl19