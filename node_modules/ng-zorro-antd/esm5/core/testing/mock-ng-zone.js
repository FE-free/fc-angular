/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { EventEmitter, Injectable, NgZone } from '@angular/core';
/**
 * Mock synchronous NgZone implementation that can be used
 * to flush out `onStable` subscriptions in tests.
 *
 * via: https://github.com/angular/angular/blob/master/packages/core/testing/src/ng_zone_mock.ts
 * \@docs-private
 */
var MockNgZone = /** @class */ (function (_super) {
    tslib_1.__extends(MockNgZone, _super);
    function MockNgZone() {
        var _this = _super.call(this, { enableLongStackTrace: false }) || this;
        _this.onStable = new EventEmitter(false);
        return _this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    MockNgZone.prototype.run = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return fn();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MockNgZone.prototype.runOutsideAngular = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        return fn();
    };
    /**
     * @return {?}
     */
    MockNgZone.prototype.simulateZoneExit = /**
     * @return {?}
     */
    function () {
        this.onStable.emit(null);
    };
    MockNgZone.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MockNgZone.ctorParameters = function () { return []; };
    return MockNgZone;
}(NgZone));
export { MockNgZone };
if (false) {
    /** @type {?} */
    MockNgZone.prototype.onStable;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1uZy16b25lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9tb2NrLW5nLXpvbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVNqRTtJQUNnQyxzQ0FBTTtJQUdwQztRQUFBLFlBQ0Usa0JBQU0sRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsQ0FBQyxTQUN2QztRQUpELGNBQVEsR0FBc0IsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7O0lBSXRELENBQUM7Ozs7O0lBRUQsd0JBQUc7Ozs7SUFBSCxVQUFJLEVBQVk7UUFDZCxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxzQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUVELHFDQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Z0JBbEJGLFVBQVU7Ozs7SUFtQlgsaUJBQUM7Q0FBQSxBQW5CRCxDQUNnQyxNQUFNLEdBa0JyQztTQWxCWSxVQUFVOzs7SUFDckIsOEJBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogTW9jayBzeW5jaHJvbm91cyBOZ1pvbmUgaW1wbGVtZW50YXRpb24gdGhhdCBjYW4gYmUgdXNlZFxuICogdG8gZmx1c2ggb3V0IGBvblN0YWJsZWAgc3Vic2NyaXB0aW9ucyBpbiB0ZXN0cy5cbiAqXG4gKiB2aWE6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi9tYXN0ZXIvcGFja2FnZXMvY29yZS90ZXN0aW5nL3NyYy9uZ196b25lX21vY2sudHNcbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tOZ1pvbmUgZXh0ZW5kcyBOZ1pvbmUge1xuICBvblN0YWJsZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKGZhbHNlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcih7IGVuYWJsZUxvbmdTdGFja1RyYWNlOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJ1bihmbjogRnVuY3Rpb24pOiBhbnkge1xuICAgIHJldHVybiBmbigpO1xuICB9XG5cbiAgcnVuT3V0c2lkZUFuZ3VsYXIoZm46IEZ1bmN0aW9uKTogYW55IHtcbiAgICByZXR1cm4gZm4oKTtcbiAgfVxuXG4gIHNpbXVsYXRlWm9uZUV4aXQoKTogdm9pZCB7XG4gICAgdGhpcy5vblN0YWJsZS5lbWl0KG51bGwpO1xuICB9XG59XG4iXX0=