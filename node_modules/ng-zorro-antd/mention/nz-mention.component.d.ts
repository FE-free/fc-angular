/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
import { NzMentionService } from './nz-mention.service';
export interface MentionOnSearchTypes {
    value: string;
    prefix: string;
}
export interface Mention {
    startPos: number;
    endPos: number;
    mention: string;
}
export declare type MentionPlacement = 'top' | 'bottom';
export declare class NzMentionComponent implements OnDestroy, OnInit, OnChanges {
    private ngDocument;
    private changeDetectorRef;
    private overlay;
    private viewContainerRef;
    private nzMentionService;
    nzValueWith: (value: any) => string;
    nzPrefix: string | string[];
    nzLoading: boolean;
    nzNotFoundContent: string;
    nzPlacement: MentionPlacement;
    nzSuggestions: string[];
    readonly nzOnSelect: EventEmitter<string | {}>;
    readonly nzOnSearchChange: EventEmitter<MentionOnSearchTypes>;
    trigger: NzMentionTriggerDirective;
    suggestionsTemp: TemplateRef<void>;
    suggestionChild: TemplateRef<{
        $implicit: any;
    }>;
    isOpen: boolean;
    filteredSuggestions: string[];
    suggestionTemplate: TemplateRef<{
        $implicit: any;
    }> | null;
    activeIndex: number;
    private previousValue;
    private cursorMention;
    private cursorMentionStart;
    private cursorMentionEnd;
    private overlayRef;
    private portal;
    private positionStrategy;
    private overlayBackdropClickSubscription;
    private readonly triggerNativeElement;
    constructor(ngDocument: any, // tslint:disable-line:no-any
    changeDetectorRef: ChangeDetectorRef, overlay: Overlay, viewContainerRef: ViewContainerRef, nzMentionService: NzMentionService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeDropdown(): void;
    openDropdown(): void;
    getMentions(): string[];
    selectSuggestion(suggestion: string | {}): void;
    private handleInput;
    private handleKeydown;
    private handleClick;
    private bindTriggerEvents;
    private suggestionsFilter;
    private resetDropdown;
    private setNextItemActive;
    private setPreviousItemActive;
    private canOpen;
    private resetCursorMention;
    private updatePositions;
    private subscribeOverlayBackdropClick;
    private attachOverlay;
    private getOverlayConfig;
    private getOverlayPosition;
}
