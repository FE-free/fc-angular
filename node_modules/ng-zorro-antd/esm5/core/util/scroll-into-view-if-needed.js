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
 * @param {?} node
 * @return {?}
 */
export function scrollIntoView(node) {
    /** @type {?} */
    var nodeAsAny = (/** @type {?} */ (node));
    if (nodeAsAny.scrollIntoViewIfNeeded) {
        /* tslint:disable-next-line:no-string-literal */
        nodeAsAny.scrollIntoViewIfNeeded(false);
        return;
    }
    if (node.scrollIntoView) {
        node.scrollIntoView(false);
        return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWludG8tdmlldy1pZi1uZWVkZWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3Njcm9sbC1pbnRvLXZpZXctaWYtbmVlZGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxjQUFjLENBQUMsSUFBaUI7O1FBQ3hDLFNBQVMsR0FBRyxtQkFBQSxJQUFJLEVBQU87SUFDN0IsSUFBSSxTQUFTLENBQUMsc0JBQXNCLEVBQUU7UUFDcEMsZ0RBQWdEO1FBQ2hELFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxPQUFPO0tBQ1I7SUFDRCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPO0tBQ1I7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhub2RlOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBjb25zdCBub2RlQXNBbnkgPSBub2RlIGFzIGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgaWYgKG5vZGVBc0FueS5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKSB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgbm9kZUFzQW55LnNjcm9sbEludG9WaWV3SWZOZWVkZWQoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobm9kZS5zY3JvbGxJbnRvVmlldykge1xuICAgIG5vZGUuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19