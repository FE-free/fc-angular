/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare type NzProgressGapPositionType = 'top' | 'bottom' | 'left' | 'right';
export declare type NzProgressStatusType = 'success' | 'exception' | 'active' | 'normal';
export declare type NzProgressTypeType = 'line' | 'circle' | 'dashboard';
export declare type NzProgressStrokeLinecapType = 'round' | 'square';
export declare class NzProgressComponent implements OnInit, OnChanges {
    nzShowInfo: boolean;
    nzWidth: number;
    nzStrokeColor: string;
    nzSize: string;
    nzFormat?: (percent: number) => string;
    nzSuccessPercent?: number;
    nzPercent: number;
    nzStrokeWidth: number;
    nzGapDegree: number;
    nzStatus: NzProgressStatusType;
    nzType: NzProgressTypeType;
    nzGapPosition?: NzProgressGapPositionType;
    nzStrokeLinecap: NzProgressStrokeLinecapType;
    trailPathStyle: {
        [key: string]: string;
    };
    strokePathStyle: {
        [key: string]: string;
    };
    pathString: string;
    icon: string;
    statusColorMap: {
        [key: string]: string;
    };
    private cachedStatus;
    private inferredStatus;
    private inferredStrokeWidth;
    private inferredGapPosition;
    private inferredGapDegree;
    readonly formatter: (percent: number) => string;
    readonly status: NzProgressStatusType;
    readonly strokeWidth: number;
    readonly isCircleStyle: boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updatePathStyles(): void;
    updateIcon(): void;
}
