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
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from '../candy-date/candy-date';
import { getTimeConfig, isAllowedDate } from '../util';
export class DateRangePopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.calendarChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        // Notify outside to close the picker panel
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { left: 0, right: 1 };
        this.disabledStartTime = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        });
        this.disabledEndTime = (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        });
    }
    // Range ONLY
    /**
     * @return {?}
     */
    get hasTimePicker() {
        return !!this.showTime;
    }
    /**
     * @return {?}
     */
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    // tslint:disable-line:no-any
    /**
     * @return {?}
     */
    ngOnInit() {
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((/**
             * @param {?} prop
             * @return {?}
             */
            prop => this.initialArray(prop)));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isRange) {
            if (changes.value) {
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = (/** @type {?} */ (this.value));
                this.valueForRangeShow = this.normalizeRangeValue((/** @type {?} */ (this.value)));
            }
        }
        // Parse showTime options
        if (changes.showTime || changes.disabledTime) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes.panelMode && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    }
    /**
     * @param {?} show
     * @return {?}
     */
    onShowTimePickerChange(show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onClickToday(value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            this.value = null; // Clear current value to not sync time by next step
            this.changeValue(value);
        }
        this.closePickerPanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDayHover(value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) {
            // When right value is selected, don't do hover
            /** @type {?} */
            const base = this.selectedValue[0];
            if (base.isBefore(value, 'day')) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            ((/** @type {?} */ (this.panelMode)))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onHeaderChange(value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onSelectTime(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const newValue = this.cloneRangeDate((/** @type {?} */ (this.value)));
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            newValue[index] = (/** @type {?} */ (this.overrideHms(value, newValue[index])));
            this.setValue(newValue);
        }
        else {
            this.setValue((/** @type {?} */ (this.overrideHms(value, ((/** @type {?} */ (this.value))) || new CandyDate())))); // If not select a date currently, use today
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    changeValue(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            this.selectedValue[index] = value;
            if (this.isValidRange(this.selectedValue)) {
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromSelect(value) {
        if (this.isRange) {
            const [left, right] = (/** @type {?} */ (this.selectedValue));
            if ((!left && !right) || (left && right)) {
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
                this.calendarChange.emit([value.clone()]);
            }
            else if (left && !right) {
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('selectedValue', 'right', value);
                this.sortRangeValue('selectedValue'); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
                this.calendarChange.emit(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    }
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    enablePrevNext(direction, partType) {
        if (this.isRange) {
            const [start, end] = this.valueForRangeShow;
            /** @type {?} */
            const showMiddle = !start.addMonths(1).isSame(end, 'month');
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPanelMode(partType) {
        if (this.isRange) {
            return (/** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]));
        }
        else {
            return (/** @type {?} */ (this.panelMode));
        }
    }
    // Get single value or part value of a range
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValue(partType) {
        if (this.isRange) {
            return ((/** @type {?} */ (this.value)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValueBySelector(partType) {
        if (this.isRange) {
            /** @type {?} */
            const valueShow = this.showTimePicker ? this.value : this.valueForRangeShow;
            return ((/** @type {?} */ (valueShow)))[this.getPartTypeIndex(partType)];
        }
        else {
            return (/** @type {?} */ (this.value));
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPartTypeIndex(partType) {
        return this.partTypeMap[(/** @type {?} */ (partType))];
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : ((/** @type {?} */ (this.placeholder)));
    }
    /**
     * @return {?}
     */
    hasSelectedValue() {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    }
    /**
     * @return {?}
     */
    isAllowedSelectedValue() {
        /** @type {?} */
        const selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return (isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime));
        }
        return false;
    }
    /**
     * @return {?}
     */
    timePickerDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    okDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate((/** @type {?} */ (this.value)), this.disabledDate, this.disabledTime) : false;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.timeOptions instanceof Array ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onClickPresetRange(val) {
        /** @type {?} */
        const value = typeof val === 'function' ? val() : val;
        this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
        this.resultOk.emit();
    }
    /**
     * @return {?}
     */
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onHoverPresetRange(val) {
        if (typeof val !== 'function') {
            this.hoverValue = [new CandyDate(val[0]), new CandyDate(val[1])];
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    /**
     * @private
     * @return {?}
     */
    closePickerPanel() {
        this.closePicker.emit();
    }
    /**
     * @private
     * @return {?}
     */
    clearHoverValue() {
        this.hoverValue = [];
    }
    /**
     * @private
     * @return {?}
     */
    buildTimeOptions() {
        if (this.showTime) {
            /** @type {?} */
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                /** @type {?} */
                const value = (/** @type {?} */ (this.value));
                this.timeOptions = [
                    this.overrideTimeOptions(showTime, value[0], 'start'),
                    this.overrideTimeOptions(showTime, value[1], 'end')
                ];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, (/** @type {?} */ (this.value)));
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    /**
     * @private
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    overrideTimeOptions(origin, value, partial) {
        /** @type {?} */
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign({}, origin, getTimeConfig(value, disabledTimeFn));
    }
    // Set value and trigger change event
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        const newValue = value;
        // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = newValue;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    }
    /**
     * @private
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    overrideHms(from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    }
    // Check if it's a valid range value
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isValidRange(value) {
        if (Array.isArray(value)) {
            const [start, end] = value;
            /** @type {?} */
            const grain = this.hasTimePicker ? 'second' : 'day';
            return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
        }
        return false;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    normalizeRangeValue(value) {
        const [start, end] = value;
        /** @type {?} */
        const newStart = start || new CandyDate();
        /** @type {?} */
        const newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    }
    // private isEmptyRangeValue(value: CandyDate[]): boolean {
    //   return !value || !Array.isArray(value) || value.every((val) => !val);
    // }
    // Sort a range value (accurate to second)
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    sortRangeValue(key) {
        if (Array.isArray(this[key])) {
            const [start, end] = this[key];
            if (start && end && start.isAfter(end, 'day')) {
                this[key] = [end, start];
            }
        }
    }
    // Renew and set a range value to trigger sub-component's change detection
    /**
     * @private
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    setRangeValue(key, partType, value) {
        /** @type {?} */
        const ref = (this[key] = this.cloneRangeDate((/** @type {?} */ (this[key]))));
        ref[this.getPartTypeIndex(partType)] = value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    cloneRangeDate(value) {
        return (/** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]));
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    initialArray(key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    }
}
DateRangePopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'date-range-popup',
                exportAs: 'dateRangePopup',
                template: "<div\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\n  [ngStyle]=\"popupStyle\">\n\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\n    <div class=\"{{ prefixCls }}-panel\">\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\n      </ng-container>\n      <div class=\"{{ prefixCls }}-date-panel\">\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\n          <!-- Range Selectors -->\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\n          <div class=\"ant-calendar-range-middle\">~</div>\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </ng-container>\n      </div>\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #tplCalendarInput let-partType=\"partType\">\n  <calendar-input\n    [value]=\"getValue(partType)\"\n    (valueChange)=\"changeValue($event, partType)\"\n    [locale]=\"locale\"\n    [disabledDate]=\"disabledDate\"\n    [format]=\"format\"\n    [placeholder]=\"getPlaceholder(partType)\"\n  ></calendar-input>\n</ng-template>\n\n<ng-template #tplInnerPopup let-partType=\"partType\">\n  <inner-popup\n    [showWeek]=\"showWeek\"\n    [locale]=\"locale\"\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\n    [timeOptions]=\"getTimeOptions(partType)\"\n    [panelMode]=\"getPanelMode(partType)\"\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\n    [value]=\"getValueBySelector(partType)\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\n    [enableNext]=\"enablePrevNext('next', partType)\"\n    (dayHover)=\"onDayHover($event)\"\n    (selectDate)=\"changeValueFromSelect($event)\"\n    (selectTime)=\"onSelectTime($event, partType)\"\n    (headerChange)=\"onHeaderChange($event, partType)\"\n  ></inner-popup>\n</ng-template>\n\n<ng-template #tplFooter>\n  <calendar-footer\n    *ngIf=\"hasFooter\"\n    [locale]=\"locale\"\n    [showToday]=\"showToday\"\n    [hasTimePicker]=\"hasTimePicker\"\n    [timePickerDisabled]=\"timePickerDisabled()\"\n    [okDisabled]=\"okDisabled()\"\n    [extraFooter]=\"extraFooter\"\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n    [(showTimePicker)]=\"showTimePicker\"\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\n    (clickOk)=\"resultOk.emit()\"\n    (clickToday)=\"onClickToday($event)\"\n  ></calendar-footer>\n</ng-template>\n\n<!-- Single ONLY -->\n<ng-template #tplSinglePart>\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n</ng-template>\n\n<!-- Range ONLY -->\n<ng-template #tplRangePart let-partType=\"partType\">\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\n    <div style=\"outline: none;\">\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Range ONLY: Range Quick Selector -->\n<ng-template #tplRangeQuickSelector>\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\n    (click)=\"onClickPresetRange(ranges[name])\"\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\n  >{{ name }}</a>\n</ng-template>"
            }] }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    disabledTime: [{ type: Input }],
    showToday: [{ type: Input }],
    showTime: [{ type: Input }],
    extraFooter: [{ type: Input }],
    ranges: [{ type: Input }],
    dateRender: [{ type: Input }],
    popupStyle: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    calendarChange: [{ type: Output }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    resultOk: [{ type: Output }],
    closePicker: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.popupStyle;
    /** @type {?} */
    DateRangePopupComponent.prototype.dropdownClassName;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.calendarChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.value;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.closePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTimePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueForRangeShow;
    /** @type {?} */
    DateRangePopupComponent.prototype.selectedValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /**
     * @type {?}
     * @private
     */
    DateRangePopupComponent.prototype.partTypeMap;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
    /* Skipping unhandled member: [property: string]: any;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsibGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQWF2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFVdkQsTUFBTSxPQUFPLHVCQUF1QjtJQVJwQztRQTBCcUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUU5RCxtQkFBYyxHQUFHLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRTdELGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFFMUQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUMsQ0FBQyx3Q0FBd0M7O1FBQzdFLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQyxDQUFDLDJDQUEyQzs7UUFFdEcsY0FBUyxHQUFXLGNBQWMsQ0FBQztRQUNuQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQWN4QixnQkFBVyxHQUE4QixFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBaUx2RSxzQkFBaUI7Ozs7UUFBRyxDQUFDLEtBQW9CLEVBQXNCLEVBQUU7WUFDL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLENBQUMsRUFBQztRQUVGLG9CQUFlOzs7O1FBQUcsQ0FB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ICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQge1xuICBEaXNhYmxlZERhdGVGbixcbiAgRGlzYWJsZWRUaW1lQ29uZmlnLFxuICBEaXNhYmxlZFRpbWVGbixcbiAgRGlzYWJsZWRUaW1lUGFydGlhbCxcbiAgUGFuZWxNb2RlLFxuICBQcmVzZXRSYW5nZXMsXG4gIFN1cHBvcnRUaW1lT3B0aW9uc1xufSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xuaW1wb3J0IHsgZ2V0VGltZUNvbmZpZywgaXNBbGxvd2VkRGF0ZSB9IGZyb20gJy4uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdkYXRlLXJhbmdlLXBvcHVwJyxcbiAgZXhwb3J0QXM6ICdkYXRlUmFuZ2VQb3B1cCcsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUG9wdXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogRGlzYWJsZWREYXRlRm47XG4gIEBJbnB1dCgpIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm47IC8vIFRoaXMgd2lsbCBsZWFkIHRvIHJlYnVpbGQgdGltZSBvcHRpb25zXG4gIEBJbnB1dCgpIHNob3dUb2RheTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1RpbWU6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV4dHJhRm9vdGVyOiBUZW1wbGF0ZVJlZjx2b2lkPiB8IHN0cmluZztcbiAgQElucHV0KCkgcmFuZ2VzOiBQcmVzZXRSYW5nZXM7XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIHBvcHVwU3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcblxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdPigpO1xuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10gfCBudWxsO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSByZXN1bHRPayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gRW1pdHRlZCB3aGVuIGRvbmUgd2l0aCBkYXRlIHNlbGVjdGluZ1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xvc2VQaWNrZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIE5vdGlmeSBvdXRzaWRlIHRvIGNsb3NlIHRoZSBwaWNrZXIgcGFuZWxcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICB0aW1lT3B0aW9uczogU3VwcG9ydFRpbWVPcHRpb25zIHwgU3VwcG9ydFRpbWVPcHRpb25zW10gfCBudWxsO1xuICB2YWx1ZUZvclJhbmdlU2hvdzogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcblxuICBnZXQgaGFzVGltZVBpY2tlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnNob3dUaW1lO1xuICB9XG5cbiAgZ2V0IGhhc0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93VG9kYXkgfHwgdGhpcy5oYXNUaW1lUGlja2VyIHx8ICEhdGhpcy5leHRyYUZvb3RlciB8fCAhIXRoaXMucmFuZ2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJ0VHlwZU1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHsgbGVmdDogMCwgcmlnaHQ6IDEgfTtcblxuICBbcHJvcGVydHk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBJbml0aWFsaXphdGlvbiBmb3IgcmFuZ2UgcHJvcGVydGllcyB0byBwcmV2ZW50IGVycm9ycyB3aGlsZSBsYXRlciBhc3NpZ25tZW50XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgWydwbGFjZWhvbGRlcicsICdwYW5lbE1vZGUnLCAnc2VsZWN0ZWRWYWx1ZScsICdob3ZlclZhbHVlJ10uZm9yRWFjaChwcm9wID0+IHRoaXMuaW5pdGlhbEFycmF5KHByb3ApKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgaWYgKGNoYW5nZXMudmFsdWUpIHtcbiAgICAgICAgLy8gUmUtaW5pdGlhbGl6ZSBhbGwgcmVsYXRlZCB2YWx1ZXNcbiAgICAgICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXTtcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQYXJzZSBzaG93VGltZSBvcHRpb25zXG4gICAgaWYgKGNoYW5nZXMuc2hvd1RpbWUgfHwgY2hhbmdlcy5kaXNhYmxlZFRpbWUpIHtcbiAgICAgIGlmICh0aGlzLnNob3dUaW1lKSB7XG4gICAgICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgdGltZSBwaWNrZXIgd2hlbiBhc3NpZ25lZCBwYW5lbCBtb2RlIGFzIFwidGltZVwiXG4gICAgaWYgKGNoYW5nZXMucGFuZWxNb2RlICYmIHRoaXMuaGFzVGltZVBpY2tlcikge1xuICAgICAgdGhpcy5zaG93VGltZVBpY2tlciA9IHRoaXMucGFuZWxNb2RlID09PSAndGltZSc7XG4gICAgfVxuICB9XG5cbiAgb25TaG93VGltZVBpY2tlckNoYW5nZShzaG93OiBib29sZWFuKTogdm9pZCB7XG4gICAgLy8gdGhpcy5wYW5lbE1vZGUgPSBzaG93ID8gJ3RpbWUnIDogJ2RhdGUnO1xuICAgIC8vIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQoc2hvdyA/ICd0aW1lJyA6ICdkYXRlJyk7XG4gIH1cblxuICBvbkNsaWNrVG9kYXkodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIC8vIGlmICh0aGlzLmlzUmFuZ2UpIHsgLy8gU2hvdyB0b2RheSBpcyBub3Qgc3VwcG9ydCBieSByYW5nZVxuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdcIm56U2hvd1RvZGF5XCIgaXMgbm90IHN1cHBvcnQgZm9yIFwiUmFuZ2VQaWNrZXJcIiEnKTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIGlmICghdGhpcy5pc1JhbmdlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbnVsbDsgLy8gQ2xlYXIgY3VycmVudCB2YWx1ZSB0byBub3Qgc3luYyB0aW1lIGJ5IG5leHQgc3RlcFxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuY2xvc2VQaWNrZXJQYW5lbCgpO1xuICB9XG5cbiAgb25EYXlIb3Zlcih2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aGlzLnNlbGVjdGVkVmFsdWVbMF0gJiYgIXRoaXMuc2VsZWN0ZWRWYWx1ZVsxXSkge1xuICAgICAgLy8gV2hlbiByaWdodCB2YWx1ZSBpcyBzZWxlY3RlZCwgZG9uJ3QgZG8gaG92ZXJcbiAgICAgIGNvbnN0IGJhc2UgPSB0aGlzLnNlbGVjdGVkVmFsdWVbMF07IC8vIFVzZSB0aGUgbGVmdCBvZiBzZWxlY3RlZCB2YWx1ZSBhcyB0aGUgYmFzZSB0byBkZWNpZGUgbGF0ZXIgaG92ZXJWYWx1ZVxuICAgICAgaWYgKGJhc2UuaXNCZWZvcmUodmFsdWUsICdkYXknKSkge1xuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSBbYmFzZSwgdmFsdWVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gW3ZhbHVlLCBiYXNlXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBhbmVsTW9kZUNoYW5nZShtb2RlOiBQYW5lbE1vZGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICh0aGlzLnBhbmVsTW9kZSBhcyBQYW5lbE1vZGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV0gPSBtb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhbmVsTW9kZSA9IG1vZGU7XG4gICAgfVxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5wYW5lbE1vZGUpO1xuICB9XG5cbiAgb25IZWFkZXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvd1t0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlRm9yUmFuZ2VTaG93KTsgLy8gU2hvdWxkIGFsd2F5cyB0YWtlIGNhcmUgb2Ygc3RhcnQvZW5kXG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RUaW1lKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKTtcbiAgICAgIG5ld1ZhbHVlW2luZGV4XSA9IHRoaXMub3ZlcnJpZGVIbXModmFsdWUsIG5ld1ZhbHVlW2luZGV4XSkhO1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKSB8fCBuZXcgQ2FuZHlEYXRlKCkpISk7IC8vIElmIG5vdCBzZWxlY3QgYSBkYXRlIGN1cnJlbnRseSwgdXNlIHRvZGF5XG4gICAgfVxuICB9XG5cbiAgY2hhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpO1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlW2luZGV4XSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZFJhbmdlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHRoaXMuY2xvbmVSYW5nZURhdGUodGhpcy5zZWxlY3RlZFZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVZhbHVlRnJvbVNlbGVjdCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgW2xlZnQsIHJpZ2h0XSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXTsgLy8gTk9URTogdGhlIGxlZnQvcmlnaHQgbWF5YmUgbm90IHRoZSBzZXF1ZW5jZSBpdCBzZWxlY3QgYXQgdGhlIGRhdGUgcGFuZWxzXG5cbiAgICAgIGlmICgoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCkpIHtcbiAgICAgICAgLy8gSWYgdG90YWxseSBmdWxsIG9yIGVtcHR5LCBjbGVhbiB1cCAmJiByZS1hc3NpZ24gbGVmdCBmaXJzdFxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQoW3ZhbHVlLmNsb25lKCldKTtcbiAgICAgIH0gZWxzZSBpZiAobGVmdCAmJiAhcmlnaHQpIHtcbiAgICAgICAgLy8gSWYgb25lIG9mIHRoZW0gaXMgZW1wdHksIGFzc2lnbiB0aGUgb3RoZXIgb25lIGFuZCBzb3J0LCB0aGVuIHNldCB0aGUgZmluYWwgdmFsdWVzXG4gICAgICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7IC8vIENsZWFuIHVwXG4gICAgICAgIHRoaXMuc2V0UmFuZ2VWYWx1ZSgnc2VsZWN0ZWRWYWx1ZScsICdyaWdodCcsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5zb3J0UmFuZ2VWYWx1ZSgnc2VsZWN0ZWRWYWx1ZScpOyAvLyBTb3J0XG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xuICAgICAgICB0aGlzLmNhbGVuZGFyQ2hhbmdlLmVtaXQodGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnNlbGVjdGVkVmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGVuYWJsZVByZXZOZXh0KGRpcmVjdGlvbjogJ3ByZXYnIHwgJ25leHQnLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93O1xuICAgICAgY29uc3Qgc2hvd01pZGRsZSA9ICFzdGFydC5hZGRNb250aHMoMSkuaXNTYW1lKGVuZCwgJ21vbnRoJyk7IC8vIE9uZSBtb250aCBkaWZmIHRoZW4gZG9uJ3Qgc2hvdyBtaWRkbGUgcHJldi9uZXh0XG4gICAgICBpZiAoKHBhcnRUeXBlID09PSAnbGVmdCcgJiYgZGlyZWN0aW9uID09PSAnbmV4dCcpIHx8IChwYXJ0VHlwZSA9PT0gJ3JpZ2h0JyAmJiBkaXJlY3Rpb24gPT09ICdwcmV2JykpIHtcbiAgICAgICAgcmV0dXJuIHNob3dNaWRkbGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGFuZWxNb2RlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFBhbmVsTW9kZSB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIGFzIFBhbmVsTW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgc2luZ2xlIHZhbHVlIG9yIHBhcnQgdmFsdWUgb2YgYSByYW5nZVxuICBnZXRWYWx1ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAodGhpcy52YWx1ZSBhcyBDYW5keURhdGVbXSlbdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZUJ5U2VsZWN0b3IocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZVNob3cgPSB0aGlzLnNob3dUaW1lUGlja2VyID8gdGhpcy52YWx1ZSA6IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7IC8vIFVzZSB0aGUgcmVhbCB0aW1lIHZhbHVlIHRoYXQgd2l0aG91dCBkZWNvcmF0aW9ucyB3aGVuIHRpbWVwaWNrZXIgaXMgc2hvd24gdXBcbiAgICAgIHJldHVybiAodmFsdWVTaG93IGFzIENhbmR5RGF0ZVtdKVt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFBhcnRUeXBlSW5kZXgocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0VHlwZU1hcFtwYXJ0VHlwZSFdO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclt0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpXSA6ICh0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZyk7XG4gIH1cblxuICBoYXNTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWUgJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbMV0gJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbMF07XG4gIH1cblxuICBkaXNhYmxlZFN0YXJ0VGltZSA9ICh2YWx1ZTogRGF0ZSB8IERhdGVbXSk6IERpc2FibGVkVGltZUNvbmZpZyA9PiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWRUaW1lICYmIHRoaXMuZGlzYWJsZWRUaW1lKHZhbHVlLCAnc3RhcnQnKTtcbiAgfTtcblxuICBkaXNhYmxlZEVuZFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xuICB9O1xuXG4gIGlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlWzBdICYmIHNlbGVjdGVkVmFsdWVbMV0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVswXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsxXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRFbmRUaW1lKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdGltZVBpY2tlckRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5oYXNUaW1lUGlja2VyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9rRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAhdGhpcy5pc0FsbG93ZWRTZWxlY3RlZFZhbHVlKCkgfHwgIXRoaXMuaGFzU2VsZWN0ZWRWYWx1ZSgpIHx8ICEhdGhpcy5ob3ZlclZhbHVlLmxlbmd0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgPyAhaXNBbGxvd2VkRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRUaW1lKSA6IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldFRpbWVPcHRpb25zKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGwge1xuICAgIGlmICh0aGlzLnNob3dUaW1lICYmIHRoaXMudGltZU9wdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLnRpbWVPcHRpb25zIGluc3RhbmNlb2YgQXJyYXkgPyB0aGlzLnRpbWVPcHRpb25zW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldIDogdGhpcy50aW1lT3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbkNsaWNrUHJlc2V0UmFuZ2UodmFsOiBQcmVzZXRSYW5nZXNba2V5b2YgUHJlc2V0UmFuZ2VzXSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJyA/IHZhbCgpIDogdmFsO1xuICAgIHRoaXMuc2V0VmFsdWUoW25ldyBDYW5keURhdGUodmFsdWVbMF0pLCBuZXcgQ2FuZHlEYXRlKHZhbHVlWzFdKV0pO1xuICAgIHRoaXMucmVzdWx0T2suZW1pdCgpO1xuICB9XG5cbiAgb25QcmVzZXRSYW5nZU1vdXNlTGVhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckhvdmVyVmFsdWUoKTtcbiAgfVxuXG4gIG9uSG92ZXJQcmVzZXRSYW5nZSh2YWw6IFByZXNldFJhbmdlc1trZXlvZiBQcmVzZXRSYW5nZXNdKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuaG92ZXJWYWx1ZSA9IFtuZXcgQ2FuZHlEYXRlKHZhbFswXSksIG5ldyBDYW5keURhdGUodmFsWzFdKV07XG4gICAgfVxuICB9XG5cbiAgZ2V0T2JqZWN0S2V5cyhvYmo6IG9iamVjdCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSBjbG9zZVBpY2tlclBhbmVsKCk6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VQaWNrZXIuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckhvdmVyVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gW107XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkVGltZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcbiAgICAgIGNvbnN0IHNob3dUaW1lID0gdHlwZW9mIHRoaXMuc2hvd1RpbWUgPT09ICdvYmplY3QnID8gdGhpcy5zaG93VGltZSA6IHt9O1xuICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW107XG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBbXG4gICAgICAgICAgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVswXSwgJ3N0YXJ0JyksXG4gICAgICAgICAgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB2YWx1ZVsxXSwgJ2VuZCcpXG4gICAgICAgIF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRpbWVPcHRpb25zID0gdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVUaW1lT3B0aW9ucyhcbiAgICBvcmlnaW46IFN1cHBvcnRUaW1lT3B0aW9ucyxcbiAgICB2YWx1ZTogQ2FuZHlEYXRlLFxuICAgIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsXG4gICk6IFN1cHBvcnRUaW1lT3B0aW9ucyB7XG4gICAgbGV0IGRpc2FibGVkVGltZUZuO1xuICAgIGlmIChwYXJ0aWFsKSB7XG4gICAgICBkaXNhYmxlZFRpbWVGbiA9IHBhcnRpYWwgPT09ICdzdGFydCcgPyB0aGlzLmRpc2FibGVkU3RhcnRUaW1lIDogdGhpcy5kaXNhYmxlZEVuZFRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc2FibGVkVGltZUZuID0gdGhpcy5kaXNhYmxlZFRpbWU7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLm9yaWdpbiwgLi4uZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lRm4pIH07XG4gIH1cblxuICAvLyBTZXQgdmFsdWUgYW5kIHRyaWdnZXIgY2hhbmdlIGV2ZW50XG4gIHByaXZhdGUgc2V0VmFsdWUodmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdKTogdm9pZCB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIC8vIFRPRE86IFN5bmMgb3JpZ2luYWwgdGltZSAoTk9URTogdGhpcyBzaG91bGQgdGFrZSBtb3JlIGNhcmUgb2YgYmVhY3VzZSBpdCBtYXkgZGVwZW5kIG9uIG1hbnkgY2hhbmdlIHNvdXJjZXMpXG4gICAgLy8gaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgIC8vICAgLy8gVE9ETzogU3luYyB0aW1lXG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGlmICh0aGlzLnZhbHVlKSB7IC8vIFN5bmMgdGltZSBmcm9tIHRoZSBvcmlnaW5hbCBvbmUgaWYgaXQncyBhdmFpbGFibGVcbiAgICAvLyAgICAgbmV3VmFsdWUgPSB0aGlzLm92ZXJyaWRlSG1zKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCBuZXdWYWx1ZSBhcyBDYW5keURhdGUpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG5cbiAgICB0aGlzLmJ1aWxkVGltZU9wdGlvbnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb3ZlcnJpZGVIbXMoZnJvbTogQ2FuZHlEYXRlLCB0bzogQ2FuZHlEYXRlKTogQ2FuZHlEYXRlIHwgbnVsbCB7XG4gICAgaWYgKCFmcm9tIHx8ICF0bykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0by5zZXRIbXMoZnJvbS5nZXRIb3VycygpLCBmcm9tLmdldE1pbnV0ZXMoKSwgZnJvbS5nZXRTZWNvbmRzKCkpO1xuICB9XG5cbiAgLy8gQ2hlY2sgaWYgaXQncyBhIHZhbGlkIHJhbmdlIHZhbHVlXG4gIHByaXZhdGUgaXNWYWxpZFJhbmdlKHZhbHVlOiBDYW5keURhdGVbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgY29uc3QgW3N0YXJ0LCBlbmRdID0gdmFsdWU7XG4gICAgICBjb25zdCBncmFpbiA9IHRoaXMuaGFzVGltZVBpY2tlciA/ICdzZWNvbmQnIDogJ2RheSc7XG4gICAgICByZXR1cm4gc3RhcnQgJiYgZW5kICYmIChzdGFydC5pc0JlZm9yZShlbmQsIGdyYWluKSB8fCBzdGFydC5pc1NhbWUoZW5kLCBncmFpbikpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xuICAgIGNvbnN0IFtzdGFydCwgZW5kXSA9IHZhbHVlO1xuICAgIGNvbnN0IG5ld1N0YXJ0ID0gc3RhcnQgfHwgbmV3IENhbmR5RGF0ZSgpO1xuICAgIGNvbnN0IG5ld0VuZCA9IGVuZCAmJiBlbmQuaXNTYW1lKG5ld1N0YXJ0LCAnbW9udGgnKSA/IGVuZC5hZGRNb250aHMoMSkgOiBlbmQgfHwgbmV3U3RhcnQuYWRkTW9udGhzKDEpO1xuICAgIHJldHVybiBbbmV3U3RhcnQsIG5ld0VuZF07XG4gIH1cblxuICAvLyBwcml2YXRlIGlzRW1wdHlSYW5nZVZhbHVlKHZhbHVlOiBDYW5keURhdGVbXSk6IGJvb2xlYW4ge1xuICAvLyAgIHJldHVybiAhdmFsdWUgfHwgIUFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHZhbHVlLmV2ZXJ5KCh2YWwpID0+ICF2YWwpO1xuICAvLyB9XG5cbiAgLy8gU29ydCBhIHJhbmdlIHZhbHVlIChhY2N1cmF0ZSB0byBzZWNvbmQpXG4gIHByaXZhdGUgc29ydFJhbmdlVmFsdWUoa2V5OiAnc2VsZWN0ZWRWYWx1ZScpOiB2b2lkIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzW2tleV0pKSB7XG4gICAgICBjb25zdCBbc3RhcnQsIGVuZF0gPSB0aGlzW2tleV07XG4gICAgICBpZiAoc3RhcnQgJiYgZW5kICYmIHN0YXJ0LmlzQWZ0ZXIoZW5kLCAnZGF5JykpIHtcbiAgICAgICAgdGhpc1trZXldID0gW2VuZCwgc3RhcnRdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJlbmV3IGFuZCBzZXQgYSByYW5nZSB2YWx1ZSB0byB0cmlnZ2VyIHN1Yi1jb21wb25lbnQncyBjaGFuZ2UgZGV0ZWN0aW9uXG4gIHByaXZhdGUgc2V0UmFuZ2VWYWx1ZShrZXk6ICd2YWx1ZScgfCAnc2VsZWN0ZWRWYWx1ZScsIHBhcnRUeXBlOiBSYW5nZVBhcnRUeXBlLCB2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgY29uc3QgcmVmID0gKHRoaXNba2V5XSA9IHRoaXMuY2xvbmVSYW5nZURhdGUodGhpc1trZXldIGFzIENhbmR5RGF0ZVtdKSk7XG4gICAgcmVmW3RoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSldID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGNsb25lUmFuZ2VEYXRlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcbiAgICByZXR1cm4gW3ZhbHVlWzBdICYmIHZhbHVlWzBdLmNsb25lKCksIHZhbHVlWzFdICYmIHZhbHVlWzFdLmNsb25lKCldIGFzIENhbmR5RGF0ZVtdO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsQXJyYXkoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXNba2V5XSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzW2tleV0pKSB7XG4gICAgICB0aGlzW2tleV0gPSBbXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmFuZ2VQYXJ0VHlwZSA9ICdsZWZ0JyB8ICdyaWdodCc7XG4iXX0=