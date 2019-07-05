/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
export declare class NzMenuGroupComponent {
    elementRef: ElementRef;
    private renderer;
    nzTitle: string | TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
