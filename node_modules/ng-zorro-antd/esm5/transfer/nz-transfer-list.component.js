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
var NzTransferListComponent = /** @class */ (function () {
    // #endregion
    function NzTransferListComponent(el, updateHostClassService, cdr) {
        var _this = this;
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
        function (item) {
            if (_this.disabled || item.disabled) {
                return;
            }
            item.checked = !item.checked;
            _this.updateCheckStatus();
            _this.handleSelect.emit(item);
        });
        this.onItemSelectAll = (/**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            _this.dataSource.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                if (!item.disabled && !item.hide) {
                    item.checked = status;
                }
            }));
            _this.updateCheckStatus();
            _this.handleSelectAll.emit(status);
        });
    }
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-with-footer"] = !!this.footer,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    /**
     * @private
     * @return {?}
     */
    NzTransferListComponent.prototype.updateCheckStatus = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.disabled; })).length;
        this.stat.checkCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return w.checked && !w.disabled; })).length;
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.hide; })).length;
        this.stat.checkAll = validCount > 0 && validCount === this.stat.checkCount;
        this.stat.checkHalf = this.stat.checkCount > 0 && !this.stat.checkAll;
    };
    // #endregion
    // #region search
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    NzTransferListComponent.prototype.handleFilter = 
    // #endregion
    // #region search
    /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        this.filter = value;
        this.dataSource.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            item.hide = value.length > 0 && !_this.matchFilter(value, item);
        }));
        this.stat.shownCount = this.dataSource.filter((/**
         * @param {?} w
         * @return {?}
         */
        function (w) { return !w.hide; })).length;
        this.filterChange.emit({ direction: this.direction, value: value });
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.handleClear = /**
     * @return {?}
     */
    function () {
        this.handleFilter('');
    };
    /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    NzTransferListComponent.prototype.matchFilter = /**
     * @private
     * @param {?} text
     * @param {?} item
     * @return {?}
     */
    function (text, item) {
        if (this.filterOption) {
            return this.filterOption(text, item);
        }
        return item.title.includes(text);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferListComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('footer' in changes) {
            this.setClassMap();
        }
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTransferListComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.updateCheckStatus();
        this.cdr.markForCheck();
    };
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
    NzTransferListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService },
        { type: ChangeDetectorRef }
    ]; };
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
    return NzTransferListComponent;
}());
export { NzTransferListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RyYW5zZmVyLyIsInNvdXJjZXMiOlsibnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUVOLFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJOUQ7SUFpSEUsYUFBYTtJQUViLGlDQUNVLEVBQWMsRUFDZCxzQkFBZ0QsRUFDaEQsR0FBc0I7UUFIaEMsaUJBSUk7UUFITSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjs7UUExR3ZCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFFckIsZUFBVSxHQUFtQixFQUFFLENBQUM7UUFFaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixXQUFNLEdBQUcsRUFBRSxDQUFDOztRQVlGLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDckUsaUJBQVksR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5RCxpQkFBWSxHQUF1RCxJQUFJLFlBQVksRUFBRSxDQUFDOzs7UUFNekcsY0FBUyxHQUFHLG1CQUFtQixDQUFDOzs7UUFjaEMsU0FBSSxHQUFHO1lBQ0wsUUFBUSxFQUFFLEtBQUs7WUFDZixTQUFTLEVBQUUsS0FBSztZQUNoQixVQUFVLEVBQUUs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Q3JDLDZ0RkFBZ0Q7b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBdkJDLFVBQVU7Z0JBV0gsd0JBQXdCO2dCQWIvQixpQkFBaUI7Ozs0QkE2QmhCLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLOzZCQUVMLEtBQUs7MkJBRUwsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzs2QkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzZCQUVMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2tDQUdMLE1BQU07K0JBQ04sTUFBTTsrQkFDTixNQUFNOztJQXFHVCw4QkFBQztDQUFBLEFBdklELElBdUlDO1NBOUhZLHVCQUF1Qjs7O0lBR2xDLDRDQUF3Qjs7SUFDeEIsNENBQXdCOztJQUN4QixnREFBOEI7O0lBRTlCLDZDQUF5Qzs7SUFFekMsMkNBQXVCOztJQUN2Qiw0Q0FBd0I7O0lBQ3hCLHlDQUFxQjs7SUFDckIsMkNBQTJCOztJQUMzQiw2Q0FBNkI7O0lBQzdCLG9EQUFtQzs7SUFDbkMsa0RBQWlDOztJQUNqQywrQ0FBMkU7O0lBRTNFLDZDQUF1Qzs7SUFDdkMseUNBQW1DOztJQUNuQyx5Q0FBbUM7O0lBR25DLGtEQUF3Rjs7SUFDeEYsK0NBQWlGOztJQUNqRiwrQ0FBeUc7O0lBTXpHLDRDQUFnQzs7SUFjaEMsdUNBS0U7O0lBRUYsK0NBT0U7O0lBRUYsa0RBU0U7Ozs7O0lBcUNBLHFDQUFzQjs7Ozs7SUFDdEIseURBQXdEOzs7OztJQUN4RCxzQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgVHJhbnNmZXJJdGVtIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei10cmFuc2Zlci1saXN0JyxcbiAgZXhwb3J0QXM6ICduelRyYW5zZmVyTGlzdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIGRpcmVjdGlvbiA9ICcnO1xuICBASW5wdXQoKSB0aXRsZVRleHQgPSAnJztcbiAgQElucHV0KCkgc2hvd1NlbGVjdEFsbCA9IHRydWU7XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogVHJhbnNmZXJJdGVtW10gPSBbXTtcblxuICBASW5wdXQoKSBpdGVtVW5pdCA9ICcnO1xuICBASW5wdXQoKSBpdGVtc1VuaXQgPSAnJztcbiAgQElucHV0KCkgZmlsdGVyID0gJyc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93U2VhcmNoOiBib29sZWFuO1xuICBASW5wdXQoKSBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBub3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgZmlsdGVyT3B0aW9uOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcmVuZGVyTGlzdDogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIHJlbmRlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIGZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgLy8gZXZlbnRzXG4gIEBPdXRwdXQoKSByZWFkb25seSBoYW5kbGVTZWxlY3RBbGw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhhbmRsZVNlbGVjdDogRXZlbnRFbWl0dGVyPFRyYW5zZmVySXRlbT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBmaWx0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGRpcmVjdGlvbjogc3RyaW5nOyB2YWx1ZTogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0eWxlc1xuXG4gIHByZWZpeENscyA9ICdhbnQtdHJhbnNmZXItbGlzdCc7XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbdGhpcy5wcmVmaXhDbHNdOiB0cnVlLFxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS13aXRoLWZvb3RlcmBdOiAhIXRoaXMuZm9vdGVyXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc2VsZWN0IGFsbFxuXG4gIHN0YXQgPSB7XG4gICAgY2hlY2tBbGw6IGZhbHNlLFxuICAgIGNoZWNrSGFsZjogZmFsc2UsXG4gICAgY2hlY2tDb3VudDogMCxcbiAgICBzaG93bkNvdW50OiAwXG4gIH07XG5cbiAgb25JdGVtU2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4ge1xuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IGl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5jaGVja2VkID0gIWl0ZW0uY2hlY2tlZDtcbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3QuZW1pdChpdGVtKTtcbiAgfTtcblxuICBvbkl0ZW1TZWxlY3RBbGwgPSAoc3RhdHVzOiBib29sZWFuKSA9PiB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQgJiYgIWl0ZW0uaGlkZSkge1xuICAgICAgICBpdGVtLmNoZWNrZWQgPSBzdGF0dXM7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUNoZWNrU3RhdHVzKCk7XG4gICAgdGhpcy5oYW5kbGVTZWxlY3RBbGwuZW1pdChzdGF0dXMpO1xuICB9O1xuXG4gIHByaXZhdGUgdXBkYXRlQ2hlY2tTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsaWRDb3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5jaGVja0NvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+IHcuY2hlY2tlZCAmJiAhdy5kaXNhYmxlZCkubGVuZ3RoO1xuICAgIHRoaXMuc3RhdC5zaG93bkNvdW50ID0gdGhpcy5kYXRhU291cmNlLmZpbHRlcih3ID0+ICF3LmhpZGUpLmxlbmd0aDtcbiAgICB0aGlzLnN0YXQuY2hlY2tBbGwgPSB2YWxpZENvdW50ID4gMCAmJiB2YWxpZENvdW50ID09PSB0aGlzLnN0YXQuY2hlY2tDb3VudDtcbiAgICB0aGlzLnN0YXQuY2hlY2tIYWxmID0gdGhpcy5zdGF0LmNoZWNrQ291bnQgPiAwICYmICF0aGlzLnN0YXQuY2hlY2tBbGw7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzZWFyY2hcblxuICBoYW5kbGVGaWx0ZXIodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZmlsdGVyID0gdmFsdWU7XG4gICAgdGhpcy5kYXRhU291cmNlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmhpZGUgPSB2YWx1ZS5sZW5ndGggPiAwICYmICF0aGlzLm1hdGNoRmlsdGVyKHZhbHVlLCBpdGVtKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0YXQuc2hvd25Db3VudCA9IHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIodyA9PiAhdy5oaWRlKS5sZW5ndGg7XG4gICAgdGhpcy5maWx0ZXJDaGFuZ2UuZW1pdCh7IGRpcmVjdGlvbjogdGhpcy5kaXJlY3Rpb24sIHZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXIoJycpO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXRjaEZpbHRlcih0ZXh0OiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZpbHRlck9wdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyT3B0aW9uKHRleHQsIGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbS50aXRsZS5pbmNsdWRlcyh0ZXh0KTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgnZm9vdGVyJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQ2hlY2tTdGF0dXMoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19