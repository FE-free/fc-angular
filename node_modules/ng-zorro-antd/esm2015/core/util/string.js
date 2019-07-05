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
    const joined = `${getRepeatedElement(length, element)}${toPad}`;
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
    const joined = `${toPad}${getRepeatedElement(length, element)}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0EsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQWU7SUFDckUsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRTtRQUN6QixPQUFPLEtBQUssQ0FBQztLQUNkOztVQUVLLE1BQU0sR0FBRyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxLQUFLLEVBQUU7SUFDL0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE1BQU0sQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLE9BQWU7O1VBQzdELE1BQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEVBQUU7SUFDL0QsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNqQyxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsTUFBYyxFQUFFLE9BQWU7SUFDaEUsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDYixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbi8qKlxuICogTXVjaCBsaWtlIGxvZGFzaC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhZFN0YXJ0KHRvUGFkOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAodG9QYWQubGVuZ3RoID4gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRvUGFkO1xuICB9XG5cbiAgY29uc3Qgam9pbmVkID0gYCR7Z2V0UmVwZWF0ZWRFbGVtZW50KGxlbmd0aCwgZWxlbWVudCl9JHt0b1BhZH1gO1xuICByZXR1cm4gam9pbmVkLnNsaWNlKGpvaW5lZC5sZW5ndGggLSBsZW5ndGgsIGpvaW5lZC5sZW5ndGgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFkRW5kKHRvUGFkOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBlbGVtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBqb2luZWQgPSBgJHt0b1BhZH0ke2dldFJlcGVhdGVkRWxlbWVudChsZW5ndGgsIGVsZW1lbnQpfWA7XG4gIHJldHVybiBqb2luZWQuc2xpY2UoMCwgbGVuZ3RoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcGVhdGVkRWxlbWVudChsZW5ndGg6IG51bWJlciwgZWxlbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIEFycmF5KGxlbmd0aClcbiAgICAuZmlsbChlbGVtZW50KVxuICAgIC5qb2luKCcnKTtcbn1cbiJdfQ==