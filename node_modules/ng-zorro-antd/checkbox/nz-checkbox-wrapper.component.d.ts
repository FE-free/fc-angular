/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { NzCheckboxComponent } from './nz-checkbox.component';
export declare class NzCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: NzCheckboxComponent): void;
    removeCheckbox(value: NzCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
