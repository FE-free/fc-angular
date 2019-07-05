/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
/** @type {?} */
export var NZ_DATE_CONFIG = new InjectionToken('date-config');
/** @type {?} */
export var NZ_DATE_CONFIG_DEFAULT = {
    firstDayOfWeek: undefined
};
/**
 * @param {?} config
 * @return {?}
 */
export function mergeDateConfig(config) {
    return tslib_1.__assign({}, NZ_DATE_CONFIG_DEFAULT, config);
}
/**
 * @record
 */
export function NzDateConfig() { }
if (false) {
    /**
     * Customize the first day of a week
     * @type {?|undefined}
     */
    NzDateConfig.prototype.firstDayOfWeek;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2kxOG4vIiwic291cmNlcyI6WyJkYXRlLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUvQyxNQUFNLEtBQU8sY0FBYyxHQUFHLElBQUksY0FBYyxDQUFlLGFBQWEsQ0FBQzs7QUFFN0UsTUFBTSxLQUFPLHNCQUFzQixHQUFpQjtJQUNsRCxjQUFjLEVBQUUsU0FBUztDQUMxQjs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQW9CO0lBQ2xELDRCQUFZLHNCQUFzQixFQUFLLE1BQU0sRUFBRztBQUNsRCxDQUFDOzs7O0FBRUQsa0NBR0M7Ozs7OztJQURDLHNDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY29uc3QgTlpfREFURV9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpEYXRlQ29uZmlnPignZGF0ZS1jb25maWcnKTtcblxuZXhwb3J0IGNvbnN0IE5aX0RBVEVfQ09ORklHX0RFRkFVTFQ6IE56RGF0ZUNvbmZpZyA9IHtcbiAgZmlyc3REYXlPZldlZWs6IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlRGF0ZUNvbmZpZyhjb25maWc6IE56RGF0ZUNvbmZpZyk6IE56RGF0ZUNvbmZpZyB7XG4gIHJldHVybiB7IC4uLk5aX0RBVEVfQ09ORklHX0RFRkFVTFQsIC4uLmNvbmZpZyB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE56RGF0ZUNvbmZpZyB7XG4gIC8qKiBDdXN0b21pemUgdGhlIGZpcnN0IGRheSBvZiBhIHdlZWsgKi9cbiAgZmlyc3REYXlPZldlZWs/OiAwIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xufVxuIl19