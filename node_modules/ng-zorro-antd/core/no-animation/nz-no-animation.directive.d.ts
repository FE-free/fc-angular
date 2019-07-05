/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ElementRef, OnChanges, Renderer2 } from '@angular/core';
export declare class NzNoAnimationDirective implements OnChanges, AfterViewInit {
    private element;
    private renderer;
    private animationType;
    nzNoAnimation: boolean;
    constructor(element: ElementRef, renderer: Renderer2, animationType: string);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    private updateClass;
}
