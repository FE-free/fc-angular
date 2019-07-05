/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** get some code from https://github.com/angular/material2 */
import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzTabComponent } from './nz-tab.component';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
export interface NzAnimatedInterface {
    inkBar: boolean;
    tabPane: boolean;
}
export declare class NzTabChangeEvent {
    index: number;
    tab: NzTabComponent;
}
export declare type NzTabPosition = 'top' | 'bottom' | 'left' | 'right';
export declare type NzTabPositionMode = 'horizontal' | 'vertical';
export declare type NzTabType = 'line' | 'card';
export declare class NzTabSetComponent implements AfterContentChecked, OnInit, AfterViewInit, OnChanges, AfterContentInit, OnDestroy {
    private renderer;
    private nzUpdateHostClassService;
    private elementRef;
    private cdr;
    private indexToSelect;
    private el;
    private _selectedIndex;
    /** Subscription to tabs being added/removed. */
    private tabsSubscription;
    /** Subscription to changes in the tab labels. */
    private tabLabelSubscription;
    tabPositionMode: NzTabPositionMode;
    listOfNzTabComponent: QueryList<NzTabComponent>;
    nzTabsNavComponent: NzTabsNavComponent;
    tabContent: ElementRef;
    nzTabBarExtraContent: TemplateRef<void>;
    nzShowPagination: boolean;
    nzAnimated: NzAnimatedInterface | boolean;
    nzHideAll: boolean;
    nzTabPosition: NzTabPosition;
    nzSize: NzSizeLDSType;
    nzTabBarGutter: number;
    nzTabBarStyle: {
        [key: string]: string;
    };
    nzType: NzTabType;
    readonly nzOnNextClick: EventEmitter<void>;
    readonly nzOnPrevClick: EventEmitter<void>;
    readonly nzSelectChange: EventEmitter<NzTabChangeEvent>;
    readonly nzSelectedIndexChange: EventEmitter<number>;
    nzSelectedIndex: number | null;
    readonly inkBarAnimated: boolean;
    readonly tabPaneAnimated: boolean;
    setPosition(value: NzTabPosition): void;
    setClassMap(): void;
    clickLabel(index: number, disabled: boolean): void;
    createChangeEvent(index: number): NzTabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    private subscribeToTabLabels;
    constructor(renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
