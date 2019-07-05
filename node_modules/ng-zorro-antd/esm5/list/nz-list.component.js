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
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { BehaviorSubject } from 'rxjs';
var NzListComponent = /** @class */ (function () {
    function NzListComponent(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.nzBordered = false;
        this.nzItemLayout = 'horizontal';
        this.nzLoading = false;
        this.nzSize = 'default';
        this.nzSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    }
    /**
     * @private
     * @return {?}
     */
    NzListComponent.prototype._setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-vertical"] = this.nzItemLayout === 'vertical',
            _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
            _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
            _a[this.prefixCls + "-split"] = this.nzSplit,
            _a[this.prefixCls + "-bordered"] = this.nzBordered,
            _a[this.prefixCls + "-loading"] = this.nzLoading,
            _a[this.prefixCls + "-grid"] = this.nzGrid,
            _a[this.prefixCls + "-something-after-last-item"] = !!(this.nzLoadMore || this.nzPagination || this.nzFooter),
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    Object.defineProperty(NzListComponent.prototype, "itemLayoutNotify$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemLayoutNotifySource.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._setClassMap();
        if (changes.nzItemLayout) {
            this.itemLayoutNotifySource.next(this.nzItemLayout);
        }
    };
    /**
     * @return {?}
     */
    NzListComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.itemLayoutNotifySource.unsubscribe();
    };
    NzListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list, [nz-list]',
                    exportAs: 'nzList',
                    template: "<ng-template #itemsTpl>\n  <div class=\"ant-list-items\" *ngIf=\"nzDataSource.length > 0\">\n    <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\n      <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n    </ng-container>\n  </div>\n</ng-template>\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\n</div>\n<nz-spin [nzSpinning]=\"nzLoading\">\n  <ng-container *ngIf=\"nzDataSource\">\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\n      </div>\n    </div>\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\n    </div>\n  </ng-container>\n  <ng-content></ng-content>\n</nz-spin>\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\n</div>\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\n</div>",
                    providers: [NzUpdateHostClassService],
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzListComponent.propDecorators = {
        nzDataSource: [{ type: Input }],
        nzBordered: [{ type: Input }],
        nzGrid: [{ type: Input }],
        nzHeader: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzItemLayout: [{ type: Input }],
        nzRenderItem: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzLoadMore: [{ type: Input }],
        nzPagination: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzSplit: [{ type: Input }],
        nzNoResult: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzListComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzListComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzListComponent.prototype, "nzSplit", void 0);
    return NzListComponent;
}());
export { NzListComponent };
if (false) {
    /** @type {?} */
    NzListComponent.prototype.nzDataSource;
    /** @type {?} */
    NzListComponent.prototype.nzBordered;
    /** @type {?} */
    NzListComponent.prototype.nzGrid;
    /** @type {?} */
    NzListComponent.prototype.nzHeader;
    /** @type {?} */
    NzListComponent.prototype.nzFooter;
    /** @type {?} */
    NzListComponent.prototype.nzItemLayout;
    /** @type {?} */
    NzListComponent.prototype.nzRenderItem;
    /** @type {?} */
    NzListComponent.prototype.nzLoading;
    /** @type {?} */
    NzListComponent.prototype.nzLoadMore;
    /** @type {?} */
    NzListComponent.prototype.nzPagination;
    /** @type {?} */
    NzListComponent.prototype.nzSize;
    /** @type {?} */
    NzListComponent.prototype.nzSplit;
    /** @type {?} */
    NzListComponent.prototype.nzNoResult;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.itemLayoutNotifySource;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzListComponent.prototype.updateHostClassService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2xpc3QvIiwic291cmNlcyI6WyJuei1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUtMLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBb0Msd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBR25EO0lBMkVFLHlCQUFvQixFQUFjLEVBQVUsc0JBQWdEO1FBQXhFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBckRuRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBUW5DLGlCQUFZLEdBQXNCLFlBQVksQ0FBQztRQUkvQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBTWxDLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBRWxCLFlBQU8sR0FBRyxJQUFJLENBQUM7OztRQVFoQyxjQUFTLEdBQUcsVUFBVSxDQUFDOztRQW1CdkIsMkJBQXNCLEdBQUcsSUFBSSxlQUFlLENBQW9CLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQU1JLENBQUM7Ozs7O0lBdkJ4RixzQ0FBWTs7OztJQUFwQjs7O1lBQ1EsUUFBUTtZQUNaLEdBQUMsSUFBSSxDQUFDLFNBQVMsSUFBRyxJQUFJO1lBQ3RCLEdBQUksSUFBSSxDQUFDLFNBQVMsY0FBVyxJQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssVUFBVTtZQUNoRSxHQUFJLElBQUksQ0FBQyxTQUFTLFFBQUssSUFBRyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU87WUFDakQsR0FBSSxJQUFJLENBQUMsU0FBUyxRQUFLLElBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPO1lBQ2pELEdBQUksSUFBSSxDQUFDLFNBQVMsV0FBUSxJQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3pDLEdBQUksSUFBSSxDQUFDLFNBQVMsY0FBVyxJQUFHLElBQUksQ0FBQyxVQUFVO1lBQy9DLEdBQUksSUFBSSxDQUFDLFNBQVMsYUFBVSxJQUFHLElBQUksQ0FBQyxTQUFTO1lBQzdDLEdBQUksSUFBSSxDQUFDLFNBQVMsVUFBTyxJQUFHLElBQUksQ0FBQyxNQUFNO1lBQ3ZDLEdBQUksSUFBSSxDQUFDLFNBQVMsK0JBQTRCLElBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7ZUFDM0c7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFNRCxzQkFBSSw4Q0FBaUI7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwRCxDQUFDOzs7T0FBQTs7OztJQUlELGtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkExRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSxRQUFRO29CQUNsQix3dURBQXVDO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQUU3QyxtRkFLQztpQkFFSjs7OztnQkEvQkMsVUFBVTtnQkFVNkMsd0JBQXdCOzs7K0JBeUI5RSxLQUFLOzZCQUVMLEtBQUs7eUJBRUwsS0FBSzsyQkFFTCxLQUFLOzJCQUVMLEtBQUs7K0JBRUwsS0FBSzsrQkFFTCxLQUFLOzRCQUVMLEtBQUs7NkJBRUwsS0FBSzsrQkFFTCxLQUFLO3lCQUVMLEtBQUs7MEJBRUwsS0FBSzs2QkFFTCxLQUFLOztJQXRCbUI7UUFBZixZQUFZLEVBQUU7O3VEQUFvQjtJQVluQjtRQUFmLFlBQVksRUFBRTs7c0RBQW1CO0lBUWxCO1FBQWYsWUFBWSxFQUFFOztvREFBZ0I7SUFpRDFDLHNCQUFDO0NBQUEsQUEzRkQsSUEyRkM7U0ExRVksZUFBZTs7O0lBRzFCLHVDQUE2Qjs7SUFFN0IscUNBQTRDOztJQUU1QyxpQ0FBNEI7O0lBRTVCLG1DQUE4Qzs7SUFFOUMsbUNBQThDOztJQUU5Qyx1Q0FBd0Q7O0lBRXhELHVDQUF5Qzs7SUFFekMsb0NBQTJDOztJQUUzQyxxQ0FBdUM7O0lBRXZDLHVDQUF5Qzs7SUFFekMsaUNBQTJDOztJQUUzQyxrQ0FBd0M7O0lBRXhDLHFDQUFnRDs7Ozs7SUFNaEQsb0NBQStCOzs7OztJQW1CL0IsaURBQTJGOzs7OztJQU0vRSw2QkFBc0I7Ozs7O0lBQUUsaURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpEaXJlY3Rpb25WSFR5cGUsIE56U2l6ZUxEU1R5cGUsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTnpMaXN0R3JpZCB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdCwgW256LWxpc3RdJyxcbiAgZXhwb3J0QXM6ICduekxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgc3R5bGVzOiBbXG4gICAgYFxuICAgICAgbnotbGlzdCxcbiAgICAgIG56LWxpc3Qgbnotc3BpbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLy8gI3JlZ2lvbiBmaWVsZHNcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IGFueVtdO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpHcmlkOiBOekxpc3RHcmlkO1xuXG4gIEBJbnB1dCgpIG56SGVhZGVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuekZvb3Rlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpJdGVtTGF5b3V0OiBOekRpcmVjdGlvblZIVHlwZSA9ICdob3Jpem9udGFsJztcblxuICBASW5wdXQoKSBuelJlbmRlckl0ZW06IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekxvYWRpbmcgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuekxvYWRNb3JlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuelBhZ2luYXRpb246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpTaXplTERTVHlwZSA9ICdkZWZhdWx0JztcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTcGxpdCA9IHRydWU7XG5cbiAgQElucHV0KCkgbnpOb1Jlc3VsdDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWxpc3QnO1xuXG4gIHByaXZhdGUgX3NldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdmVydGljYWxgXTogdGhpcy5uekl0ZW1MYXlvdXQgPT09ICd2ZXJ0aWNhbCcsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxnYF06IHRoaXMubnpTaXplID09PSAnbGFyZ2UnLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zbWBdOiB0aGlzLm56U2l6ZSA9PT0gJ3NtYWxsJyxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc3BsaXRgXTogdGhpcy5uelNwbGl0LFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1ib3JkZXJlZGBdOiB0aGlzLm56Qm9yZGVyZWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWxvYWRpbmdgXTogdGhpcy5uekxvYWRpbmcsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWdyaWRgXTogdGhpcy5uekdyaWQsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW1gXTogISEodGhpcy5uekxvYWRNb3JlIHx8IHRoaXMubnpQYWdpbmF0aW9uIHx8IHRoaXMubnpGb290ZXIpXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIHByaXZhdGUgaXRlbUxheW91dE5vdGlmeVNvdXJjZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpEaXJlY3Rpb25WSFR5cGU+KHRoaXMubnpJdGVtTGF5b3V0KTtcblxuICBnZXQgaXRlbUxheW91dE5vdGlmeSQoKTogT2JzZXJ2YWJsZTxOekRpcmVjdGlvblZIVHlwZT4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1MYXlvdXROb3RpZnlTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuX3NldENsYXNzTWFwKCk7XG4gICAgaWYgKGNoYW5nZXMubnpJdGVtTGF5b3V0KSB7XG4gICAgICB0aGlzLml0ZW1MYXlvdXROb3RpZnlTb3VyY2UubmV4dCh0aGlzLm56SXRlbUxheW91dCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtTGF5b3V0Tm90aWZ5U291cmNlLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==