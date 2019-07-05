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
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveRenderer } from './nz-wave-renderer';
/**
 * @record
 */
export function NzWaveConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
export var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
export var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
var NzWaveDirective = /** @class */ (function () {
    function NzWaveDirective(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.config = config;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        this.waveDisabled = this.isConfigDisabled();
    }
    Object.defineProperty(NzWaveDirective.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzWaveDirective.prototype, "rendererRef", {
        get: /**
         * @return {?}
         */
        function () {
            return this.waveRenderer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.isConfigDisabled = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var disabled = false;
        if (this.config && typeof this.config.disabled === 'boolean') {
            disabled = this.config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            disabled = true;
        }
        return disabled;
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderWaveIfEnabled();
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.renderWaveIfEnabled = /**
     * @return {?}
     */
    function () {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.disable = /**
     * @return {?}
     */
    function () {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    };
    /**
     * @return {?}
     */
    NzWaveDirective.prototype.enable = /**
     * @return {?}
     */
    function () {
        // config priority
        this.waveDisabled = this.isConfigDisabled() || false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
    };
    NzWaveDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-wave]',
                    exportAs: 'nzWave'
                },] }
    ];
    /** @nocollapse */
    NzWaveDirective.ctorParameters = function () { return [
        { type: NgZone },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
    ]; };
    NzWaveDirective.propDecorators = {
        nzWaveExtraNode: [{ type: Input }]
    };
    return NzWaveDirective;
}());
export { NzWaveDirective };
if (false) {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveRenderer;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveDisabled;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.config;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ3YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQsa0NBRUM7OztJQURDLGdDQUFtQjs7O0FBR3JCLE1BQU0sS0FBTyw2QkFBNkIsR0FBaUI7SUFDekQsUUFBUSxFQUFFLEtBQUs7Q0FDaEI7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFlLHdCQUF3QixFQUFFO0lBQzlGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSw2QkFBNkI7Q0FDdkMsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSw2QkFBNkI7SUFDM0MsT0FBTyw2QkFBNkIsQ0FBQztBQUN2QyxDQUFDO0FBRUQ7SUFrQkUseUJBQ1UsTUFBYyxFQUNkLFVBQXNCLEVBQ3FCLE1BQW9CLEVBQ3BCLGFBQXFCO1FBSGhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3FCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFqQmpFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBR3pCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBZ0JwQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFmRCxzQkFBSSxxQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksd0NBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7OztJQVdELDBDQUFnQjs7O0lBQWhCOztZQUNNLFFBQVEsR0FBRyxLQUFLO1FBQ3BCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUM1RCxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDakM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLEVBQUU7WUFDM0MsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsNkNBQW1COzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtZQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQzFHO0lBQ0gsQ0FBQzs7OztJQUVELGlDQUFPOzs7SUFBUDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELGdDQUFNOzs7SUFBTjtRQUNFLGtCQUFrQjtRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEtBQUssQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQzs7Z0JBcEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQTVCQyxNQUFNO2dCQUpOLFVBQVU7Z0RBa0RQLFFBQVEsWUFBSSxNQUFNLFNBQUMscUJBQXFCOzZDQUN4QyxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjs7O2tDQWpCMUMsS0FBSzs7SUFnRVIsc0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWpFWSxlQUFlOzs7SUFDMUIsMENBQWlDOzs7OztJQUVqQyx1Q0FBcUM7Ozs7O0lBQ3JDLHVDQUFzQzs7Ozs7SUFXcEMsaUNBQXNCOzs7OztJQUN0QixxQ0FBOEI7Ozs7O0lBQzlCLGlDQUF1RTs7Ozs7SUFDdkUsd0NBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBJbmplY3Rpb25Ub2tlbixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQU5JTUFUSU9OX01PRFVMRV9UWVBFIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IE56V2F2ZVJlbmRlcmVyIH0gZnJvbSAnLi9uei13YXZlLXJlbmRlcmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBOeldhdmVDb25maWcge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBOWl9XQVZFX0dMT0JBTF9ERUZBVUxUX0NPTkZJRzogTnpXYXZlQ29uZmlnID0ge1xuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cbmV4cG9ydCBjb25zdCBOWl9XQVZFX0dMT0JBTF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpXYXZlQ29uZmlnPignbnotd2F2ZS1nbG9iYWwtb3B0aW9ucycsIHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICBmYWN0b3J5OiBOWl9XQVZFX0dMT0JBTF9DT05GSUdfRkFDVE9SWVxufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBOWl9XQVZFX0dMT0JBTF9DT05GSUdfRkFDVE9SWSgpOiBOeldhdmVDb25maWcge1xuICByZXR1cm4gTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuei13YXZlXScsXG4gIGV4cG9ydEFzOiAnbnpXYXZlJ1xufSlcbmV4cG9ydCBjbGFzcyBOeldhdmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56V2F2ZUV4dHJhTm9kZSA9IGZhbHNlO1xuXG4gIHByaXZhdGUgd2F2ZVJlbmRlcmVyOiBOeldhdmVSZW5kZXJlcjtcbiAgcHJpdmF0ZSB3YXZlRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2F2ZURpc2FibGVkO1xuICB9XG5cbiAgZ2V0IHJlbmRlcmVyUmVmKCk6IE56V2F2ZVJlbmRlcmVyIHtcbiAgICByZXR1cm4gdGhpcy53YXZlUmVuZGVyZXI7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX1dBVkVfR0xPQkFMX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IE56V2F2ZUNvbmZpZyxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHJpdmF0ZSBhbmltYXRpb25UeXBlOiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0aGlzLmlzQ29uZmlnRGlzYWJsZWQoKTtcbiAgfVxuXG4gIGlzQ29uZmlnRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgbGV0IGRpc2FibGVkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuY29uZmlnICYmIHR5cGVvZiB0aGlzLmNvbmZpZy5kaXNhYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBkaXNhYmxlZCA9IHRoaXMuY29uZmlnLmRpc2FibGVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5hbmltYXRpb25UeXBlID09PSAnTm9vcEFuaW1hdGlvbnMnKSB7XG4gICAgICBkaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiBkaXNhYmxlZDtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyV2F2ZUlmRW5hYmxlZCgpO1xuICB9XG5cbiAgcmVuZGVyV2F2ZUlmRW5hYmxlZCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMud2F2ZURpc2FibGVkICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLndhdmVSZW5kZXJlciA9IG5ldyBOeldhdmVSZW5kZXJlcih0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5uZ1pvbmUsIHRoaXMubnpXYXZlRXh0cmFOb2RlKTtcbiAgICB9XG4gIH1cblxuICBkaXNhYmxlKCk6IHZvaWQge1xuICAgIHRoaXMud2F2ZURpc2FibGVkID0gdHJ1ZTtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xuICAgICAgdGhpcy53YXZlUmVuZGVyZXIucmVtb3ZlU3R5bGVBbmRFeHRyYU5vZGUoKTtcbiAgICB9XG4gIH1cblxuICBlbmFibGUoKTogdm9pZCB7XG4gICAgLy8gY29uZmlnIHByaW9yaXR5XG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0aGlzLmlzQ29uZmlnRGlzYWJsZWQoKSB8fCBmYWxzZTtcbiAgICBpZiAodGhpcy53YXZlUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLmJpbmRUcmlnZ2VyRXZlbnQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==