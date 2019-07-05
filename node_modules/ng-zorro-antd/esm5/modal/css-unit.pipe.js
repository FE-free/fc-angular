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
import { Pipe } from '@angular/core';
var CssUnitPipe = /** @class */ (function () {
    function CssUnitPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    CssUnitPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    function (value, defaultUnit) {
        if (defaultUnit === void 0) { defaultUnit = 'px'; }
        /** @type {?} */
        var formatted = +value;
        return isNaN(formatted) ? "" + value : "" + formatted + defaultUnit;
    };
    CssUnitPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'toCssUnit'
                },] }
    ];
    return CssUnitPipe;
}());
export { CssUnitPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbW9kYWwvIiwic291cmNlcyI6WyJjc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFBQTtJQVFBLENBQUM7Ozs7OztJQUpDLCtCQUFTOzs7OztJQUFULFVBQVUsS0FBc0IsRUFBRSxXQUEwQjtRQUExQiw0QkFBQSxFQUFBLGtCQUEwQjs7WUFDcEQsU0FBUyxHQUFHLENBQUMsS0FBSztRQUN4QixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxLQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUcsU0FBUyxHQUFHLFdBQWEsQ0FBQztJQUN0RSxDQUFDOztnQkFQRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFdBQVc7aUJBQ2xCOztJQU1ELGtCQUFDO0NBQUEsQUFSRCxJQVFDO1NBTFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3RvQ3NzVW5pdCdcbn0pXG5leHBvcnQgY2xhc3MgQ3NzVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGRlZmF1bHRVbml0OiBzdHJpbmcgPSAncHgnKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSArdmFsdWU7IC8vIGZvcmNlIGNvbnZlcnRcbiAgICByZXR1cm4gaXNOYU4oZm9ybWF0dGVkKSA/IGAke3ZhbHVlfWAgOiBgJHtmb3JtYXR0ZWR9JHtkZWZhdWx0VW5pdH1gO1xuICB9XG59XG4iXX0=