/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/** keep track https://github.com/angular/material2/issues/5007 **/
import { Overlay } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { NzDropdownContextComponent } from './nz-dropdown-context.component';
export declare class NzDropdownService {
    private overlay;
    private overlayRef;
    constructor(overlay: Overlay);
    create($event: MouseEvent, templateRef: TemplateRef<void>): NzDropdownContextComponent;
    dispose(): void;
}
