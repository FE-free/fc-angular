/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ElementRef, EventEmitter, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
import { NzThComponent } from './nz-th.component';
export declare class NzTheadComponent implements AfterContentInit, OnDestroy, AfterViewInit {
    nzTableComponent: NzTableComponent;
    private elementRef;
    private renderer;
    private destroy$;
    templateRef: TemplateRef<void>;
    listOfNzThComponent: QueryList<NzThComponent>;
    nzSingleSort: boolean;
    readonly nzSortChange: EventEmitter<{
        key: string;
        value: string;
    }>;
    constructor(nzTableComponent: NzTableComponent, elementRef: ElementRef, renderer: Renderer2);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
