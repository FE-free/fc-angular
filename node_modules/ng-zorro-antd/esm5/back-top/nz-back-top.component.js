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
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Inject, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fadeMotion, toNumber, NzScrollService } from 'ng-zorro-antd/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
var NzBackTopComponent = /** @class */ (function () {
    function NzBackTopComponent(scrollSrv, doc, platform, cd) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.platform = platform;
        this.cd = cd;
        this.scroll$ = null;
        this.target = null;
        this.visible = false;
        this._visibilityHeight = 400;
        this.nzClick = new EventEmitter();
    }
    Object.defineProperty(NzBackTopComponent.prototype, "nzVisibilityHeight", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visibilityHeight;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._visibilityHeight = toNumber(value, 400);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzBackTopComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.scroll$) {
            this.registerScrollEvent();
        }
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.clickBackTop = /**
     * @return {?}
     */
    function () {
        this.scrollSrv.scrollTo(this.getTarget(), 0);
        this.nzClick.emit(true);
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.getTarget = /**
     * @private
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.handleScroll = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.visible === this.scrollSrv.getScroll(this.getTarget()) > this.nzVisibilityHeight) {
            return;
        }
        this.visible = !this.visible;
        this.cd.markForCheck();
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.removeListen = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzBackTopComponent.prototype.registerScrollEvent = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.platform.isBrowser) {
            return;
        }
        this.removeListen();
        this.handleScroll();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.handleScroll(); }));
    };
    /**
     * @return {?}
     */
    NzBackTopComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    NzBackTopComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-back-top',
                    exportAs: 'nzBackTop',
                    animations: [fadeMotion],
                    template: "<div class=\"ant-back-top\" (click)=\"clickBackTop()\" @fadeMotion *ngIf=\"visible\">\n  <ng-template #defaultContent>\n    <div class=\"ant-back-top-content\">\n      <div class=\"ant-back-top-icon\"></div>\n    </div>\n  </ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzTemplate || defaultContent\"></ng-template>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false
                }] }
    ];
    /** @nocollapse */
    NzBackTopComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Platform },
        { type: ChangeDetectorRef }
    ]; };
    NzBackTopComponent.propDecorators = {
        nzTemplate: [{ type: Input }],
        nzVisibilityHeight: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }]
    };
    return NzBackTopComponent;
}());
export { NzBackTopComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scroll$;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.target;
    /** @type {?} */
    NzBackTopComponent.prototype.visible;
    /** @type {?} */
    NzBackTopComponent.prototype.nzTemplate;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype._visibilityHeight;
    /** @type {?} */
    NzBackTopComponent.prototype.nzClick;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.scrollSrv;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.doc;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    NzBackTopComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9iYWNrLXRvcC8iLCJzb3VyY2VzIjpbIm56LWJhY2stdG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVwRTtJQW9DRSw0QkFDVSxTQUEwQixFQUVSLEdBQVEsRUFDMUIsUUFBa0IsRUFDbEIsRUFBcUI7UUFKckIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFFUixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQzFCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUEvQnZCLFlBQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3BDLFdBQU0sR0FBdUIsSUFBSSxDQUFDO1FBRTFDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFJakIsc0JBQWlCLEdBQVcsR0FBRyxDQUFDO1FBaUJyQixZQUFPLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFRcEUsQ0FBQztJQXZCSixzQkFDSSxrREFBa0I7Ozs7UUFJdEI7WUFDRSxPQUFPLElB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d0RULHlCQUFDO0NBQUEsQUExRkQsSUEwRkM7U0FqRlksa0JBQWtCOzs7Ozs7SUFDN0IscUNBQTRDOzs7OztJQUM1QyxvQ0FBMEM7O0lBRTFDLHFDQUF5Qjs7SUFFekIsd0NBQXVDOzs7OztJQUV2QywrQ0FBd0M7O0lBaUJ4QyxxQ0FBdUU7Ozs7O0lBR3JFLHVDQUFrQzs7Ozs7SUFFbEMsaUNBQWtDOzs7OztJQUNsQyxzQ0FBMEI7Ozs7O0lBQzFCLGdDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGZhZGVNb3Rpb24sIHRvTnVtYmVyLCBOelNjcm9sbFNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0aHJvdHRsZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWJhY2stdG9wJyxcbiAgZXhwb3J0QXM6ICduekJhY2tUb3AnLFxuICBhbmltYXRpb25zOiBbZmFkZU1vdGlvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1iYWNrLXRvcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZVxufSlcbmV4cG9ydCBjbGFzcyBOekJhY2tUb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc2Nyb2xsJDogU3Vic2NyaXB0aW9uIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgdGFyZ2V0OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKSBuelRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBwcml2YXRlIF92aXNpYmlsaXR5SGVpZ2h0OiBudW1iZXIgPSA0MDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmlzaWJpbGl0eUhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmlzaWJpbGl0eUhlaWdodCA9IHRvTnVtYmVyKHZhbHVlLCA0MDApO1xuICB9XG5cbiAgZ2V0IG56VmlzaWJpbGl0eUhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmlsaXR5SGVpZ2h0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VGFyZ2V0KGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIGVsID09PSAnc3RyaW5nJyA/IHRoaXMuZG9jLnF1ZXJ5U2VsZWN0b3IoZWwpIDogZWw7XG4gICAgdGhpcy5yZWdpc3RlclNjcm9sbEV2ZW50KCk7XG4gIH1cblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jOiBhbnksXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zY3JvbGwkKSB7XG4gICAgICB0aGlzLnJlZ2lzdGVyU2Nyb2xsRXZlbnQoKTtcbiAgICB9XG4gIH1cblxuICBjbGlja0JhY2tUb3AoKTogdm9pZCB7XG4gICAgdGhpcy5zY3JvbGxTcnYuc2Nyb2xsVG8odGhpcy5nZXRUYXJnZXQoKSwgMCk7XG4gICAgdGhpcy5uekNsaWNrLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldCgpOiBIVE1MRWxlbWVudCB8IFdpbmRvdyB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0IHx8IHdpbmRvdztcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2Nyb2xsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZpc2libGUgPT09IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0aGlzLmdldFRhcmdldCgpKSA+IHRoaXMubnpWaXNpYmlsaXR5SGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmlzaWJsZSA9ICF0aGlzLnZpc2libGU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlTGlzdGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNjcm9sbCQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsJC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gICAgdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICB0aGlzLnNjcm9sbCQgPSBmcm9tRXZlbnQodGhpcy5nZXRUYXJnZXQoKSwgJ3Njcm9sbCcpXG4gICAgICAucGlwZShcbiAgICAgICAgdGhyb3R0bGVUaW1lKDUwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmhhbmRsZVNjcm9sbCgpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuKCk7XG4gIH1cbn1cbiJdfQ==