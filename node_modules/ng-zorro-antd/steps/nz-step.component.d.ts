/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { NgClassType } from 'ng-zorro-antd/core';
export declare class NzStepComponent {
    private cdr;
    processDotTemplate: TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    nzStatus: string;
    isCustomStatus: boolean;
    private _status;
    nzIcon: NgClassType | TemplateRef<void>;
    oldAPIIcon: boolean;
    isIconString: boolean;
    private _icon;
    customProcessTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    direction: string;
    index: number;
    last: boolean;
    outStatus: string;
    showProcessDot: boolean;
    currentIndex: number;
    private _currentIndex;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    markForCheck(): void;
}
