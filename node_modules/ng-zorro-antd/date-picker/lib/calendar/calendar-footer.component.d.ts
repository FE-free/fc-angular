/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, TemplateRef } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from 'ng-zorro-antd/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export declare class CalendarFooterComponent {
    locale: NzCalendarI18nInterface;
    showToday: boolean;
    hasTimePicker: boolean;
    isRange: boolean;
    showTimePicker: boolean;
    readonly showTimePickerChange: EventEmitter<boolean>;
    timePickerDisabled: boolean;
    okDisabled: boolean;
    disabledDate: (d: Date) => boolean;
    extraFooter: TemplateRef<void> | string;
    rangeQuickSelector: TemplateRef<void>;
    readonly clickOk: EventEmitter<void>;
    readonly clickToday: EventEmitter<CandyDate>;
    prefixCls: string;
    isTemplateRef: typeof isTemplateRef;
    isNonEmptyString: typeof isNonEmptyString;
}
