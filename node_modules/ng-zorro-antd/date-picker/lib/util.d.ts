/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { DisabledDateFn, DisabledTimeConfig, DisabledTimeFn } from '../standard-types';
import { CandyDate } from './candy-date/candy-date';
export declare function getTimeConfig(value: CandyDate, disabledTime: DisabledTimeFn): DisabledTimeConfig;
export declare function isTimeValidByConfig(value: CandyDate, disabledTimeConfig: DisabledTimeConfig): boolean;
export declare function isTimeValid(value: CandyDate, disabledTime: DisabledTimeFn): boolean;
export declare function isAllowedDate(value: CandyDate, disabledDate?: DisabledDateFn, disabledTime?: DisabledTimeFn): boolean;
