/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { NzStatisticComponent } from './nz-statistic.component';
export declare class NzCountdownComponent extends NzStatisticComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private ngZone;
    private platform;
    /** @override */
    nzFormat: string;
    diff: number;
    private target;
    private updater_;
    constructor(cdr: ChangeDetectorRef, ngZone: NgZone, platform: Platform);
    /** @override */
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    syncTimer(): void;
    startTimer(): void;
    stopTimer(): void;
    /**
     * Update time that should be displayed on the screen.
     */
    protected updateValue(): void;
}
