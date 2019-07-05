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
import { Injectable, RendererFactory2 } from '@angular/core';
var NzUpdateHostClassService = /** @class */ (function () {
    function NzUpdateHostClassService(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    NzUpdateHostClassService.prototype.updateHostClass = /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    function (el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = tslib_1.__assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    };
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.removeClass = /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    };
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    NzUpdateHostClassService.prototype.addClass = /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    function (el, classMap, renderer) {
        for (var i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    };
    NzUpdateHostClassService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzUpdateHostClassService.ctorParameters = function () { return [
        { type: RendererFactory2 }
    ]; };
    return NzUpdateHostClassService;
}());
export { NzUpdateHostClassService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl4RTtJQTJCRSxrQ0FBWSxnQkFBa0M7UUF6QnRDLGFBQVEsR0FBRyxFQUFFLENBQUM7UUEwQnBCLElBQUksQ0FBQyxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUF4QkQsa0RBQWU7Ozs7O0lBQWYsVUFBZ0IsRUFBZSxFQUFFLFFBQWdCO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLHdCQUFRLFFBQVEsQ0FBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Ozs7Ozs7O0lBRU8sOENBQVc7Ozs7Ozs7SUFBbkIsVUFBb0IsRUFBZSxFQUFFLFFBQTBCLEVBQUUsUUFBbUI7UUFDbEYsS0FBSyxJQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTywyQ0FBUTs7Ozs7OztJQUFoQixVQUFpQixFQUFlLEVBQUUsUUFBMEIsRUFBRSxRQUFtQjtRQUMvRSxLQUFLLElBQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRTtZQUN4QixJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMxQjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBekJGLFVBQVU7Ozs7Z0JBSnFCLGdCQUFnQjs7SUFrQ2hELCtCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3Qlksd0JBQXdCOzs7Ozs7SUFDbkMsNENBQXNCOztJQUN0Qiw0Q0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nQ2xhc3NJbnRlcmZhY2UgfSBmcm9tICcuLi90eXBlcy9uZy1jbGFzcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2Uge1xuICBwcml2YXRlIGNsYXNzTWFwID0ge307XG4gIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjI7XG5cbiAgdXBkYXRlSG9zdENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IG9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWwsIHRoaXMuY2xhc3NNYXAsIHRoaXMucmVuZGVyZXIpO1xuICAgIHRoaXMuY2xhc3NNYXAgPSB7IC4uLmNsYXNzTWFwIH07XG4gICAgdGhpcy5hZGRDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUNsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICByZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTWFwOiBOZ0NsYXNzSW50ZXJmYWNlLCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpIGluIGNsYXNzTWFwKSB7XG4gICAgICBpZiAoY2xhc3NNYXAuaGFzT3duUHJvcGVydHkoaSkgJiYgY2xhc3NNYXBbaV0pIHtcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWwsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyRmFjdG9yeTI6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5Mi5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKTtcbiAgfVxufVxuIl19