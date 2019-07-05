/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateHelperService, NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class TodayButtonComponent implements OnInit, OnChanges {
    private dateHelper;
    locale: NzCalendarI18nInterface;
    hasTimePicker: boolean;
    disabledDate: (d: Date) => boolean;
    readonly clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isDisabled: boolean;
    title: string;
    private now;
    constructor(dateHelper: DateHelperService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onClickToday(): void;
}
