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
// tslint:disable:no-any typedef no-invalid-this
/** @type {?} */
const availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    let lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        const currTime = new Date().getTime();
        /** @type {?} */
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        const id = setTimeout((/**
         * @return {?}
         */
        () => {
            callback(currTime + timeToCall);
        }), timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    });
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return (/**
         * @return {?}
         */
        () => 0);
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    const prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    key => `${key}RequestAnimationFrame` in window))[0];
    return prefix ? ((/** @type {?} */ (window)))[`${prefix}RequestAnimationFrame`] : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
export function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    const prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[`${prefix}CancelAnimationFrame`] || ((/** @type {?} */ (window)))[`${prefix}CancelRequestAnimationFrame`])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
export const reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BU00saUJBQWlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7OztBQUVqRCxTQUFTLDZCQUE2Qjs7UUFDaEMsUUFBUSxHQUFHLENBQUM7SUFDaEI7Ozs7SUFBTyxVQUFTLFFBQThCOztjQUN0QyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2NBQy9CLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7O2NBQ3BELEVBQUUsR0FBRyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDekIsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNsQyxDQUFDLEdBQUUsVUFBVSxDQUFDO1FBQ2QsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDLEVBQUM7QUFDSixDQUFDOzs7O0FBRUQsU0FBUyx3QkFBd0I7SUFDL0IsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7UUFDakM7OztRQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQztLQUNoQjtJQUNELElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFO1FBQ2hDLDJDQUEyQztRQUMzQyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEQ7O1VBRUssTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7SUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyx1QkFBdUIsSUFBSSxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFFMUYsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxHQUFHLE1BQU0sdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztBQUN0RyxDQUFDOzs7OztBQUNELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7VUFDSyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUNyQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxzQkFBc0IsSUFBSSxNQUFNLElBQUksR0FBRyxHQUFHLDZCQUE2QixJQUFJLE1BQU0sRUFDL0YsQ0FBQyxDQUFDLENBQUM7SUFFSixPQUFPLE1BQU07UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsR0FBRyxNQUFNLHNCQUFzQixDQUFDLElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLEdBQUcsTUFBTSw2QkFBNkIsQ0FBQyxDQUFDO1lBQzNHLGFBQWE7YUFDWixJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZCLENBQUM7O0FBRUQsTUFBTSxPQUFPLFlBQVksR0FBRyx3QkFBd0IsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgdHlwZWRlZiBuby1pbnZhbGlkLXRoaXNcbmNvbnN0IGF2YWlsYWJsZVByZWZpeGVzID0gWydtb3onLCAnbXMnLCAnd2Via2l0J107XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKTogbnVtYmVyIHtcbiAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbCk7XG4gICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgbGFzdFRpbWUgPSBjdXJyVGltZSArIHRpbWVUb0NhbGw7XG4gICAgcmV0dXJuIGlkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiAoKSA9PiAwO1xuICB9XG4gIGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3Z1ZWpzL3Z1ZS9pc3N1ZXMvNDQ2NVxuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLmJpbmQod2luZG93KTtcbiAgfVxuXG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeGVzLmZpbHRlcihrZXkgPT4gYCR7a2V5fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93KVswXTtcblxuICByZXR1cm4gcHJlZml4ID8gKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgXSA6IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKGlkOiBudW1iZXIpOiBhbnkge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBpZiAod2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gIH1cbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4ZXMuZmlsdGVyKFxuICAgIGtleSA9PiBgJHtrZXl9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdyB8fCBgJHtrZXl9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3dcbiAgKVswXTtcblxuICByZXR1cm4gcHJlZml4XG4gICAgPyAoKHdpbmRvdyBhcyBhbnkpW2Ake3ByZWZpeH1DYW5jZWxBbmltYXRpb25GcmFtZWBdIHx8ICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYF0pXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgLmNhbGwodGhpcywgaWQpXG4gICAgOiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG5leHBvcnQgY29uc3QgcmVxQW5pbUZyYW1lID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4iXX0=