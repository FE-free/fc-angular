/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2 } from '@angular/core';
export declare class NzTabLabelDirective {
    elementRef: ElementRef;
    disabled: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    getOffsetLeft(): number;
    getOffsetWidth(): number;
    getOffsetTop(): number;
    getOffsetHeight(): number;
}
