/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
export declare class NzRadioComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    private renderer;
    private cdr;
    private focusMonitor;
    select$: Subject<NzRadioComponent>;
    touched$: Subject<void>;
    checked: boolean;
    name: string;
    isNgModel: boolean;
    onChange: (_: boolean) => void;
    onTouched: () => void;
    inputElement: ElementRef;
    nzValue: any;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    updateAutoFocus(): void;
    onClick(event: MouseEvent): void;
    focus(): void;
    blur(): void;
    markForCheck(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
