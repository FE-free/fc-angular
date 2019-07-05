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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, defaultConfig, config) {
        var _this = _super.call(this, cdr, defaultConfig, config) || this;
        /**
         * @override
         */
        _this.messages = [];
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @param {?} config
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.setConfig = /**
     * @override
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var newConfig = (this.config = tslib_1.__assign({}, this.config, config));
        /** @type {?} */
        var placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    };
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.createMessage = /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        var key = notification.options.nzKey;
        /** @type {?} */
        var notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push((/** @type {?} */ (notification)));
        }
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.replaceNotification = /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    };
    NzNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification-container',
                    exportAs: 'nzNotificationContainer',
                    preserveWhitespaces: false,
                    template: "<div\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\n  [style.top]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'topRight') ? top : null\"\n  [style.bottom]=\"(config.nzPlacement === 'bottomLeft' || config.nzPlacement === 'bottomRight') ? bottom : null\"\n  [style.right]=\"(config.nzPlacement === 'bottomRight' || config.nzPlacement === 'topRight') ? '0px' : null\"\n  [style.left]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'bottomLeft') ? '0px' : null\">\n  <nz-notification\n    *ngFor=\"let message of messages; let i = index\"\n    [nzMessage]=\"message\"\n    [nzIndex]=\"i\">\n  </nz-notification>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
    ]; };
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));
export { NzNotificationContainerComponent };
if (false) {
    /** @type {?} */
    NzNotificationContainerComponent.prototype.config;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottom;
    /**
     * @override
     * @type {?}
     */
    NzNotificationContainerComponent.prototype.messages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRSxPQUFPLEVBQXdCLHNCQUFzQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHeEg7SUFRc0QsNERBQTJCO0lBUy9FLDBDQUNFLEdBQXNCLEVBQzhCLGFBQW1DLEVBQzNDLE1BQTRCO1FBSDFFLFlBS0Usa0JBQU0sR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsU0FDbEM7Ozs7UUFSRCxjQUFRLEdBQThDLEVBQUUsQ0FBQzs7SUFRekQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxvREFBUzs7Ozs7SUFBVCxVQUFVLE1BQTRCOztZQUM5QixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSx3QkFBUSxJQUFJLENBQUMsTUFBTSxFQUFLLE1BQU0sQ0FBRSxDQUFDOztZQUN6RCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1FBRXpDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEtBQUssWUFBWSxJQUFJLFNBQVMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVoSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHdEQUFhOzs7Ozs7OztJQUFiLFVBQWMsWUFBc0M7UUFDbEQsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQzs7WUFDeEMsR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSzs7WUFDaEMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQ2hELFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxtQkFBQSxZQUFZLENBQUMsT0FBTyxFQUF1QyxDQUFDLENBQUMsS0FBSyxFQUF6RixDQUF5RixFQUNqRztRQUVELElBQUksR0FBRyxJQUFJLHVCQUF1QixFQUFFO1lBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQUEsWUFBWSxFQUFzQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFTyw4REFBbUI7Ozs7OztJQUEzQixVQUE0QixHQUE2QixFQUFFLElBQThCO1FBQ3ZGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsNHFCQUF5RDtpQkFDMUQ7Ozs7Z0JBckJDLGlCQUFpQjtnREFpQ2QsUUFBUSxZQUFJLE1BQU0sU0FBQyw4QkFBOEI7Z0RBQ2pELFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOztJQWtEOUMsdUNBQUM7Q0FBQSxBQXRFRCxDQVFzRCwyQkFBMkIsR0E4RGhGO1NBOURZLGdDQUFnQzs7O0lBQzNDLGtEQUF1Qzs7SUFDdkMsa0RBQXNCOzs7OztJQUt0QixvREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29uZmlnLCBOWl9OT1RJRklDQVRJT05fQ09ORklHLCBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1ub3RpZmljYXRpb24uZGVmaW5pdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXG4gIGV4cG9ydEFzOiAnbnpOb3RpZmljYXRpb25Db250YWluZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgY29uZmlnOiBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkNvbmZpZz47XG4gIGJvdHRvbTogc3RyaW5nIHwgbnVsbDtcblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBtZXNzYWdlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhRmlsbGVkPj4gPSBbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTk9USUZJQ0FUSU9OX0RFRkFVTFRfQ09ORklHKSBkZWZhdWx0Q29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9DT05GSUcpIGNvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWdcbiAgKSB7XG4gICAgc3VwZXIoY2RyLCBkZWZhdWx0Q29uZmlnLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgc2V0Q29uZmlnKGNvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWcpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdDb25maWcgPSAodGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfSk7XG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5jb25maWcubnpQbGFjZW1lbnQ7XG5cbiAgICB0aGlzLnRvcCA9IHBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ3RvcFJpZ2h0JyA/IHRvQ3NzUGl4ZWwobmV3Q29uZmlnLm56VG9wKSA6IG51bGw7XG4gICAgdGhpcy5ib3R0b20gPSBwbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgPyB0b0Nzc1BpeGVsKG5ld0NvbmZpZy5uekJvdHRvbSkgOiBudWxsO1xuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgbmV3IG5vdGlmaWNhdGlvbi5cbiAgICogSWYgdGhlcmUncyBhIG5vdGlmaWNhdGlvbiB3aG9zZSBgbnpLZXlgIGlzIHNhbWUgd2l0aCBgbnpLZXlgIGluIGBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWRgLFxuICAgKiByZXBsYWNlIGl0cyBjb250ZW50IGluc3RlYWQgb2YgY3JlYXRlIGEgbmV3IG9uZS5cbiAgICogQG92ZXJyaWRlXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb25cbiAgICovXG4gIGNyZWF0ZU1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcbiAgICBub3RpZmljYXRpb24ub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobm90aWZpY2F0aW9uLm9wdGlvbnMpO1xuICAgIG5vdGlmaWNhdGlvbi5vbkNsb3NlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgICBjb25zdCBrZXkgPSBub3RpZmljYXRpb24ub3B0aW9ucy5uektleTtcbiAgICBjb25zdCBub3RpZmljYXRpb25XaXRoU2FtZUtleSA9IHRoaXMubWVzc2FnZXMuZmluZChcbiAgICAgIG1zZyA9PiBtc2cub3B0aW9ucy5uektleSA9PT0gKG5vdGlmaWNhdGlvbi5vcHRpb25zIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnM+KS5uektleVxuICAgICk7XG5cbiAgICBpZiAoa2V5ICYmIG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5KSB7XG4gICAgICB0aGlzLnJlcGxhY2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uV2l0aFNhbWVLZXksIG5vdGlmaWNhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5uek1heFN0YWNrKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xuICAgICAgfVxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5vdGlmaWNhdGlvbiBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ+KTtcbiAgICB9XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBsYWNlTm90aWZpY2F0aW9uKG9sZDogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkLCBfbmV3OiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcbiAgICBvbGQudGl0bGUgPSBfbmV3LnRpdGxlO1xuICAgIG9sZC5jb250ZW50ID0gX25ldy5jb250ZW50O1xuICAgIG9sZC50ZW1wbGF0ZSA9IF9uZXcudGVtcGxhdGU7XG4gICAgb2xkLnR5cGUgPSBfbmV3LnR5cGU7XG4gIH1cbn1cbiJdfQ==