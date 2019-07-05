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
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzStatisticComponent = /** @class */ (function () {
    function NzStatisticComponent() {
        this.nzValueStyle = {};
    }
    NzStatisticComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-statistic',
                    exportAs: 'nzStatistic',
                    template: "<div class=\"ant-statistic-title\">\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n</div>\n<div class=\"ant-statistic-content\" [ngStyle]=\"nzValueStyle\">\n  <span *ngIf=\"nzPrefix\" class=\"ant-statistic-content-prefix\">\n    <ng-container *nzStringTemplateOutlet=\"nzPrefix\">{{ nzPrefix }}</ng-container>\n  </span>\n  <nz-statistic-number\n    [nzValue]=\"nzValue\"\n    [nzValueTemplate]=\"nzValueTemplate\">\n  </nz-statistic-number>\n  <span *ngIf=\"nzSuffix\" class=\"ant-statistic-content-suffix\">\n    <ng-container *nzStringTemplateOutlet=\"nzSuffix\">{{ nzSuffix }}</ng-container>\n  </span>\n</div>\n",
                    host: {
                        class: 'ant-statistic'
                    },
                    styles: ['nz-statistic { display: block; }']
                }] }
    ];
    NzStatisticComponent.propDecorators = {
        nzPrefix: [{ type: Input }],
        nzSuffix: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzValue: [{ type: Input }],
        nzValueStyle: [{ type: Input }],
        nzValueTemplate: [{ type: Input }]
    };
    return NzStatisticComponent;
}());
export { NzStatisticComponent };
if (false) {
    /** @type {?} */
    NzStatisticComponent.prototype.nzPrefix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzSuffix;
    /** @type {?} */
    NzStatisticComponent.prototype.nzTitle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValue;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueStyle;
    /** @type {?} */
    NzStatisticComponent.prototype.nzValueTemplate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxRztJQUFBO1FBZ0JXLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBRTdCLENBQUM7O2dCQWxCQSxTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHdwQkFBNEM7b0JBQzVDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsZUFBZTtxQkFDdkI7NkJBQ1Esa0NBQWtDO2lCQUM1Qzs7OzJCQUVFLEtBQUs7MkJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7K0JBQ0wsS0FBSztrQ0FDTCxLQUFLOztJQUNSLDJCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FQWSxvQkFBb0I7OztJQUMvQix3Q0FBOEM7O0lBQzlDLHdDQUE4Qzs7SUFDOUMsdUNBQTZDOztJQUM3Qyx1Q0FBdUM7O0lBQ3ZDLDRDQUEyQjs7SUFDM0IsK0NBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U3RhdGlzdGljVmFsdWVUeXBlIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc3RhdGlzdGljJyxcbiAgZXhwb3J0QXM6ICduelN0YXRpc3RpYycsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1zdGF0aXN0aWMuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtc3RhdGlzdGljJ1xuICB9LFxuICBzdHlsZXM6IFsnbnotc3RhdGlzdGljIHsgZGlzcGxheTogYmxvY2s7IH0nXVxufSlcbmV4cG9ydCBjbGFzcyBOelN0YXRpc3RpY0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTdWZmaXg6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpWYWx1ZTogTnpTdGF0aXN0aWNWYWx1ZVR5cGU7XG4gIEBJbnB1dCgpIG56VmFsdWVTdHlsZSA9IHt9O1xuICBASW5wdXQoKSBuelZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBOelN0YXRpc3RpY1ZhbHVlVHlwZSB9Pjtcbn1cbiJdfQ==