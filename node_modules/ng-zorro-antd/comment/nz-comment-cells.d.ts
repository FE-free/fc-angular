/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, ComponentFactoryResolver, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NzCommentAvatarDirective {
}
export declare class NzCommentContentDirective {
}
export declare class NzCommentActionHostDirective extends CdkPortalOutlet implements OnInit, OnDestroy, AfterViewInit {
    nzCommentActionHost: TemplatePortal | null;
    constructor(componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
}
export declare class NzCommentActionComponent implements OnInit {
    private viewContainerRef;
    implicitContent: TemplateRef<void>;
    private contentPortal;
    readonly content: TemplatePortal | null;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
}
