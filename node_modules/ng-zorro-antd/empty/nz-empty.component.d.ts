/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NzI18nService } from 'ng-zorro-antd/i18n';
export declare class NzEmptyComponent implements OnChanges, OnInit, OnDestroy {
    private sanitizer;
    private i18n;
    private cdr;
    nzNotFoundImage: string | TemplateRef<void>;
    nzNotFoundContent: string | TemplateRef<void>;
    nzNotFoundFooter: string | TemplateRef<void>;
    defaultSvg: import("@angular/platform-browser").SafeResourceUrl;
    isContentString: boolean;
    locale: {
        [key: string]: string;
    };
    readonly shouldRenderContent: boolean;
    private destroy$;
    constructor(sanitizer: DomSanitizer, i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
