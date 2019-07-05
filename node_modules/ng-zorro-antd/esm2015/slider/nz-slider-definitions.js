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
export function MarkObj() { }
if (false) {
    /** @type {?|undefined} */
    MarkObj.prototype.style;
    /** @type {?} */
    MarkObj.prototype.label;
}
export class Marks {
}
/**
 * Processed steps that would be passed to sub components.
 * @record
 */
export function ExtendedMark() { }
if (false) {
    /** @type {?} */
    ExtendedMark.prototype.value;
    /** @type {?} */
    ExtendedMark.prototype.offset;
    /** @type {?} */
    ExtendedMark.prototype.config;
}
/**
 * Marks that would be rendered.
 * @record
 */
export function DisplayedMark() { }
if (false) {
    /** @type {?} */
    DisplayedMark.prototype.active;
    /** @type {?} */
    DisplayedMark.prototype.label;
    /** @type {?|undefined} */
    DisplayedMark.prototype.style;
}
/**
 * Steps that would be rendered.
 * @record
 */
export function DisplayedStep() { }
if (false) {
    /** @type {?} */
    DisplayedStep.prototype.active;
    /** @type {?|undefined} */
    DisplayedStep.prototype.style;
}
/**
 * @record
 */
export function SliderHandler() { }
if (false) {
    /** @type {?} */
    SliderHandler.prototype.offset;
    /** @type {?} */
    SliderHandler.prototype.value;
    /** @type {?} */
    SliderHandler.prototype.active;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isValueARange(value) {
    if (value instanceof Array) {
        return value.length === 2;
    }
    else {
        return false;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function isConfigAObject(config) {
    return config instanceof Object;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLWRlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9zbGlkZXIvIiwic291cmNlcyI6WyJuei1zbGlkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSw2QkFHQzs7O0lBRkMsd0JBQWU7O0lBQ2Ysd0JBQWM7O0FBR2hCLE1BQU0sT0FBTyxLQUFLO0NBRWpCOzs7OztBQUtELGtDQUlDOzs7SUFIQyw2QkFBYzs7SUFDZCw4QkFBZTs7SUFDZiw4QkFBYTs7Ozs7O0FBTWYsbUNBSUM7OztJQUhDLCtCQUFnQjs7SUFDaEIsOEJBQWM7O0lBQ2QsOEJBQWU7Ozs7OztBQU1qQixtQ0FHQzs7O0lBRkMsK0JBQWdCOztJQUNoQiw4QkFBZTs7Ozs7QUFPakIsbUNBSUM7OztJQUhDLCtCQUFzQjs7SUFDdEIsOEJBQXFCOztJQUNyQiwrQkFBZ0I7Ozs7OztBQUdsQixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWtCO0lBQzlDLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTtRQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0tBQzNCO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQVk7SUFDMUMsT0FBTyxNQUFNLFlBQVksTUFBTSxDQUFDO0FBQ2xDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuZXhwb3J0IHR5cGUgTWFyayA9IHN0cmluZyB8IE1hcmtPYmo7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya09iaiB7XG4gIHN0eWxlPzogb2JqZWN0O1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTWFya3Mge1xuICBba2V5OiBudW1iZXJdOiBNYXJrO1xufVxuXG4vKipcbiAqIFByb2Nlc3NlZCBzdGVwcyB0aGF0IHdvdWxkIGJlIHBhc3NlZCB0byBzdWIgY29tcG9uZW50cy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeHRlbmRlZE1hcmsge1xuICB2YWx1ZTogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgY29uZmlnOiBNYXJrO1xufVxuXG4vKipcbiAqIE1hcmtzIHRoYXQgd291bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlzcGxheWVkTWFyayBleHRlbmRzIEV4dGVuZGVkTWFyayB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgbGFiZWw6IHN0cmluZztcbiAgc3R5bGU/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogU3RlcHMgdGhhdCB3b3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5ZWRTdGVwIGV4dGVuZHMgRXh0ZW5kZWRNYXJrIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBzdHlsZT86IG9iamVjdDtcbn1cblxuZXhwb3J0IHR5cGUgU2xpZGVyU2hvd1Rvb2x0aXAgPSAnYWx3YXlzJyB8ICduZXZlcicgfCAnZGVmYXVsdCc7XG5cbmV4cG9ydCB0eXBlIFNsaWRlclZhbHVlID0gbnVtYmVyW10gfCBudW1iZXI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2xpZGVySGFuZGxlciB7XG4gIG9mZnNldDogbnVtYmVyIHwgbnVsbDtcbiAgdmFsdWU6IG51bWJlciB8IG51bGw7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVBUmFuZ2UodmFsdWU6IFNsaWRlclZhbHVlKTogdmFsdWUgaXMgbnVtYmVyW10ge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbmZpZ0FPYmplY3QoY29uZmlnOiBNYXJrKTogY29uZmlnIGlzIE1hcmtPYmoge1xuICByZXR1cm4gY29uZmlnIGluc3RhbmNlb2YgT2JqZWN0O1xufVxuIl19