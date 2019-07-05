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
var availablePrefixes = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return (/**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = setTimeout((/**
         * @return {?}
         */
        function () {
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
        function () { return 0; });
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "RequestAnimationFrame" in window; }))[0];
    return prefix ? ((/** @type {?} */ (window)))[prefix + "RequestAnimationFrame"] : requestAnimationFramePolyfill();
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
    var prefix = availablePrefixes.filter((/**
     * @param {?} key
     * @return {?}
     */
    function (key) { return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window; }))[0];
    return prefix
        ? (((/** @type {?} */ (window)))[prefix + "CancelAnimationFrame"] || ((/** @type {?} */ (window)))[prefix + "CancelRequestAnimationFrame"])
            // @ts-ignore
            .call(this, id)
        : clearTimeout(id);
}
/** @type {?} */
export var reqAnimFrame = getRequestAnimationFrame();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJwb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBU00saUJBQWlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQzs7OztBQUVqRCxTQUFTLDZCQUE2Qjs7UUFDaEMsUUFBUSxHQUFHLENBQUM7SUFDaEI7Ozs7SUFBTyxVQUFTLFFBQThCOztZQUN0QyxRQUFRLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBQy9CLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7O1lBQ3BELEVBQUUsR0FBRyxVQUFVOzs7UUFBQztZQUNwQixRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsR0FBRSxVQUFVLENBQUM7UUFDZCxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUMsRUFBQztBQUNKLENBQUM7Ozs7QUFFRCxTQUFTLHdCQUF3QjtJQUMvQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQzs7O1FBQU8sY0FBTSxPQUFBLENBQUMsRUFBRCxDQUFDLEVBQUM7S0FDaEI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtRQUNoQywyQ0FBMkM7UUFDM0MsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOztRQUVLLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNOzs7O0lBQUMsVUFBQSxHQUFHLElBQUksT0FBRyxHQUFHLDBCQUF1QixJQUFJLE1BQU0sRUFBdkMsQ0FBdUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUUxRixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFJLE1BQU0sMEJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztBQUN0RyxDQUFDOzs7OztBQUNELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7UUFDSyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUNyQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcseUJBQXNCLElBQUksTUFBTSxJQUFPLEdBQUcsZ0NBQTZCLElBQUksTUFBTSxFQUF2RixDQUF1RixFQUMvRixDQUFDLENBQUMsQ0FBQztJQUVKLE9BQU8sTUFBTTtRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBSSxNQUFNLHlCQUFzQixDQUFDLElBQUksQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFJLE1BQU0sZ0NBQTZCLENBQUMsQ0FBQztZQUMzRyxhQUFhO2FBQ1osSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQUcsd0JBQXdCLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXG5jb25zdCBhdmFpbGFibGVQcmVmaXhlcyA9IFsnbW96JywgJ21zJywgJ3dlYmtpdCddO1xuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcbiAgbGV0IGxhc3RUaW1lID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgIGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgIHJldHVybiBpZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gKCkgPT4gMDtcbiAgfVxuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzQ0NjVcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG4gIH1cblxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhlcy5maWx0ZXIoa2V5ID0+IGAke2tleX1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdylbMF07XG5cbiAgcmV0dXJuIHByZWZpeCA/ICh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9UmVxdWVzdEFuaW1hdGlvbkZyYW1lYF0gOiByZXF1ZXN0QW5pbWF0aW9uRnJhbWVQb2x5ZmlsbCgpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShpZDogbnVtYmVyKTogYW55IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICB9XG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeGVzLmZpbHRlcihcbiAgICBrZXkgPT4gYCR7a2V5fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3cgfHwgYCR7a2V5fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93XG4gIClbMF07XG5cbiAgcmV0dXJuIHByZWZpeFxuICAgID8gKCh3aW5kb3cgYXMgYW55KVtgJHtwcmVmaXh9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgXSB8fCAod2luZG93IGFzIGFueSlbYCR7cHJlZml4fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWBdKVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIC5jYWxsKHRoaXMsIGlkKVxuICAgIDogY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuIl19