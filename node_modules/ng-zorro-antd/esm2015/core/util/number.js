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
 * @param {?} min
 * @param {?} max
 * @param {?} value
 * @return {?}
 */
export function getPercent(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}
/**
 * @param {?} num
 * @return {?}
 */
export function getPrecision(num) {
    /** @type {?} */
    const numStr = num.toString();
    /** @type {?} */
    const dotIndex = numStr.indexOf('.');
    return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
}
/**
 * @param {?} num
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function ensureNumberInRange(num, min, max) {
    if (isNaN(num) || num < min) {
        return min;
    }
    else if (num > max) {
        return max;
    }
    else {
        return num;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidXRpbC9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtJQUNoRSxPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDN0MsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsWUFBWSxDQUFDLEdBQVc7O1VBQ2hDLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFOztVQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7SUFDcEMsT0FBTyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztJQUN2RSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1FBQzNCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7U0FBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7UUFDcEIsT0FBTyxHQUFHLENBQUM7S0FDWjtTQUFNO1FBQ0wsT0FBTyxHQUFHLENBQUM7S0FDWjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBlcmNlbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuICgodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpICogMTAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJlY2lzaW9uKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbnVtU3RyID0gbnVtLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGRvdEluZGV4ID0gbnVtU3RyLmluZGV4T2YoJy4nKTtcbiAgcmV0dXJuIGRvdEluZGV4ID49IDAgPyBudW1TdHIubGVuZ3RoIC0gZG90SW5kZXggLSAxIDogMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuc3VyZU51bWJlckluUmFuZ2UobnVtOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChpc05hTihudW0pIHx8IG51bSA8IG1pbikge1xuICAgIHJldHVybiBtaW47XG4gIH0gZWxzZSBpZiAobnVtID4gbWF4KSB7XG4gICAgcmV0dXJuIG1heDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVtO1xuICB9XG59XG4iXX0=