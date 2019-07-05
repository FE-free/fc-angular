/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { FunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date/candy-date';
import { DisabledTimeFn, PanelMode, PresetRanges } from './standard-types';
export declare class DateRangePickerComponent extends AbstractPickerComponent implements OnInit, OnChanges {
    showWeek: boolean;
    nzDateRender: FunctionProp<TemplateRef<Date> | string>;
    nzDisabledTime: DisabledTimeFn;
    nzRenderExtraFooter: FunctionProp<TemplateRef<void> | string>;
    nzShowToday: boolean;
    nzMode: PanelMode | PanelMode[];
    nzRanges: PresetRanges;
    readonly nzOnPanelChange: EventEmitter<"month" | "year" | "decade" | "date" | "time" | PanelMode[]>;
    readonly nzOnCalendarChange: EventEmitter<Date[]>;
    private _showTime;
    nzShowTime: object | boolean;
    readonly nzOnOk: EventEmitter<Date | Date[] | null>;
    readonly realShowToday: boolean;
    pickerStyle: object;
    extraFooter: TemplateRef<void> | string;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onValueChange(value: CandyDate): void;
    onCalendarChange(value: CandyDate[]): void;
    onResultOk(): void;
    onOpenChange(open: boolean): void;
    private setFixedPickerStyle;
}
