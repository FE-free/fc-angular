/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from './lib/candy-date/candy-date';
export declare class NzPickerComponent implements OnInit, AfterViewInit {
    private dateHelper;
    private changeDetector;
    noAnimation: boolean;
    isRange: boolean;
    open: boolean | undefined;
    disabled: boolean;
    placeholder: string | string[];
    allowClear: boolean;
    autoFocus: boolean;
    className: string;
    format: string;
    size: 'large' | 'small';
    style: object;
    value: CandyDate | CandyDate[] | null;
    readonly valueChange: EventEmitter<CandyDate | CandyDate[] | null>;
    readonly openChange: EventEmitter<boolean>;
    origin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    pickerInput: ElementRef;
    prefixCls: string;
    animationOpenState: boolean;
    overlayOpen: boolean;
    overlayOffsetY: number;
    overlayOffsetX: number;
    overlayPositions: ConnectionPositionPair[];
    dropdownAnimation: 'top' | 'bottom';
    currentPositionX: 'start' | 'end';
    currentPositionY: 'top' | 'bottom';
    readonly realOpenState: boolean;
    constructor(dateHelper: DateHelperService, changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    showOverlay(): void;
    hideOverlay(): void;
    onClickInputBox(): void;
    onClickBackdrop(): void;
    onOverlayDetach(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    onClickClear(event: MouseEvent): void;
    getReadableValue(partType?: RangePartType): string | null;
    getPartTypeIndex(partType: RangePartType): number;
    getPlaceholder(partType?: RangePartType): string;
    isEmptyValue(value: CandyDate[] | CandyDate | null): boolean;
    isOpenHandledByUser(): boolean;
    animationStart(): void;
    animationDone(): void;
}
export declare type RangePartType = 'left' | 'right';
