/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NzLayoutComponent } from './nz-layout.component';
export declare type NzBreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
export declare class NzSiderComponent implements OnInit, AfterViewInit, OnDestroy {
    private nzLayoutComponent;
    private mediaMatcher;
    private ngZone;
    private platform;
    private cdr;
    private below;
    private destroy$;
    private dimensionMap;
    nzWidth: string | number;
    nzTheme: 'light' | 'dark';
    nzCollapsedWidth: number;
    nzBreakpoint: NzBreakPoint;
    nzZeroTrigger: TemplateRef<void>;
    nzTrigger: TemplateRef<void>;
    nzReverseArrow: boolean;
    nzCollapsible: boolean;
    nzCollapsed: boolean;
    readonly nzCollapsedChange: EventEmitter<{}>;
    readonly flexSetting: string;
    readonly widthSetting: string;
    watchMatchMedia(): void;
    toggleCollapse(): void;
    readonly isZeroTrigger: boolean;
    readonly isSiderTrigger: boolean;
    constructor(nzLayoutComponent: NzLayoutComponent, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
