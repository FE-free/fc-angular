/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzToolTipComponent } from './nz-tooltip.component';
export declare class NzTooltipDirective implements AfterViewInit, OnChanges, OnInit, OnDestroy {
    elementRef: ElementRef;
    hostView: ViewContainerRef;
    resolver: ComponentFactoryResolver;
    renderer: Renderer2;
    tooltip: NzToolTipComponent;
    noAnimation?: NzNoAnimationDirective | undefined;
    isTooltipOpen: boolean;
    isDynamicTooltip: boolean;
    delayTimer: number | null;
    visible: boolean;
    factory: ComponentFactory<NzToolTipComponent>;
    /** Names of properties that should be proxy to child component. */
    protected needProxyProperties: string[];
    protected subs_: Subscription;
    protected listeners: Array<() => void>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    nzTitle: string | TemplateRef<void> | null;
    setTitle: string | TemplateRef<void> | null;
    nzContent: string | TemplateRef<void>;
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzTrigger: string;
    nzVisible: boolean;
    nzPlacement: string;
    [property: string]: any;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzToolTipComponent, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    protected updateCompValue(key: string, value: any): void;
    private show;
    private hide;
    private delayEnterLeave;
    /**
     * Set inputs of child components when this component's inputs change.
     * @param changes
     */
    private updateProxies;
}
