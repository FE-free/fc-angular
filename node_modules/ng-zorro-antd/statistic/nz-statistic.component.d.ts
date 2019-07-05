/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { NzStatisticValueType } from './nz-statistic-definitions';
export declare class NzStatisticComponent {
    nzPrefix: string | TemplateRef<void>;
    nzSuffix: string | TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzValue: NzStatisticValueType;
    nzValueStyle: {};
    nzValueTemplate: TemplateRef<{
        $implicit: NzStatisticValueType;
    }>;
}
