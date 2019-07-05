/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { HttpClient } from '@angular/common/http';
import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { UploadFile, ZipButtonOptions } from './interface';
export declare class NzUploadBtnComponent implements OnInit, OnChanges, OnDestroy {
    private http;
    private el;
    private updateHostClassService;
    reqs: {
        [key: string]: Subscription;
    };
    private inited;
    private destroy;
    file: ElementRef;
    classes: {};
    options: ZipButtonOptions;
    onClick(): void;
    onKeyDown(e: KeyboardEvent): void;
    onFileDrop(e: any): void;
    onChange(e: Event): void;
    private traverseFileTree;
    private attrAccept;
    private attachUid;
    uploadFiles(fileList: FileList | File[]): void;
    private upload;
    private post;
    private xhr;
    private clean;
    abort(file?: UploadFile): void;
    private prefixCls;
    private setClassMap;
    constructor(http: HttpClient, el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
