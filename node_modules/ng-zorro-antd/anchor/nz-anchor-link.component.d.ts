/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
export declare class NzAnchorLinkComponent implements OnInit, OnDestroy {
    elementRef: ElementRef;
    private anchorComp;
    private cdr;
    private platform;
    nzHref: string;
    titleStr: string | null;
    titleTpl: TemplateRef<void>;
    active: boolean;
    nzTitle: string | TemplateRef<void>;
    nzTemplate: TemplateRef<void>;
    constructor(elementRef: ElementRef, anchorComp: NzAnchorComponent, cdr: ChangeDetectorRef, platform: Platform, renderer: Renderer2);
    ngOnInit(): void;
    goToClick(e: Event): void;
    markForCheck(): void;
    ngOnDestroy(): void;
}
