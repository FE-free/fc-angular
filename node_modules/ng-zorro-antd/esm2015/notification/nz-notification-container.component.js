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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
export class NzNotificationContainerComponent extends NzMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, defaultConfig, config) {
        super(cdr, defaultConfig, config);
        /**
         * @override
         */
        this.messages = [];
    }
    /**
     * @override
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        /** @type {?} */
        const newConfig = (this.config = Object.assign({}, this.config, config));
        /** @type {?} */
        const placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    }
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    createMessage(notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        const key = notification.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        msg => msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey));
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
    }
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    }
}
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
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBFLE9BQU8sRUFBd0Isc0JBQXNCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVd4SCxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMkJBQTJCOzs7Ozs7SUFTL0UsWUFDRSxHQUFzQixFQUM4QixhQUFtQyxFQUMzQyxNQUE0QjtRQUV4RSxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztRQVBwQyxhQUFRLEdBQThDLEVBQUUsQ0FBQztJQVF6RCxDQUFDOzs7Ozs7SUFLRCxTQUFTLENBQUMsTUFBNEI7O2NBQzlCLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLHFCQUFRLElBQUksQ0FBQyxNQUFNLEVBQUssTUFBTSxDQUFFLENBQUM7O2NBQ3pELFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7UUFFekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxZQUFZLElBQUksU0FBUyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWhILElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7O0lBU0QsYUFBYSxDQUFDLFlBQXNDO1FBQ2xELFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RSxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7O2NBQ3hDLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUs7O2NBQ2hDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUNoRCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsbUJBQUEsWUFBWSxDQUFDLE9BQU8sRUFBdUMsQ0FBQyxDQUFDLEtBQUssRUFDakc7UUFFRCxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsRUFBRTtZQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFBLFlBQVksRUFBc0MsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsR0FBNkIsRUFBRSxJQUE4QjtRQUN2RixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDRxQkFBeUQ7YUFDMUQ7Ozs7WUFyQkMsaUJBQWlCOzRDQWlDZCxRQUFRLFlBQUksTUFBTSxTQUFDLDhCQUE4Qjs0Q0FDakQsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7Ozs7SUFYNUMsa0RBQXVDOztJQUN2QyxrREFBc0I7Ozs7O0lBS3RCLG9EQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcblxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db25maWcsIE5aX05PVElGSUNBVElPTl9DT05GSUcsIE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQsIE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1ub3RpZmljYXRpb24tY29udGFpbmVyJyxcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbkNvbnRhaW5lcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQge1xuICBjb25maWc6IFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uQ29uZmlnPjtcbiAgYm90dG9tOiBzdHJpbmcgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIG1lc3NhZ2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ+PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTk9USUZJQ0FUSU9OX0NPTkZJRykgY29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZ1xuICApIHtcbiAgICBzdXBlcihjZHIsIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBzZXRDb25maWcoY29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZyk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9ICh0aGlzLmNvbmZpZyA9IHsgLi4udGhpcy5jb25maWcsIC4uLmNvbmZpZyB9KTtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmNvbmZpZy5uelBsYWNlbWVudDtcblxuICAgIHRoaXMudG9wID0gcGxhY2VtZW50ID09PSAndG9wTGVmdCcgfHwgcGxhY2VtZW50ID09PSAndG9wUmlnaHQnID8gdG9Dc3NQaXhlbChuZXdDb25maWcubnpUb3ApIDogbnVsbDtcbiAgICB0aGlzLmJvdHRvbSA9IHBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbVJpZ2h0JyA/IHRvQ3NzUGl4ZWwobmV3Q29uZmlnLm56Qm90dG9tKSA6IG51bGw7XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uLlxuICAgKiBJZiB0aGVyZSdzIGEgbm90aWZpY2F0aW9uIHdob3NlIGBuektleWAgaXMgc2FtZSB3aXRoIGBuektleWAgaW4gYE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZGAsXG4gICAqIHJlcGxhY2UgaXRzIGNvbnRlbnQgaW5zdGVhZCBvZiBjcmVhdGUgYSBuZXcgb25lLlxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxuICAgKi9cbiAgY3JlYXRlTWVzc2FnZShub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCk6IHZvaWQge1xuICAgIG5vdGlmaWNhdGlvbi5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhub3RpZmljYXRpb24ub3B0aW9ucyk7XG4gICAgbm90aWZpY2F0aW9uLm9uQ2xvc2UgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICAgIGNvbnN0IGtleSA9IG5vdGlmaWNhdGlvbi5vcHRpb25zLm56S2V5O1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5ID0gdGhpcy5tZXNzYWdlcy5maW5kKFxuICAgICAgbXNnID0+IG1zZy5vcHRpb25zLm56S2V5ID09PSAobm90aWZpY2F0aW9uLm9wdGlvbnMgYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucz4pLm56S2V5XG4gICAgKTtcblxuICAgIGlmIChrZXkgJiYgbm90aWZpY2F0aW9uV2l0aFNhbWVLZXkpIHtcbiAgICAgIHRoaXMucmVwbGFjZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25XaXRoU2FtZUtleSwgbm90aWZpY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID49IHRoaXMuY29uZmlnLm56TWF4U3RhY2spIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XG4gICAgICB9XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobm90aWZpY2F0aW9uIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZD4pO1xuICAgIH1cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIHJlcGxhY2VOb3RpZmljYXRpb24ob2xkOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQsIF9uZXc6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCk6IHZvaWQge1xuICAgIG9sZC50aXRsZSA9IF9uZXcudGl0bGU7XG4gICAgb2xkLmNvbnRlbnQgPSBfbmV3LmNvbnRlbnQ7XG4gICAgb2xkLnRlbXBsYXRlID0gX25ldy50ZW1wbGF0ZTtcbiAgICBvbGQudHlwZSA9IF9uZXcudHlwZTtcbiAgfVxufVxuIl19