/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzTimelineMode } from './nz-timeline.component';
export declare class NzTimelineItemComponent implements OnInit, OnChanges {
    private renderer;
    private cdr;
    liTemplate: ElementRef;
    nzColor: string;
    nzDot: string | TemplateRef<void>;
    isLast: boolean;
    position: NzTimelineMode | undefined;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    detectChanges(): void;
    private tryUpdateCustomColor;
}
