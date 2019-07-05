/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, ElementRef, Injector, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
export declare type NzPlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare function dropdownMenuServiceFactory(injector: Injector): NzMenuBaseService;
export declare class NzDropdownMenuComponent implements AfterContentInit {
    private cdr;
    private elementRef;
    private renderer;
    viewContainerRef: ViewContainerRef;
    nzMenuDropdownService: NzMenuDropdownService;
    noAnimation?: NzNoAnimationDirective | undefined;
    open: boolean;
    triggerWidth: number;
    dropDownPosition: 'top' | 'center' | 'bottom';
    visible$: Subject<boolean>;
    nzTrigger: 'click' | 'hover';
    nzPlacement: NzPlacementType;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzTableFilter: boolean;
    templateRef: TemplateRef<any>;
    setVisibleStateWhen(visible: boolean, trigger?: 'click' | 'hover' | 'all'): void;
    setValue<T extends keyof NzDropdownMenuComponent>(key: T, value: this[T]): void;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective | undefined);
    ngAfterContentInit(): void;
}
