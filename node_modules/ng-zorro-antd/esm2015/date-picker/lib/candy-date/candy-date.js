/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import endOfMonth from 'date-fns/end_of_month';
import setDay from 'date-fns/set_day';
import setMonth from 'date-fns/set_month';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export class CandyDate {
    // locale: string; // Custom specified locale ID
    /**
     * @param {?=} date
     */
    constructor(date) {
        // if (!(this instanceof CandyDate)) {
        //   return new CandyDate(date);
        // }
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string') {
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    getYear() {
        return this.nativeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    getMonth() {
        return this.nativeDate.getMonth();
    }
    /**
     * @return {?}
     */
    getDay() {
        return this.nativeDate.getDay();
    }
    /**
     * @return {?}
     */
    getTime() {
        return this.nativeDate.getTime();
    }
    /**
     * @return {?}
     */
    getDate() {
        return this.nativeDate.getDate();
    }
    /**
     * @return {?}
     */
    getHours() {
        return this.nativeDate.getHours();
    }
    /**
     * @return {?}
     */
    getMinutes() {
        return this.nativeDate.getMinutes();
    }
    /**
     * @return {?}
     */
    getSeconds() {
        return this.nativeDate.getSeconds();
    }
    /**
     * @return {?}
     */
    getMilliseconds() {
        return this.nativeDate.getMilliseconds();
    }
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    clone() {
        return new CandyDate(new Date(this.nativeDate));
    }
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    setHms(hour, minute, second) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    setYear(year) {
        // return new CandyDate(setYear(this.date, year));
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setFullYear(year);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addYears(amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    }
    // NOTE: month starts from 0
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    setMonth(month) {
        // const date = new Date(this.nativeDate);
        // date.setMonth(month);
        // return new CandyDate(date);
        return new CandyDate(setMonth(this.nativeDate, month));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addMonths(amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    }
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    setDay(day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    setDate(amount) {
        /** @type {?} */
        const date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    addDays(amount) {
        return this.setDate(this.getDate() + amount);
    }
    /**
     * @param {?} grain
     * @return {?}
     */
    endOf(grain) {
        switch (grain) {
            case 'month':
                return new CandyDate(endOfMonth(this.nativeDate));
        }
        return null;
    }
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    isSame(date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            const left = this.toNativeDate();
            /** @type {?} */
            const right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() === right.getFullYear();
                case 'month':
                    return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
                case 'day':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate());
                case 'hour':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours());
                case 'minute':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours() &&
                        left.getMinutes() === right.getMinutes());
                case 'second':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours() &&
                        left.getMinutes() === right.getMinutes() &&
                        left.getSeconds() === right.getSeconds());
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    isAfter(date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            const left = this.toNativeDate();
            /** @type {?} */
            const right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() > right.getFullYear();
                case 'month':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()));
                case 'day':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()));
                case 'hour':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()));
                case 'minute':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() > right.getMinutes()));
                case 'second':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() > right.getMinutes()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() === right.getMinutes() &&
                            left.getSeconds() > right.getSeconds()));
            }
        }
        return false;
    }
    // TODO: Precipitate into a function "compare()"
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    isBefore(date, grain) {
        if (date) {
            /** @type {?} */
            const left = this.toNativeDate();
            /** @type {?} */
            const right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() < right.getFullYear();
                case 'month':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()));
                case 'day':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()));
                case 'hour':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()));
                case 'minute':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() < right.getMinutes()));
                case 'second':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() < right.getMinutes()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() === right.getMinutes() &&
                            left.getSeconds() < right.getSeconds()));
            }
        }
        return false;
    }
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    isToday() {
        return this.isSame(new Date(), 'day');
    }
    /**
     * @return {?}
     */
    isInvalid() {
        return isNaN(this.nativeDate.valueOf());
    }
    /**
     * @private
     * @param {?=} date
     * @return {?}
     */
    toNativeDate(date = this) {
        return date instanceof CandyDate ? date.nativeDate : date;
    }
}
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7QUFDMUMsT0FBTyxVQUFVLE1BQU0sdUJBQXVCLENBQUM7QUFDL0MsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsT0FBTyxRQUFRLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7QUFTMUMsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBSXBCLFlBQVksSUFBb0I7UUFDOUIsc0NBQXNDO1FBQ3RDLGdDQUFnQztRQUNoQyxJQUFJO1FBRUosSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO2lCQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsK0VBQStFLENBQUMsQ0FBQzthQUNsRztTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7U0FDOUI7SUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7OztJQWVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElB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LENBQUMsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUN6QyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLENBQUMsV0FBVyxFQUFFOzRCQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssS0FBSyxDQUFDLFFBQVEsRUFBRTs0QkFDcEMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ2xDLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFOzRCQUNwQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssS0FBSyxDQUFDLFVBQVUsRUFBRTs0QkFDeEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUMxQyxDQUFDO2FBQ0w7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFHRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE9BQXlCLElBQUk7UUFDaEQsT0FBTyxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztDQVFGOzs7SUE5VkMsK0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCBhZGRNb250aHMgZnJvbSAnZGF0ZS1mbnMvYWRkX21vbnRocyc7XG5pbXBvcnQgYWRkWWVhcnMgZnJvbSAnZGF0ZS1mbnMvYWRkX3llYXJzJztcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gJ2RhdGUtZm5zL2VuZF9vZl9tb250aCc7XG5pbXBvcnQgc2V0RGF5IGZyb20gJ2RhdGUtZm5zL3NldF9kYXknO1xuaW1wb3J0IHNldE1vbnRoIGZyb20gJ2RhdGUtZm5zL3NldF9tb250aCc7XG5pbXBvcnQgeyBJbmRleGFibGVPYmplY3QgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG4vKipcbiAqIFdyYXBwaW5nIGtpbmQgQVBJcyBmb3IgZGF0ZSBvcGVyYXRpbmcgYW5kIHVuaWZ5XG4gKiBOT1RFOiBldmVyeSBuZXcgQVBJIHJldHVybiBuZXcgQ2FuZHlEYXRlIG9iamVjdCB3aXRob3V0IHNpZGUgZWZmZWN0cyB0byB0aGUgZm9ybWVyIERhdGUgb2JqZWN0XG4gKiBOT1RFOiBtb3N0IEFQSXMgYXJlIGJhc2VkIG9uIGxvY2FsIHRpbWUgb3RoZXIgdGhhbiBjdXN0b21pemVkIGxvY2FsZSBpZCAodGhpcyBuZWVkcyB0b2JlIHN1cHBvcnQgaW4gZnV0dXJlKVxuICogVE9ETzogc3VwcG9ydCBmb3JtYXQoKSBhZ2FpbnN0IHRvIGFuZ3VsYXIncyBjb3JlIEFQSVxuICovXG5leHBvcnQgY2xhc3MgQ2FuZHlEYXRlIGltcGxlbWVudHMgSW5kZXhhYmxlT2JqZWN0IHtcbiAgbmF0aXZlRGF0ZTogRGF0ZTtcbiAgLy8gbG9jYWxlOiBzdHJpbmc7IC8vIEN1c3RvbSBzcGVjaWZpZWQgbG9jYWxlIElEXG5cbiAgY29uc3RydWN0b3IoZGF0ZT86IERhdGUgfCBzdHJpbmcpIHtcbiAgICAvLyBpZiAoISh0aGlzIGluc3RhbmNlb2YgQ2FuZHlEYXRlKSkge1xuICAgIC8vICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gICAgLy8gfVxuXG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBkYXRlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBkYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCAoXCJEYXRlXCIgYW5kIFwic3RyaW5nXCIgaXMgbm93IHJlY29tbWVuZGVkKScpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGdldExvY2FsZSgpOiBzdHJpbmcge1xuICAvLyAgIHJldHVybiB0aGlzLmxvY2FsZTtcbiAgLy8gfVxuXG4gIC8vIHNldExvY2FsZShsb2NhbGU6IHN0cmluZyk6IENhbmR5RGF0ZSB7XG4gIC8vICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBOYXRpdmUgc2hvcnRjdXRzXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIGdldFllYXIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBnZXRNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldERheSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0RGF5KCk7XG4gIH1cblxuICBnZXRUaW1lKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCk7XG4gIH1cblxuICBnZXREYXRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXREYXRlKCk7XG4gIH1cblxuICBnZXRIb3VycygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0SG91cnMoKTtcbiAgfVxuXG4gIGdldE1pbnV0ZXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbnV0ZXMoKTtcbiAgfVxuXG4gIGdldFNlY29uZHMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldFNlY29uZHMoKTtcbiAgfVxuXG4gIGdldE1pbGxpc2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBOZXcgaW1wbGVtZW50aW5nIEFQSXNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY2xvbmUoKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpKTtcbiAgfVxuXG4gIHNldEhtcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyLCBzZWNvbmQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XG4gICAgZGF0ZS5zZXRIb3Vycyhob3VyLCBtaW51dGUsIHNlY29uZCk7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gIH1cblxuICBzZXRZZWFyKHllYXI6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgLy8gcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0WWVhcih0aGlzLmRhdGUsIHllYXIpKTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xuICB9XG5cbiAgYWRkWWVhcnMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XG4gIH1cblxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXG4gIC8vIE5PVEU6IERvbid0IHVzZSB0aGUgbmF0aXZlIEFQSSBmb3IgbW9udGggbWFuaXB1bGF0aW9uIGFzIGl0IG5vdCByZXN0cmljdCB0aGUgZGF0ZSB3aGVuIGl0IG92ZXJmbG93cywgZWcuIChuZXcgRGF0ZSgnMjAxOC03LTMxJykpLnNldE1vbnRoKDEpIHdpbGwgYmUgZGF0ZSBvZiAyMDE4LTMtMDMgaW5zdGVhZCBvZiAyMDE4LTItMjhcbiAgc2V0TW9udGgobW9udGg6IG51bWJlcik6IENhbmR5RGF0ZSB7XG4gICAgLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XG4gICAgLy8gZGF0ZS5zZXRNb250aChtb250aCk7XG4gICAgLy8gcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xuICB9XG5cbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShhZGRNb250aHModGhpcy5uYXRpdmVEYXRlLCBhbW91bnQpKTtcbiAgfVxuXG4gIHNldERheShkYXk6IG51bWJlciwgb3B0aW9ucz86IHsgd2Vla1N0YXJ0c09uOiBudW1iZXIgfSk6IENhbmR5RGF0ZSB7XG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0RGF5KHRoaXMubmF0aXZlRGF0ZSwgZGF5LCBvcHRpb25zKSk7XG4gIH1cblxuICBzZXREYXRlKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcbiAgICBkYXRlLnNldERhdGUoYW1vdW50KTtcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgfVxuXG4gIGFkZERheXMoYW1vdW50OiBudW1iZXIpOiBDYW5keURhdGUge1xuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xuICB9XG5cbiAgZW5kT2YoZ3JhaW46ICdtb250aCcpOiBDYW5keURhdGUgfCBudWxsIHtcbiAgICBzd2l0Y2ggKGdyYWluKSB7XG4gICAgICBjYXNlICdtb250aCc6XG4gICAgICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGVuZE9mTW9udGgodGhpcy5uYXRpdmVEYXRlKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaXNTYW1lKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4pOiBib29sZWFuIHtcbiAgICAvLyBUT0RPOiBQcmVjaXBpdGF0ZSBpbnRvIGEgZnVuY3Rpb24gXCJjb21wYXJlKClcIlxuICAgIGlmIChkYXRlKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b05hdGl2ZURhdGUoKTtcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b05hdGl2ZURhdGUoZGF0ZSk7XG4gICAgICBzd2l0Y2ggKGdyYWluKSB7XG4gICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICByZXR1cm4gbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKTtcbiAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKClcbiAgICAgICAgICApO1xuICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcbiAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID09PSByaWdodC5nZXRNaW51dGVzKClcbiAgICAgICAgICApO1xuICAgICAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxuICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmXG4gICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmXG4gICAgICAgICAgICBsZWZ0LmdldFNlY29uZHMoKSA9PT0gcmlnaHQuZ2V0U2Vjb25kcygpXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXNBZnRlcihkYXRlOiBDYW5keURhdGUgfCBEYXRlIHwgbnVsbCwgZ3JhaW46IENhbmR5RGF0ZUNvbXBhcmVHcmFpbik6IGJvb2xlYW4ge1xuICAgIC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcbiAgICAgIHN3aXRjaCAoZ3JhaW4pIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID4gcmlnaHQuZ2V0RGF0ZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA+IHJpZ2h0LmdldERhdGUoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSlcbiAgICAgICAgICApO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA+IHJpZ2h0LmdldERhdGUoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpID4gcmlnaHQuZ2V0TWludXRlcygpKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID4gcmlnaHQuZ2V0RGF0ZSgpKSB8fFxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPiByaWdodC5nZXRIb3VycygpKSB8fFxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNaW51dGVzKCkgPiByaWdodC5nZXRNaW51dGVzKCkpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0U2Vjb25kcygpID4gcmlnaHQuZ2V0U2Vjb25kcygpKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXG4gIGlzQmVmb3JlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUgfCBudWxsLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnRvTmF0aXZlRGF0ZSgpO1xuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcbiAgICAgIHN3aXRjaCAoZ3JhaW4pIHtcbiAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPCByaWdodC5nZXRNb250aCgpKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA8IHJpZ2h0LmdldERhdGUoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSlcbiAgICAgICAgICApO1xuICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA8IHJpZ2h0LmdldERhdGUoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID09PSByaWdodC5nZXRIb3VycygpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TWludXRlcygpIDwgcmlnaHQuZ2V0TWludXRlcygpKVxuICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSkgfHxcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKSB8fFxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPCByaWdodC5nZXRIb3VycygpKSB8fFxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcbiAgICAgICAgICAgICAgbGVmdC5nZXRNaW51dGVzKCkgPCByaWdodC5nZXRNaW51dGVzKCkpIHx8XG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmXG4gICAgICAgICAgICAgIGxlZnQuZ2V0U2Vjb25kcygpIDwgcmlnaHQuZ2V0U2Vjb25kcygpKVxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWFsIHRvIHRvZGF5IGFjY3VyYXRlIHRvIFwiZGF5XCJcbiAgaXNUb2RheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NhbWUobmV3IERhdGUoKSwgJ2RheScpO1xuICB9XG5cbiAgaXNJbnZhbGlkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc05hTih0aGlzLm5hdGl2ZURhdGUudmFsdWVPZigpKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9OYXRpdmVEYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUgPSB0aGlzKTogRGF0ZSB7XG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xuICB9XG5cbiAgLy8gY29tcGFyZShkYXRlOiBDYW5keURhdGUsIERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnbWlsbGlzZWNvbmQnKTogbnVtYmVyIHtcbiAgLy8gICBjb25zdCBsZXZlbCA9IHsgJ21pbGxpc2Vjb25kJzogMSwgJ3NlY29uZCc6IDEwMDAsICdtaW51dGUnOiAxMDAwICogNjAsICdob3VyJzogMTAwMCAqIDYwICogNjAsICdkYXknOiAxMDAwICogNjAgKiA2MCAqIDI0IH1bIGdyYWluIF07XG4gIC8vICAgY29uc3QgbGVmdCA9IHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCkgLyBsZXZlbDtcbiAgLy8gICBjb25zdCByaWdodCA9IChkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZSkuZ2V0VGltZSgpIC8gbGV2ZWw7XG4gIC8vICAgcmV0dXJuIE1hdGguZmxvb3IobGVmdCkgLSBNYXRoLmZsb29yKHJpZ2h0KTtcbiAgLy8gfVxufVxuXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAneWVhcicgfCAnbW9udGgnIHwgJ2RheScgfCAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnO1xuXG5leHBvcnQgdHlwZSBDYW5keURhdGVDb21wYXJlVHlwZSA9ICdlcScgfCAnZ3QnIHwgJ2x0JztcbiJdfQ==