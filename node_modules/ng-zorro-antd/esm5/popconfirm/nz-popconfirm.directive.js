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
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Host, Input, Optional, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
var NzPopconfirmDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopconfirmDirective, _super);
    function NzPopconfirmDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.factory = _this.resolver.resolveComponentFactory(NzPopconfirmComponent);
        _this.needProxyProperties = [
            'nzTitle',
            'nzContent',
            'nzOverlayClassName',
            'nzOverlayStyle',
            'nzMouseEnterDelay',
            'nzMouseLeaveDelay',
            'nzVisible',
            'nzTrigger',
            'nzPlacement',
            'nzOkText',
            'nzOkType',
            'nzCancelText',
            'nzCondition',
            'nzIcon'
        ];
        _this.nzOnCancel = new EventEmitter();
        _this.nzOnConfirm = new EventEmitter();
        return _this;
    }
    /**
     * @return {?}
     */
    NzPopconfirmDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.tooltip) {
            /** @type {?} */
            var tooltipComponent = this.hostView.createComponent(this.factory);
            this.tooltip = tooltipComponent.instance;
            this.tooltip.noAnimation = this.noAnimation;
            // Remove element when use directive https://github.com/NG-ZORRO/ng-zorro-antd/issues/1967
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), tooltipComponent.location.nativeElement);
            this.isDynamicTooltip = true;
            this.needProxyProperties.forEach((/**
             * @param {?} property
             * @return {?}
             */
            function (property) { return _this.updateCompValue(property, _this[property]); }));
            /** @type {?} */
            var visible_ = this.tooltip.nzVisibleChange.pipe(distinctUntilChanged()).subscribe((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                _this.visible = data;
                _this.nzVisibleChange.emit(data);
            }));
            /** @type {?} */
            var cancel_ = ((/** @type {?} */ (this.tooltip))).nzOnCancel.subscribe((/**
             * @return {?}
             */
            function () {
                _this.nzOnCancel.emit();
            }));
            /** @type {?} */
            var confirm_ = ((/** @type {?} */ (this.tooltip))).nzOnConfirm.subscribe((/**
             * @return {?}
             */
            function () {
                _this.nzOnConfirm.emit();
            }));
            this.subs_.add(visible_);
            this.subs_.add(cancel_);
            this.subs_.add(confirm_);
        }
        this.tooltip.setOverlayOrigin(this);
    };
    NzPopconfirmDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popconfirm]',
                    exportAs: 'nzPopconfirm',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipOpen'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopconfirmDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopconfirmComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopconfirmDirective.propDecorators = {
        nzOkText: [{ type: Input }],
        nzOkType: [{ type: Input }],
        nzCancelText: [{ type: Input }],
        nzIcon: [{ type: Input }],
        nzCondition: [{ type: Input }],
        nzOnCancel: [{ type: Output }],
        nzOnConfirm: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzPopconfirmDirective.prototype, "nzCondition", void 0);
    return NzPopconfirmDirective;
}(NzTooltipDirective));
export { NzPopconfirmDirective };
if (false) {
    /** @type {?} */
    NzPopconfirmDirective.prototype.factory;
    /**
     * @type {?}
     * @protected
     */
    NzPopconfirmDirective.prototype.needProxyProperties;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOkType;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCancelText;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzIcon;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzCondition;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnCancel;
    /** @type {?} */
    NzPopconfirmDirective.prototype.nzOnConfirm;
    /** @type {?} */
    NzPopconfirmDirective.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wY29uZmlybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3BvcGNvbmZpcm0vIiwic291cmNlcyI6WyJuei1wb3Bjb25maXJtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTtJQU8yQyxpREFBa0I7SUE0QjNELCtCQUNFLFVBQXNCLEVBQ3RCLFFBQTBCLEVBQzFCLFFBQWtDLEVBQ2xDLFFBQW1CLEVBQ1AsT0FBOEIsRUFDZixXQUFvQztRQU5qRSxZQVFFLGtCQUFNLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLFNBQ3RFO1FBSDRCLGlCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQWpDakUsYUFBTyxHQUE0QyxLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFdEcseUJBQW1CLEdBQUc7WUFDOUIsU0FBUztZQUNULFdBQVc7WUFDWCxvQkFBb0I7WUFDcEIsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsV0FBVztZQUNYLFdBQVc7WUFDWCxhQUFhO1lBQ2IsVUFB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NUQ7U0FuRVkscUJBQXFCOzs7SUFDaEMsd0NBQWdIOzs7OztJQUVoSCxvREFlRTs7SUFFRix5Q0FBMEI7O0lBQzFCLHlDQUEwQjs7SUFDMUIsNkNBQThCOztJQUM5Qix1Q0FBNEM7O0lBQzVDLDRDQUE4Qzs7SUFDOUMsMkNBQXlEOztJQUN6RCw0Q0FBMEQ7O0lBUXhELDRDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56VG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IE56UG9wY29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vbnotcG9wY29uZmlybS5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotcG9wY29uZmlybV0nLFxuICBleHBvcnRBczogJ256UG9wY29uZmlybScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1wb3BvdmVyLW9wZW5dJzogJ2lzVG9vbHRpcE9wZW4nXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpQb3Bjb25maXJtRGlyZWN0aXZlIGV4dGVuZHMgTnpUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZmFjdG9yeTogQ29tcG9uZW50RmFjdG9yeTxOelBvcGNvbmZpcm1Db21wb25lbnQ+ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShOelBvcGNvbmZpcm1Db21wb25lbnQpO1xuXG4gIHByb3RlY3RlZCBuZWVkUHJveHlQcm9wZXJ0aWVzID0gW1xuICAgICduelRpdGxlJyxcbiAgICAnbnpDb250ZW50JyxcbiAgICAnbnpPdmVybGF5Q2xhc3NOYW1lJyxcbiAgICAnbnpPdmVybGF5U3R5bGUnLFxuICAgICduek1vdXNlRW50ZXJEZWxheScsXG4gICAgJ256TW91c2VMZWF2ZURlbGF5JyxcbiAgICAnbnpWaXNpYmxlJyxcbiAgICAnbnpUcmlnZ2VyJyxcbiAgICAnbnpQbGFjZW1lbnQnLFxuICAgICduek9rVGV4dCcsXG4gICAgJ256T2tUeXBlJyxcbiAgICAnbnpDYW5jZWxUZXh0JyxcbiAgICAnbnpDb25kaXRpb24nLFxuICAgICduekljb24nXG4gIF07XG5cbiAgQElucHV0KCkgbnpPa1RleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpPa1R5cGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpDYW5jZWxUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbmRpdGlvbjogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIGhvc3RWaWV3OiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBAT3B0aW9uYWwoKSB0b29sdGlwOiBOelBvcGNvbmZpcm1Db21wb25lbnQsXG4gICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBwdWJsaWMgbm9BbmltYXRpb24/OiBOek5vQW5pbWF0aW9uRGlyZWN0aXZlXG4gICkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIGhvc3RWaWV3LCByZXNvbHZlciwgcmVuZGVyZXIsIHRvb2x0aXAsIG5vQW5pbWF0aW9uKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwKSB7XG4gICAgICBjb25zdCB0b29sdGlwQ29tcG9uZW50ID0gdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQodGhpcy5mYWN0b3J5KTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRvb2x0aXBDb21wb25lbnQuaW5zdGFuY2U7XG4gICAgICB0aGlzLnRvb2x0aXAubm9BbmltYXRpb24gPSB0aGlzLm5vQW5pbWF0aW9uO1xuICAgICAgLy8gUmVtb3ZlIGVsZW1lbnQgd2hlbiB1c2UgZGlyZWN0aXZlIGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2lzc3Vlcy8xOTY3XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNoaWxkKFxuICAgICAgICB0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0b29sdGlwQ29tcG9uZW50LmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnRcbiAgICAgICk7XG4gICAgICB0aGlzLmlzRHluYW1pY1Rvb2x0aXAgPSB0cnVlO1xuICAgICAgdGhpcy5uZWVkUHJveHlQcm9wZXJ0aWVzLmZvckVhY2gocHJvcGVydHkgPT4gdGhpcy51cGRhdGVDb21wVmFsdWUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKSk7XG4gICAgICBjb25zdCB2aXNpYmxlXyA9IHRoaXMudG9vbHRpcC5uelZpc2libGVDaGFuZ2UucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGRhdGE7XG4gICAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGNhbmNlbF8gPSAodGhpcy50b29sdGlwIGFzIE56UG9wY29uZmlybUNvbXBvbmVudCkubnpPbkNhbmNlbC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm56T25DYW5jZWwuZW1pdCgpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBjb25maXJtXyA9ICh0aGlzLnRvb2x0aXAgYXMgTnpQb3Bjb25maXJtQ29tcG9uZW50KS5uek9uQ29uZmlybS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm56T25Db25maXJtLmVtaXQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zdWJzXy5hZGQodmlzaWJsZV8pO1xuICAgICAgdGhpcy5zdWJzXy5hZGQoY2FuY2VsXyk7XG4gICAgICB0aGlzLnN1YnNfLmFkZChjb25maXJtXyk7XG4gICAgfVxuICAgIHRoaXMudG9vbHRpcC5zZXRPdmVybGF5T3JpZ2luKHRoaXMpO1xuICB9XG59XG4iXX0=