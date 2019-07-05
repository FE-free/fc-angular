/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { PanelMode } from '../../standard-types';
import { CandyDate } from '../candy-date/candy-date';
export declare class CalendarHeaderComponent implements OnInit, OnChanges {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    enablePrev: boolean;
    enableNext: boolean;
    disabledMonth: (date: Date) => boolean;
    disabledYear: (date: Date) => boolean;
    showTimePicker: boolean;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    panelMode: PanelMode;
    readonly panelModeChange: EventEmitter<PanelMode>;
    readonly chooseDecade: EventEmitter<CandyDate>;
    readonly chooseYear: EventEmitter<CandyDate>;
    readonly chooseMonth: EventEmitter<CandyDate>;
    prefixCls: string;
    yearMonthDaySelectors: YearMonthDaySelector[];
    private yearToMonth;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    previousYear(): void;
    nextYear(): void;
    previousMonth(): void;
    nextMonth(): void;
    changePanel(mode: PanelMode, value?: CandyDate): void;
    onChooseDecade(value: CandyDate): void;
    onChooseYear(value: CandyDate): void;
    onChooseMonth(value: CandyDate): void;
    changeToMonthPanel(): void;
    private render;
    private gotoMonth;
    private gotoYear;
    private changeValueFromInside;
    private formatDateTime;
    private createYearMonthDaySelectors;
}
export interface YearMonthDaySelector {
    className: string;
    title?: string;
    label: string;
    onClick?(): void;
}
