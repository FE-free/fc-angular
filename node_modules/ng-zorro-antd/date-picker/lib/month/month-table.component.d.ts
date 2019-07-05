/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class MonthTableComponent implements OnInit, OnChanges {
    private dateHelper;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    disabledDate: (date: Date) => boolean;
    prefixCls: string;
    panelMonths: PanelMonthData[][];
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    trackPanelMonth(_index: number, monthData: PanelMonthData): number;
    private render;
    private makePanelMonths;
    private chooseMonth;
}
export interface PanelMonthData {
    disabled: boolean;
    content: string;
    month: number;
    title: string;
    classMap: object | null;
    onClick: VoidFunction | null;
}
