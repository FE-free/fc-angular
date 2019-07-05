/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, TemplateRef } from '@angular/core';
import { NzStatisticValueType } from './nz-statistic-definitions';
export declare class NzStatisticNumberComponent implements OnChanges {
    private locale_id;
    nzValue: NzStatisticValueType;
    nzValueTemplate: TemplateRef<{
        $implicit: NzStatisticValueType;
    }>;
    displayInt: string;
    displayDecimal: string;
    constructor(locale_id: string);
    ngOnChanges(): void;
    private formatNumber;
}
