/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgClassType } from 'ng-zorro-antd/core';
export declare class NzRateComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnChanges {
    private renderer;
    private cdr;
    private ulElement;
    nzAllowClear: boolean;
    nzAllowHalf: boolean;
    nzDisabled: boolean;
    nzAutoFocus: boolean;
    nzCharacter: TemplateRef<void>;
    nzTooltips: string[];
    readonly nzOnBlur: EventEmitter<FocusEvent>;
    readonly nzOnFocus: EventEmitter<FocusEvent>;
    readonly nzOnHoverChange: EventEmitter<number>;
    readonly nzOnKeyDown: EventEmitter<KeyboardEvent>;
    classMap: NgClassType;
    hasHalf: boolean;
    hoverValue: number;
    prefixCls: string;
    innerPrefixCls: string;
    isFocused: boolean;
    isInit: boolean;
    starArray: number[];
    private _count;
    private _value;
    nzCount: number;
    nzValue: number;
    constructor(renderer: Renderer2, cdr: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onItemClick(index: number, isHalf: boolean): void;
    onItemHover(index: number, isHalf: boolean): void;
    onRateLeave(): void;
    onFocus(e: FocusEvent): void;
    onBlur(e: FocusEvent): void;
    focus(): void;
    blur(): void;
    onKeyDown(e: KeyboardEvent): void;
    setClasses(i: number): object;
    private updateStarArray;
    writeValue(value: number | null): void;
    setDisabledState(isDisabled: boolean): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    onChange: (value: number) => void;
    onTouched: () => void;
}
