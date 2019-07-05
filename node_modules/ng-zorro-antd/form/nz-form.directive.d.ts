/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzFormLabelComponent } from './nz-form-label.component';
export declare class NzFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    nzLayout: string;
    nzNoColon: boolean;
    nzFormLabelComponent: QueryList<NzFormLabelComponent>;
    destroy$: Subject<{}>;
    setClassMap(): void;
    updateItemsDefaultColon(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
