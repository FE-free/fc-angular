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
 * Much like lodash.
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function padStart(toPad, length, element) {
    if (toPad.length > length) {
        return toPad;
    }
    /** @type {?} */
    var joined = "" + getRepeatedElement(length, element) + toPad;
    return joined.slice(joined.length - length, joined.length);
}
/**
 * @param {?} toPad
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function padEnd(toPad, length, element) {
    /** @type {?} */
    var joined = "" + toPad + getRepeatedElement(length, element);
    return joined.slice(0, length);
}
/**
 * @param {?} length
 * @param {?} element
 * @return {?}
 */
export function getRepeatedElement(length, element) {
    return Array(length)
        .fill(element)
        .join('');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQWU7SUFDckUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNkOztRQUVLLE1BQU0sR0FBRyxLQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFPO0lBQy9ELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxNQUFNLENBQUMsS0FBYSxFQUFFLE1BQWMsRUFBRSxPQUFlOztRQUM3RCxNQUFNLEdBQUcsS0FBRyxLQUFLLEdBQUcsa0JBQWtCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBRztJQUMvRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsT0FBZTtJQUNoRSxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqXG4gKiBNdWNoIGxpa2UgbG9kYXNoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFkU3RhcnQodG9QYWQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh0b1BhZC5sZW5ndGggPiBsZW5ndGgpIHtcbiAgICByZXR1cm4gdG9QYWQ7XG4gIH1cblxuICBjb25zdCBqb2luZWQgPSBgJHtnZXRSZXBlYXRlZEVsZW1lbnQobGVuZ3RoLCBlbGVtZW50KX0ke3RvUGFkfWA7XG4gIHJldHVybiBqb2luZWQuc2xpY2Uoam9pbmVkLmxlbmd0aCAtIGxlbmd0aCwgam9pbmVkLmxlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWRFbmQodG9QYWQ6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGVsZW1lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGpvaW5lZCA9IGAke3RvUGFkfSR7Z2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aCwgZWxlbWVudCl9YDtcbiAgcmV0dXJuIGpvaW5lZC5zbGljZSgwLCBsZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gQXJyYXkobGVuZ3RoKVxuICAgIC5maWxsKGVsZW1lbnQpXG4gICAgLmpvaW4oJycpO1xufVxuIl19