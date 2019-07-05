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
/**
 * This module provides utility functions to query DOM information or
 * set properties.
 */
import { filterNotEmptyNode } from './check';
/**
 * Silent an event by stopping and preventing it.
 * @param {?} e
 * @return {?}
 */
export function silentEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
/**
 * @param {?} elem
 * @return {?}
 */
export function getElementOffset(elem) {
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    /** @type {?} */
    var rect = elem.getBoundingClientRect();
    /** @type {?} */
    var win = (/** @type {?} */ (elem.ownerDocument)).defaultView;
    return {
        top: rect.top + (/** @type {?} */ (win)).pageYOffset,
        left: rect.left + (/** @type {?} */ (win)).pageXOffset
    };
}
/**
 * @param {?} element
 * @return {?}
 */
export function findFirstNotEmptyNode(element) {
    /** @type {?} */
    var children = element.childNodes;
    for (var i = 0; i < children.length; i++) {
        /** @type {?} */
        var node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} element
 * @return {?}
 */
export function findLastNotEmptyNode(element) {
    /** @type {?} */
    var children = element.childNodes;
    for (var i = children.length - 1; i >= 0; i--) {
        /** @type {?} */
        var node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
/**
 * @param {?} parent
 * @return {?}
 */
export function reverseChildNodes(parent) {
    /** @type {?} */
    var children = parent.childNodes;
    /** @type {?} */
    var length = children.length;
    if (length) {
        /** @type {?} */
        var nodes_1 = [];
        children.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        function (node, i) { return (nodes_1[i] = node); }));
        while (length--) {
            parent.appendChild(nodes_1[length]);
        }
    }
}
/**
 * Investigate if an event is a `TouchEvent`.
 * @param {?} event
 * @return {?}
 */
export function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
/**
 * @record
 */
export function MouseTouchObserverConfig() { }
if (false) {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /**
     * @param {?} e
     * @return {?}
     */
    MouseTouchObserverConfig.prototype.filter = function (e) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFLN0MsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFRO0lBQ2xDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBaUI7SUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQzVCOztRQUVLLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O1FBQ25DLEdBQUcsR0FBRyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsV0FBVztJQUMzQyxPQUFPO1FBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsR0FBRyxFQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxXQUFXO0tBQ25DLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFvQjs7UUFDbEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQW9COztRQUNqRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVU7SUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztZQUN2QyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztRQUM3QyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVU7O1FBQzlCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtJQUM1QixJQUFJLE1BQU0sRUFBRTs7WUFDSixPQUFLLEdBQVcsRUFBRTtRQUN4QixRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLElBQUksRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLE9BQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO1FBQ2pELE9BQU8sTUFBTSxFQUFFLEVBQUU7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0tBQ0Y7QUFDSCxDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEtBQThCO0lBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsQ0FBQzs7OztBQUVELDhDQVdDOzs7SUFWQyx1Q0FBWTs7SUFDWix3Q0FBYTs7SUFDYiw0Q0FBbUI7O0lBQ25CLHlDQUFjOztJQUVkLHdDQUF5Qjs7SUFDekIsaURBQW1DOztJQUNuQyxpREFBbUM7Ozs7O0lBRW5DLDZEQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHV0aWxpdHkgZnVuY3Rpb25zIHRvIHF1ZXJ5IERPTSBpbmZvcm1hdGlvbiBvclxuICogc2V0IHByb3BlcnRpZXMuXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBmaWx0ZXJOb3RFbXB0eU5vZGUgfSBmcm9tICcuL2NoZWNrJztcblxuLyoqXG4gKiBTaWxlbnQgYW4gZXZlbnQgYnkgc3RvcHBpbmcgYW5kIHByZXZlbnRpbmcgaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWxlbnRFdmVudChlOiBFdmVudCk6IHZvaWQge1xuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50T2Zmc2V0KGVsZW06IEhUTUxFbGVtZW50KTogeyB0b3A6IG51bWJlcjsgbGVmdDogbnVtYmVyIH0ge1xuICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgfVxuXG4gIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCB3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQhLmRlZmF1bHRWaWV3O1xuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyB3aW4hLnBhZ2VZT2Zmc2V0LFxuICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbiEucGFnZVhPZmZzZXRcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRGaXJzdE5vdEVtcHR5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5vZGUgfCBudWxsIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBub2RlID0gY2hpbGRyZW4uaXRlbShpKTtcbiAgICBpZiAoZmlsdGVyTm90RW1wdHlOb2RlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGFzdE5vdEVtcHR5Tm9kZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IE5vZGUgfCBudWxsIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldmVyc2VDaGlsZE5vZGVzKHBhcmVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGROb2RlcztcbiAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgaWYgKGxlbmd0aCkge1xuICAgIGNvbnN0IG5vZGVzOiBOb2RlW10gPSBbXTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChub2RlLCBpKSA9PiAobm9kZXNbaV0gPSBub2RlKSk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZXNbbGVuZ3RoXSk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogSW52ZXN0aWdhdGUgaWYgYW4gZXZlbnQgaXMgYSBgVG91Y2hFdmVudGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvdWNoRXZlbnQoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogZXZlbnQgaXMgVG91Y2hFdmVudCB7XG4gIHJldHVybiBldmVudC50eXBlLnN0YXJ0c1dpdGgoJ3RvdWNoJyk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnIHtcbiAgZW5kOiBzdHJpbmc7XG4gIG1vdmU6IHN0cmluZztcbiAgcGx1Y2tLZXk6IHN0cmluZ1tdO1xuICBzdGFydDogc3RyaW5nO1xuXG4gIGVuZCQ/OiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgbW92ZVJlc29sdmVkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgc3RhcnRQbHVja2VkJD86IE9ic2VydmFibGU8bnVtYmVyPjtcblxuICBmaWx0ZXI/KGU6IEV2ZW50KTogYm9vbGVhbjtcbn1cbiJdfQ==