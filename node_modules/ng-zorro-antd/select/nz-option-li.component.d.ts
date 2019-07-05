/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NzOptionComponent } from './nz-option.component';
import { NzSelectService } from './nz-select.service';
export declare class NzOptionLiComponent implements OnInit, OnDestroy {
    private elementRef;
    nzSelectService: NzSelectService;
    private cdr;
    el: HTMLElement;
    selected: boolean;
    active: boolean;
    destroy$: Subject<{}>;
    nzOption: NzOptionComponent;
    nzMenuItemSelectedIcon: TemplateRef<void>;
    clickOption(): void;
    constructor(elementRef: ElementRef, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
