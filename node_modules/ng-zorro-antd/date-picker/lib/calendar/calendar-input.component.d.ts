/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnInit } from '@angular/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class CalendarInputComponent implements OnInit {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    format: string;
    placeholder: string;
    disabledDate: (d: Date) => boolean;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    prefixCls: string;
    invalidInputClass: string;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    onInputKeyup(event: Event): void;
    toReadableInput(value: CandyDate): string;
    private checkValidInputDate;
}
