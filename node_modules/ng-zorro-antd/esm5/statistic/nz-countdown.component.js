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
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';
import { REFRESH_INTERVAL } from './nz-statistic-definitions';
import { NzStatisticComponent } from './nz-statistic.component';
var NzCountdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzCountdownComponent, _super);
    function NzCountdownComponent(cdr, ngZone, platform) {
        var _this = _super.call(this) || this;
        _this.cdr = cdr;
        _this.ngZone = ngZone;
        _this.platform = platform;
        /**
         * @override
         */
        _this.nzFormat = 'HH:mm:ss';
        return _this;
    }
    /** @override */
    /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnChanges = /**
     * @override
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzValue) {
            this.target = Number(changes.nzValue.currentValue);
            if (!changes.nzValue.isFirstChange()) {
                this.syncTimer();
            }
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.syncTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stopTimer();
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.syncTimer = /**
     * @return {?}
     */
    function () {
        if (this.target >= Date.now()) {
            this.startTimer();
        }
        else {
            this.stopTimer();
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.startTimer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.stopTimer();
                _this.updater_ = interval(REFRESH_INTERVAL).subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.updateValue();
                    _this.cdr.detectChanges();
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzCountdownComponent.prototype.stopTimer = /**
     * @return {?}
     */
    function () {
        if (this.updater_) {
            this.updater_.unsubscribe();
            this.updater_ = null;
        }
    };
    /**
     * Update time that should be displayed on the screen.
     */
    /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    NzCountdownComponent.prototype.updateValue = /**
     * Update time that should be displayed on the screen.
     * @protected
     * @return {?}
     */
    function () {
        this.diff = Math.max(this.target - Date.now(), 0);
        if (this.diff === 0) {
            this.stopTimer();
        }
    };
    NzCountdownComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-countdown',
                    exportAs: 'nzCountdown',
                    template: "<nz-statistic\n  [nzValue]=\"diff\"\n  [nzValueStyle]=\"nzValueStyle\"\n  [nzValueTemplate]=\"nzValueTemplate || countDownTpl\"\n  [nzTitle]=\"nzTitle\"\n  [nzPrefix]=\"nzPrefix\"\n  [nzSuffix]=\"nzSuffix\">\n</nz-statistic>\n\n<ng-template #countDownTpl>{{ diff | nzTimeRange: nzFormat }}</ng-template>"
                }] }
    ];
    /** @nocollapse */
    NzCountdownComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzCountdownComponent.propDecorators = {
        nzFormat: [{ type: Input }]
    };
    return NzCountdownComponent;
}(NzStatisticComponent));
export { NzCountdownComponent };
if (false) {
    /**
     * @override
     * @type {?}
     */
    NzCountdownComponent.prototype.nzFormat;
    /** @type {?} */
    NzCountdownComponent.prototype.diff;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.target;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.updater_;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzCountdownComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotY291bnRkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBS04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFO0lBTzBDLGdEQUFvQjtJQVM1RCw4QkFBb0IsR0FBc0IsRUFBVSxNQUFjLEVBQVUsUUFBa0I7UUFBOUYsWUFDRSxpQkFBTyxTQUNSO1FBRm1CLFNBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVEsR0FBUixRQUFRLENBQVU7Ozs7UUFQckYsY0FBUSxHQUFXLFVBQVUsQ0FBQzs7SUFTdkMsQ0FBQztJQUVELGdCQUFnQjs7Ozs7O0lBQ2hCLDBDQUFXOzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztJQUVELHlDQUFVOzs7SUFBVjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQjs7O1lBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTOzs7Z0JBQUM7b0JBQ25ELEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztJQUVELHdDQUFTOzs7SUFBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDTywwQ0FBVzs7Ozs7SUFBckI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDOztnQkExRUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLFFBQVEsRUFBRSxhQUFhO29CQUN2QiwyVEFBNEM7aUJBQzdDOzs7O2dCQXJCQyxpQkFBaUI7Z0JBR2pCLE1BQU07Z0JBTkMsUUFBUTs7OzJCQTJCZCxLQUFLOztJQWtFUiwyQkFBQztDQUFBLEFBM0VELENBTzBDLG9CQUFvQixHQW9FN0Q7U0FwRVksb0JBQW9COzs7Ozs7SUFFL0Isd0NBQXVDOztJQUV2QyxvQ0FBYTs7Ozs7SUFFYixzQ0FBdUI7Ozs7O0lBQ3ZCLHdDQUFzQzs7Ozs7SUFFMUIsbUNBQThCOzs7OztJQUFFLHNDQUFzQjs7Ozs7SUFBRSx3Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaW50ZXJ2YWwsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBSRUZSRVNIX0lOVEVSVkFMIH0gZnJvbSAnLi9uei1zdGF0aXN0aWMtZGVmaW5pdGlvbnMnO1xuaW1wb3J0IHsgTnpTdGF0aXN0aWNDb21wb25lbnQgfSBmcm9tICcuL256LXN0YXRpc3RpYy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotY291bnRkb3duJyxcbiAgZXhwb3J0QXM6ICduekNvdW50ZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jb3VudGRvd24uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Q291bnRkb3duQ29tcG9uZW50IGV4dGVuZHMgTnpTdGF0aXN0aWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nID0gJ0hIOm1tOnNzJztcblxuICBkaWZmOiBudW1iZXI7XG5cbiAgcHJpdmF0ZSB0YXJnZXQ6IG51bWJlcjtcbiAgcHJpdmF0ZSB1cGRhdGVyXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VmFsdWUpIHtcbiAgICAgIHRoaXMudGFyZ2V0ID0gTnVtYmVyKGNoYW5nZXMubnpWYWx1ZS5jdXJyZW50VmFsdWUpO1xuICAgICAgaWYgKCFjaGFuZ2VzLm56VmFsdWUuaXNGaXJzdENoYW5nZSgpKSB7XG4gICAgICAgIHRoaXMuc3luY1RpbWVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zeW5jVGltZXIoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gIH1cblxuICBzeW5jVGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGFyZ2V0ID49IERhdGUubm93KCkpIHtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICAgIHRoaXMudXBkYXRlcl8gPSBpbnRlcnZhbChSRUZSRVNIX0lOVEVSVkFMKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnVwZGF0ZXJfKSB7XG4gICAgICB0aGlzLnVwZGF0ZXJfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnVwZGF0ZXJfID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHRpbWUgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW4uXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5kaWZmID0gTWF0aC5tYXgodGhpcy50YXJnZXQgLSBEYXRlLm5vdygpLCAwKTtcblxuICAgIGlmICh0aGlzLmRpZmYgPT09IDApIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgfVxuICB9XG59XG4iXX0=