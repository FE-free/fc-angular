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
import { Injectable, RendererFactory2 } from '@angular/core';
export class NzUpdateHostClassService {
    /**
     * @param {?} rendererFactory2
     */
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    /**
     * @param {?} el
     * @param {?} classMap
     * @return {?}
     */
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = Object.assign({}, classMap);
        this.addClass(el, this.classMap, this.renderer);
    }
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    /**
     * @private
     * @param {?} el
     * @param {?} classMap
     * @param {?} renderer
     * @return {?}
     */
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
}
NzUpdateHostClassService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzUpdateHostClassService.ctorParameters = () => [
    { type: RendererFactory2 }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUpdateHostClassService.prototype.classMap;
    /** @type {?} */
    NzUpdateHostClassService.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS3hFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUEwQm5DLFlBQVksZ0JBQWtDO1FBekJ0QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBMEJwQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBeEJELGVBQWUsQ0FBQyxFQUFlLEVBQUUsUUFBZ0I7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEscUJBQVEsUUFBUSxDQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7Ozs7SUFFTyxXQUFXLENBQUMsRUFBZSxFQUFFLFFBQTBCLEVBQUUsUUFBbUI7UUFDbEYsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5QixRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsRUFBZSxFQUFFLFFBQTBCLEVBQUUsUUFBbUI7UUFDL0UsS0FBSyxNQUFNLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDeEIsSUFBSSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDMUI7U0FDRjtJQUNILENBQUM7OztZQXpCRixVQUFVOzs7O1lBSnFCLGdCQUFnQjs7Ozs7OztJQU05Qyw0Q0FBc0I7O0lBQ3RCLDRDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdDbGFzc0ludGVyZmFjZSB9IGZyb20gJy4uL3R5cGVzL25nLWNsYXNzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB7XG4gIHByaXZhdGUgY2xhc3NNYXAgPSB7fTtcbiAgcmVhZG9ubHkgcmVuZGVyZXI6IFJlbmRlcmVyMjtcblxuICB1cGRhdGVIb3N0Q2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogb2JqZWN0KTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbCwgdGhpcy5jbGFzc01hcCwgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5jbGFzc01hcCA9IHsgLi4uY2xhc3NNYXAgfTtcbiAgICB0aGlzLmFkZENsYXNzKGVsLCB0aGlzLmNsYXNzTWFwLCB0aGlzLnJlbmRlcmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlQ2xhc3MoZWw6IEhUTUxFbGVtZW50LCBjbGFzc01hcDogTmdDbGFzc0ludGVyZmFjZSwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaSBpbiBjbGFzc01hcCkge1xuICAgICAgaWYgKGNsYXNzTWFwLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZENsYXNzKGVsOiBIVE1MRWxlbWVudCwgY2xhc3NNYXA6IE5nQ2xhc3NJbnRlcmZhY2UsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGkgaW4gY2xhc3NNYXApIHtcbiAgICAgIGlmIChjbGFzc01hcC5oYXNPd25Qcm9wZXJ0eShpKSAmJiBjbGFzc01hcFtpXSkge1xuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyhlbCwgaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXJGYWN0b3J5MjogUmVuZGVyZXJGYWN0b3J5Mikge1xuICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkyLmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG59XG4iXX0=