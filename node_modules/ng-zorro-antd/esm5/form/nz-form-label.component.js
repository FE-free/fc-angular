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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Host, Input, Optional, Renderer2, ViewEncapsulation } from '@angular/core';
import { toBoolean, InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
var NzFormLabelComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormLabelComponent, _super);
    function NzFormLabelComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer) || this;
        _this.cdr = cdr;
        _this.nzRequired = false;
        _this.defaultNoColon = false;
        _this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
        return _this;
    }
    Object.defineProperty(NzFormLabelComponent.prototype, "nzNoColon", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.noColon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.noColon = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzFormLabelComponent.prototype.setDefaultNoColon = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzFormLabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    NzFormLabelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
    };
    NzFormLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-label',
                    exportAs: 'nzFormLabel',
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "<label [attr.for]=\"nzFor\"\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : nzNoColon\"\n  [class.ant-form-item-required]=\"nzRequired\">\n  <ng-content></ng-content>\n</label>"
                }] }
    ];
    /** @nocollapse */
    NzFormLabelComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzFormLabelComponent.propDecorators = {
        nzFor: [{ type: Input }],
        nzRequired: [{ type: Input }],
        nzNoColon: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzFormLabelComponent.prototype, "nzRequired", void 0);
    return NzFormLabelComponent;
}(NzColDirective));
export { NzFormLabelComponent };
if (false) {
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzRequired;
    /** @type {?} */
    NzFormLabelComponent.prototype.defaultNoColon;
    /** @type {?} */
    NzFormLabelComponent.prototype.noColon;
    /**
     * @type {?}
     * @private
     */
    NzFormLabelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Zvcm0vIiwic291cmNlcyI6WyJuei1mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9EO0lBUzBDLGdEQUFjO0lBY3RELDhCQUNFLHdCQUFrRCxFQUNsRCxVQUFzQixFQUNGLG1CQUF3QyxFQUN4QyxjQUE4QixFQUNsRCxRQUFtQixFQUNYLEdBQXNCO1FBTmhDLFlBUUUsa0JBQU0sd0JBQXdCLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixJQUFJLGNBQWMsRUFBRSxRQUFRLENBQUMsU0FFN0Y7UUFKUyxTQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxCUCxnQkFBVSxHQUFHLEtBQUssQ0FBQztRQVM1QyxvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUNoQyxhQUFPLEdBQXFCLFNBQVMsQ0FBQztRQVdwQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUscUJBQXFCLENBQUMsQ0FBQzs7SUFDckUsQ0FBQztJQXJCRCxzQkFDSSwyQ0FBUzs7OztRQUdiO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7OztRQU5ELFVBQ2MsS0FBYztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTs7Ozs7SUFvQkQsZ0RBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQWM7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELDhDQUFlOzs7SUFBZjtRQUNFLGlCQUFNLGVBQWUsV0FBRSxDQUFDO0lBQzFCLENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSxhQUFhO29CQUN2QixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyx5TkFBNkM7aUJBQzlDOzs7O2dCQWJpQyx3QkFBd0I7Z0JBVHhELFVBQVU7Z0JBWUgsbUJBQW1CLHVCQTRCdkIsUUFBUSxZQUFJLElBQUk7Z0JBOUJJLGNBQWMsdUJBK0JsQyxRQUFRLFlBQUksSUFBSTtnQkFwQ25CLFNBQVM7Z0JBUFQsaUJBQWlCOzs7d0JBMEJoQixLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFEbUI7UUFBZixZQUFZLEVBQUU7OzREQUFvQjtJQW9DOUMsMkJBQUM7Q0FBQSxBQS9DRCxDQVMwQyxjQUFjLEdBc0N2RDtTQXRDWSxvQkFBb0I7OztJQUMvQixxQ0FBdUI7O0lBQ3ZCLDBDQUE0Qzs7SUFTNUMsOENBQWdDOztJQUNoQyx1Q0FBc0M7Ozs7O0lBUXBDLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFJlbmRlcmVyMixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpDb2xEaXJlY3RpdmUsIE56Um93RGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9ncmlkJztcblxuaW1wb3J0IHsgTnpGb3JtSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vbnotZm9ybS1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWZvcm0tbGFiZWwnLFxuICBleHBvcnRBczogJ256Rm9ybUxhYmVsJyxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZm9ybS1sYWJlbC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBOekNvbERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIG56Rm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJlcXVpcmVkID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHNldCBuek5vQ29sb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG4gIGdldCBuek5vQ29sb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5ub0NvbG9uO1xuICB9XG5cbiAgZGVmYXVsdE5vQ29sb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgbm9Db2xvbjogYm9vbGVhbiB8IHN0cmluZyA9ICdkZWZhdWx0JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpGb3JtSXRlbUNvbXBvbmVudDogTnpGb3JtSXRlbUNvbXBvbmVudCxcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQgfHwgbnpSb3dEaXJlY3RpdmUsIHJlbmRlcmVyKTtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1pdGVtLWxhYmVsJyk7XG4gIH1cblxuICBzZXREZWZhdWx0Tm9Db2xvbih2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGVmYXVsdE5vQ29sb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcbiAgfVxufVxuIl19