/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzTimelineItemComponent } from './nz-timeline-item.component';
export declare type NzTimelineMode = 'left' | 'alternate' | 'right';
export declare class NzTimelineComponent implements AfterContentInit, OnChanges, OnDestroy {
    private cdr;
    private platform;
    timeline: ElementRef<HTMLElement>;
    listOfTimeLine: QueryList<NzTimelineItemComponent>;
    _pendingContent: TemplateRef<void>;
    nzMode: NzTimelineMode;
    nzPending: string | boolean | TemplateRef<void>;
    nzPendingDot: string | TemplateRef<void>;
    nzReverse: boolean;
    isPendingBoolean: boolean;
    private destroy$;
    constructor(cdr: ChangeDetectorRef, platform: Platform);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private updateChildren;
    private reverseChildTimelineDots;
}
