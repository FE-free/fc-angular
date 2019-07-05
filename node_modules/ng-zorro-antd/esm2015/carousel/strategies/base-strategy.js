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
 * @abstract
 */
export class NzCarouselBaseStrategy {
    /**
     * @param {?} carouselComponent
     * @param {?} cdr
     * @param {?} renderer
     */
    constructor(carouselComponent, cdr, renderer) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.carouselComponent = carouselComponent;
    }
    /**
     * @protected
     * @return {?}
     */
    get maxIndex() {
        return this.length - 1;
    }
    /**
     * @protected
     * @return {?}
     */
    get firstEl() {
        return this.contents[0].el;
    }
    /**
     * @protected
     * @return {?}
     */
    get lastEl() {
        return this.contents[this.maxIndex].el;
    }
    /**
     * Initialize dragging sequences.
     * @param {?} contents
     * @return {?}
     */
    withCarouselContents(contents) {
        // TODO: carousel and its contents should be separated.
        /** @type {?} */
        const carousel = (/** @type {?} */ (this.carouselComponent));
        /** @type {?} */
        const rect = carousel.el.getBoundingClientRect();
        this.slickListEl = carousel.slickListEl;
        this.slickTrackEl = carousel.slickTrackEl;
        this.unitWidth = rect.width;
        this.unitHeight = rect.height;
        this.contents = contents ? contents.toArray() : [];
        this.length = this.contents.length;
    }
    /**
     * When user drag the carousel component.
     * \@optional
     * @param {?} _vector
     * @return {?}
     */
    dragging(_vector) { }
    /**
     * Destroy a scroll strategy.
     * @return {?}
     */
    dispose() { }
    /**
     * @protected
     * @param {?} f
     * @param {?} t
     * @return {?}
     */
    getFromToInBoundary(f, t) {
        /** @type {?} */
        const length = this.maxIndex + 1;
        return { from: (f + length) % length, to: (t + length) % length };
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.carouselComponent;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.contents;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickListEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.slickTrackEl;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.length;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitWidth;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.unitHeight;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.cdr;
    /**
     * @type {?}
     * @protected
     */
    NzCarouselBaseStrategy.prototype.renderer;
    /**
     * Trigger transition.
     * @abstract
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselBaseStrategy.prototype.switch = function (_f, _t) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL2Jhc2Utc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFjQSxNQUFNLE9BQWdCLHNCQUFzQjs7Ozs7O0lBc0IxQyxZQUNFLGlCQUE4QyxFQUNwQyxHQUFzQixFQUN0QixRQUFtQjtRQURuQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRTdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztJQUM3QyxDQUFDOzs7OztJQWxCRCxJQUFjLFFBQVE7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7OztJQUVELElBQWMsT0FBTztRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQsSUFBYyxNQUFNO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7OztJQWNELG9CQUFvQixDQUFDLFFBQXNEOzs7Y0FFbkUsUUFBUSxHQUFHLG1CQUFBLElBQUksQ0FBQyxpQkFBaUIsRUFBQzs7Y0FDbEMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7SUFXRCxRQUFRLENBQUMsT0FBc0IsSUFBUyxDQUFDOzs7OztJQUt6QyxPQUFPLEtBQVUsQ0FBQzs7Ozs7OztJQUVSLG1CQUFtQixDQUFDLENBQVMsRUFBRSxDQUFTOztjQUMxQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQ2hDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUNwRSxDQUFDO0NBQ0Y7Ozs7OztJQWhFQyxtREFBZ0U7Ozs7O0lBQ2hFLDBDQUFpRDs7Ozs7SUFDakQsNkNBQW1DOzs7OztJQUNuQyw4Q0FBb0M7Ozs7O0lBQ3BDLHdDQUF5Qjs7Ozs7SUFDekIsMkNBQTRCOzs7OztJQUM1Qiw0Q0FBNkI7Ozs7O0lBZ0IzQixxQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUE2Qjs7Ozs7Ozs7SUF3Qi9CLGdFQUEwRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgUXVlcnlMaXN0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGcm9tVG9JbnRlcmZhY2UsIE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSwgUG9pbnRlclZlY3RvciB9IGZyb20gJy4uL256LWNhcm91c2VsLWRlZmluaXRpb25zJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE56Q2Fyb3VzZWxCYXNlU3RyYXRlZ3kge1xuICAvLyBQcm9wZXJ0aWVzIHRoYXQgc3RyYXRlZ2llcyBtYXkgd2FudCB0byB1c2UuXG4gIHByb3RlY3RlZCBjYXJvdXNlbENvbXBvbmVudDogTnpDYXJvdXNlbENvbXBvbmVudEFzU291cmNlIHwgbnVsbDtcbiAgcHJvdGVjdGVkIGNvbnRlbnRzOiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZVtdO1xuICBwcm90ZWN0ZWQgc2xpY2tMaXN0RWw6IEhUTUxFbGVtZW50O1xuICBwcm90ZWN0ZWQgc2xpY2tUcmFja0VsOiBIVE1MRWxlbWVudDtcbiAgcHJvdGVjdGVkIGxlbmd0aDogbnVtYmVyO1xuICBwcm90ZWN0ZWQgdW5pdFdpZHRoOiBudW1iZXI7XG4gIHByb3RlY3RlZCB1bml0SGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGdldCBtYXhJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIDE7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IGZpcnN0RWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzWzBdLmVsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBsYXN0RWwoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnRzW3RoaXMubWF4SW5kZXhdLmVsO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2Fyb3VzZWxDb21wb25lbnQ6IE56Q2Fyb3VzZWxDb21wb25lbnRBc1NvdXJjZSxcbiAgICBwcm90ZWN0ZWQgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmNhcm91c2VsQ29tcG9uZW50ID0gY2Fyb3VzZWxDb21wb25lbnQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBkcmFnZ2luZyBzZXF1ZW5jZXMuXG4gICAqIEBwYXJhbSBjb250ZW50c1xuICAgKi9cbiAgd2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT4gfCBudWxsKTogdm9pZCB7XG4gICAgLy8gVE9ETzogY2Fyb3VzZWwgYW5kIGl0cyBjb250ZW50cyBzaG91bGQgYmUgc2VwYXJhdGVkLlxuICAgIGNvbnN0IGNhcm91c2VsID0gdGhpcy5jYXJvdXNlbENvbXBvbmVudCE7XG4gICAgY29uc3QgcmVjdCA9IGNhcm91c2VsLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuc2xpY2tMaXN0RWwgPSBjYXJvdXNlbC5zbGlja0xpc3RFbDtcbiAgICB0aGlzLnNsaWNrVHJhY2tFbCA9IGNhcm91c2VsLnNsaWNrVHJhY2tFbDtcbiAgICB0aGlzLnVuaXRXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgdGhpcy51bml0SGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgdGhpcy5jb250ZW50cyA9IGNvbnRlbnRzID8gY29udGVudHMudG9BcnJheSgpIDogW107XG4gICAgdGhpcy5sZW5ndGggPSB0aGlzLmNvbnRlbnRzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHRyYW5zaXRpb24uXG4gICAqL1xuICBhYnN0cmFjdCBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD47XG5cbiAgLyoqXG4gICAqIFdoZW4gdXNlciBkcmFnIHRoZSBjYXJvdXNlbCBjb21wb25lbnQuXG4gICAqIEBvcHRpb25hbFxuICAgKi9cbiAgZHJhZ2dpbmcoX3ZlY3RvcjogUG9pbnRlclZlY3Rvcik6IHZvaWQge31cblxuICAvKipcbiAgICogRGVzdHJveSBhIHNjcm9sbCBzdHJhdGVneS5cbiAgICovXG4gIGRpc3Bvc2UoKTogdm9pZCB7fVxuXG4gIHByb3RlY3RlZCBnZXRGcm9tVG9JbkJvdW5kYXJ5KGY6IG51bWJlciwgdDogbnVtYmVyKTogRnJvbVRvSW50ZXJmYWNlIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLm1heEluZGV4ICsgMTtcbiAgICByZXR1cm4geyBmcm9tOiAoZiArIGxlbmd0aCkgJSBsZW5ndGgsIHRvOiAodCArIGxlbmd0aCkgJSBsZW5ndGggfTtcbiAgfVxufVxuIl19