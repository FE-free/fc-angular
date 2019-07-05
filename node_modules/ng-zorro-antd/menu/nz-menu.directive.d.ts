/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges } from '@angular/core';
import { NzDirectionVHIType, NzMenuBaseService, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzMenuItemDirective } from './nz-menu-item.directive';
import { NzSubMenuComponent } from './nz-submenu.component';
export declare class NzMenuDirective implements AfterContentInit, OnInit, OnChanges, OnDestroy {
    elementRef: ElementRef;
    private nzMenuService;
    private nzUpdateHostClassService;
    private destroy$;
    private cacheMode;
    private listOfOpenedNzSubMenuComponent;
    listOfNzMenuItemDirective: QueryList<NzMenuItemDirective>;
    listOfNzSubMenuComponent: QueryList<NzSubMenuComponent>;
    nzInlineIndent: number;
    nzTheme: 'light' | 'dark';
    nzMode: NzDirectionVHIType;
    nzInDropDown: boolean;
    nzInlineCollapsed: boolean;
    nzSelectable: boolean;
    readonly nzClick: EventEmitter<NzMenuItemDirective>;
    updateInlineCollapse(): void;
    setClassMap(): void;
    constructor(elementRef: ElementRef, nzMenuService: NzMenuBaseService, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
