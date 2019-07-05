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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { moveUpMotion } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
var NzMessageComponent = /** @class */ (function () {
    function NzMessageComponent(_messageContainer, cdr) {
        this._messageContainer = _messageContainer;
        this.cdr = cdr;
        // Whether to set a timeout to destroy itself.
        this._eraseTimer = null;
    }
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // `NzMessageContainer` does its job so all properties cannot be undefined.
        this._options = (/** @type {?} */ (this.nzMessage.options));
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'enter';
        }
        this._autoErase = this._options.nzDuration > 0;
        if (this._autoErase) {
            this._initErase();
            this._startEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._clearEraseTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._clearEraseTimeout();
            this._updateTTL();
        }
    };
    /**
     * @return {?}
     */
    NzMessageComponent.prototype.onLeave = /**
     * @return {?}
     */
    function () {
        if (this._autoErase && this._options.nzPauseOnHover) {
            this._startEraseTimeout();
        }
    };
    // Remove self
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    NzMessageComponent.prototype._destroy = 
    // Remove self
    /**
     * @protected
     * @param {?=} userAction
     * @return {?}
     */
    function (userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        if (this._options.nzAnimate) {
            this.nzMessage.state = 'leave';
            this.cdr.detectChanges();
            setTimeout((/**
             * @return {?}
             */
            function () { return _this._messageContainer.removeMessage(_this.nzMessage.messageId, userAction); }), 200);
        }
        else {
            this._messageContainer.removeMessage(this.nzMessage.messageId, userAction);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._initErase = /**
     * @private
     * @return {?}
     */
    function () {
        this._eraseTTL = this._options.nzDuration;
        this._eraseTimingStart = Date.now();
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._updateTTL = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._autoErase) {
            this._eraseTTL -= Date.now() - this._eraseTimingStart;
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._startEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._eraseTTL > 0) {
            this._clearEraseTimeout();
            this._eraseTimer = setTimeout((/**
             * @return {?}
             */
            function () { return _this._destroy(); }), this._eraseTTL);
            this._eraseTimingStart = Date.now();
        }
        else {
            this._destroy();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzMessageComponent.prototype._clearEraseTimeout = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._eraseTimer !== null) {
            clearTimeout(this._eraseTimer);
            this._eraseTimer = null;
        }
    };
    NzMessageComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message',
                    exportAs: 'nzMessage',
                    preserveWhitespaces: false,
                    animations: [moveUpMotion],
                    template: "<div class=\"ant-message-notice\"\n  [@moveUpMotion]=\"nzMessage.state\"\n  (mouseenter)=\"onEnter()\"\n  (mouseleave)=\"onLeave()\">\n  <div class=\"ant-message-notice-content\">\n    <div class=\"ant-message-custom-content\" [ngClass]=\"'ant-message-' + nzMessage.type\">\n      <ng-container [ngSwitch]=\"nzMessage.type\">\n        <i *ngSwitchCase=\"'success'\" nz-icon nzType=\"check-circle\"></i>\n        <i *ngSwitchCase=\"'info'\"  nz-icon nzType=\"info-circle\"></i>\n        <i *ngSwitchCase=\"'warning'\" nz-icon nzType=\"exclamation-circle\"></i>\n        <i *ngSwitchCase=\"'error'\" nz-icon nzType=\"close-circle\"></i>\n        <i *ngSwitchCase=\"'loading'\" nz-icon nzType=\"loading\"></i>\n      </ng-container>\n      <ng-container *nzStringTemplateOutlet=\"nzMessage.content\">\n        <span [innerHTML]=\"nzMessage.content\"></span>\n      </ng-container>\n    </div>\n  </div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    NzMessageComponent.ctorParameters = function () { return [
        { type: NzMessageContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzMessageComponent.propDecorators = {
        nzMessage: [{ type: Input }],
        nzIndex: [{ type: Input }]
    };
    return NzMessageComponent;
}());
export { NzMessageComponent };
if (false) {
    /** @type {?} */
    NzMessageComponent.prototype.nzMessage;
    /** @type {?} */
    NzMessageComponent.prototype.nzIndex;
    /**
     * @type {?}
     * @protected
     */
    NzMessageComponent.prototype._options;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._autoErase;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTimer;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTimingStart;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._eraseTTL;
    /**
     * @type {?}
     * @private
     */
    NzMessageComponent.prototype._messageContainer;
    /**
     * @type {?}
     * @protected
     */
    NzMessageComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL21lc3NhZ2UvIiwic291cmNlcyI6WyJuei1tZXNzYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxLQUFLLEVBR0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUcvRTtJQW9CRSw0QkFBb0IsaUJBQThDLEVBQVksR0FBc0I7UUFBaEYsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE2QjtRQUFZLFFBQUcsR0FBSCxHQUFHLENBQW1COztRQUo1RixnQkFBVyxHQUFrQixJQUFJLENBQUM7SUFJNkQsQ0FBQzs7OztJQUV4RyxxQ0FBUTs7O0lBQVI7UUFDRSwyRUFBMkU7UUFDM0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBa0MsQ0FBQztRQUV6RSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25C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OzRCQXVCaEIsS0FBSzswQkFDTCxLQUFLOztJQW9GUix5QkFBQztDQUFBLEFBL0ZELElBK0ZDO1NBdEZZLGtCQUFrQjs7O0lBQzdCLHVDQUF3Qzs7SUFDeEMscUNBQXlCOzs7OztJQUV6QixzQ0FBbUQ7Ozs7O0lBRW5ELHdDQUE0Qjs7Ozs7SUFDNUIseUNBQTBDOzs7OztJQUMxQywrQ0FBa0M7Ozs7O0lBQ2xDLHVDQUEwQjs7Ozs7SUFFZCwrQ0FBc0Q7Ozs7O0lBQUUsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBtb3ZlVXBNb3Rpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek1lc3NhZ2VEYXRhRmlsbGVkLCBOek1lc3NhZ2VEYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbWVzc2FnZS5kZWZpbml0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1tZXNzYWdlJyxcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2UnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9uczogW21vdmVVcE1vdGlvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZXNzYWdlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56TWVzc2FnZTogTnpNZXNzYWdlRGF0YUZpbGxlZDtcbiAgQElucHV0KCkgbnpJbmRleDogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBfb3B0aW9uczogUmVxdWlyZWQ8TnpNZXNzYWdlRGF0YU9wdGlvbnM+O1xuXG4gIHByaXZhdGUgX2F1dG9FcmFzZTogYm9vbGVhbjsgLy8gV2hldGhlciB0byBzZXQgYSB0aW1lb3V0IHRvIGRlc3Ryb3kgaXRzZWxmLlxuICBwcml2YXRlIF9lcmFzZVRpbWVyOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfZXJhc2VUaW1pbmdTdGFydDogbnVtYmVyO1xuICBwcml2YXRlIF9lcmFzZVRUTDogbnVtYmVyOyAvLyBUaW1lIHRvIGxpdmUuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZUNvbnRhaW5lcjogTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LCBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBgTnpNZXNzYWdlQ29udGFpbmVyYCBkb2VzIGl0cyBqb2Igc28gYWxsIHByb3BlcnRpZXMgY2Fubm90IGJlIHVuZGVmaW5lZC5cbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5uek1lc3NhZ2Uub3B0aW9ucyBhcyBSZXF1aXJlZDxOek1lc3NhZ2VEYXRhT3B0aW9ucz47XG5cbiAgICBpZiAodGhpcy5fb3B0aW9ucy5uekFuaW1hdGUpIHtcbiAgICAgIHRoaXMubnpNZXNzYWdlLnN0YXRlID0gJ2VudGVyJztcbiAgICB9XG5cbiAgICB0aGlzLl9hdXRvRXJhc2UgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb24gPiAwO1xuXG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xuICAgICAgdGhpcy5faW5pdEVyYXNlKCk7XG4gICAgICB0aGlzLl9zdGFydEVyYXNlVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UpIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XG4gICAgfVxuICB9XG5cbiAgb25FbnRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fYXV0b0VyYXNlICYmIHRoaXMuX29wdGlvbnMubnpQYXVzZU9uSG92ZXIpIHtcbiAgICAgIHRoaXMuX2NsZWFyRXJhc2VUaW1lb3V0KCk7XG4gICAgICB0aGlzLl91cGRhdGVUVEwoKTtcbiAgICB9XG4gIH1cblxuICBvbkxlYXZlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9hdXRvRXJhc2UgJiYgdGhpcy5fb3B0aW9ucy5uelBhdXNlT25Ib3Zlcikge1xuICAgICAgdGhpcy5fc3RhcnRFcmFzZVRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgc2VsZlxuICBwcm90ZWN0ZWQgX2Rlc3Ryb3kodXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29wdGlvbnMubnpBbmltYXRlKSB7XG4gICAgICB0aGlzLm56TWVzc2FnZS5zdGF0ZSA9ICdsZWF2ZSc7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX21lc3NhZ2VDb250YWluZXIucmVtb3ZlTWVzc2FnZSh0aGlzLm56TWVzc2FnZS5tZXNzYWdlSWQsIHVzZXJBY3Rpb24pLCAyMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9tZXNzYWdlQ29udGFpbmVyLnJlbW92ZU1lc3NhZ2UodGhpcy5uek1lc3NhZ2UubWVzc2FnZUlkLCB1c2VyQWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0RXJhc2UoKTogdm9pZCB7XG4gICAgdGhpcy5fZXJhc2VUVEwgPSB0aGlzLl9vcHRpb25zLm56RHVyYXRpb247XG4gICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVUVEwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2F1dG9FcmFzZSkge1xuICAgICAgdGhpcy5fZXJhc2VUVEwgLT0gRGF0ZS5ub3coKSAtIHRoaXMuX2VyYXNlVGltaW5nU3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRFcmFzZVRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VyYXNlVFRMID4gMCkge1xuICAgICAgdGhpcy5fY2xlYXJFcmFzZVRpbWVvdXQoKTtcbiAgICAgIHRoaXMuX2VyYXNlVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2Rlc3Ryb3koKSwgdGhpcy5fZXJhc2VUVEwpO1xuICAgICAgdGhpcy5fZXJhc2VUaW1pbmdTdGFydCA9IERhdGUubm93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbGVhckVyYXNlVGltZW91dCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZXJhc2VUaW1lciAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2VyYXNlVGltZXIpO1xuICAgICAgdGhpcy5fZXJhc2VUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=