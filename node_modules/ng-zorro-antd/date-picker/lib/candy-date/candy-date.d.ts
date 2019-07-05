/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { IndexableObject } from 'ng-zorro-antd/core';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export declare class CandyDate implements IndexableObject {
    nativeDate: Date;
    constructor(date?: Date | string);
    getYear(): number;
    getMonth(): number;
    getDay(): number;
    getTime(): number;
    getDate(): number;
    getHours(): number;
    getMinutes(): number;
    getSeconds(): number;
    getMilliseconds(): number;
    clone(): CandyDate;
    setHms(hour: number, minute: number, second: number): CandyDate;
    setYear(year: number): CandyDate;
    addYears(amount: number): CandyDate;
    setMonth(month: number): CandyDate;
    addMonths(amount: number): CandyDate;
    setDay(day: number, options?: {
        weekStartsOn: number;
    }): CandyDate;
    setDate(amount: number): CandyDate;
    addDays(amount: number): CandyDate;
    endOf(grain: 'month'): CandyDate | null;
    isSame(date: CandyDate | Date, grain: CandyDateCompareGrain): boolean;
    isAfter(date: CandyDate | Date | null, grain: CandyDateCompareGrain): boolean;
    isBefore(date: CandyDate | Date | null, grain: CandyDateCompareGrain): boolean;
    isToday(): boolean;
    isInvalid(): boolean;
    private toNativeDate;
}
export declare type CandyDateCompareGrain = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
export declare type CandyDateCompareType = 'eq' | 'gt' | 'lt';
