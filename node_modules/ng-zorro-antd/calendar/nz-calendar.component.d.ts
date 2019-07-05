/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
export declare type ModeType = 'month' | 'year';
export declare class NzCalendarComponent implements ControlValueAccessor, OnInit {
    private i18n;
    private cdr;
    private dateHelper;
    nzMode: ModeType;
    readonly nzModeChange: EventEmitter<ModeType>;
    readonly nzPanelChange: EventEmitter<{
        date: Date;
        mode: ModeType;
    }>;
    readonly nzSelectChange: EventEmitter<Date>;
    nzValue: Date;
    readonly nzValueChange: EventEmitter<Date>;
    nzDateCell: TemplateRef<{
        $implicit: Date;
    }>;
    nzDateFullCell: TemplateRef<{
        $implicit: Date;
    }>;
    nzMonthCell: TemplateRef<{
        $implicit: Date;
    }>;
    nzMonthFullCell: TemplateRef<{
        $implicit: Date;
    }>;
    nzFullscreen: boolean;
    nzCard: boolean;
    dateCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    dateFullCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    monthCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    monthFullCellChild: TemplateRef<{
        $implicit: Date;
    }>;
    fullscreen: boolean;
    daysInWeek: DayCellContext[];
    monthsInYear: MonthCellContext[];
    dateMatrix: DateCellContext[][];
    activeDate: Date;
    currentDateRow: number;
    currentDateCol: number;
    activeDateRow: number;
    activeDateCol: number;
    currentMonthRow: number;
    currentMonthCol: number;
    activeMonthRow: number;
    activeMonthCol: number;
    dateCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    dateFullCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    monthCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    monthFullCell: TemplateRef<{
        $implicit: Date;
    }> | null;
    private currentDate;
    private onChangeFn;
    private onTouchFn;
    private readonly calendarStart;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService);
    ngOnInit(): void;
    onModeChange(mode: ModeType): void;
    onDateSelect(date: Date): void;
    onYearSelect(year: number): void;
    onMonthSelect(month: number): void;
    writeValue(value: Date | null): void;
    registerOnChange(fn: (date: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    private updateDate;
    private setUpDaysInWeek;
    private setUpMonthsInYear;
    private setUpDateMatrix;
    private calculateCurrentDate;
    private calculateActiveDate;
    private calculateCurrentMonth;
    private calculateActiveMonth;
}
export interface DayCellContext {
    title: string;
    label: string;
}
export interface MonthCellContext {
    title: string;
    label: string;
    start: Date;
}
export interface DateCellContext {
    title: string;
    label: string;
    rel: 'last' | 'current' | 'next';
    value: Date;
}
