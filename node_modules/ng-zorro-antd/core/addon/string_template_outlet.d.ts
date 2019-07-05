/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class NzStringTemplateOutletDirective implements OnChanges {
    private viewContainer;
    private defaultTemplate;
    private isTemplate;
    private inputTemplate;
    private inputViewRef;
    private defaultViewRef;
    nzStringTemplateOutletContext: any | null;
    nzStringTemplateOutlet: string | TemplateRef<any>;
    recreateView(): void;
    private getType;
    private shouldRecreateView;
    private hasContextShapeChanged;
    private updateExistingContext;
    constructor(viewContainer: ViewContainerRef, defaultTemplate: TemplateRef<void>);
    ngOnChanges(changes: SimpleChanges): void;
}
