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
 * @param {?} prefix
 * @return {?}
 */
export function getRegExp(prefix) {
    /** @type {?} */
    const prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    let prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = `[${prefixToken}]`;
    }
    return new RegExp(`(\\s|^)(${prefixToken})[^\\s]*`, 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix = '@') {
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    const regex = getRegExp(prefix);
    /** @type {?} */
    const mentions = value.match(regex);
    return mentions !== null ? mentions.map((/**
     * @param {?} e
     * @return {?}
     */
    e => e.trim())) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBeUI7O1VBQzNDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztRQUN6RCxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztJQUVsRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFdBQVcsR0FBRyxJQUFJLFdBQVcsR0FBRyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxXQUFXLFdBQVcsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYSxFQUFFLFNBQTRCLEdBQUc7SUFDeEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUM7S0FDWDs7VUFDSyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7VUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ25DLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVnRXhwKHByZWZpeDogc3RyaW5nIHwgc3RyaW5nW10pOiBSZWdFeHAge1xuICBjb25zdCBwcmVmaXhBcnJheSA9IEFycmF5LmlzQXJyYXkocHJlZml4KSA/IHByZWZpeCA6IFtwcmVmaXhdO1xuICBsZXQgcHJlZml4VG9rZW4gPSBwcmVmaXhBcnJheS5qb2luKCcnKS5yZXBsYWNlKC8oXFwkfFxcXikvZywgJ1xcXFwkMScpO1xuXG4gIGlmIChwcmVmaXhBcnJheS5sZW5ndGggPiAxKSB7XG4gICAgcHJlZml4VG9rZW4gPSBgWyR7cHJlZml4VG9rZW59XWA7XG4gIH1cblxuICByZXR1cm4gbmV3IFJlZ0V4cChgKFxcXFxzfF4pKCR7cHJlZml4VG9rZW59KVteXFxcXHNdKmAsICdnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZW50aW9ucyh2YWx1ZTogc3RyaW5nLCBwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdID0gJ0AnKTogc3RyaW5nW10ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBjb25zdCByZWdleCA9IGdldFJlZ0V4cChwcmVmaXgpO1xuICBjb25zdCBtZW50aW9ucyA9IHZhbHVlLm1hdGNoKHJlZ2V4KTtcbiAgcmV0dXJuIG1lbnRpb25zICE9PSBudWxsID8gbWVudGlvbnMubWFwKGUgPT4gZS50cmltKCkpIDogW107XG59XG4iXX0=