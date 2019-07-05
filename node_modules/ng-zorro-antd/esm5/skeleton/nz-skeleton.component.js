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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core';
var NzSkeletonComponent = /** @class */ (function () {
    function NzSkeletonComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-skeleton');
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSkeletonComponent.prototype.toCSSUnit = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = ''; }
        return toCssPixel(value);
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getTitleProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        var width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return tslib_1.__assign({ width: width }, this.getProps(this.nzTitle));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getAvatarProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        var size = 'large';
        return tslib_1.__assign({ shape: shape, size: size }, this.getProps(this.nzAvatar));
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getParagraphProps = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        var hasTitle = !!this.nzTitle;
        /** @type {?} */
        var basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return tslib_1.__assign({}, basicProps, this.getProps(this.nzParagraph));
    };
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    NzSkeletonComponent.prototype.getProps = /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        return prop && typeof prop === 'object' ? prop : {};
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.getWidthList = /**
     * @private
     * @return {?}
     */
    function () {
        var _a = this.paragraph, width = _a.width, rows = _a.rows;
        /** @type {?} */
        var widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    };
    /**
     * @private
     * @return {?}
     */
    NzSkeletonComponent.prototype.updateProps = /**
     * @private
     * @return {?}
     */
    function () {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = tslib_1.__spread(Array(this.paragraph.rows));
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    };
    /**
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateProps();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSkeletonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    };
    NzSkeletonComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-skeleton',
                    exportAs: 'nzSkeleton',
                    template: "<ng-container *ngIf=\"nzLoading\">\n  <div class=\"ant-skeleton-header\">\n    <span\n      *ngIf=\"!!nzAvatar\"\n      class=\"ant-skeleton-avatar\"\n      [class.ant-skeleton-avatar-lg]=\"avatar.size === 'large'\"\n      [class.ant-skeleton-avatar-sm]=\"avatar.size === 'small'\"\n      [class.ant-skeleton-avatar-circle]=\"avatar.shape === 'circle'\"\n      [class.ant-skeleton-avatar-square]=\"avatar.shape === 'square'\">\n    </span>\n  </div>\n  <div class=\"ant-skeleton-content\">\n    <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n    <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n      <li *ngFor=\"let row of rowsList; let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\n      </li>\n    </ul>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!nzLoading\">\n  <ng-content></ng-content>\n</ng-container>",
                    host: {
                        '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                        '[class.ant-skeleton-active]': 'nzActive'
                    }
                }] }
    ];
    /** @nocollapse */
    NzSkeletonComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzSkeletonComponent.propDecorators = {
        nzActive: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzAvatar: [{ type: Input }],
        nzParagraph: [{ type: Input }]
    };
    return NzSkeletonComponent;
}());
export { NzSkeletonComponent };
if (false) {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /**
     * @type {?}
     * @private
     */
    NzSkeletonComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbIm56LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRDtJQXdCRSw2QkFBb0IsR0FBc0IsRUFBRSxRQUFtQixFQUFFLFVBQXNCO1FBQW5FLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBWmpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixZQUFPLEdBQThCLElBQUksQ0FBQztRQUMxQyxhQUFRLEdBQStCLEtBQUssQ0FBQztRQUM3QyxnQkFBVyxHQUFrQyxJQUFJLENBQUM7UUFLM0QsYUFBUSxHQUFhLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQTJCLEVBQUUsQ0FBQztRQUdyQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCx1Q0FBUzs7OztJQUFULFVBQVUsS0FBMkI7UUFBM0Isc0JBQUEsRUFBQSxVQUEyQjtRQUNuQyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVPLDJDQUFhOzs7O0lBQXJCOztZQUNRLFNBQVMsR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVE7O1lBQ3BDLFlBQVksR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7O1lBQzVDLEtBQUssR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFNB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RCx5Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM5RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOztnQkFwR0YsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSxZQUFZO29CQUN0Qix5NEJBQTJDO29CQUMzQyxJQUFJLEVBQUU7d0JBQ0osa0NBQWtDLEVBQUUsWUFBWTt3QkFDaEQsNkJBQTZCLEVBQUUsVUFBVTtxQkFDMUM7aUJBQ0Y7Ozs7Z0JBeEJDLGlCQUFpQjtnQkFNakIsU0FBUztnQkFKVCxVQUFVOzs7MkJBd0JULEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzs7SUFxRlIsMEJBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQTFGWSxtQkFBbUI7OztJQUM5Qix1Q0FBMEI7O0lBQzFCLHdDQUEwQjs7SUFDMUIsc0NBQW1EOztJQUNuRCx1Q0FBc0Q7O0lBQ3RELDBDQUEyRDs7SUFFM0Qsb0NBQXVCOztJQUN2QixxQ0FBeUI7O0lBQ3pCLHdDQUErQjs7SUFDL0IsdUNBQXdCOztJQUN4Qix3Q0FBdUM7Ozs7O0lBRTNCLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotc2tlbGV0b24nLFxuICBleHBvcnRBczogJ256U2tlbGV0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2tlbGV0b24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24td2l0aC1hdmF0YXJdJzogJyEhbnpBdmF0YXInLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLWFjdGl2ZV0nOiAnbnpBY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpUaXRsZTogTnpTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXZhdGFyOiBOelNrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHRpdGxlOiBOelNrZWxldG9uVGl0bGU7XG4gIGF2YXRhcjogTnpTa2VsZXRvbkF2YXRhcjtcbiAgcGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoO1xuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXNrZWxldG9uJyk7XG4gIH1cblxuICB0b0NTU1VuaXQodmFsdWU6IG51bWJlciB8IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdG9Dc3NQaXhlbCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpdGxlUHJvcHMoKTogTnpTa2VsZXRvblRpdGxlIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XG4gICAgY29uc3QgaGFzUGFyYWdyYXBoOiBib29sZWFuID0gISF0aGlzLm56UGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aCA9ICcnO1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnMzglJztcbiAgICB9IGVsc2UgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICAgIHdpZHRoID0gJzUwJSc7XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpUaXRsZSkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QXZhdGFyUHJvcHMoKTogTnpTa2VsZXRvbkF2YXRhciB7XG4gICAgY29uc3Qgc2hhcGU6IEF2YXRhclNoYXBlID0gISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGggPyAnc3F1YXJlJyA6ICdjaXJjbGUnO1xuICAgIGNvbnN0IHNpemU6IEF2YXRhclNpemUgPSAnbGFyZ2UnO1xuICAgIHJldHVybiB7IHNoYXBlLCBzaXplLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpBdmF0YXIpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFBhcmFncmFwaFByb3BzKCk6IE56U2tlbGV0b25QYXJhZ3JhcGgge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNUaXRsZTogYm9vbGVhbiA9ICEhdGhpcy5uelRpdGxlO1xuICAgIGNvbnN0IGJhc2ljUHJvcHM6IE56U2tlbGV0b25QYXJhZ3JhcGggPSB7fTtcbiAgICAvLyBXaWR0aFxuICAgIGlmICghaGFzQXZhdGFyIHx8ICFoYXNUaXRsZSkge1xuICAgICAgYmFzaWNQcm9wcy53aWR0aCA9ICc2MSUnO1xuICAgIH1cbiAgICAvLyBSb3dzXG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2ljUHJvcHMucm93cyA9IDI7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLmJhc2ljUHJvcHMsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelBhcmFncmFwaCkgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvcHM8VD4ocHJvcDogVCB8IGJvb2xlYW4gfCB1bmRlZmluZWQpOiBUIHwge30ge1xuICAgIHJldHVybiBwcm9wICYmIHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JyA/IHByb3AgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2lkdGhMaXN0KCk6IEFycmF5PG51bWJlciB8IHN0cmluZz4ge1xuICAgIGNvbnN0IHsgd2lkdGgsIHJvd3MgfSA9IHRoaXMucGFyYWdyYXBoO1xuICAgIGxldCB3aWR0aExpc3Q6IEFycmF5PHN0cmluZyB8IG51bWJlcj4gPSBbXTtcbiAgICBpZiAod2lkdGggJiYgQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IHdpZHRoO1xuICAgIH0gZWxzZSBpZiAod2lkdGggJiYgIUFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgICB3aWR0aExpc3QgPSBbXTtcbiAgICAgIHdpZHRoTGlzdFtyb3dzISAtIDFdID0gd2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB3aWR0aExpc3Q7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVByb3BzKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmdldFRpdGxlUHJvcHMoKTtcbiAgICB0aGlzLmF2YXRhciA9IHRoaXMuZ2V0QXZhdGFyUHJvcHMoKTtcbiAgICB0aGlzLnBhcmFncmFwaCA9IHRoaXMuZ2V0UGFyYWdyYXBoUHJvcHMoKTtcbiAgICB0aGlzLnJvd3NMaXN0ID0gWy4uLkFycmF5KHRoaXMucGFyYWdyYXBoLnJvd3MpXTtcbiAgICB0aGlzLndpZHRoTGlzdCA9IHRoaXMuZ2V0V2lkdGhMaXN0KCk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpUaXRsZSB8fCBjaGFuZ2VzLm56QXZhdGFyIHx8IGNoYW5nZXMubnpQYXJhZ3JhcGgpIHtcbiAgICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==