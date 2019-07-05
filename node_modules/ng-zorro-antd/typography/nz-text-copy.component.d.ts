/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzCopyToClipboardService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
export declare class NzTextCopyComponent implements OnInit, OnDestroy {
    private host;
    private cdr;
    private copyToClipboard;
    private i18n;
    copied: boolean;
    copyId: number;
    locale: any;
    nativeElement: any;
    private destroy$;
    text: string;
    readonly textCopy: EventEmitter<string>;
    constructor(host: ElementRef, cdr: ChangeDetectorRef, copyToClipboard: NzCopyToClipboardService, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    onCopied(): void;
}
