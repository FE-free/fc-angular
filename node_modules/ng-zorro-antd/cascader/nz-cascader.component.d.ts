/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgClassType, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { CascaderOption, NzCascaderComponentAsSource, NzCascaderExpandTrigger, NzCascaderSize, NzCascaderTriggerType, NzShowSearchOptions } from './nz-cascader-definitions';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderService } from './nz-cascader.service';
export declare class NzCascaderComponent implements NzCascaderComponentAsSource, OnInit, OnDestroy, ControlValueAccessor {
    cascaderService: NzCascaderService;
    private cdr;
    noAnimation?: NzNoAnimationDirective | undefined;
    input: ElementRef;
    menu: ElementRef;
    overlay: CdkConnectedOverlay;
    cascaderItems: QueryList<NzCascaderOptionComponent>;
    nzShowInput: boolean;
    nzShowArrow: boolean;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzChangeOnSelect: boolean;
    nzDisabled: boolean;
    nzColumnClassName: string;
    nzExpandTrigger: NzCascaderExpandTrigger;
    nzValueProperty: string;
    nzLabelRender: TemplateRef<void>;
    nzLabelProperty: string;
    nzNotFoundContent: string | TemplateRef<void>;
    nzSize: NzCascaderSize;
    nzShowSearch: boolean | NzShowSearchOptions;
    nzPlaceHolder: string;
    nzMenuClassName: string;
    nzMenuStyle: {
        [key: string]: string;
    };
    nzMouseEnterDelay: number;
    nzMouseLeaveDelay: number;
    nzTriggerAction: NzCascaderTriggerType | NzCascaderTriggerType[];
    nzChangeOn: (option: CascaderOption, level: number) => boolean;
    nzLoadData: (node: CascaderOption, index?: number) => PromiseLike<any>;
    nzOptions: CascaderOption[] | null;
    readonly nzSelectionChange: EventEmitter<CascaderOption[]>;
    readonly nzSelect: EventEmitter<{
        option: CascaderOption;
        index: number;
    } | null>;
    readonly nzClear: EventEmitter<void>;
    readonly nzVisibleChange: EventEmitter<boolean>;
    readonly nzChange: EventEmitter<{}>;
    el: HTMLElement;
    dropDownPosition: string;
    menuVisible: boolean;
    isLoading: boolean;
    labelRenderText: string;
    labelRenderContext: {};
    onChange: Function;
    onTouched: Function;
    positions: ConnectionPositionPair[];
    dropdownWidthStyle: string;
    isFocused: boolean;
    private $destroy;
    private inputString;
    private isOpening;
    private delayMenuTimer;
    private delaySelectTimer;
    readonly inSearchingMode: boolean;
    inputValue: string;
    readonly menuCls: NgClassType;
    readonly menuColumnCls: NgClassType;
    private readonly hasInput;
    private readonly hasValue;
    readonly showPlaceholder: boolean;
    readonly clearIconVisible: boolean;
    readonly isLabelRenderTemplate: boolean;
    constructor(cascaderService: NzCascaderService, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: () => {}): void;
    registerOnTouched(fn: () => {}): void;
    writeValue(value: any): void;
    delaySetMenuVisible(visible: boolean, delay?: number, setOpening?: boolean): void;
    setMenuVisible(visible: boolean): void;
    private clearDelayMenuTimer;
    clearSelection(event?: Event): void;
    getSubmitValue(): any[];
    focus(): void;
    blur(): void;
    handleInputBlur(): void;
    handleInputFocus(): void;
    onKeyDown(event: KeyboardEvent): void;
    onTriggerClick(): void;
    onTriggerMouseEnter(): void;
    onTriggerMouseLeave(event: MouseEvent): void;
    private isActionTrigger;
    onOptionClick(option: CascaderOption, columnIndex: number, event: Event): void;
    private onEnter;
    private moveUpOrDown;
    private moveLeft;
    private moveRight;
    onOptionMouseEnter(option: CascaderOption, columnIndex: number, event: Event): void;
    onOptionMouseLeave(option: CascaderOption, columnIndex: number, event: Event): void;
    private clearDelaySelectTimer;
    private delaySelectOption;
    private toggleSearchingMode;
    isOptionActivated(option: CascaderOption, index: number): boolean;
    setDisabledState(isDisabled: boolean): void;
    closeMenu(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    /**
     * Reposition the cascader panel. When a menu opens, the cascader expands
     * and may exceed the boundary of browser's window.
     */
    private reposition;
    /**
     * When a cascader options is changed, a child needs to know that it should re-render.
     */
    private checkChildren;
    private buildDisplayLabel;
}
