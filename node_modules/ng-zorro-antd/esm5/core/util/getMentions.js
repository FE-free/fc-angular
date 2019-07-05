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
    var prefixArray = Array.isArray(prefix) ? prefix : [prefix];
    /** @type {?} */
    var prefixToken = prefixArray.join('').replace(/(\$|\^)/g, '\\$1');
    if (prefixArray.length > 1) {
        prefixToken = "[" + prefixToken + "]";
    }
    return new RegExp("(\\s|^)(" + prefixToken + ")[^\\s]*", 'g');
}
/**
 * @param {?} value
 * @param {?=} prefix
 * @return {?}
 */
export function getMentions(value, prefix) {
    if (prefix === void 0) { prefix = '@'; }
    if (typeof value !== 'string') {
        return [];
    }
    /** @type {?} */
    var regex = getRegExp(prefix);
    /** @type {?} */
    var mentions = value.match(regex);
    return mentions !== null ? mentions.map((/**
     * @param {?} e
     * @return {?}
     */
    function (e) { return e.trim(); })) : [];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TWVudGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL2dldE1lbnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxTQUFTLENBQUMsTUFBeUI7O1FBQzNDLFdBQVcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDOztRQUN6RCxXQUFXLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQztJQUVsRSxJQUFJLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLFdBQVcsR0FBRyxNQUFJLFdBQVcsTUFBRyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxhQUFXLFdBQVcsYUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzNELENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYSxFQUFFLE1BQStCO0lBQS9CLHVCQUFBLEVBQUEsWUFBK0I7SUFDeEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxFQUFFLENBQUM7S0FDWDs7UUFDSyxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQzs7UUFDekIsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQ25DLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZ0V4cChwcmVmaXg6IHN0cmluZyB8IHN0cmluZ1tdKTogUmVnRXhwIHtcbiAgY29uc3QgcHJlZml4QXJyYXkgPSBBcnJheS5pc0FycmF5KHByZWZpeCkgPyBwcmVmaXggOiBbcHJlZml4XTtcbiAgbGV0IHByZWZpeFRva2VuID0gcHJlZml4QXJyYXkuam9pbignJykucmVwbGFjZSgvKFxcJHxcXF4pL2csICdcXFxcJDEnKTtcblxuICBpZiAocHJlZml4QXJyYXkubGVuZ3RoID4gMSkge1xuICAgIHByZWZpeFRva2VuID0gYFske3ByZWZpeFRva2VufV1gO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAoYChcXFxcc3xeKSgke3ByZWZpeFRva2VufSlbXlxcXFxzXSpgLCAnZycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVudGlvbnModmFsdWU6IHN0cmluZywgcHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJyk6IHN0cmluZ1tdIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgY29uc3QgcmVnZXggPSBnZXRSZWdFeHAocHJlZml4KTtcbiAgY29uc3QgbWVudGlvbnMgPSB2YWx1ZS5tYXRjaChyZWdleCk7XG4gIHJldHVybiBtZW50aW9ucyAhPT0gbnVsbCA/IG1lbnRpb25zLm1hcChlID0+IGUudHJpbSgpKSA6IFtdO1xufVxuIl19