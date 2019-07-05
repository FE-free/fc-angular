/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ComponentFactory, ComponentFactoryResolver, ElementRef, EventEmitter, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { NzPopconfirmComponent } from './nz-popconfirm.component';
export declare class NzPopconfirmDirective extends NzTooltipDirective implements OnInit {
    noAnimation?: NzNoAnimationDirective | undefined;
    factory: ComponentFactory<NzPopconfirmComponent>;
    protected needProxyProperties: string[];
    nzOkText: string;
    nzOkType: string;
    nzCancelText: string;
    nzIcon: string | TemplateRef<void>;
    nzCondition: boolean;
    readonly nzOnCancel: EventEmitter<void>;
    readonly nzOnConfirm: EventEmitter<void>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, tooltip: NzPopconfirmComponent, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
}
