/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { isNonEmptyString, isTemplateRef, FunctionProp } from 'ng-zorro-antd/core';
import { DateHelperService, NzCalendarI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class DateTableComponent implements OnInit, OnChanges {
    private i18n;
    private dateHelper;
    locale: NzCalendarI18nInterface;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    showWeek: boolean;
    disabledDate: (d: Date) => boolean;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    readonly dayHover: EventEmitter<CandyDate>;
    prefixCls: string;
    headWeekDays: WeekDayLabel[];
    weekRows: WeekRow[];
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
    constructor(i18n: NzI18nService, dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private isDateRealChange;
    private isSameDate;
    private render;
    private changeValueFromInside;
    private makeHeadWeekDays;
    private getVeryShortWeekFormat;
    private makeWeekRows;
    private getDateTitle;
    private getWeekNum;
    private isBeforeMonthYear;
    private isAfterMonthYear;
}
export interface WeekDayLabel {
    short: string;
    veryShort: string;
}
export interface DateCell {
    value: CandyDate;
    title: string;
    customContent: TemplateRef<Date> | string;
    content: string;
    isSelected?: boolean;
    isToday?: boolean;
    isDisabled?: boolean;
    isSelectedStartDate?: boolean;
    isSelectedEndDate?: boolean;
    isInRange?: boolean;
    classMap?: object;
    onClick(date: CandyDate): void;
    onMouseEnter(): void;
}
export interface WeekRow {
    isCurrent?: boolean;
    isActive?: boolean;
    weekNum?: number;
    classMap?: object;
    dateCells: DateCell[];
}
