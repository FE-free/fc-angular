/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2 } from '@angular/core';
import { NzTableComponent } from './nz-table.component';
export declare class NzTrDirective {
    private elementRef;
    private renderer;
    nzTableComponent: NzTableComponent;
    nzExpand: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzTableComponent: NzTableComponent);
}
