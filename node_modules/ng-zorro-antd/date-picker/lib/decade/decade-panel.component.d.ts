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
export declare class DecadePanelComponent implements OnChanges {
    locale: NzCalendarI18nInterface;
    value: CandyDate;
    readonly valueChange: EventEmitter<CandyDate>;
    readonly startYear: number;
    readonly endYear: number;
    prefixCls: string;
    panelDecades: PanelDecadeData[][];
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    previousCentury(): void;
    nextCentury(): void;
    trackPanelDecade(_index: number, decadeData: PanelDecadeData): string;
    private render;
    private gotoYear;
    private chooseDecade;
    private makePanelDecades;
}
export interface PanelDecadeData {
    content: string;
    title: string;
    isCurrent: boolean;
    isLowerThanStart: boolean;
    isBiggerThanEnd: boolean;
    classMap?: object | null;
    onClick: VoidFunction | null;
}
