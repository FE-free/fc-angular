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
 * @record
 */
export function CascaderOption() { }
if (false) {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function CascaderSearchOption() { }
if (false) {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
/**
 * @param {?} options
 * @return {?}
 */
export function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
export function NzCascaderComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.inputValue;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzChangeOnSelect;
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzChangeOn = function (option, level) { };
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzLoadData = function (node, index) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFlQSxvQ0FXQzs7O0lBVkMsK0JBQVk7O0lBQ1osK0JBQWU7O0lBQ2YsK0JBQWU7O0lBQ2Ysa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLGdDQUFpQjs7SUFDakIsZ0NBQXdCOztJQUN4QixrQ0FBNEI7Ozs7OztBQUs5QiwwQ0FFQzs7O0lBREMsb0NBQXVCOzs7OztBQUd6Qix5Q0FHQzs7O0lBRkMscUNBQTBCOztJQUMxQixxQ0FBMEI7Ozs7OztBQUc1QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBc0M7SUFDdkUsT0FBTyxPQUFPLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBTUQsaURBV0M7OztJQVZDLGlEQUFtQjs7SUFDbkIsbURBQTRDOztJQUM1QyxzREFBd0I7O0lBQ3hCLHNEQUF3Qjs7SUFDeEIsdURBQTBCOzs7Ozs7SUFFMUIsZ0ZBQTREOzs7Ozs7SUFHNUQsOEVBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyID0gJ2NsaWNrJyB8ICdob3Zlcic7XG5leHBvcnQgdHlwZSBOekNhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTaXplID0gJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJGaWx0ZXIgPSAoc2VhcmNoVmFsdWU6IHN0cmluZywgcGF0aDogQ2FzY2FkZXJPcHRpb25bXSkgPT4gYm9vbGVhbjtcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJTb3J0ZXIgPSAoYTogQ2FzY2FkZXJPcHRpb25bXSwgYjogQ2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FzY2FkZXJPcHRpb24ge1xuICB2YWx1ZT86IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGxvYWRpbmc/OiBib29sZWFuO1xuICBpc0xlYWY/OiBib29sZWFuO1xuICBwYXJlbnQ/OiBDYXNjYWRlck9wdGlvbjtcbiAgY2hpbGRyZW4/OiBDYXNjYWRlck9wdGlvbltdO1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXNjYWRlclNlYXJjaE9wdGlvbiBleHRlbmRzIENhc2NhZGVyT3B0aW9uIHtcbiAgcGF0aDogQ2FzY2FkZXJPcHRpb25bXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOelNob3dTZWFyY2hPcHRpb25zIHtcbiAgZmlsdGVyPzogTnpDYXNjYWRlckZpbHRlcjtcbiAgc29ydGVyPzogTnpDYXNjYWRlclNvcnRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hvd1NlYXJjaE9iamVjdChvcHRpb25zOiBOelNob3dTZWFyY2hPcHRpb25zIHwgYm9vbGVhbik6IG9wdGlvbnMgaXMgTnpTaG93U2VhcmNoT3B0aW9ucyB7XG4gIHJldHVybiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Jvb2xlYW4nO1xufVxuXG4vKipcbiAqIFRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3ksIHByb3ZpZGUgYW4gaW50ZXJmYWNlIG9mIGBOekNhc2NhZGVyQ29tcG9uZW50YFxuICogZm9yIGBOekNhc2NhZGVyU2VydmljZWAuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlIHtcbiAgaW5wdXRWYWx1ZTogc3RyaW5nO1xuICBuelNob3dTZWFyY2g6IE56U2hvd1NlYXJjaE9wdGlvbnMgfCBib29sZWFuO1xuICBuekxhYmVsUHJvcGVydHk6IHN0cmluZztcbiAgbnpWYWx1ZVByb3BlcnR5OiBzdHJpbmc7XG4gIG56Q2hhbmdlT25TZWxlY3Q6IGJvb2xlYW47XG5cbiAgbnpDaGFuZ2VPbj8ob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgbGV2ZWw6IG51bWJlcik6IGJvb2xlYW47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBuekxvYWREYXRhPyhub2RlOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg/OiBudW1iZXIpOiBQcm9taXNlTGlrZTxhbnk+O1xufVxuIl19