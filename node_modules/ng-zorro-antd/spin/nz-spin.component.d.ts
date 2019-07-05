/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
export declare class NzSpinComponent implements OnChanges, OnDestroy, OnInit {
    private cdr;
    nzIndicator: TemplateRef<void>;
    nzSize: NzSizeLDSType;
    nzTip: string;
    nzDelay: number;
    nzSimple: boolean;
    nzSpinning: boolean;
    loading: boolean;
    private spinning$;
    private loading$;
    private loading_;
    subscribeLoading(): void;
    unsubscribeLoading(): void;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
