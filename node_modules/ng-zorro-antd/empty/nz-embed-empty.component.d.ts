/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Portal } from '@angular/cdk/portal';
import { ChangeDetectorRef, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewContainerRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { NzEmptyCustomContent, NzEmptySize } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
export declare class NzEmbedEmptyComponent implements OnChanges, OnInit, OnDestroy {
    emptyService: NzEmptyService;
    private sanitizer;
    private viewContainerRef;
    private cdr;
    private injector;
    nzComponentName: string;
    specificContent: NzEmptyCustomContent;
    content?: NzEmptyCustomContent;
    contentType: 'component' | 'template' | 'string';
    contentPortal?: Portal<any>;
    defaultSvg: import("@angular/platform-browser").SafeResourceUrl;
    size: NzEmptySize;
    subs_: Subscription;
    constructor(emptyService: NzEmptyService, sanitizer: DomSanitizer, viewContainerRef: ViewContainerRef, cdr: ChangeDetectorRef, injector: Injector);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getEmptySize;
    private renderEmpty;
}
