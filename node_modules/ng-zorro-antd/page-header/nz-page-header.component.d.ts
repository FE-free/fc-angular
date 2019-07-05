/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzPageHeaderFooterDirective } from './nz-page-header-cells';
export declare class NzPageHeaderComponent implements OnInit, OnChanges {
    isTemplateRefBackIcon: boolean;
    isStringBackIcon: boolean;
    nzBackIcon: string | TemplateRef<void> | null;
    nzTitle: string | TemplateRef<void>;
    nzSubtitle: string | TemplateRef<void>;
    readonly nzBack: EventEmitter<void>;
    nzPageHeaderFooter: ElementRef<NzPageHeaderFooterDirective>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onBack(): void;
}
