/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
export declare class NzListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl: TemplateRef<void>;
    nzAvatar: string | TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
}
