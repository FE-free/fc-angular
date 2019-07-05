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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class NzTransferListComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} updateHostClassService
     * @param {?} cdr
     */
    constructor(el, updateHostClassService, cdr) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.cdr = cdr;
        // #region fields
        this.direction = '';
        this.titleText = '';
        this.showSelectAll = true;
        this.dataSource = [];
        this.itemUnit = '';
        this.itemsUnit = '';
        this.filter = '';
        // events
        this.handleSelectAll = new EventEmitter();
        this.handleSelect = new EventEmitter();
        this.filterChange = new EventEmitter();
        // #endregion
        // #region styles
        this.prefixCls = 'ant-transfer-list';
        // #endregion
        // #region select all
        this.stat = {
            checkAll: false,
            checkHalf: false,
            checkCount: 0,
            shownCount: 0
        };
        this.onItemSelect = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            this.updateCheckStatus();
            this.handleSelect.emit(item);
        });
        this.onItemSelectAll = (/**
         * @param {?} status
         * @return {?}
         */
        (status) => {
            this.dataSource.forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            }));
            this.updateCheckStatus();
            this.handleSelectAll.emit(status);
        });
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-with-footer`]: !!this.footer
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    /**
     * @private
     * @return {?}
     */
    updateCheckStatus() {
        /** @type {?} */
        const validCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.disabled)).length;
        this.stat.checkCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => w.checked && !w.disabled)).length;
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.hide)).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    }
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    handleFilter(value) {
        this.filter = value;
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.hide = value.length > 0 && !this.matchFilter(value, item);
        }));
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        w => !w.hide)).length;
        this.filterChange.emit({ direction: this.direction, value });
    }
    /**
     * @return {?}
     */
    handleClear() {
        this.handleFilter('');
    }
    /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    matchFilter(text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    }
}
NzTransferListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-transfer-list',
                exportAs: 'nzTransferList',
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                template: "<ng-template #defaultRenderList>\n  <ul *ngIf=\"stat.shownCount > 0\" class=\"ant-transfer-list-content\">\n    <div class=\"LazyLoad\" *ngFor=\"let item of dataSource\">\n      <li *ngIf=\"!item.hide\" (click)=\"onItemSelect(item)\"\n        class=\"ant-transfer-list-content-item\" [ngClass]=\"{'ant-transfer-list-content-item-disabled': disabled || item.disabled}\">\n        <label nz-checkbox [nzChecked]=\"item.checked\" (nzCheckedChange)=\"onItemSelect(item)\"\n          (click)=\"$event.stopPropagation()\" [nzDisabled]=\"disabled || item.disabled\">\n          <ng-container *ngIf=\"!render; else renderContainer\">{{ item.title }}</ng-container>\n          <ng-template #renderContainer [ngTemplateOutlet]=\"render\" [ngTemplateOutletContext]=\"{ $implicit: item }\"></ng-template>\n        </label>\n      </li>\n    </div>\n  </ul>\n  <div *ngIf=\"stat.shownCount === 0\" class=\"ant-transfer-list-body-not-found\">\n    <nz-embed-empty [nzComponentName]=\"'transfer'\" [specificContent]=\"notFoundContent\"></nz-embed-empty>\n  </div>\n</ng-template>\n<div class=\"ant-transfer-list-header\">\n  <label *ngIf=\"showSelectAll\" nz-checkbox [nzChecked]=\"stat.checkAll\" (nzCheckedChange)=\"onItemSelectAll($event)\"\n    [nzIndeterminate]=\"stat.checkHalf\" [nzDisabled]=\"stat.shownCount == 0 || disabled\">\n  </label>\n  <span class=\"ant-transfer-list-header-selected\">\n    <span>{{ (stat.checkCount > 0 ? stat.checkCount + '/' : '') + stat.shownCount }} {{ dataSource.length > 1 ? itemsUnit : itemUnit }}</span>\n    <span *ngIf=\"titleText\" class=\"ant-transfer-list-header-title\">{{ titleText }}</span>\n  </span>\n</div>\n<div class=\"{{showSearch ? 'ant-transfer-list-body ant-transfer-list-body-with-search' : 'ant-transfer-list-body'}}\"\n  [ngClass]=\"{'ant-transfer__nodata': stat.shownCount === 0}\">\n  <div *ngIf=\"showSearch\" class=\"ant-transfer-list-body-search-wrapper\">\n    <div nz-transfer-search\n      (valueChanged)=\"handleFilter($event)\"\n      (valueClear)=\"handleClear()\"\n      [placeholder]=\"searchPlaceholder\"\n      [disabled]=\"disabled\"\n      [value]=\"filter\"></div>\n  </div>\n  <ng-container *ngIf=\"renderList else defaultRenderList\">\n    <div class=\"ant-transfer-list-body-customize-wrapper\">\n      <ng-container *ngTemplateOutlet=\"renderList; context: {\n        $implicit: dataSource,\n        direction: direction,\n        disabled: disabled,\n        onItemSelectAll: onItemSelectAll,\n        onItemSelect: onItemSelect,\n        stat: stat\n      }\"></ng-container>\n    </div>\n  </ng-container>\n</div>\n<div *ngIf=\"footer\" class=\"ant-transfer-list-footer\">\n  <ng-template [ngTemplateOutlet]=\"footer\" [ngTemplateOutletContext]=\"{ $implicit: direction }\"></ng-template>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzTransferListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzUpdateHostClassService },
    { type: ChangeDetectorRef }
];
NzTransferListComponent.propDecorators = {
    direction: [{ type: Input }],
    titleText: [{ type: Input }],
    showSelectAll: [{ type: Input }],
    dataSource: [{ type: Input }],
    itemUnit: [{ type: Input }],
    itemsUnit: [{ type: Input }],
    filter: [{ type: Input }],
    disabled: [{ type: Input }],
    showSearch: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    notFoundContent: [{ type: Input }],
    filterOption: [{ type: Input }],
    renderList: [{ type: Input }],
    render: [{ type: Input }],
    footer: [{ type: Input }],
    handleSelectAll: [{ type: Output }],
    handleSelect: [{ type: Output }],
    filterChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzTransferListComponent.prototype.direction;
    /** @type {?} */
    NzTransferListComponent.prototype.titleText;
    /** @type {?} */
    NzTransferListComponent.prototype.showSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.dataSource;
    /** @type {?} */
    NzTransferListComponent.prototype.itemUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.itemsUnit;
    /** @type {?} */
    NzTransferListComponent.prototype.filter;
    /** @type {?} */
    NzTransferListComponent.prototype.disabled;
    /** @type {?} */
    NzTransferListComponent.prototype.showSearch;
    /** @type {?} */
    NzTransferListComponent.prototype.searchPlaceholder;
    /** @type {?} */
    NzTransferListComponent.prototype.notFoundContent;
    /** @type {?} */
    NzTransferListComponent.prototype.filterOption;
    /** @type {?} */
    NzTransferListComponent.prototype.renderList;
    /** @type {?} */
    NzTransferListComponent.prototype.render;
    /** @type {?} */
    NzTransferListComponent.prototype.footer;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelectAll;
    /** @type {?} */
    NzTransferListComponent.prototype.handleSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.filterChange;
    /** @type {?} */
    NzTransferListComponent.prototype.prefixCls;
    /** @type {?} */
    NzTransferListComponent.prototype.stat;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelect;
    /** @type {?} */
    NzTransferListComponent.prototype.onItemSelectAll;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzTransferListComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyYW5zZmVyLyIsInNvdXJjZXMiOlsibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFhOUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7OztJQTBHbEMsWUFDVSxFQUFjLEVBQ2Qsc0JBQWdELEVBQ2hELEdBQXNCO1FBRnRCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQTBCO1FBQ2hELFFBQUcsR0FBSCxHQUFHLENBQW1COztRQTFHdkIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUVyQixlQUFVLEdBQW1CLEVBQUUsQ0FBQztRQUVoQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFdBQU0sR0FBRyxFQUFFLENBQUM7O1FBWUYsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUNyRSxpQkFBWSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlELGlCQUFZLEdBQXVELElBQUksWUFBWSxFQUFFLENBQUM7OztRQU16RyxjQUFTLEdBQUcsbUJBQW1CLENBQUM7OztRQWNoQyxTQUFJLEdBQUc7WUFDTCxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFVBQVUsRUFB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d0JBQXdCO1lBYi9CLGlCQUFpQjs7O3dCQTZCaEIsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBRUwsS0FBSzt1QkFFTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBRUwsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7OEJBR0wsTUFBTTsyQkFDTixNQUFNOzJCQUNOLE1BQU07Ozs7SUF0QlAsNENBQXdCOztJQUN4Qiw0Q0FBd0I7O0lBQ3hCLGdEQUE4Qjs7SUFFOUIsNkNBQXlDOztJQUV6QywyQ0FBdUI7O0lBQ3ZCLDRDQUF3Qjs7SUFDeEIseUNBQXFCOztJQUNyQiwyQ0FBMkI7O0lBQzNCLDZDQUE2Qjs7SUFDN0Isb0RBQW1DOztJQUNuQyxrREFBaUM7O0lBQ2pDLCtDQUEyRTs7SUFFM0UsNkNBQXVDOztJQUN2Qyx5Q0FBbUM7O0lBQ25DLHlDQUFtQzs7SUFHbkMsa0RBQXdGOztJQUN4RiwrQ0FBaUY7O0lBQ2pGLCtDQUF5Rzs7SUFNekcsNENBQWdDOztJQWNoQyx1Q0FLRTs7SUFFRiwrQ0FPRTs7SUFFRixrREFTRTs7Ozs7SUFxQ0EscUNBQXNCOzs7OztJQUN0Qix5REFBd0Q7Ozs7O0lBQ3hELHNDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBUcmFuc2Zlckl0ZW0gfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LXRyYW5zZmVyLWxpc3QnLFxuICBleHBvcnRBczogJ256VHJhbnNmZXJMaXN0JyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmFuc2Zlci1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2Zlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgQElucHV0KCkgZGlyZWN0aW9uID0gJyc7XG4gIEBJbnB1dCgpIHRpdGxlVGV4dCA9ICcnO1xuICBASW5wdXQoKSBzaG93U2VsZWN0QWxsID0gdHJ1ZTtcblxuICBASW5wdXQoKSBkYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIEBJbnB1dCgpIGl0ZW1Vbml0ID0gJyc7XG4gIEBJbnB1dCgpIGl0ZW1zVW5pdCA9ICcnO1xuICBASW5wdXQoKSBmaWx0ZXIgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dTZWFyY2g6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBmaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKSByZW5kZXJMaXN0OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgcmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgZm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICAvLyBldmVudHNcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhhbmRsZVNlbGVjdEFsbDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgaGFuZGxlU2VsZWN0OiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJJdGVtPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGZpbHRlckNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGlyZWN0aW9uOiBzdHJpbmc7IHZhbHVlOiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJlZml4Q2xzID0gJ2FudC10cmFuc2Zlci1saXN0JztcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LXdpdGgtZm9vdGVyYF06ICEhdGhpcy5mb290ZXJcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZWxlY3QgYWxsXG5cbiAgc3RhdCA9IHtcbiAgICBjaGVja0FsbDogZmFsc2UsXG4gICAgY2hlY2tIYWxmOiBmYWxzZSxcbiAgICBjaGVja0NvdW50OiAwLFxuICAgIHNob3duQ291bnQ6IDBcbiAgfTtcblxuICBvbkl0ZW1TZWxlY3QgPSAoaXRlbTogVHJhbnNmZXJJdGVtKSA9PiB7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgaXRlbS5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkO1xuICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdC5lbWl0KGl0ZW0pO1xuICB9O1xuXG4gIG9uSXRlbVNlbGVjdEFsbCA9IChzdGF0dXM6IGJvb2xlYW4pID0+IHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5oaWRlKSB7XG4gICAgICAgIGl0ZW0uY2hlY2tlZCA9IHN0YXR1cztcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcbiAgICB0aGlzLmhhbmRsZVNlbGVjdEFsbC5lbWl0KHN0YXR1cyk7XG4gIH07XG5cbiAgcHJpdmF0ZSB1cGRhdGVDaGVja1N0YXR1cygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWxpZENvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LmNoZWNrQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gdy5jaGVja2VkICYmICF3LmRpc2FibGVkKS5sZW5ndGg7XG4gICAgdGhpcy5zdGF0LnNob3duQ291bnQgPSB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyKHcgPT4gIXcuaGlkZSkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0FsbCA9IHZhbGlkQ291bnQgPiAwICYmIHZhbGlkQ291bnQgPT09IHRoaXMuc3RhdC5jaGVja0NvdW50O1xuICAgIHRoaXMuc3RhdC5jaGVja0hhbGYgPSB0aGlzLnN0YXQuY2hlY2tDb3VudCA+IDAgJiYgIXRoaXMuc3RhdC5jaGVja0FsbDtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHNlYXJjaFxuXG4gIGhhbmRsZUZpbHRlcih2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXIgPSB2YWx1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGl0ZW0uaGlkZSA9IHZhbHVlLmxlbmd0aCA+IDAgJiYgIXRoaXMubWF0Y2hGaWx0ZXIodmFsdWUsIGl0ZW0pO1xuICAgIH0pO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmhpZGUpLmxlbmd0aDtcbiAgICB0aGlzLmZpbHRlckNoYW5nZS5lbWl0KHsgZGlyZWN0aW9uOiB0aGlzLmRpcmVjdGlvbiwgdmFsdWUgfSk7XG4gIH1cblxuICBoYW5kbGVDbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZUZpbHRlcignJyk7XG4gIH1cblxuICBwcml2YXRlIG1hdGNoRmlsdGVyKHRleHQ6IHN0cmluZywgaXRlbTogVHJhbnNmZXJJdGVtKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmlsdGVyT3B0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJPcHRpb24odGV4dCwgaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtLnRpdGxlLmluY2x1ZGVzKHRleHQpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKCdmb290ZXInIGluIGNoYW5nZXMpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVDaGVja1N0YXR1cygpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG59XG4iXX0=