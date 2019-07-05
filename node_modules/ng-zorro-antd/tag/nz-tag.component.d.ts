/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AnimationEvent } from '@angular/animations';
import { ElementRef, EventEmitter, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare class NzTagComponent implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    private nzUpdateHostClassService;
    presetColor: boolean;
    nzMode: 'default' | 'closeable' | 'checkable';
    nzColor: string;
    nzChecked: boolean;
    nzNoAnimation: boolean;
    readonly nzAfterClose: EventEmitter<void>;
    readonly nzOnClose: EventEmitter<MouseEvent>;
    readonly nzCheckedChange: EventEmitter<boolean>;
    private isPresetColor;
    private updateClassMap;
    updateCheckedStatus(): void;
    closeTag(e: MouseEvent): void;
    afterAnimation(e: AnimationEvent): void;
    constructor(renderer: Renderer2, elementRef: ElementRef, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(): void;
}
