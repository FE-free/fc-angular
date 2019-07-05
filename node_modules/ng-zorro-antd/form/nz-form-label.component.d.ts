/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
export declare class NzFormLabelComponent extends NzColDirective implements OnDestroy, AfterViewInit {
    private cdr;
    nzFor: string;
    nzRequired: boolean;
    nzNoColon: boolean;
    defaultNoColon: boolean;
    noColon: boolean | string;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, nzRowDirective: NzRowDirective, renderer: Renderer2, cdr: ChangeDetectorRef);
    setDefaultNoColon(value: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
