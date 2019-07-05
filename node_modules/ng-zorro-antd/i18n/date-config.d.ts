/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
export declare const NZ_DATE_CONFIG: InjectionToken<NzDateConfig>;
export declare const NZ_DATE_CONFIG_DEFAULT: NzDateConfig;
export declare function mergeDateConfig(config: NzDateConfig): NzDateConfig;
export interface NzDateConfig {
    /** Customize the first day of a week */
    firstDayOfWeek?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}
