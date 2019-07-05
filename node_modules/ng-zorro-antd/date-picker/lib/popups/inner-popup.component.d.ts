/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { DisabledDateFn, PanelMode } from '../../standard-types';
import { CandyDate } from '../candy-date/candy-date';
export declare class InnerPopupComponent implements OnInit, OnChanges {
    showWeek: boolean;
    locale: NzCalendarI18nInterface;
    showTimePicker: boolean;
    timeOptions: any;
    enablePrev: boolean;
    enableNext: boolean;
    disabledDate: DisabledDateFn;
    dateRender: FunctionProp<TemplateRef<Date> | string>;
    selectedValue: CandyDate[];
    hoverValue: CandyDate[];
    panelMode: PanelMode;
    readonly panelModeChange: EventEmitter<PanelMode>;
    value: CandyDate;
    readonly headerChange: EventEmitter<CandyDate>;
    readonly selectDate: EventEmitter<CandyDate>;
    readonly selectTime: EventEmitter<CandyDate>;
    readonly dayHover: EventEmitter<CandyDate>;
    prefixCls: string;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onSelectTime(date: Date): void;
    onSelectDate(date: CandyDate | Date): void;
}
