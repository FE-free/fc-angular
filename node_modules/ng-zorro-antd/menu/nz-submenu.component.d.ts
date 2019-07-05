/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NzMenuBaseService, NzNoAnimationDirective, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubmenuService } from './nz-submenu.service';
export declare class NzSubMenuComponent implements OnInit, OnDestroy, AfterContentInit, OnChanges {
    private elementRef;
    nzMenuService: NzMenuBaseService;
    private cdr;
    nzSubmenuService: NzSubmenuService;
    private nzUpdateHostClassService;
    private platform;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzMenuClassName: string;
    nzPaddingLeft: number;
    nzTitle: string | TemplateRef<void>;
    nzIcon: string;
    nzOpen: boolean;
    nzDisabled: boolean;
    readonly nzOpenChange: EventEmitter<boolean>;
    cdkConnectedOverlay: CdkConnectedOverlay;
    cdkOverlayOrigin: ElementRef;
    listOfNzSubMenuComponent: QueryList<NzSubMenuComponent>;
    listOfNzMenuItemDirective: QueryList<NzMenuItemDirective>;
    placement: string;
    triggerWidth: number;
    expandState: string;
    overlayPositions: import("@angular/cdk/overlay").ConnectionPositionPair[];
    private destroy$;
    private isChildMenuSelected;
    private isMouseHover;
    setOpenState(open: boolean): void;
    clickSubMenuTitle(): void;
    setMouseEnterState(value: boolean): void;
    setTriggerWidth(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    setClassMap(): void;
    constructor(elementRef: ElementRef, nzMenuService: NzMenuBaseService, cdr: ChangeDetectorRef, nzSubmenuService: NzSubmenuService, nzUpdateHostClassService: NzUpdateHostClassService, platform: Platform, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
