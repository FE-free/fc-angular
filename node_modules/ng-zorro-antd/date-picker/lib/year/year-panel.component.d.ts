/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class YearPanelComponent implements OnChanges {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    readonly decadePanelShow: EventEmitter<void>;
    readonly currentYear: number;
    readonly startYear: number;
    readonly endYear: number;
    prefixCls: string;
    panelYears: PanelYearData[][];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    previousDecade(): void;
    nextDecade(): void;
    trackPanelYear(_index: number, yearData: PanelYearData): string;
    private render;
    private gotoYear;
    private chooseYear;
    private makePanelYears;
}
export interface PanelYearData {
    disabled: boolean;
    content: string;
    year: number;
    title: string;
    isCurrent: boolean;
    isLowerThanStart: boolean;
    isBiggerThanEnd: boolean;
    classMap: object | null;
    onClick: VoidFunction | null;
}
