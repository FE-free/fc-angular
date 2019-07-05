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
    const rect = elem.getBoundingClientRect();
    /** @type {?} */
    const win = (/** @type {?} */ (elem.ownerDocument)).defaultView;
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
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
        /** @type {?} */
        const node = children.item(i);
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
    const children = element.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
        /** @type {?} */
        const node = children.item(i);
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
    const children = parent.childNodes;
    /** @type {?} */
    let length = children.length;
    if (length) {
        /** @type {?} */
        const nodes = [];
        children.forEach((/**
         * @param {?} node
         * @param {?} i
         * @return {?}
         */
        (node, i) => (nodes[i] = node)));
        while (length--) {
            parent.appendChild(nodes[length]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9kb20udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFLN0MsTUFBTSxVQUFVLFdBQVcsQ0FBQyxDQUFRO0lBQ2xDLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDckIsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsSUFBaUI7SUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQzVCOztVQUVLLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7O1VBQ25DLEdBQUcsR0FBRyxtQkFBQSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUMsV0FBVztJQUMzQyxPQUFPO1FBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQUEsR0FBRyxFQUFDLENBQUMsV0FBVztRQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxtQkFBQSxHQUFHLEVBQUMsQ0FBQyxXQUFXO0tBQ25DLENBQUM7QUFDSixDQUFDOzs7OztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FBQyxPQUFvQjs7VUFDbEQsUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVO0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUFDLE9BQW9COztVQUNqRCxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVU7SUFDbkMsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztjQUN2QyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztVQUM3QyxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVU7O1FBQzlCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtJQUM1QixJQUFJLE1BQU0sRUFBRTs7Y0FDSixLQUFLLEdBQVcsRUFBRTtRQUN4QixRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFDLENBQUM7UUFDakQsT0FBTyxNQUFNLEVBQUUsRUFBRTtZQUNmLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDbkM7S0FDRjtBQUNILENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBOEI7SUFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN4QyxDQUFDOzs7O0FBRUQsOENBV0M7OztJQVZDLHVDQUFZOztJQUNaLHdDQUFhOztJQUNiLDRDQUFtQjs7SUFDbkIseUNBQWM7O0lBRWQsd0NBQXlCOztJQUN6QixpREFBbUM7O0lBQ25DLGlEQUFtQzs7Ozs7SUFFbkMsNkRBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgcHJvdmlkZXMgdXRpbGl0eSBmdW5jdGlvbnMgdG8gcXVlcnkgRE9NIGluZm9ybWF0aW9uIG9yXG4gKiBzZXQgcHJvcGVydGllcy5cbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IGZpbHRlck5vdEVtcHR5Tm9kZSB9IGZyb20gJy4vY2hlY2snO1xuXG4vKipcbiAqIFNpbGVudCBhbiBldmVudCBieSBzdG9wcGluZyBhbmQgcHJldmVudGluZyBpdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpbGVudEV2ZW50KGU6IEV2ZW50KTogdm9pZCB7XG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRPZmZzZXQoZWxlbTogSFRNTEVsZW1lbnQpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XG4gIGlmICghZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgIHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xuICB9XG5cbiAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudCEuZGVmYXVsdFZpZXc7XG4gIHJldHVybiB7XG4gICAgdG9wOiByZWN0LnRvcCArIHdpbiEucGFnZVlPZmZzZXQsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luIS5wYWdlWE9mZnNldFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0Tm90RW1wdHlOb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogTm9kZSB8IG51bGwge1xuICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgIGlmIChmaWx0ZXJOb3RFbXB0eU5vZGUobm9kZSkpIHtcbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRMYXN0Tm90RW1wdHlOb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogTm9kZSB8IG51bGwge1xuICBjb25zdCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcbiAgZm9yIChsZXQgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkcmVuLml0ZW0oaSk7XG4gICAgaWYgKGZpbHRlck5vdEVtcHR5Tm9kZShub2RlKSkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUNoaWxkTm9kZXMocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZE5vZGVzO1xuICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICBpZiAobGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKG5vZGUsIGkpID0+IChub2Rlc1tpXSA9IG5vZGUpKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2Rlc1tsZW5ndGhdKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBJbnZlc3RpZ2F0ZSBpZiBhbiBldmVudCBpcyBhIGBUb3VjaEV2ZW50YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiBldmVudCBpcyBUb3VjaEV2ZW50IHtcbiAgcmV0dXJuIGV2ZW50LnR5cGUuc3RhcnRzV2l0aCgndG91Y2gnKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWcge1xuICBlbmQ6IHN0cmluZztcbiAgbW92ZTogc3RyaW5nO1xuICBwbHVja0tleTogc3RyaW5nW107XG4gIHN0YXJ0OiBzdHJpbmc7XG5cbiAgZW5kJD86IE9ic2VydmFibGU8RXZlbnQ+O1xuICBtb3ZlUmVzb2x2ZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBzdGFydFBsdWNrZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG4gIGZpbHRlcj8oZTogRXZlbnQpOiBib29sZWFuO1xufVxuIl19