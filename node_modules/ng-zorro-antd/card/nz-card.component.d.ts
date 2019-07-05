/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardTabComponent } from './nz-card-tab.component';
export declare class NzCardComponent {
    nzBordered: boolean;
    nzLoading: boolean;
    nzHoverable: boolean;
    nzBodyStyle: {
        [key: string]: string;
    };
    nzCover: TemplateRef<void>;
    nzActions: Array<TemplateRef<void>>;
    nzType: string;
    nzSize: 'default' | 'small';
    nzTitle: string | TemplateRef<void>;
    nzExtra: string | TemplateRef<void>;
    tab: NzCardTabComponent;
    grids: QueryList<NzCardGridDirective>;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
