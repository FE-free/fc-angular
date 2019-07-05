/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AnimationEvent } from '@angular/animations';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
export declare class NzToolTipComponent implements OnChanges {
    cdr: ChangeDetectorRef;
    noAnimation?: NzNoAnimationDirective | undefined;
    _hasBackdrop: boolean;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    _classMap: {};
    _placement: string;
    _trigger: string;
    overlayOrigin: CdkOverlayOrigin;
    visibleSource: BehaviorSubject<boolean>;
    visible$: Observable<boolean>;
    overlay: CdkConnectedOverlay;
    nzTitle: string | TemplateRef<void> | null;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzVisible: boolean;
    nzTrigger: string;
    nzPlacement: string;
    readonly nzVisibleChange: EventEmitter<boolean>;
    [property: string]: any;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnChanges(): void;
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    show(): void;
    hide(): void;
    _afterVisibilityAnimation(e: AnimationEvent): void;
    setClassMap(): void;
    setOverlayOrigin(origin: CdkOverlayOrigin): void;
    protected isContentEmpty(): boolean;
}
