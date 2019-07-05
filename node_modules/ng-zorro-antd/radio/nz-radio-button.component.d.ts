/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NzRadioComponent } from './nz-radio.component';
export declare class NzRadioButtonComponent extends NzRadioComponent {
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
}
