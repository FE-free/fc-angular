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
import { animate, style, transition, trigger } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export class NzUploadListComponent {
    // #endregion
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} updateHostClassService
     * @param {?} platform
     */
    constructor(el, cdr, updateHostClassService, platform) {
        this.el = el;
        this.cdr = cdr;
        this.updateHostClassService = updateHostClassService;
        this.platform = platform;
        this.imageTypes = ['image', 'webp', 'png', 'svg', 'gif', 'jpg', 'jpeg', 'bmp'];
        // #region fields
        // tslint:disable-next-line:no-any
        this.locale = {};
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload-list';
    }
    /**
     * @return {?}
     */
    get showPic() {
        return this.listType === 'picture' || this.listType === 'picture-card';
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set items(list) {
        list.forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
        }));
        this._items = list;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.listType}`]: true
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    extname(url) {
        /** @type {?} */
        const temp = url.split('/');
        /** @type {?} */
        const filename = temp[temp.length - 1];
        /** @type {?} */
        const filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    }
    /**
     * @param {?} file
     * @return {?}
     */
    isImageUrl(file) {
        if (~this.imageTypes.indexOf(file.type)) {
            return true;
        }
        /** @type {?} */
        const url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
        if (!url) {
            return false;
        }
        /** @type {?} */
        const extension = this.extname(url);
        if (/^data:image\//.test(url) || /(webp|svg|png|gif|jpg|jpeg|bmp)$/i.test(extension)) {
            return true;
        }
        else if (/^data:/.test(url)) {
            // other file types of base64
            return false;
        }
        else if (extension) {
            // other file types which have extension
            return false;
        }
        return true;
    }
    /**
     * @private
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    previewFile(file, callback) {
        if (file.type && this.imageTypes.indexOf(file.type) === -1) {
            callback('');
        }
        /** @type {?} */
        const reader = new FileReader();
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        reader.onloadend = (/**
         * @return {?}
         */
        () => callback((/** @type {?} */ (reader.result))));
        reader.readAsDataURL(file);
    }
    /**
     * @private
     * @return {?}
     */
    genThumb() {
        if (!this.platform.isBrowser) {
            return;
        }
        // tslint:disable-next-line:no-any
        /** @type {?} */
        const win = (/** @type {?} */ (window));
        if (!this.showPic ||
            typeof document === 'undefined' ||
            typeof win === 'undefined' ||
            !win.FileReader ||
            !win.File) {
            return;
        }
        this.items
            .filter((/**
         * @param {?} file
         * @return {?}
         */
        file => file.originFileObj instanceof File && file.thumbUrl === undefined))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        file => {
            file.thumbUrl = '';
            this.previewFile((/** @type {?} */ (file.originFileObj)), (/**
             * @param {?} previewDataUrl
             * @return {?}
             */
            (previewDataUrl) => {
                file.thumbUrl = previewDataUrl;
                this.detectChanges();
            }));
        }));
    }
    /**
     * @param {?} file
     * @return {?}
     */
    showPreview(file) {
        const { showPreviewIcon, hidePreviewIconInNonImage } = this.icons;
        if (!showPreviewIcon) {
            return false;
        }
        return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handlePreview(file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    }
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    handleRemove(file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.setClassMap();
        this.genThumb();
    }
}
NzUploadListComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload-list',
                exportAs: 'nzUploadList',
                template: "<div *ngFor=\"let file of items\" class=\"ant-upload-list-item ant-upload-list-item-{{file.status}}\" @itemState>\n  <ng-template #icon>\n    <ng-container *ngIf=\"showPic; else noPicTpl\">\n      <div *ngIf=\"listType === 'picture-card' && file.status === 'uploading'; else thumbUrlCheck\" class=\"ant-upload-list-item-uploading-text\">{{ locale.uploading }}</div>\n    </ng-container>\n    <ng-template #thumbUrlCheck>\n      <i *ngIf=\"!file.thumbUrl && !file.url; else thumbTpl\"\n        class=\"ant-upload-list-item-thumbnail\" nz-icon nzType=\"picture\" nzTheme=\"twotone\"></i>\n    </ng-template>\n    <ng-template #thumbTpl>\n      <a class=\"ant-upload-list-item-thumbnail\" target=\"_blank\" rel=\"noopener noreferrer\"\n        [href]=\"file.thumbUrl || file.url\"\n        (click)=\"handlePreview(file, $event)\">\n        <img *ngIf=\"isImageUrl(file); else noThumbTpl\" [src]=\"file.thumbUrl || file.url\" [attr.alt]=\"file.name\" />\n      </a>\n    </ng-template>\n    <ng-template #noThumbTpl><i class=\"ant-upload-list-item-icon\" nz-icon nzType=\"file\" nzTheme=\"twotone\"></i></ng-template>\n    <ng-template #noPicTpl><i nz-icon [nzType]=\"file.status === 'uploading' ? 'loading' : 'paper-clip'\"></i></ng-template>\n  </ng-template>\n  <ng-template #preview>\n    <ng-container *ngIf=\"file.url; else prevText\">\n      <a [href]=\"file.thumbUrl || file.url\" target=\"_blank\" rel=\"noopener noreferrer\" [attr.download]=\"file.linkProps && file.linkProps.download\"\n        (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</a>\n    </ng-container>\n    <ng-template #prevText>\n      <span (click)=\"handlePreview(file, $event)\" class=\"ant-upload-list-item-name\" title=\"{{ file.name }}\">{{ file.name }}</span>\n    </ng-template>\n  </ng-template>\n  <div class=\"ant-upload-list-item-info\">\n    <span *ngIf=\"file.status === 'error'\" nz-tooltip [nzTitle]=\"file.message\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </span>\n    <span *ngIf=\"file.status !== 'error'\">\n      <ng-template [ngTemplateOutlet]=\"icon\"></ng-template>\n      <ng-template [ngTemplateOutlet]=\"preview\"></ng-template>\n    </span>\n  </div>\n  <ng-container *ngIf=\"listType === 'picture-card' && file.status !== 'uploading'; else close\">\n    <span class=\"ant-upload-list-item-actions\">\n      <a *ngIf=\"showPreview(file)\" [href]=\"file.thumbUrl || file.url\"\n        target=\"_blank\" rel=\"noopener noreferrer\"\n        title=\"{{ locale.previewFile }}\"\n        [ngStyle]=\"!(file.url || file.thumbUrl) && {'opacity': .5, 'pointer-events': 'none'}\"\n        (click)=\"handlePreview(file, $event)\">\n          <i nz-icon nzType=\"eye-o\"></i>\n      </a>\n      <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon nzType=\"delete\" title=\"{{ locale.removeFile }}\"></i>\n    </span>\n  </ng-container>\n  <ng-template #close>\n    <i *ngIf=\"icons.showRemoveIcon\" (click)=\"handleRemove(file, $event)\" nz-icon nzType=\"close\" title=\"{{ locale.removeFile }}\"></i>\n  </ng-template>\n  <div *ngIf=\"file.status === 'uploading'\" class=\"ant-upload-list-item-progress\">\n    <nz-progress [nzPercent]=\"file.percent\" [nzShowInfo]=\"false\" [nzStrokeWidth]=\"2\"></nz-progress>\n  </div>\n</div>",
                providers: [NzUpdateHostClassService],
                animations: [
                    trigger('itemState', [
                        transition(':enter', [
                            style({ height: '0', width: '0', opacity: 0 }),
                            animate(150, style({ height: '*', width: '*', opacity: 1 }))
                        ]),
                        transition(':leave', [animate(150, style({ height: '0', width: '0', opacity: 0 }))])
                    ])
                ],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzUploadListComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: Platform }
];
NzUploadListComponent.propDecorators = {
    locale: [{ type: Input }],
    listType: [{ type: Input }],
    items: [{ type: Input }],
    icons: [{ type: Input }],
    onPreview: [{ type: Input }],
    onRemove: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.imageTypes;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype._items;
    /** @type {?} */
    NzUploadListComponent.prototype.locale;
    /** @type {?} */
    NzUploadListComponent.prototype.listType;
    /** @type {?} */
    NzUploadListComponent.prototype.icons;
    /** @type {?} */
    NzUploadListComponent.prototype.onPreview;
    /** @type {?} */
    NzUploadListComponent.prototype.onRemove;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.prefixCls;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.updateHostClassService;
    /**
     * @type {?}
     * @private
     */
    NzUploadListComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQXNCOUQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7Ozs7SUF3SWhDLFlBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ3RCLHNCQUFnRCxFQUNoRCxRQUFrQjtRQUhsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBM0lwQixlQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7OztRQVV6RSxXQUFNLEdBQVEsRUFBRSxDQUFDOzs7UUFvQmxCLGNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQThHbkMsQ0FBQzs7OztJQXpJSixJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssY0FBYyxDQUFDO0lBQ3pFLENBQUM7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Q0YsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckYsQ0FBQztpQkFDSDtnQkFDRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUEzQkMsVUFBVTtZQUZWLGlCQUFpQjtZQVFWLHdCQUF3QjtZQVh4QixRQUFROzs7cUJBNENkLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO29CQVVMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7Ozs7O0lBeEJOLDJDQUFrRjs7Ozs7SUFDbEYsdUNBQTZCOztJQVM3Qix1Q0FBMEI7O0lBQzFCLHlDQUFrQzs7SUFXbEMsc0NBQXdDOztJQUN4QywwQ0FBK0M7O0lBQy9DLHlDQUE4Qzs7Ozs7SUFNOUMsMENBQXNDOzs7OztJQTBHcEMsbUNBQXNCOzs7OztJQUN0QixvQ0FBOEI7Ozs7O0lBQzlCLHVEQUF3RDs7Ozs7SUFDeEQseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLCBVcGxvYWRGaWxlLCBVcGxvYWRMaXN0VHlwZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotdXBsb2FkLWxpc3QnLFxuICBleHBvcnRBczogJ256VXBsb2FkTGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdpdGVtU3RhdGUnLCBbXG4gICAgICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXG4gICAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSksXG4gICAgICAgIGFuaW1hdGUoMTUwLCBzdHlsZSh7IGhlaWdodDogJyonLCB3aWR0aDogJyonLCBvcGFjaXR5OiAxIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnMCcsIHdpZHRoOiAnMCcsIG9wYWNpdHk6IDAgfSkpXSlcbiAgICBdKVxuICBdLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBpbWFnZVR5cGVzID0gWydpbWFnZScsICd3ZWJwJywgJ3BuZycsICdzdmcnLCAnZ2lmJywgJ2pwZycsICdqcGVnJywgJ2JtcCddO1xuICBwcml2YXRlIF9pdGVtczogVXBsb2FkRmlsZVtdO1xuXG4gIGdldCBzaG93UGljKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZScgfHwgdGhpcy5saXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCc7XG4gIH1cblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgbGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlO1xuICBASW5wdXQoKVxuICBzZXQgaXRlbXMobGlzdDogVXBsb2FkRmlsZVtdKSB7XG4gICAgbGlzdC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgZmlsZS5saW5rUHJvcHMgPSB0eXBlb2YgZmlsZS5saW5rUHJvcHMgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShmaWxlLmxpbmtQcm9wcykgOiBmaWxlLmxpbmtQcm9wcztcbiAgICB9KTtcbiAgICB0aGlzLl9pdGVtcyA9IGxpc3Q7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IFVwbG9hZEZpbGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG4gIEBJbnB1dCgpIGljb25zOiBTaG93VXBsb2FkTGlzdEludGVyZmFjZTtcbiAgQElucHV0KCkgb25QcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcbiAgQElucHV0KCkgb25SZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHN0eWxlc1xuXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQtbGlzdCc7XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFt0aGlzLnByZWZpeENsc106IHRydWUsXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5saXN0VHlwZX1gXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHJlbmRlclxuXG4gIHByaXZhdGUgZXh0bmFtZSh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xuICAgIGNvbnN0IGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGZpbGVuYW1lV2l0aG91dFN1ZmZpeCA9IGZpbGVuYW1lLnNwbGl0KC8jfFxcPy8pWzBdO1xuICAgIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lV2l0aG91dFN1ZmZpeCkgfHwgWycnXSlbMF07XG4gIH1cblxuICBpc0ltYWdlVXJsKGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuIHtcbiAgICBpZiAofnRoaXMuaW1hZ2VUeXBlcy5pbmRleE9mKGZpbGUudHlwZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IChmaWxlLnRodW1iVXJsIHx8IGZpbGUudXJsIHx8ICcnKSBhcyBzdHJpbmc7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZXh0ZW5zaW9uID0gdGhpcy5leHRuYW1lKHVybCk7XG4gICAgaWYgKC9eZGF0YTppbWFnZVxcLy8udGVzdCh1cmwpIHx8IC8od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZ3xibXApJC9pLnRlc3QoZXh0ZW5zaW9uKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICgvXmRhdGE6Ly50ZXN0KHVybCkpIHtcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgb2YgYmFzZTY0XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChleHRlbnNpb24pIHtcbiAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgd2hpY2ggaGF2ZSBleHRlbnNpb25cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIHByZXZpZXdGaWxlKGZpbGU6IEZpbGUgfCBCbG9iLCBjYWxsYmFjazogKGRhdGFVcmw6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIGlmIChmaWxlLnR5cGUgJiYgdGhpcy5pbWFnZVR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSA9PT0gLTEpIHtcbiAgICAgIGNhbGxiYWNrKCcnKTtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVJlYWRlci9yZWFkQXNEYXRhVVJMXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuVGh1bWIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueTtcbiAgICBpZiAoXG4gICAgICAhdGhpcy5zaG93UGljIHx8XG4gICAgICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0eXBlb2Ygd2luID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgIXdpbi5GaWxlUmVhZGVyIHx8XG4gICAgICAhd2luLkZpbGVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pdGVtc1xuICAgICAgLmZpbHRlcihmaWxlID0+IGZpbGUub3JpZ2luRmlsZU9iaiBpbnN0YW5jZW9mIEZpbGUgJiYgZmlsZS50aHVtYlVybCA9PT0gdW5kZWZpbmVkKVxuICAgICAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcbiAgICAgICAgdGhpcy5wcmV2aWV3RmlsZShmaWxlLm9yaWdpbkZpbGVPYmohLCAocHJldmlld0RhdGFVcmw6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGZpbGUudGh1bWJVcmwgPSBwcmV2aWV3RGF0YVVybDtcbiAgICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNob3dQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IHNob3dQcmV2aWV3SWNvbiwgaGlkZVByZXZpZXdJY29uSW5Ob25JbWFnZSB9ID0gdGhpcy5pY29ucztcbiAgICBpZiAoIXNob3dQcmV2aWV3SWNvbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pc0ltYWdlVXJsKGZpbGUpID8gdHJ1ZSA6ICFoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlO1xuICB9XG5cbiAgaGFuZGxlUHJldmlldyhmaWxlOiBVcGxvYWRGaWxlLCBlOiBFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5vblByZXZpZXcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIHRoaXMub25QcmV2aWV3KGZpbGUpO1xuICB9XG5cbiAgaGFuZGxlUmVtb3ZlKGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm9uUmVtb3ZlKSB7XG4gICAgICB0aGlzLm9uUmVtb3ZlKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMuZ2VuVGh1bWIoKTtcbiAgfVxufVxuIl19