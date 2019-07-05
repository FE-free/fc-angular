/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Renderer2, RendererFactory2 } from '@angular/core';
export declare class NzUpdateHostClassService {
    private classMap;
    readonly renderer: Renderer2;
    updateHostClass(el: HTMLElement, classMap: object): void;
    private removeClass;
    private addClass;
    constructor(rendererFactory2: RendererFactory2);
}
