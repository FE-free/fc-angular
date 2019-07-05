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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from 'ng-zorro-antd/core';
export class NzSkeletonComponent {
    /**
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(cdr, renderer, elementRef) {
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
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    /**
     * @private
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width = '';
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @private
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = !!this.nzTitle && !this.nzParagraph ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @private
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
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
        return Object.assign({}, basicProps, this.getProps(this.nzParagraph));
    }
    /**
     * @private
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @private
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[(/** @type {?} */ (rows)) - 1] = width;
        }
        return widthList;
    }
    /**
     * @private
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzTitle || changes.nzAvatar || changes.nzParagraph) {
            this.updateProps();
        }
    }
}
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
NzSkeletonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzAvatar: [{ type: Input }],
    nzParagraph: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9za2VsZXRvbi8iLCJzb3VyY2VzIjpbIm56LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUdMLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBY2hELE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQWE5QixZQUFvQixHQUFzQixFQUFFLFFBQW1CLEVBQUUsVUFBc0I7UUFBbkUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFaakMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLFlBQU8sR0FBOEIsSUFBSSxDQUFDO1FBQzFDLGFBQVEsR0FBK0IsS0FBSyxDQUFDO1FBQzdDLGdCQUFXLEdBQWtDLElBQUksQ0FBQztRQUszRCxhQUFRLEdBQWEsRUFBRSxDQUFDO1FBQ3hCLGNBQVMsR0FBMkIsRUFBRSxDQUFDO1FBR3JDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxRQUF5QixFQUFFO1FBQ25DLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8sYUFBYTs7Y0FDYixTQUFTLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFROztjQUNwQyxZQUFZLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXOztZQUM1QyxLQUFLLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFF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QU8sQ0FBQyxXQUFXLEVBQUU7WUFDOUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQzs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIseTRCQUEyQztnQkFDM0MsSUFBSSxFQUFFO29CQUNKLGtDQUFrQyxFQUFFLFlBQVk7b0JBQ2hELDZCQUE2QixFQUFFLFVBQVU7aUJBQzFDO2FBQ0Y7Ozs7WUF4QkMsaUJBQWlCO1lBTWpCLFNBQVM7WUFKVCxVQUFVOzs7dUJBd0JULEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQUpOLHVDQUEwQjs7SUFDMUIsd0NBQTBCOztJQUMxQixzQ0FBbUQ7O0lBQ25ELHVDQUFzRDs7SUFDdEQsMENBQTJEOztJQUUzRCxvQ0FBdUI7O0lBQ3ZCLHFDQUF5Qjs7SUFDekIsd0NBQStCOztJQUMvQix1Q0FBd0I7O0lBQ3hCLHdDQUF1Qzs7Ozs7SUFFM0Isa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgQXZhdGFyU2hhcGUsIEF2YXRhclNpemUsIE56U2tlbGV0b25BdmF0YXIsIE56U2tlbGV0b25QYXJhZ3JhcGgsIE56U2tlbGV0b25UaXRsZSB9IGZyb20gJy4vbnotc2tlbGV0b24udHlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1za2VsZXRvbicsXG4gIGV4cG9ydEFzOiAnbnpTa2VsZXRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1za2VsZXRvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi13aXRoLWF2YXRhcl0nOiAnISFuekF2YXRhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b24tYWN0aXZlXSc6ICduekFjdGl2ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelNrZWxldG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuekFjdGl2ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxvYWRpbmcgPSB0cnVlO1xuICBASW5wdXQoKSBuelRpdGxlOiBOelNrZWxldG9uVGl0bGUgfCBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpBdmF0YXI6IE56U2tlbGV0b25BdmF0YXIgfCBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56UGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoIHwgYm9vbGVhbiA9IHRydWU7XG5cbiAgdGl0bGU6IE56U2tlbGV0b25UaXRsZTtcbiAgYXZhdGFyOiBOelNrZWxldG9uQXZhdGFyO1xuICBwYXJhZ3JhcGg6IE56U2tlbGV0b25QYXJhZ3JhcGg7XG4gIHJvd3NMaXN0OiBudW1iZXJbXSA9IFtdO1xuICB3aWR0aExpc3Q6IEFycmF5PG51bWJlciB8IHN0cmluZz4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtc2tlbGV0b24nKTtcbiAgfVxuXG4gIHRvQ1NTVW5pdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiB0b0Nzc1BpeGVsKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQcm9wcygpOiBOelNrZWxldG9uVGl0bGUge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNQYXJhZ3JhcGg6IGJvb2xlYW4gPSAhIXRoaXMubnpQYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoID0gJyc7XG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgICB3aWR0aCA9ICczOCUnO1xuICAgIH0gZWxzZSBpZiAoaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnNTAlJztcbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGgsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelRpdGxlKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXJQcm9wcygpOiBOelNrZWxldG9uQXZhdGFyIHtcbiAgICBjb25zdCBzaGFwZTogQXZhdGFyU2hhcGUgPSAhIXRoaXMubnpUaXRsZSAmJiAhdGhpcy5uelBhcmFncmFwaCA/ICdzcXVhcmUnIDogJ2NpcmNsZSc7XG4gICAgY29uc3Qgc2l6ZTogQXZhdGFyU2l6ZSA9ICdsYXJnZSc7XG4gICAgcmV0dXJuIHsgc2hhcGUsIHNpemUsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uekF2YXRhcikgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFyYWdyYXBoUHJvcHMoKTogTnpTa2VsZXRvblBhcmFncmFwaCB7XG4gICAgY29uc3QgaGFzQXZhdGFyOiBib29sZWFuID0gISF0aGlzLm56QXZhdGFyO1xuICAgIGNvbnN0IGhhc1RpdGxlOiBib29sZWFuID0gISF0aGlzLm56VGl0bGU7XG4gICAgY29uc3QgYmFzaWNQcm9wczogTnpTa2VsZXRvblBhcmFncmFwaCA9IHt9O1xuICAgIC8vIFdpZHRoXG4gICAgaWYgKCFoYXNBdmF0YXIgfHwgIWhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLndpZHRoID0gJzYxJSc7XG4gICAgfVxuICAgIC8vIFJvd3NcbiAgICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4uYmFzaWNQcm9wcywgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56UGFyYWdyYXBoKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9wczxUPihwcm9wOiBUIHwgYm9vbGVhbiB8IHVuZGVmaW5lZCk6IFQgfCB7fSB7XG4gICAgcmV0dXJuIHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnID8gcHJvcCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaWR0aExpc3QoKTogQXJyYXk8bnVtYmVyIHwgc3RyaW5nPiB7XG4gICAgY29uc3QgeyB3aWR0aCwgcm93cyB9ID0gdGhpcy5wYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoTGlzdDogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiA9IFtdO1xuICAgIGlmICh3aWR0aCAmJiBBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gd2lkdGg7XG4gICAgfSBlbHNlIGlmICh3aWR0aCAmJiAhQXJyYXkuaXNBcnJheSh3aWR0aCkpIHtcbiAgICAgIHdpZHRoTGlzdCA9IFtdO1xuICAgICAgd2lkdGhMaXN0W3Jvd3MhIC0gMV0gPSB3aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoTGlzdDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvcHMoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZ2V0VGl0bGVQcm9wcygpO1xuICAgIHRoaXMuYXZhdGFyID0gdGhpcy5nZXRBdmF0YXJQcm9wcygpO1xuICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5nZXRQYXJhZ3JhcGhQcm9wcygpO1xuICAgIHRoaXMucm93c0xpc3QgPSBbLi4uQXJyYXkodGhpcy5wYXJhZ3JhcGgucm93cyldO1xuICAgIHRoaXMud2lkdGhMaXN0ID0gdGhpcy5nZXRXaWR0aExpc3QoKTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUHJvcHMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uelRpdGxlIHx8IGNoYW5nZXMubnpBdmF0YXIgfHwgY2hhbmdlcy5uelBhcmFncmFwaCkge1xuICAgICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICAgIH1cbiAgfVxufVxuIl19