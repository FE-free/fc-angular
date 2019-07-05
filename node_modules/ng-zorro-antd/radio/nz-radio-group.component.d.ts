/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzRadioComponent } from './nz-radio.component';
export declare type NzRadioButtonStyle = 'outline' | 'solid';
export declare class NzRadioGroupComponent implements AfterContentInit, ControlValueAccessor, OnDestroy, OnChanges {
    private cdr;
    private value;
    private destroy$;
    private selectSubscription;
    private touchedSubscription;
    onChange: (_: string) => void;
    onTouched: () => void;
    radios: QueryList<NzRadioComponent>;
    nzDisabled: boolean;
    nzButtonStyle: NzRadioButtonStyle;
    nzSize: NzSizeLDSType;
    nzName: string;
    updateChildrenStatus(): void;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
