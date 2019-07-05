/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectorRef, EventEmitter, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzScrollService } from 'ng-zorro-antd/core';
export declare class NzBackTopComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private doc;
    private platform;
    private cd;
    private scroll$;
    private target;
    visible: boolean;
    nzTemplate: TemplateRef<void>;
    private _visibilityHeight;
    nzVisibilityHeight: number;
    nzTarget: string | HTMLElement;
    readonly nzClick: EventEmitter<boolean>;
    constructor(scrollSrv: NzScrollService, doc: any, platform: Platform, cd: ChangeDetectorRef);
    ngOnInit(): void;
    clickBackTop(): void;
    private getTarget;
    private handleScroll;
    private removeListen;
    private registerScrollEvent;
    ngOnDestroy(): void;
}
