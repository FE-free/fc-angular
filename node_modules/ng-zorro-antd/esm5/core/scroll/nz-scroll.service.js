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
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** Set the position of the scroll bar of `el`. */
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    };
    /** Get position of `el` against window. */
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** Get the position of the scoll bar of `el`. */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    NzScrollService.prototype.getScroll = /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    };
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback) {
                    callback();
                }
            }
        });
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzScrollService;
}());
export { NzScrollService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7O0FBSTdELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7O1FBQzFELEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7UUFDWixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQUVEO0lBSUUscUNBQXFDO0lBQ3JDLHlCQUE4QixHQUFRO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxrREFBa0Q7Ozs7Ozs7SUFDbEQsc0NBQVk7Ozs7OztJQUFaLFVBQWEsRUFBb0IsRUFBRSxRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBQ3JELElBQUksRUFB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Q0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUYsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO2dCQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLEVBQUUsQ0FBQztpQkFDWjthQUNGO1FBQ0gsQ0FBQyxDQUFBO1FBQ0QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7O2dCQWxGRixVQUFVOzs7O2dEQUtJLE1BQU0sU0FBQyxRQUFROztJQThFOUIsc0JBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQWxGWSxlQUFlOzs7Ozs7SUFDMUIsOEJBQXNCOzs7Ozs7O0FBbUZ4QixNQUFNLFVBQVUsK0JBQStCLENBQUMsR0FBYSxFQUFFLGFBQThCO0lBQzNGLE9BQU8sYUFBYSxJQUFJLElBQUksZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELENBQUM7O0FBRUQsTUFBTSxLQUFPLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0NBQ3BFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFByb3ZpZGVyLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyByZXFBbmltRnJhbWUgfSBmcm9tICcuLi9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbic7XG5cbmV4cG9ydCB0eXBlIEVhc3lpbmdGbiA9ICh0OiBudW1iZXIsIGI6IG51bWJlciwgYzogbnVtYmVyLCBkOiBudW1iZXIpID0+IG51bWJlcjtcblxuZnVuY3Rpb24gZWFzZUluT3V0Q3ViaWModDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgY2MgPSBjIC0gYjtcbiAgbGV0IHR0ID0gdCAvIChkIC8gMik7XG4gIGlmICh0dCA8IDEpIHtcbiAgICByZXR1cm4gKGNjIC8gMikgKiB0dCAqIHR0ICogdHQgKyBiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoY2MgLyAyKSAqICgodHQgLT0gMikgKiB0dCAqIHR0ICsgMikgKyBiO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFNlcnZpY2Uge1xuICBwcml2YXRlIGRvYzogRG9jdW1lbnQ7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSkge1xuICAgIHRoaXMuZG9jID0gZG9jO1xuICB9XG5cbiAgLyoqIFNldCB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbCBiYXIgb2YgYGVsYC4gKi9cbiAgc2V0U2Nyb2xsVG9wKGVsOiBFbGVtZW50IHwgV2luZG93LCB0b3BWYWx1ZTogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIGlmIChlbCA9PT0gd2luZG93KSB7XG4gICAgICB0aGlzLmRvYy5ib2R5LnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgICAgdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgKGVsIGFzIEVsZW1lbnQpLnNjcm9sbFRvcCA9IHRvcFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBHZXQgcG9zaXRpb24gb2YgYGVsYCBhZ2FpbnN0IHdpbmRvdy4gKi9cbiAgZ2V0T2Zmc2V0KGVsOiBFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IHJldCA9IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICAgIGlmICghZWwgfHwgIWVsLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAocmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCkge1xuICAgICAgY29uc3QgZG9jID0gZWwub3duZXJEb2N1bWVudCEuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wIC0gZG9jIS5jbGllbnRUb3A7XG4gICAgICByZXQubGVmdCA9IHJlY3QubGVmdCAtIGRvYyEuY2xpZW50TGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wO1xuICAgICAgcmV0LmxlZnQgPSByZWN0LmxlZnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKiBHZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY29sbCBiYXIgb2YgYGVsYC4gKi9cbiAgLy8gVE9ETzogcmVtb3ZlICd8IFdpbmRvdycgYXMgdGhlIGZhbGxiYWNrIGFscmVhZHkgaGFwcGVucyBoZXJlXG4gIGdldFNjcm9sbChlbD86IEVsZW1lbnQgfCBXaW5kb3csIHRvcDogYm9vbGVhbiA9IHRydWUpOiBudW1iZXIge1xuICAgIGNvbnN0IHRhcmdldCA9IGVsID8gZWwgOiB3aW5kb3c7XG4gICAgY29uc3QgcHJvcCA9IHRvcCA/ICdwYWdlWU9mZnNldCcgOiAncGFnZVhPZmZzZXQnO1xuICAgIGNvbnN0IG1ldGhvZCA9IHRvcCA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xuICAgIGNvbnN0IGlzV2luZG93ID0gdGFyZ2V0ID09PSB3aW5kb3c7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGxldCByZXQgPSBpc1dpbmRvdyA/IHRhcmdldFtwcm9wXSA6IHRhcmdldFttZXRob2RdO1xuICAgIGlmIChpc1dpbmRvdyAmJiB0eXBlb2YgcmV0ICE9PSAnbnVtYmVyJykge1xuICAgICAgcmV0ID0gdGhpcy5kb2MuZG9jdW1lbnRFbGVtZW50IVttZXRob2RdO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbCBgZWxgIHRvIHNvbWUgcG9zaXRpb24gd2l0aCBhbmltYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCBjb250YWluZXIsIGB3aW5kb3dgIGJ5IGRlZmF1bHRcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIFNjcm9sbCB0byBgdG9wYCwgMCBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSBlYXNpbmcgVHJhbnNpdGlvbiBjdXJ2ZSwgYGVhc2VJbk91dEN1YmljYCBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSBjYWxsYmFjayBjYWxsYmFjayBpbnZva2VkIHdoZW4gdHJhbnNpdGlvbiBpcyBkb25lXG4gICAqL1xuICBzY3JvbGxUbyhjb250YWluZXJFbDogRWxlbWVudCB8IFdpbmRvdywgdGFyZ2V0VG9wVmFsdWU6IG51bWJlciA9IDAsIGVhc2luZz86IEVhc3lpbmdGbiwgY2FsbGJhY2s/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gY29udGFpbmVyRWwgPyBjb250YWluZXJFbCA6IHdpbmRvdztcbiAgICBjb25zdCBzY3JvbGxUb3AgPSB0aGlzLmdldFNjcm9sbCh0YXJnZXQpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZnJhbWVGdW5jID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IHRpbWUgPSB0aW1lc3RhbXAgLSBzdGFydFRpbWU7XG4gICAgICB0aGlzLnNldFNjcm9sbFRvcCh0YXJnZXQsIChlYXNpbmcgfHwgZWFzZUluT3V0Q3ViaWMpKHRpbWUsIHNjcm9sbFRvcCwgdGFyZ2V0VG9wVmFsdWUsIDQ1MCkpO1xuICAgICAgaWYgKHRpbWUgPCA0NTApIHtcbiAgICAgICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXFBbmltRnJhbWUoZnJhbWVGdW5jKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCBzY3JvbGxTZXJ2aWNlOiBOelNjcm9sbFNlcnZpY2UpOiBOelNjcm9sbFNlcnZpY2Uge1xuICByZXR1cm4gc2Nyb2xsU2VydmljZSB8fCBuZXcgTnpTY3JvbGxTZXJ2aWNlKGRvYyk7XG59XG5cbmV4cG9ydCBjb25zdCBTQ1JPTExfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE56U2Nyb2xsU2VydmljZSxcbiAgdXNlRmFjdG9yeTogU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwczogW0RPQ1VNRU5ULCBbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBOelNjcm9sbFNlcnZpY2VdXVxufTtcbiJdfQ==