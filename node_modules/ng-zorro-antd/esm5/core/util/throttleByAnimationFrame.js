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
// tslint:disable:no-any typedef no-invalid-this
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    var requestId;
    /** @type {?} */
    var later = (/**
     * @param {?} args
     * @return {?}
     */
    function (args) { return (/**
     * @return {?}
     */
    function () {
        requestId = null;
        fn.apply(void 0, tslib_1.__spread(args));
    }); });
    /** @type {?} */
    var throttled = (/**
     * @param {...?} args
     * @return {?}
     */
    function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    });
    // tslint:disable-next-line:no-non-null-assertion
    ((/** @type {?} */ (throttled))).cancel = (/**
     * @return {?}
     */
    function () { return cancelRequestAnimationFrame((/** @type {?} */ (requestId))); });
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return (/**
     * @param {?} target
     * @param {?} key
     * @param {?} descriptor
     * @return {?}
     */
    function (target, key, descriptor) {
        /** @type {?} */
        var fn = descriptor.value;
        /** @type {?} */
        var definingProperty = false;
        return {
            configurable: true,
            get: /**
             * @return {?}
             */
            function () {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFMUYsTUFBTSxDQUFDLE9BQU8sVUFBVSx3QkFBd0IsQ0FBQyxFQUFPOztRQUNsRCxTQUF3Qjs7UUFFdEIsS0FBSzs7OztJQUFHLFVBQUMsSUFBVzs7O0lBQUs7UUFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLGdDQUFJLElBQUksR0FBRTtJQUNkLENBQUMsSUFBQSxDQUFBOztRQUVLLFNBQVM7Ozs7SUFBRztRQUFDLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQy9CLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQyxDQUFBO0lBRUQsaURBQWlEO0lBQ2pELENBQUMsbUJBQUEsU0FBUyxFQUFPLENBQUMsQ0FBQyxNQUFNOzs7SUFBRyxjQUFNLE9BQUEsMkJBQTJCLENBQUMsbUJBQUEsU0FBUyxFQUFDLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQSxDQUFDO0lBRTFFLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsaUNBQWlDO0lBQy9DOzs7Ozs7SUFBTyxVQUFTLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBZTs7WUFDakQsRUFBRSxHQUFHLFVBQVUsQ0FBQyxLQUFLOztZQUN2QixnQkFBZ0IsR0FBRyxLQUFLO1FBQzVCLE9BQU87WUFDTCxZQUFZLEVBQUUsSUFBSTtZQUNsQixHQUFHOzs7O2dCQUNELElBQUksZ0JBQWdCLElBQUksSUFBSSxLQUFLLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDN0UsT0FBTyxFQUFFLENBQUM7aUJBQ1g7O29CQUVLLE9BQU8sR0FBRyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsS0FBSyxFQUFFLE9BQU87b0JBQ2QsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUM7U0FDRixDQUFDO0lBQ0osQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcbmltcG9ydCB7IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSwgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm46IGFueSkge1xuICBsZXQgcmVxdWVzdElkOiBudW1iZXIgfCBudWxsO1xuXG4gIGNvbnN0IGxhdGVyID0gKGFyZ3M6IGFueVtdKSA9PiAoKSA9PiB7XG4gICAgcmVxdWVzdElkID0gbnVsbDtcbiAgICBmbiguLi5hcmdzKTtcbiAgfTtcblxuICBjb25zdCB0aHJvdHRsZWQgPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAocmVxdWVzdElkID09IG51bGwpIHtcbiAgICAgIHJlcXVlc3RJZCA9IHJlcUFuaW1GcmFtZShsYXRlcihhcmdzKSk7XG4gICAgfVxuICB9O1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1ub24tbnVsbC1hc3NlcnRpb25cbiAgKHRocm90dGxlZCBhcyBhbnkpLmNhbmNlbCA9ICgpID0+IGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShyZXF1ZXN0SWQhKTtcblxuICByZXR1cm4gdGhyb3R0bGVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKCkge1xuICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBhbnkpIHtcbiAgICBjb25zdCBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgbGV0IGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcbiAgICByZXR1cm4ge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0KCkge1xuICAgICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJldHVybiBmbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvdW5kRm4gPSB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUoZm4uYmluZCh0aGlzKSk7XG4gICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgICAgdmFsdWU6IGJvdW5kRm4sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBib3VuZEZuO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iXX0=