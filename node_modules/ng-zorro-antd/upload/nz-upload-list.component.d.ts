/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { ShowUploadListInterface, UploadFile, UploadListType } from './interface';
export declare class NzUploadListComponent implements OnChanges {
    private el;
    private cdr;
    private updateHostClassService;
    private platform;
    private imageTypes;
    private _items;
    readonly showPic: boolean;
    locale: any;
    listType: UploadListType;
    items: UploadFile[];
    icons: ShowUploadListInterface;
    onPreview: (file: UploadFile) => void;
    onRemove: (file: UploadFile) => void;
    private prefixCls;
    private setClassMap;
    private extname;
    isImageUrl(file: UploadFile): boolean;
    private previewFile;
    private genThumb;
    showPreview(file: UploadFile): boolean;
    handlePreview(file: UploadFile, e: Event): void;
    handleRemove(file: UploadFile, e: Event): void;
    constructor(el: ElementRef, cdr: ChangeDetectorRef, updateHostClassService: NzUpdateHostClassService, platform: Platform);
    detectChanges(): void;
    ngOnChanges(): void;
}
