/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListComponent } from './nz-list.component';
export declare class NzListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    metas: QueryList<NzListItemMetaComponent>;
    nzActions: Array<TemplateRef<void>>;
    nzContent: string | TemplateRef<void>;
    nzExtra: TemplateRef<void>;
    nzNoFlex: boolean;
    private itemLayout;
    private itemLayout$;
    readonly isVerticalAndExtra: boolean;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: NzListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
