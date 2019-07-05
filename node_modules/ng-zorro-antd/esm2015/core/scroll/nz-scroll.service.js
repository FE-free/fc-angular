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
    const cc = c - b;
    /** @type {?} */
    let tt = t / (d / 2);
    if (tt < 1) {
        return (cc / 2) * tt * tt * tt + b;
    }
    else {
        return (cc / 2) * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * Set the position of the scroll bar of `el`.
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            (/** @type {?} */ (this.doc.documentElement)).scrollTop = topValue;
        }
        else {
            ((/** @type {?} */ (el))).scrollTop = topValue;
        }
    }
    /**
     * Get position of `el` against window.
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        /** @type {?} */
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length) {
            return ret;
        }
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            const doc = (/** @type {?} */ (el.ownerDocument)).documentElement;
            ret.top = rect.top - (/** @type {?} */ (doc)).clientTop;
            ret.left = rect.left - (/** @type {?} */ (doc)).clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * Get the position of the scoll bar of `el`.
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    // TODO: remove '| Window' as the fallback already happens here
    getScroll(el, top = true) {
        /** @type {?} */
        const target = el ? el : window;
        /** @type {?} */
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        const method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        const isWindow = target === window;
        // @ts-ignore
        /** @type {?} */
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = (/** @type {?} */ (this.doc.documentElement))[method];
        }
        return ret;
    }
    /**
     * Scroll `el` to some position with animation.
     *
     * @param {?} containerEl container, `window` by default
     * @param {?=} targetTopValue Scroll to `top`, 0 by default
     * @param {?=} easing Transition curve, `easeInOutCubic` by default
     * @param {?=} callback callback invoked when transition is done
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        /** @type {?} */
        const target = containerEl ? containerEl : window;
        /** @type {?} */
        const scrollTop = this.getScroll(target);
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const frameFunc = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const timestamp = Date.now();
            /** @type {?} */
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
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
    }
}
NzScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJzY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7Ozs7O0FBSTdELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVM7O1VBQzFELEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7UUFDWixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixJQUFJLEVBQUUsR0FBRyxDQUFDLEVBQUU7UUFDVixPQUFPLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNwQztTQUFNO1FBQ0wsT0FBTyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2pEO0FBQ0gsQ0FBQztBQUdELE1BQU0sT0FBTyxlQUFlOzs7OztJQUkxQixZQUE4QixHQUFRO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFHRCxZQUFZLENBQUMsRUFBb0IsRUFBRSxXQUFtQixDQUFDO1FBQ3JELElBQUksRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FB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QUN6QjtpQkFBTTtnQkFDTCxJQUFJLFFBQVEsRUFBRTtvQkFDWixRQUFRLEVBQUUsQ0FBQztpQkFDWjthQUNGO1FBQ0gsQ0FBQyxDQUFBO1FBQ0QsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQWxGRixVQUFVOzs7OzRDQUtJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBSDVCLDhCQUFzQjs7Ozs7OztBQW1GeEIsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQWEsRUFBRSxhQUE4QjtJQUMzRixPQUFPLGFBQWEsSUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuRCxDQUFDOztBQUVELE1BQU0sT0FBTyx1QkFBdUIsR0FBYTtJQUMvQyxPQUFPLEVBQUUsZUFBZTtJQUN4QixVQUFVLEVBQUUsK0JBQStCO0lBQzNDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztDQUNwRSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuXG5leHBvcnQgdHlwZSBFYXN5aW5nRm4gPSAodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBudW1iZXI7XG5cbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGNjID0gYyAtIGI7XG4gIGxldCB0dCA9IHQgLyAoZCAvIDIpO1xuICBpZiAodHQgPCAxKSB7XG4gICAgcmV0dXJuIChjYyAvIDIpICogdHQgKiB0dCAqIHR0ICsgYjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKGNjIC8gMikgKiAoKHR0IC09IDIpICogdHQgKiB0dCArIDIpICsgYjtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpTY3JvbGxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBkb2M6IERvY3VtZW50O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnkpIHtcbiAgICB0aGlzLmRvYyA9IGRvYztcbiAgfVxuXG4gIC8qKiBTZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzY3JvbGwgYmFyIG9mIGBlbGAuICovXG4gIHNldFNjcm9sbFRvcChlbDogRWxlbWVudCB8IFdpbmRvdywgdG9wVmFsdWU6IG51bWJlciA9IDApOiB2b2lkIHtcbiAgICBpZiAoZWwgPT09IHdpbmRvdykge1xuICAgICAgdGhpcy5kb2MuYm9keS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcbiAgICAgIHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCEuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIChlbCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKiogR2V0IHBvc2l0aW9uIG9mIGBlbGAgYWdhaW5zdCB3aW5kb3cuICovXG4gIGdldE9mZnNldChlbDogRWxlbWVudCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCByZXQgPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfTtcbiAgICBpZiAoIWVsIHx8ICFlbC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG5cbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcbiAgICAgIGNvbnN0IGRvYyA9IGVsLm93bmVyRG9jdW1lbnQhLmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcCAtIGRvYyEuY2xpZW50VG9wO1xuICAgICAgcmV0LmxlZnQgPSByZWN0LmxlZnQgLSBkb2MhLmNsaWVudExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKiogR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgc2NvbGwgYmFyIG9mIGBlbGAuICovXG4gIC8vIFRPRE86IHJlbW92ZSAnfCBXaW5kb3cnIGFzIHRoZSBmYWxsYmFjayBhbHJlYWR5IGhhcHBlbnMgaGVyZVxuICBnZXRTY3JvbGwoZWw/OiBFbGVtZW50IHwgV2luZG93LCB0b3A6IGJvb2xlYW4gPSB0cnVlKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlbCA/IGVsIDogd2luZG93O1xuICAgIGNvbnN0IHByb3AgPSB0b3AgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JztcbiAgICBjb25zdCBtZXRob2QgPSB0b3AgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRhcmdldCA9PT0gd2luZG93O1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBsZXQgcmV0ID0gaXNXaW5kb3cgPyB0YXJnZXRbcHJvcF0gOiB0YXJnZXRbbWV0aG9kXTtcbiAgICBpZiAoaXNXaW5kb3cgJiYgdHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudCFbbWV0aG9kXTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGwgYGVsYCB0byBzb21lIHBvc2l0aW9uIHdpdGggYW5pbWF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gY29udGFpbmVyRWwgY29udGFpbmVyLCBgd2luZG93YCBieSBkZWZhdWx0XG4gICAqIEBwYXJhbSB0YXJnZXRUb3BWYWx1ZSBTY3JvbGwgdG8gYHRvcGAsIDAgYnkgZGVmYXVsdFxuICAgKiBAcGFyYW0gZWFzaW5nIFRyYW5zaXRpb24gY3VydmUsIGBlYXNlSW5PdXRDdWJpY2AgYnkgZGVmYXVsdFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgY2FsbGJhY2sgaW52b2tlZCB3aGVuIHRyYW5zaXRpb24gaXMgZG9uZVxuICAgKi9cbiAgc2Nyb2xsVG8oY29udGFpbmVyRWw6IEVsZW1lbnQgfCBXaW5kb3csIHRhcmdldFRvcFZhbHVlOiBudW1iZXIgPSAwLCBlYXNpbmc/OiBFYXN5aW5nRm4sIGNhbGxiYWNrPzogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRhaW5lckVsID8gY29udGFpbmVyRWwgOiB3aW5kb3c7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGwodGFyZ2V0KTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGZyYW1lRnVuYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuICAgICAgdGhpcy5zZXRTY3JvbGxUb3AodGFyZ2V0LCAoZWFzaW5nIHx8IGVhc2VJbk91dEN1YmljKSh0aW1lLCBzY3JvbGxUb3AsIHRhcmdldFRvcFZhbHVlLCA0NTApKTtcbiAgICAgIGlmICh0aW1lIDwgNDUwKSB7XG4gICAgICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlkoZG9jOiBEb2N1bWVudCwgc2Nyb2xsU2VydmljZTogTnpTY3JvbGxTZXJ2aWNlKTogTnpTY3JvbGxTZXJ2aWNlIHtcbiAgcmV0dXJuIHNjcm9sbFNlcnZpY2UgfHwgbmV3IE56U2Nyb2xsU2VydmljZShkb2MpO1xufVxuXG5leHBvcnQgY29uc3QgU0NST0xMX1NFUlZJQ0VfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBOelNjcm9sbFNlcnZpY2UsXG4gIHVzZUZhY3Rvcnk6IFNDUk9MTF9TRVJWSUNFX1BST1ZJREVSX0ZBQ1RPUlksXG4gIGRlcHM6IFtET0NVTUVOVCwgW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgTnpTY3JvbGxTZXJ2aWNlXV1cbn07XG4iXX0=