/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Observable } from 'rxjs';
export declare class TimeHolder {
    private _seconds;
    private _hours;
    private _minutes;
    private _selected12Hours;
    private _use12Hours;
    private _defaultOpenValue;
    private _value;
    private _changes;
    setDefaultValueIfNil(): void;
    setMinutes(value: number, disabled: boolean): this;
    setHours(value: number, disabled: boolean): this;
    setSeconds(value: number, disabled: boolean): this;
    setUse12Hours(value: boolean): this;
    readonly changes: Observable<Date>;
    value: Date | undefined;
    setValue(value: Date | undefined, use12Hours?: boolean): this;
    clear(): void;
    readonly isEmpty: boolean;
    private _clear;
    private update;
    changed(): void;
    /**
     * @description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     */
    readonly viewHours: number | undefined;
    /**
     * @description
     * Value hours
     * Get realHours and its range is [0, 1, 2, ..., 22, 23]
     */
    readonly realHours: number | undefined;
    /**
     * @description
     * Same as realHours
     * @see realHours
     */
    /**
    * @description
    * Set viewHours to realHours
    */
    hours: number | undefined;
    minutes: number | undefined;
    seconds: number | undefined;
    selected12Hours: string | undefined;
    defaultOpenValue: Date;
    setDefaultOpenValue(value: Date): this;
    /**
     * @description
     * Get deafultViewHours when defaultOpenValue is setted
     * @see viewHours
     */
    readonly defaultViewHours: number;
    /**
     * @description
     * Get defaultRealHours when defaultOpenValue is setted
     * @see realHours
     */
    readonly defaultRealHours: number;
    /**
     * @description
     * Same as defaultRealHours
     */
    readonly defaultHours: number;
    readonly defaultMinutes: number;
    readonly defaultSeconds: number;
    readonly default12Hours: string;
    constructor();
    private calculateViewHour;
}
