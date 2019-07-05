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
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { helpMotion, warnDeprecation } from 'ng-zorro-antd/core';
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation("'nz-form-explain' is going to be removed in 9.0.0. Use [nzSuccessTip] | [nzWarningTip] | [nzErrorTip] | [nzValidatingTip] in nz-form-control instead. Read https://ng.ant.design/components/form/en");
    }
    NzFormExplainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-explain',
                    exportAs: 'nzFormExplain',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [helpMotion],
                    template: "<div [@helpMotion]>\n  <ng-content></ng-content>\n</div>",
                    styles: ["\n      nz-form-explain {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzFormExplainComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzFormExplainComponent;
}());
export { NzFormExplainComponent };
if (false) {
    /** @type {?} */
    NzFormExplainComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzFormExplainComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZm9ybS8iLCJzb3VyY2VzIjpbIm56LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqRTtJQW9CRSxnQ0FBbUIsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFFLGVBQWUsQ0FDYixxTUFBcU0sQ0FDdE0sQ0FBQztJQUNKLENBQUM7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsVUFBVSxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN4QixvRUFBK0M7NkJBRTdDLG1FQUlDO2lCQUVKOzs7O2dCQWxCNEMsVUFBVTtnQkFBRSxTQUFTOztJQTZCbEUsNkJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQVBZLHNCQUFzQjs7O0lBQ3JCLDRDQUE2Qjs7Ozs7SUFBRSwwQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaGVscE1vdGlvbiwgd2FybkRlcHJlY2F0aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotZm9ybS1leHBsYWluJyxcbiAgZXhwb3J0QXM6ICduekZvcm1FeHBsYWluJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zOiBbaGVscE1vdGlvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICBuei1mb3JtLWV4cGxhaW4ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBgW256U3VjY2Vzc1RpcF0gfCBbbnpXYXJuaW5nVGlwXSB8IFtuekVycm9yVGlwXSB8IFtuelZhbGlkYXRpbmdUaXBdYCBpbiBgTnpGb3JtQ29udHJvbENvbXBvbmVudGAgaW5zdGVhZCwgd2lsbCByZW1vdmUgaW4gOS4wLjAuXG4gKi9cbmV4cG9ydCBjbGFzcyBOekZvcm1FeHBsYWluQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtZm9ybS1leHBsYWluJyk7XG4gICAgd2FybkRlcHJlY2F0aW9uKFxuICAgICAgYCduei1mb3JtLWV4cGxhaW4nIGlzIGdvaW5nIHRvIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFVzZSBbbnpTdWNjZXNzVGlwXSB8IFtueldhcm5pbmdUaXBdIHwgW256RXJyb3JUaXBdIHwgW256VmFsaWRhdGluZ1RpcF0gaW4gbnotZm9ybS1jb250cm9sIGluc3RlYWQuIFJlYWQgaHR0cHM6Ly9uZy5hbnQuZGVzaWduL2NvbXBvbmVudHMvZm9ybS9lbmBcbiAgICApO1xuICB9XG59XG4iXX0=