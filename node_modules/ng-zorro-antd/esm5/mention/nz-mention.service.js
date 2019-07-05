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
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var NzMentionService = /** @class */ (function () {
    function NzMentionService() {
        this.triggerChange$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzMentionService.prototype.triggerChanged = /**
     * @return {?}
     */
    function () {
        return this.triggerChange$.asObservable();
    };
    /**
     * @param {?} trigger
     * @return {?}
     */
    NzMentionService.prototype.registerTrigger = /**
     * @param {?} trigger
     * @return {?}
     */
    function (trigger) {
        if (this.trigger !== trigger) {
            this.trigger = trigger;
            this.triggerChange$.next(trigger);
        }
    };
    /**
     * @return {?}
     */
    NzMentionService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.triggerChange$.complete();
    };
    NzMentionService.decorators = [
        { type: Injectable }
    ];
    return NzMentionService;
}());
export { NzMentionService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzMentionService.prototype.trigger;
    /**
     * @type {?}
     * @private
     */
    NzMentionService.prototype.triggerChange$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW50aW9uLyIsInNvdXJjZXMiOlsibnotbWVudGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTNDO0lBQUE7UUFHVSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUE2QixDQUFDO0lBZ0JwRSxDQUFDOzs7O0lBZEMseUNBQWM7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7O0lBRUQsMENBQWU7Ozs7SUFBZixVQUFnQixPQUFrQztRQUNoRCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakMsQ0FBQzs7Z0JBbEJGLFVBQVU7O0lBbUJYLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksZ0JBQWdCOzs7Ozs7SUFDM0IsbUNBQTJDOzs7OztJQUMzQywwQ0FBa0UiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOek1lbnRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlO1xuICBwcml2YXRlIHRyaWdnZXJDaGFuZ2UkID0gbmV3IFN1YmplY3Q8TnpNZW50aW9uVHJpZ2dlckRpcmVjdGl2ZT4oKTtcblxuICB0cmlnZ2VyQ2hhbmdlZCgpOiBPYnNlcnZhYmxlPE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmU+IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyQ2hhbmdlJC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyVHJpZ2dlcih0cmlnZ2VyOiBOek1lbnRpb25UcmlnZ2VyRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJpZ2dlciAhPT0gdHJpZ2dlcikge1xuICAgICAgdGhpcy50cmlnZ2VyID0gdHJpZ2dlcjtcbiAgICAgIHRoaXMudHJpZ2dlckNoYW5nZSQubmV4dCh0cmlnZ2VyKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnRyaWdnZXJDaGFuZ2UkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==