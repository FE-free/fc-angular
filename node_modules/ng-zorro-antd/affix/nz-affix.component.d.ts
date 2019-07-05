/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzScrollService } from 'ng-zorro-antd/core';
export declare class NzAffixComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private doc;
    private platform;
    nzTarget: string | Element | Window;
    nzOffsetTop: number | null;
    nzOffsetBottom: number;
    readonly nzChange: EventEmitter<boolean>;
    private timeout;
    private readonly events;
    private fixedEl;
    private readonly placeholderNode;
    private affixStyle;
    private placeholderStyle;
    private _target;
    private _offsetTop;
    private _offsetBottom;
    constructor(_el: ElementRef, scrollSrv: NzScrollService, doc: any, platform: Platform);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getOffset(element: Element, target: Element | Window | undefined): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    private setTargetEventListeners;
    private clearEventListeners;
    private getTargetRect;
    private genStyle;
    private setAffixStyle;
    private setPlaceholderStyle;
    private syncPlaceholderStyle;
    updatePosition(e: Event): void;
}
