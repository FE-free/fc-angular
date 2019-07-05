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
import { isNotNil, InputNumber } from 'ng-zorro-antd/core';
export class NzProgressComponent {
    constructor() {
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzType = 'line';
        this.nzStrokeLinecap = 'round';
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.inferredStrokeWidth = 8;
    }
    /**
     * @return {?}
     */
    get formatter() {
        return this.nzFormat || ((/**
         * @param {?} p
         * @return {?}
         */
        (p) => `${p}%`));
    }
    /**
     * @return {?}
     */
    get status() {
        return this.nzStatus || this.inferredStatus;
    }
    /**
     * @return {?}
     */
    get strokeWidth() {
        return this.nzStrokeWidth || this.inferredStrokeWidth;
    }
    /**
     * @return {?}
     */
    get isCircleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIcon();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzGapPosition, nzStrokeLinecap, nzGapDegree, nzType, nzSize, nzStatus, nzPercent, nzSuccessPercent } = changes;
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent) {
            this.updatePathStyles();
        }
        if (nzSize) {
            if (this.nzSize === 'small') {
                this.inferredStrokeWidth = 6;
            }
        }
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
            this.updateIcon();
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            const fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
            this.updateIcon();
        }
        if (nzType) {
            if (this.nzType !== 'line') {
                this.inferredStrokeWidth = 6;
            }
            if (this.nzType === 'dashboard') {
                this.inferredGapPosition = 'bottom';
                this.inferredGapDegree = 75;
            }
            if (this.nzType === 'circle') {
                this.inferredGapDegree = 0;
            }
        }
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        const gapPosition = this.nzGapPosition || this.inferredGapPosition;
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        /** @type {?} */
        const gapDegree = this.nzGapDegree || this.inferredGapDegree;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            stroke: this.nzStrokeColor || ((/** @type {?} */ (null))),
            // tslint:disable-line:no-any
            strokeDasharray: `${(this.nzPercent / 100) * (len - gapDegree)}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
        };
    }
    /**
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const isCircle = this.nzType === 'circle' || this.nzType === 'dashboard';
        /** @type {?} */
        const ret = this.status === 'success' ? 'check' : this.status === 'exception' ? 'close' : '';
        this.icon = ret ? ret + (isCircle ? '-o' : '-circle-fill') : '';
    }
}
NzProgressComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-progress',
                exportAs: 'nzProgress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\n      <i nz-icon [nzType]=\"icon\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ formatter(nzPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n<div\n  [ngClass]=\"'ant-progress ant-progress-status-' + status\"\n  [class.ant-progress-line]=\"nzType == 'line'\"\n  [class.ant-progress-small]=\"nzSize == 'small'\"\n  [class.ant-progress-show-info]=\"nzShowInfo\"\n  [class.ant-progress-circle]=\"isCircleStyle\"\n>\n  <!-- Line progress -->\n  <div *ngIf=\"nzType === 'line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div\n          class=\"ant-progress-bg\"\n          [style.width.%]=\"nzPercent\"\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n          [style.background]=\"nzStrokeColor\"\n          [style.height.px]=\"strokeWidth\"\n        ></div>\n        <div\n          class=\"ant-progress-success-bg\"\n          [style.width.%]=\"nzSuccessPercent\"\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n          [style.height.px]=\"strokeWidth\"\n        ></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n  <!-- Circle/Dashboard progress -->\n  <div\n    [style.width.px]=\"this.nzWidth\"\n    [style.height.px]=\"this.nzWidth\"\n    [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\n    class=\"ant-progress-inner\"\n    *ngIf=\"isCircleStyle\"\n  >\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n      <path\n        class=\"ant-progress-circle-trail\"\n        stroke=\"#f3f3f3\"\n        fill-opacity=\"0\"\n        [attr.stroke-width]=\"strokeWidth\"\n        [ngStyle]=\"trailPathStyle\"\n        [attr.d]=\"pathString\"\n      ></path>\n      <path\n        class=\"ant-progress-circle-path\"\n        [attr.d]=\"pathString\"\n        [attr.stroke-linecap]=\"nzStrokeLinecap\"\n        fill-opacity=\"0\"\n        [attr.stroke]=\"nzStrokeColor || statusColorMap[status]\"\n        [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\n        [ngStyle]=\"strokePathStyle\"\n      ></path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>\n"
            }] }
];
NzProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzStrokeColor: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzSuccessPercent: [{ type: Input }],
    nzPercent: [{ type: Input }],
    nzStrokeWidth: [{ type: Input }],
    nzGapDegree: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzType: [{ type: Input }],
    nzGapPosition: [{ type: Input }],
    nzStrokeLinecap: [{ type: Input }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzPercent", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Number)
], NzProgressComponent.prototype, "nzGapDegree", void 0);
if (false) {
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    NzProgressComponent.prototype.nzSize;
    /** @type {?} */
    NzProgressComponent.prototype.nzFormat;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    NzProgressComponent.prototype.nzStatus;
    /** @type {?} */
    NzProgressComponent.prototype.nzType;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeLinecap;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.statusColorMap;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStrokeWidth;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredGapPosition;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredGapDegree;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBSUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFlM0QsTUFBTSxPQUFPLG1CQUFtQjtJQVJoQztRQVNXLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQVNkLFdBQU0sR0FBdUIsTUFBTSxDQUFDO1FBRXBDLG9CQUFlLEdBQWdDLE9BQU8sQ0FBQztRQU1oRSxtQkFBYyxHQUE4QjtZQUMxQyxNQUFNLEVBQUUsU0FBUztZQUNqQixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsU0FBUztTQUNuQixDQUFDO1FBRU0saUJBQVksR0FBeUIsUUFBUSxDQUFDO1FBQzlDLG1CQUFjLEdBQXlCLFFBQVEsQ0FBQztRQUNoRCx3QkFBbUIsR0FBVyxDQUFDLENBQUM7SUFvSTFDLENBQUM7Ozs7SUFoSUMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJOzs7O1FBQUMsQ0FBQyxDQUFTLEVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDOUMsQ0FBQzs7OztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVE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aEQsK0NBQWtEOztJQUNsRCx3Q0FBMEM7O0lBQzFDLDRDQUE4Qzs7SUFDOUMsMENBQTRDOztJQUM1Qyx1Q0FBd0M7O0lBQ3hDLHFDQUE2Qzs7SUFDN0MsNENBQW1EOztJQUNuRCw4Q0FBZ0U7O0lBRWhFLDZDQUEwQzs7SUFDMUMsOENBQTJDOztJQUMzQyx5Q0FBbUI7O0lBQ25CLG1DQUFhOztJQUNiLDZDQUlFOzs7OztJQUVGLDJDQUFzRDs7Ozs7SUFDdEQsNkNBQXdEOzs7OztJQUN4RCxrREFBd0M7Ozs7O0lBQ3hDLGtEQUFvQzs7Ozs7SUFDcEMsZ0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzTm90TmlsLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2V4Y2VwdGlvbicgfCAnYWN0aXZlJyB8ICdub3JtYWwnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnIHwgJ2NpcmNsZScgfCAnZGFzaGJvYXJkJztcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCcgfCAnc3F1YXJlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LXByb2dyZXNzJyxcbiAgZXhwb3J0QXM6ICduelByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpTaG93SW5mbyA9IHRydWU7XG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XG4gIEBJbnB1dCgpIG56U3Ryb2tlQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56Rm9ybWF0PzogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelN1Y2Nlc3NQZXJjZW50PzogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuelBlcmNlbnQ6IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTdHJva2VXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBuekdhcERlZ3JlZTogbnVtYmVyO1xuICBASW5wdXQoKSBuelN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XG4gIEBJbnB1dCgpIG56VHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBASW5wdXQoKSBuekdhcFBvc2l0aW9uPzogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZTtcbiAgQElucHV0KCkgbnpTdHJva2VMaW5lY2FwOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUgPSAncm91bmQnO1xuXG4gIHRyYWlsUGF0aFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICBzdHJva2VQYXRoU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gIHBhdGhTdHJpbmc6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBzdGF0dXNDb2xvck1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcbiAgICBub3JtYWw6ICcjMTA4ZWU5JyxcbiAgICBleGNlcHRpb246ICcjZmY1NTAwJyxcbiAgICBzdWNjZXNzOiAnIzg3ZDA2OCdcbiAgfTtcblxuICBwcml2YXRlIGNhY2hlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0cm9rZVdpZHRoOiBudW1iZXIgPSA4O1xuICBwcml2YXRlIGluZmVycmVkR2FwUG9zaXRpb246IHN0cmluZztcbiAgcHJpdmF0ZSBpbmZlcnJlZEdhcERlZ3JlZTogbnVtYmVyO1xuXG4gIGdldCBmb3JtYXR0ZXIoKTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uekZvcm1hdCB8fCAoKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgKTtcbiAgfVxuXG4gIGdldCBzdGF0dXMoKTogTnpQcm9ncmVzc1N0YXR1c1R5cGUge1xuICAgIHJldHVybiB0aGlzLm56U3RhdHVzIHx8IHRoaXMuaW5mZXJyZWRTdGF0dXM7XG4gIH1cblxuICBnZXQgc3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelN0cm9rZVdpZHRoIHx8IHRoaXMuaW5mZXJyZWRTdHJva2VXaWR0aDtcbiAgfVxuXG4gIGdldCBpc0NpcmNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgdGhpcy51cGRhdGVJY29uKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgbnpHYXBQb3NpdGlvbixcbiAgICAgIG56U3Ryb2tlTGluZWNhcCxcbiAgICAgIG56R2FwRGVncmVlLFxuICAgICAgbnpUeXBlLFxuICAgICAgbnpTaXplLFxuICAgICAgbnpTdGF0dXMsXG4gICAgICBuelBlcmNlbnQsXG4gICAgICBuelN1Y2Nlc3NQZXJjZW50XG4gICAgfSA9IGNoYW5nZXM7XG5cbiAgICBpZiAobnpHYXBQb3NpdGlvbiB8fCBuelN0cm9rZUxpbmVjYXAgfHwgbnpHYXBEZWdyZWUgfHwgbnpUeXBlIHx8IG56UGVyY2VudCkge1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKG56U2l6ZSkge1xuICAgICAgaWYgKHRoaXMubnpTaXplID09PSAnc21hbGwnKSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdHJva2VXaWR0aCA9IDY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG56U3RhdHVzKSB7XG4gICAgICB0aGlzLmNhY2hlZFN0YXR1cyA9IHRoaXMubnpTdGF0dXMgfHwgdGhpcy5jYWNoZWRTdGF0dXM7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG5cbiAgICBpZiAobnpQZXJjZW50IHx8IG56U3VjY2Vzc1BlcmNlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLm56UGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xuICAgICAgaWYgKGZpbGxBbGwpIHtcbiAgICAgICAgaWYgKChpc05vdE5pbCh0aGlzLm56U3VjY2Vzc1BlcmNlbnQpICYmIHRoaXMubnpTdWNjZXNzUGVyY2VudCEgPj0gMTAwKSB8fCB0aGlzLm56U3VjY2Vzc1BlcmNlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSAnc3VjY2Vzcyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSB0aGlzLmNhY2hlZFN0YXR1cztcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cblxuICAgIGlmIChuelR5cGUpIHtcbiAgICAgIGlmICh0aGlzLm56VHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdHJva2VXaWR0aCA9IDY7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRHYXBQb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgICB0aGlzLmluZmVycmVkR2FwRGVncmVlID0gNzU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICAgIHRoaXMuaW5mZXJyZWRHYXBEZWdyZWUgPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVBhdGhTdHlsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSB0aGlzLnN0cm9rZVdpZHRoIC8gMjtcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCB0aGlzLmluZmVycmVkR2FwUG9zaXRpb247XG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcblxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcblxuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIGNvbnN0IGdhcERlZ3JlZSA9IHRoaXMubnpHYXBEZWdyZWUgfHwgdGhpcy5pbmZlcnJlZEdhcERlZ3JlZTtcblxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke2xlbiAtIGdhcERlZ3JlZX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcbiAgICB0aGlzLnN0cm9rZVBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZTogdGhpcy5uelN0cm9rZUNvbG9yIHx8IChudWxsIGFzIGFueSksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAkeyh0aGlzLm56UGVyY2VudCAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJ1xuICAgIH07XG4gIH1cblxuICB1cGRhdGVJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzQ2lyY2xlID0gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ2NoZWNrJyA6IHRoaXMuc3RhdHVzID09PSAnZXhjZXB0aW9uJyA/ICdjbG9zZScgOiAnJztcblxuICAgIHRoaXMuaWNvbiA9IHJldCA/IHJldCArIChpc0NpcmNsZSA/ICctbycgOiAnLWNpcmNsZS1maWxsJykgOiAnJztcbiAgfVxufVxuIl19