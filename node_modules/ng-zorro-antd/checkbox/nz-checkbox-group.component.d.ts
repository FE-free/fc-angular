/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface NzCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class NzCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private focusMonitor;
    private cdr;
    onChange: (value: any) => void;
    onTouched: () => any;
    options: NzCheckBoxOptionInterface[];
    nzDisabled: boolean;
    onOptionChange(): void;
    trackByOption(_index: number, option: NzCheckBoxOptionInterface): string;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: NzCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: NzCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}
