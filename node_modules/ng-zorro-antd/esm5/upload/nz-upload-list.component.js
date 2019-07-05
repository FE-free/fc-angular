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
var NzUploadListComponent = /** @class */ (function () {
    // #endregion
    function NzUploadListComponent(el, cdr, updateHostClassService, platform) {
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
    Object.defineProperty(NzUploadListComponent.prototype, "showPic", {
        get: /**
         * @return {?}
         */
        function () {
            return this.listType === 'picture' || this.listType === 'picture-card';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadListComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return this._items;
        },
        set: /**
         * @param {?} list
         * @return {?}
         */
        function (list) {
            list.forEach((/**
             * @param {?} file
             * @return {?}
             */
            function (file) {
                file.linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
            }));
            this._items = list;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    NzUploadListComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.listType] = true,
            _a);
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    };
    // #endregion
    // #region render
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    NzUploadListComponent.prototype.extname = 
    // #endregion
    // #region render
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var temp = url.split('/');
        /** @type {?} */
        var filename = temp[temp.length - 1];
        /** @type {?} */
        var filenameWithoutSuffix = filename.split(/#|\?/)[0];
        return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0];
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadListComponent.prototype.isImageUrl = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        if (~this.imageTypes.indexOf(file.type)) {
            return true;
        }
        /** @type {?} */
        var url = (/** @type {?} */ ((file.thumbUrl || file.url || '')));
        if (!url) {
            return false;
        }
        /** @type {?} */
        var extension = this.extname(url);
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
    };
    /**
     * @private
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    NzUploadListComponent.prototype.previewFile = /**
     * @private
     * @param {?} file
     * @param {?} callback
     * @return {?}
     */
    function (file, callback) {
        if (file.type && this.imageTypes.indexOf(file.type) === -1) {
            callback('');
        }
        /** @type {?} */
        var reader = new FileReader();
        // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
        reader.onloadend = (/**
         * @return {?}
         */
        function () { return callback((/** @type {?} */ (reader.result))); });
        reader.readAsDataURL(file);
    };
    /**
     * @private
     * @return {?}
     */
    NzUploadListComponent.prototype.genThumb = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        // tslint:disable-next-line:no-any
        /** @type {?} */
        var win = (/** @type {?} */ (window));
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
        function (file) { return file.originFileObj instanceof File && file.thumbUrl === undefined; }))
            .forEach((/**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            file.thumbUrl = '';
            _this.previewFile((/** @type {?} */ (file.originFileObj)), (/**
             * @param {?} previewDataUrl
             * @return {?}
             */
            function (previewDataUrl) {
                file.thumbUrl = previewDataUrl;
                _this.detectChanges();
            }));
        }));
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadListComponent.prototype.showPreview = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _a = this.icons, showPreviewIcon = _a.showPreviewIcon, hidePreviewIconInNonImage = _a.hidePreviewIconInNonImage;
        if (!showPreviewIcon) {
            return false;
        }
        return this.isImageUrl(file) ? true : !hidePreviewIconInNonImage;
    };
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    NzUploadListComponent.prototype.handlePreview = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        if (!this.onPreview) {
            return;
        }
        e.preventDefault();
        return this.onPreview(file);
    };
    /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    NzUploadListComponent.prototype.handleRemove = /**
     * @param {?} file
     * @param {?} e
     * @return {?}
     */
    function (file, e) {
        e.preventDefault();
        if (this.onRemove) {
            this.onRemove(file);
        }
        return;
    };
    /**
     * @return {?}
     */
    NzUploadListComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    /**
     * @return {?}
     */
    NzUploadListComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.genThumb();
    };
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
    NzUploadListComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Platform }
    ]; };
    NzUploadListComponent.propDecorators = {
        locale: [{ type: Input }],
        listType: [{ type: Input }],
        items: [{ type: Input }],
        icons: [{ type: Input }],
        onPreview: [{ type: Input }],
        onRemove: [{ type: Input }]
    };
    return NzUploadListComponent;
}());
export { NzUploadListComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC91cGxvYWQvIiwic291cmNlcyI6WyJuei11cGxvYWQtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDMUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5RDtJQXdKRSxhQUFhO0lBRWIsK0JBQ1UsRUFBYyxFQUNkLEdBQXNCLEVBQ3RCLHNCQUFnRCxFQUNoRCxRQUFrQjtRQUhsQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUEwQjtRQUNoRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBM0lwQixlQUFVLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7OztRQVV6RSxXQUFNLEdBQVEsRUFBRSxDQUFDOzs7UUFvQmxCLGNBQVMsR0FBRyxpQkFBaUIsQ0FBQztJQThHbkMsQ0FBQztJQXpJSixzQkFBSSwwQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLGNBQWMsQ0FBQztRQUN6RSxDQUFDOzs7T0FBQTtJQU9ELHNCQUNJLHdDQUFLOzs7O1FBTVQ7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7Ozs7UUFURCxVQUNVLElBQWtCO1lBQzFCLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEcsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTs7Ozs7SUFjTywyQ0FBVzs7OztJQUFuQjs7O1lBQ1EsUUFBUTtZQUNaLEdBQUMsSUFBSSxDQUFDLFNBQVMsSUFBRyxJQUFJO1lBQ3RCLEdBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxJQUFHLElBQUk7ZUFDN0M7UUFDRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxhQUFhO0lBRWIsaUJBQWlCOzs7Ozs7OztJQUVULHVDQUFPOzs7Ozs7OztJQUFmLFVBQWdCLEdBQVc7O1lBQ25CLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7WUFDckIsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFDaEMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7SUFFRCwwQ0FBVTs7OztJQUFWLFVBQVcsSUFBZ0I7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQztTQUNiOztZQUNLLEdBQUcsR0FBVyxtQkFBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBVTtRQUMvRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDbkMsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNwRixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLDZCQUE2QjtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxTQUFTLEVBQUU7WUFDcEIsd0NBQXdDO1lBQ3hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7Ozs7SUFFTywyQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLElBQWlCLEVBQUUsUUFBbUM7UUFDeEUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMxRCxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDZDs7WUFDSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDL0IsNEVBQTRFO1FBQzVFLE1BQU0sQ0FBQyxTQUFTOzs7UUFBRyxjQUFNLE9BQUEsUUFBUSxDQUFDLG1CQUFBLE1BQU0sQ0FBQyxNQUFNLEVBQVUsQ0FBQyxFQUFqQyxDQUFpQyxDQUFBLENBQUM7UUFDM0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVPLHdDQUFROzs7O0lBQWhCO1FBQUEsaUJBd0JDO1FBdkJDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPO1NBQ1I7OztZQUVLLEdBQUcsR0FBRyxtQkFBQSxNQUFNLEVBQU87UUFDekIsSUFDRSxDQUFDLElBQUksQ0FBQyxPQUFPO1lBQ2IsT0FBTyxRQUFRLEtBQUssV0FBVztZQUMvQixPQUFPLEdBQUcsS0FBSyxXQUFXO1lBQzFCLENBQUMsR0FBRyxDQUFDLFVBQVU7WUFDZixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQ1Q7WUFDQSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSzthQUNQLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxhQUFhLFlBQVksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFqRSxDQUFpRSxFQUFDO2FBQ2pGLE9BQU87Ozs7UUFBQyxVQUFBLElBQUk7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFBLElBQUksQ0FBQyxhQUFhLEVBQUM7Ozs7WUFBRSxVQUFDLGNBQXNCO2dCQUMzRCxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxJQUFnQjtRQUNwQixJQUFBLGVBQTJELEVBQXpELG9DQUFlLEVBQUUsd0RBQXdDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELDZDQUFhOzs7OztJQUFiLFVBQWMsSUFBZ0IsRUFBRSxDQUFRO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7O0lBRUQsNENBQVk7Ozs7O0lBQVosVUFBYSxJQUFnQixFQUFFLENBQVE7UUFDckMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsT0FBTztJQUNULENBQUM7Ozs7SUFXRCw2Q0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7O2dCQXhLRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHMyR0FBOEM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLFdBQVcsRUFBRTs0QkFDbkIsVUFBVSxDQUFDLFFBQVEsRUFBRTtnQ0FDbkIsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztnQ0FDOUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7NkJBQzdELENBQUM7NEJBQ0YsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDckYsQ0FBQztxQkFDSDtvQkFDRCxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQTNCQyxVQUFVO2dCQUZWLGlCQUFpQjtnQkFRVix3QkFBd0I7Z0JBWHhCLFFBQVE7Ozt5QkE0Q2QsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBVUwsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBOEhSLDRCQUFDO0NBQUEsQUF6S0QsSUF5S0M7U0F2SlkscUJBQXFCOzs7Ozs7SUFDaEMsMkNBQWtGOzs7OztJQUNsRix1Q0FBNkI7O0lBUzdCLHVDQUEwQjs7SUFDMUIseUNBQWtDOztJQVdsQyxzQ0FBd0M7O0lBQ3hDLDBDQUErQzs7SUFDL0MseUNBQThDOzs7OztJQU05QywwQ0FBc0M7Ozs7O0lBMEdwQyxtQ0FBc0I7Ozs7O0lBQ3RCLG9DQUE4Qjs7Ozs7SUFDOUIsdURBQXdEOzs7OztJQUN4RCx5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcblxuaW1wb3J0IHsgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsIFVwbG9hZEZpbGUsIFVwbG9hZExpc3RUeXBlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei11cGxvYWQtbGlzdCcsXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWRMaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXVwbG9hZC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2l0ZW1TdGF0ZScsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSxcbiAgICAgICAgYW5pbWF0ZSgxNTAsIHN0eWxlKHsgaGVpZ2h0OiAnKicsIHdpZHRoOiAnKicsIG9wYWNpdHk6IDEgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFthbmltYXRlKDE1MCwgc3R5bGUoeyBoZWlnaHQ6ICcwJywgd2lkdGg6ICcwJywgb3BhY2l0eTogMCB9KSldKVxuICAgIF0pXG4gIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOelVwbG9hZExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBwcml2YXRlIGltYWdlVHlwZXMgPSBbJ2ltYWdlJywgJ3dlYnAnLCAncG5nJywgJ3N2ZycsICdnaWYnLCAnanBnJywgJ2pwZWcnLCAnYm1wJ107XG4gIHByaXZhdGUgX2l0ZW1zOiBVcGxvYWRGaWxlW107XG5cbiAgZ2V0IHNob3dQaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGlzdFR5cGUgPT09ICdwaWN0dXJlJyB8fCB0aGlzLmxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJztcbiAgfVxuXG4gIC8vICNyZWdpb24gZmllbGRzXG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBsb2NhbGU6IGFueSA9IHt9O1xuICBASW5wdXQoKSBsaXN0VHlwZTogVXBsb2FkTGlzdFR5cGU7XG4gIEBJbnB1dCgpXG4gIHNldCBpdGVtcyhsaXN0OiBVcGxvYWRGaWxlW10pIHtcbiAgICBsaXN0LmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBmaWxlLmxpbmtQcm9wcyA9IHR5cGVvZiBmaWxlLmxpbmtQcm9wcyA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGZpbGUubGlua1Byb3BzKSA6IGZpbGUubGlua1Byb3BzO1xuICAgIH0pO1xuICAgIHRoaXMuX2l0ZW1zID0gbGlzdDtcbiAgfVxuICBnZXQgaXRlbXMoKTogVXBsb2FkRmlsZVtdIHtcbiAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gIH1cbiAgQElucHV0KCkgaWNvbnM6IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlO1xuICBASW5wdXQoKSBvblByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuICBASW5wdXQoKSBvblJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IHZvaWQ7XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZC1saXN0JztcblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgW3RoaXMucHJlZml4Q2xzXTogdHJ1ZSxcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLmxpc3RUeXBlfWBdOiB0cnVlXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgY2xhc3NNYXApO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gcmVuZGVyXG5cbiAgcHJpdmF0ZSBleHRuYW1lKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCB0ZW1wID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgY29uc3QgZmlsZW5hbWUgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgZmlsZW5hbWVXaXRob3V0U3VmZml4ID0gZmlsZW5hbWUuc3BsaXQoLyN8XFw/LylbMF07XG4gICAgcmV0dXJuICgvXFwuW14uL1xcXFxdKiQvLmV4ZWMoZmlsZW5hbWVXaXRob3V0U3VmZml4KSB8fCBbJyddKVswXTtcbiAgfVxuXG4gIGlzSW1hZ2VVcmwoZmlsZTogVXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xuICAgIGlmICh+dGhpcy5pbWFnZVR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gKGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmwgfHwgJycpIGFzIHN0cmluZztcbiAgICBpZiAoIXVybCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBleHRlbnNpb24gPSB0aGlzLmV4dG5hbWUodXJsKTtcbiAgICBpZiAoL15kYXRhOmltYWdlXFwvLy50ZXN0KHVybCkgfHwgLyh3ZWJwfHN2Z3xwbmd8Z2lmfGpwZ3xqcGVnfGJtcCkkL2kudGVzdChleHRlbnNpb24pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKC9eZGF0YTovLnRlc3QodXJsKSkge1xuICAgICAgLy8gb3RoZXIgZmlsZSB0eXBlcyBvZiBiYXNlNjRcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGV4dGVuc2lvbikge1xuICAgICAgLy8gb3RoZXIgZmlsZSB0eXBlcyB3aGljaCBoYXZlIGV4dGVuc2lvblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJldmlld0ZpbGUoZmlsZTogRmlsZSB8IEJsb2IsIGNhbGxiYWNrOiAoZGF0YVVybDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKGZpbGUudHlwZSAmJiB0aGlzLmltYWdlVHlwZXMuaW5kZXhPZihmaWxlLnR5cGUpID09PSAtMSkge1xuICAgICAgY2FsbGJhY2soJycpO1xuICAgIH1cbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GaWxlUmVhZGVyL3JlYWRBc0RhdGFVUkxcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaHVtYigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBjb25zdCB3aW4gPSB3aW5kb3cgYXMgYW55O1xuICAgIGlmIChcbiAgICAgICF0aGlzLnNob3dQaWMgfHxcbiAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIHR5cGVvZiB3aW4gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAhd2luLkZpbGVSZWFkZXIgfHxcbiAgICAgICF3aW4uRmlsZVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLml0ZW1zXG4gICAgICAuZmlsdGVyKGZpbGUgPT4gZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSAmJiBmaWxlLnRodW1iVXJsID09PSB1bmRlZmluZWQpXG4gICAgICAuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgZmlsZS50aHVtYlVybCA9ICcnO1xuICAgICAgICB0aGlzLnByZXZpZXdGaWxlKGZpbGUub3JpZ2luRmlsZU9iaiEsIChwcmV2aWV3RGF0YVVybDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgZmlsZS50aHVtYlVybCA9IHByZXZpZXdEYXRhVXJsO1xuICAgICAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2hvd1ByZXZpZXcoZmlsZTogVXBsb2FkRmlsZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgc2hvd1ByZXZpZXdJY29uLCBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlIH0gPSB0aGlzLmljb25zO1xuICAgIGlmICghc2hvd1ByZXZpZXdJY29uKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmlzSW1hZ2VVcmwoZmlsZSkgPyB0cnVlIDogIWhpZGVQcmV2aWV3SWNvbkluTm9uSW1hZ2U7XG4gIH1cblxuICBoYW5kbGVQcmV2aWV3KGZpbGU6IFVwbG9hZEZpbGUsIGU6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9uUHJldmlldykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gdGhpcy5vblByZXZpZXcoZmlsZSk7XG4gIH1cblxuICBoYW5kbGVSZW1vdmUoZmlsZTogVXBsb2FkRmlsZSwgZTogRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMub25SZW1vdmUpIHtcbiAgICAgIHRoaXMub25SZW1vdmUoZmlsZSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgZGV0ZWN0Q2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5nZW5UaHVtYigpO1xuICB9XG59XG4iXX0=