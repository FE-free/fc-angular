/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzDatePickerI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { CandyDate } from './lib/candy-date/candy-date';
import { NzPickerComponent } from './picker.component';
/**
 * The base picker for all common APIs
 */
export declare abstract class AbstractPickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    protected i18n: NzI18nService;
    protected cdr: ChangeDetectorRef;
    protected dateHelper: DateHelperService;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzAllowClear: boolean;
    nzAutoFocus: boolean;
    nzDisabled: boolean;
    nzOpen: boolean;
    nzClassName: string;
    nzDisabledDate: (d: Date) => boolean;
    nzLocale: NzDatePickerI18nInterface;
    nzPlaceHolder: string | string[];
    nzPopupStyle: object;
    nzDropdownClassName: string;
    nzSize: 'large' | 'small';
    nzStyle: object;
    nzFormat: string;
    nzValue: CompatibleValue | null;
    readonly nzOnOpenChange: EventEmitter<boolean>;
    protected picker: NzPickerComponent;
    isRange: boolean;
    readonly realOpenState: boolean;
    initValue(): void;
    protected destroyed$: Subject<void>;
    protected isCustomPlaceHolder: boolean;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeOverlay(): void;
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value: CompatibleValue): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open: boolean): void;
    onChangeFn: (val: CompatibleDate | null) => void;
    onTouchedFn: () => void;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private setValue;
}
export declare type CompatibleValue = CandyDate | CandyDate[];
export declare type CompatibleDate = Date | Date[];
