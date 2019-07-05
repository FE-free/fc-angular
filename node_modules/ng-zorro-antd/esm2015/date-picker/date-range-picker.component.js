/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { toBoolean, valueFunctionProp, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
export class DateRangePickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
        this.showWeek = false; // Should show as week picker
        this.nzShowToday = true;
        this.nzOnPanelChange = new EventEmitter();
        this.nzOnCalendarChange = new EventEmitter();
        this.nzOnOk = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get nzShowTime() {
        return this._showTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowTime(value) {
        this._showTime = typeof value === 'object' ? value : toBoolean(value);
    }
    /**
     * @return {?}
     */
    get realShowToday() {
        // Range not support nzShowToday currently
        return !this.isRange && this.nzShowToday;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        // Default format when it's empty
        if (!this.nzFormat) {
            if (this.showWeek) {
                this.nzFormat = this.dateHelper.relyOnDatePipe ? 'yyyy-ww' : 'YYYY-WW'; // Format for week
            }
            else {
                if (this.dateHelper.relyOnDatePipe) {
                    this.nzFormat = this.nzShowTime ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                }
                else {
                    this.nzFormat = this.nzShowTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
                }
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
        if (changes.nzShowTime || changes.nzStyle) {
            this.setFixedPickerStyle();
        }
    }
    // If has no timepicker and the user select a date by date panel, then close picker
    /**
     * @param {?} value
     * @return {?}
     */
    onValueChange(value) {
        super.onValueChange(value);
        if (!this.nzShowTime) {
            this.closeOverlay();
        }
    }
    // Emit nzOnCalendarChange when select date by nz-range-picker
    /**
     * @param {?} value
     * @return {?}
     */
    onCalendarChange(value) {
        if (this.isRange) {
            /** @type {?} */
            const rangeValue = value.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.nativeDate));
            this.nzOnCalendarChange.emit(rangeValue);
        }
    }
    // Emitted when done with date selecting
    /**
     * @return {?}
     */
    onResultOk() {
        if (this.isRange) {
            /** @type {?} */
            const value = (/** @type {?} */ (this.nzValue));
            if (value.length) {
                this.nzOnOk.emit([value[0].nativeDate, value[1].nativeDate]);
            }
            else {
                this.nzOnOk.emit([]);
            }
        }
        else {
            if (this.nzValue) {
                this.nzOnOk.emit(((/** @type {?} */ (this.nzValue))).nativeDate);
            }
            else {
                this.nzOnOk.emit(null);
            }
        }
        this.closeOverlay();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        this.nzOnOpenChange.emit(open);
    }
    // Setup fixed style for picker
    /**
     * @private
     * @return {?}
     */
    setFixedPickerStyle() {
        /** @type {?} */
        const showTimeFixes = {};
        if (this.nzShowTime) {
            showTimeFixes.width = this.isRange ? '350px' : '195px';
        }
        this.pickerStyle = Object.assign({}, showTimeFixes, this.nzStyle);
    }
}
DateRangePickerComponent.decorators = [
    { type: Component, args: [{
                template: `` // Just for rollup
            }] }
];
/** @nocollapse */
DateRangePickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: NzNoAnimationDirective }
];
DateRangePickerComponent.propDecorators = {
    nzDateRender: [{ type: Input }],
    nzDisabledTime: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzShowToday: [{ type: Input }],
    nzMode: [{ type: Input }],
    nzRanges: [{ type: Input }],
    nzOnPanelChange: [{ type: Output }],
    nzOnCalendarChange: [{ type: Output }],
    nzShowTime: [{ type: Input }],
    nzOnOk: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], DateRangePickerComponent.prototype, "nzShowToday", void 0);
if (false) {
    /** @type {?} */
    DateRangePickerComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDateRender;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzDisabledTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzShowToday;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzMode;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzRanges;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnPanelChange;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnCalendarChange;
    /**
     * @type {?}
     * @private
     */
    DateRangePickerComponent.prototype._showTime;
    /** @type {?} */
    DateRangePickerComponent.prototype.nzOnOk;
    /** @type {?} */
    DateRangePickerComponent.prototype.pickerStyle;
    /** @type {?} */
    DateRangePickerComponent.prototype.extraFooter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9kYXRlLXBpY2tlci8iLCJzb3VyY2VzIjpbImRhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFHUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFnQixZQUFZLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0SCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEUsT0FBTyxFQUFFLHVCQUF1QixFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBT3RGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSx1QkFBdUI7Ozs7Ozs7SUE4Qm5FLFlBQ0UsSUFBbUIsRUFDbkIsR0FBc0IsRUFDdEIsVUFBNkIsRUFDN0IsV0FBb0M7UUFFcEMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBbkM1QyxhQUFRLEdBQVksS0FBSyxDQUFDLENBQUMsNkJBQTZCO1FBSy9CLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBR2xDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFDOUQsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQVVoRCxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQXlCLENBQUM7SUFpQnRFLENBQUM7Ozs7SUF4QkQsSUFBYSxVQUFVO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELElBQUksVUFBVSxDQUFDLEtBQXVCO1FBQ3BDLElBQUksQ0FBQyxTQUFT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bSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuLCB2YWx1ZUZ1bmN0aW9uUHJvcCwgRnVuY3Rpb25Qcm9wLCBJbnB1dEJvb2xlYW4sIE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuXG5pbXBvcnQgeyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCwgQ29tcGF0aWJsZURhdGUgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcbmltcG9ydCB7IERpc2FibGVkVGltZUZuLCBQYW5lbE1vZGUsIFByZXNldFJhbmdlcyB9IGZyb20gJy4vc3RhbmRhcmQtdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6IGBgIC8vIEp1c3QgZm9yIHJvbGx1cFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgc2hvd1dlZWs6IGJvb2xlYW4gPSBmYWxzZTsgLy8gU2hvdWxkIHNob3cgYXMgd2VlayBwaWNrZXJcblxuICBASW5wdXQoKSBuekRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbjtcbiAgQElucHV0KCkgbnpSZW5kZXJFeHRyYUZvb3RlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPHZvaWQ+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1RvZGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpNb2RlOiBQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXTtcbiAgQElucHV0KCkgbnpSYW5nZXM6IFByZXNldFJhbmdlcztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25QYW5lbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlIHwgUGFuZWxNb2RlW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2FsZW5kYXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcblxuICBwcml2YXRlIF9zaG93VGltZTogb2JqZWN0IHwgYm9vbGVhbjtcbiAgQElucHV0KCkgZ2V0IG56U2hvd1RpbWUoKTogb2JqZWN0IHwgYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dUaW1lO1xuICB9XG4gIHNldCBuelNob3dUaW1lKHZhbHVlOiBvYmplY3QgfCBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1RpbWUgPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PayA9IG5ldyBFdmVudEVtaXR0ZXI8Q29tcGF0aWJsZURhdGUgfCBudWxsPigpO1xuXG4gIGdldCByZWFsU2hvd1RvZGF5KCk6IGJvb2xlYW4ge1xuICAgIC8vIFJhbmdlIG5vdCBzdXBwb3J0IG56U2hvd1RvZGF5IGN1cnJlbnRseVxuICAgIHJldHVybiAhdGhpcy5pc1JhbmdlICYmIHRoaXMubnpTaG93VG9kYXk7XG4gIH1cblxuICBwaWNrZXJTdHlsZTogb2JqZWN0OyAvLyBGaW5hbCBwaWNrZXIgc3R5bGUgdGhhdCBjb250YWlucyB3aWR0aCBmaXggY29ycmVjdGlvbnMgZXRjLlxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIGRhdGVIZWxwZXI6IERhdGVIZWxwZXJTZXJ2aWNlLFxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxuICApIHtcbiAgICBzdXBlcihpMThuLCBjZHIsIGRhdGVIZWxwZXIsIG5vQW5pbWF0aW9uKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25Jbml0KCk7XG5cbiAgICAvLyBEZWZhdWx0IGZvcm1hdCB3aGVuIGl0J3MgZW1wdHlcbiAgICBpZiAoIXRoaXMubnpGb3JtYXQpIHtcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrKSB7XG4gICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGUgPyAneXl5eS13dycgOiAnWVlZWS1XVyc7IC8vIEZvcm1hdCBmb3Igd2Vla1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSkge1xuICAgICAgICAgIHRoaXMubnpGb3JtYXQgPSB0aGlzLm56U2hvd1RpbWUgPyAneXl5eS1NTS1kZCBISDptbTpzcycgOiAneXl5eS1NTS1kZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5uekZvcm1hdCA9IHRoaXMubnpTaG93VGltZSA/ICdZWVlZLU1NLUREIEhIOm1tOnNzJyA6ICdZWVlZLU1NLUREJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcblxuICAgIGlmIChjaGFuZ2VzLm56UmVuZGVyRXh0cmFGb290ZXIpIHtcbiAgICAgIHRoaXMuZXh0cmFGb290ZXIgPSB2YWx1ZUZ1bmN0aW9uUHJvcCh0aGlzLm56UmVuZGVyRXh0cmFGb290ZXIpO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56U2hvd1RpbWUgfHwgY2hhbmdlcy5uelN0eWxlKSB7XG4gICAgICB0aGlzLnNldEZpeGVkUGlja2VyU3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJZiBoYXMgbm8gdGltZXBpY2tlciBhbmQgdGhlIHVzZXIgc2VsZWN0IGEgZGF0ZSBieSBkYXRlIHBhbmVsLCB0aGVuIGNsb3NlIHBpY2tlclxuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBzdXBlci5vblZhbHVlQ2hhbmdlKHZhbHVlKTtcblxuICAgIGlmICghdGhpcy5uelNob3dUaW1lKSB7XG4gICAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVtaXQgbnpPbkNhbGVuZGFyQ2hhbmdlIHdoZW4gc2VsZWN0IGRhdGUgYnkgbnotcmFuZ2UtcGlja2VyXG4gIG9uQ2FsZW5kYXJDaGFuZ2UodmFsdWU6IENhbmR5RGF0ZVtdKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgY29uc3QgcmFuZ2VWYWx1ZSA9IHZhbHVlLm1hcCh4ID0+IHgubmF0aXZlRGF0ZSk7XG4gICAgICB0aGlzLm56T25DYWxlbmRhckNoYW5nZS5lbWl0KHJhbmdlVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVtaXR0ZWQgd2hlbiBkb25lIHdpdGggZGF0ZSBzZWxlY3RpbmdcbiAgb25SZXN1bHRPaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGVbXTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbdmFsdWVbMF0ubmF0aXZlRGF0ZSwgdmFsdWVbMV0ubmF0aXZlRGF0ZV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdChbXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56VmFsdWUpIHtcbiAgICAgICAgdGhpcy5uek9uT2suZW1pdCgodGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56T25Pay5lbWl0KG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xuICB9XG5cbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gIH1cblxuICAvLyBTZXR1cCBmaXhlZCBzdHlsZSBmb3IgcGlja2VyXG4gIHByaXZhdGUgc2V0Rml4ZWRQaWNrZXJTdHlsZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93VGltZUZpeGVzOiB7IHdpZHRoPzogc3RyaW5nIH0gPSB7fTtcbiAgICBpZiAodGhpcy5uelNob3dUaW1lKSB7XG4gICAgICBzaG93VGltZUZpeGVzLndpZHRoID0gdGhpcy5pc1JhbmdlID8gJzM1MHB4JyA6ICcxOTVweCc7XG4gICAgfVxuXG4gICAgdGhpcy5waWNrZXJTdHlsZSA9IHsgLi4uc2hvd1RpbWVGaXhlcywgLi4udGhpcy5uelN0eWxlIH07XG4gIH1cbn1cbiJdfQ==