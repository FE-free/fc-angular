/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { ShowUploadListInterface, UploadChangeParam, UploadFile, UploadFilter, UploadListType, UploadType, UploadXHRArgs, ZipButtonOptions } from './interface';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
export declare class NzUploadComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    private i18n$;
    uploadComp: NzUploadBtnComponent;
    listComp: NzUploadListComponent;
    locale: any;
    nzType: UploadType;
    nzLimit: number;
    nzSize: number;
    nzFileType: string;
    nzAccept: string | string[];
    nzAction: string;
    nzDirectory: boolean;
    nzOpenFileDialogOnClick: boolean;
    nzBeforeUpload: (file: UploadFile, fileList: UploadFile[]) => boolean | Observable<boolean>;
    nzCustomRequest: (item: UploadXHRArgs) => Subscription;
    nzData: {} | ((file: UploadFile) => {});
    nzFilter: UploadFilter[];
    nzFileList: UploadFile[];
    nzDisabled: boolean;
    nzHeaders: {} | ((file: UploadFile) => {});
    nzListType: UploadListType;
    nzMultiple: boolean;
    nzName: string;
    private _showUploadList;
    nzShowUploadList: boolean | ShowUploadListInterface;
    nzShowButton: boolean;
    nzWithCredentials: boolean;
    nzRemove: (file: UploadFile) => boolean | Observable<boolean>;
    nzPreview: (file: UploadFile) => void;
    readonly nzChange: EventEmitter<UploadChangeParam>;
    readonly nzFileListChange: EventEmitter<UploadFile[]>;
    _btnOptions: ZipButtonOptions;
    private zipOptions;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    private fileToObject;
    private getFileItem;
    private removeFileItem;
    private genErr;
    private onStart;
    private onProgress;
    private onSuccess;
    private onError;
    private dragState;
    fileDrop(e: any): void;
    private detectChangesList;
    onRemove: (file: UploadFile) => void;
    private prefixCls;
    classList: string[];
    private setClassMap;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [P in keyof this]?: SimpleChange;
    } & SimpleChanges): void;
    ngOnDestroy(): void;
}
