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
import { Subject } from 'rxjs';
import { NzCarouselBaseStrategy } from './base-strategy';
var NzCarouselOpacityStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NzCarouselOpacityStrategy, _super);
    function NzCarouselOpacityStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} contents
     * @return {?}
     */
    NzCarouselOpacityStrategy.prototype.withCarouselContents = /**
     * @param {?} contents
     * @return {?}
     */
    function (contents) {
        var _this = this;
        _super.prototype.withCarouselContents.call(this, contents);
        if (this.contents) {
            this.slickTrackEl.style.width = this.length * this.unitWidth + "px";
            this.contents.forEach((/**
             * @param {?} content
             * @param {?} i
             * @return {?}
             */
            function (content, i) {
                _this.renderer.setStyle(content.el, 'opacity', (/** @type {?} */ (_this.carouselComponent)).activeIndex === i ? '1' : '0');
                _this.renderer.setStyle(content.el, 'position', 'relative');
                _this.renderer.setStyle(content.el, 'width', _this.unitWidth + "px");
                _this.renderer.setStyle(content.el, 'left', -_this.unitWidth * i + "px");
                _this.renderer.setStyle(content.el, 'transition', ['opacity 500ms ease 0s', 'visibility 500ms ease 0s']);
            }));
        }
    };
    /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    NzCarouselOpacityStrategy.prototype.switch = /**
     * @param {?} _f
     * @param {?} _t
     * @return {?}
     */
    function (_f, _t) {
        var _this = this;
        var t = this.getFromToInBoundary(_f, _t).to;
        /** @type {?} */
        var complete$ = new Subject();
        this.contents.forEach((/**
         * @param {?} content
         * @param {?} i
         * @return {?}
         */
        function (content, i) {
            _this.renderer.setStyle(content.el, 'opacity', t === i ? '1' : '0');
        }));
        setTimeout((/**
         * @return {?}
         */
        function () {
            complete$.next();
            complete$.complete();
        }), (/** @type {?} */ (this.carouselComponent)).nzTransitionSpeed);
        return complete$;
    };
    /**
     * @return {?}
     */
    NzCarouselOpacityStrategy.prototype.dispose = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contents.forEach((/**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            _this.renderer.setStyle(content.el, 'transition', null);
        }));
        _super.prototype.dispose.call(this);
    };
    return NzCarouselOpacityStrategy;
}(NzCarouselBaseStrategy));
export { NzCarouselOpacityStrategy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BhY2l0eS1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY2Fyb3VzZWwvIiwic291cmNlcyI6WyJzdHJhdGVnaWVzL29wYWNpdHktc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUkzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RDtJQUErQyxxREFBc0I7SUFBckU7O0lBd0NBLENBQUM7Ozs7O0lBdkNDLHdEQUFvQjs7OztJQUFwQixVQUFxQixRQUFzRDtRQUEzRSxpQkFjQztRQWJDLGlCQUFNLG9CQUFvQixZQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFJLENBQUM7WUFFcEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7OztZQUFDLFVBQUMsT0FBbUMsRUFBRSxDQUFTO2dCQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxtQkFBQSxLQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRyxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUssS0FBSSxDQUFDLFNBQVMsT0FBSSxDQUFDLENBQUM7Z0JBQ25FLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFLLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLE9BQUksQ0FBQyxDQUFDO2dCQUN2RSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLHVCQUF1QixFQUFFLDBCQUEwQixDQUFDLENBQUMsQ0FBQztZQUMxRyxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsMENBQU07Ozs7O0lBQU4sVUFBTyxFQUFVLEVBQUUsRUFBVTtRQUE3QixpQkFjQztRQWJTLElBQUEsdUNBQUs7O1lBQ1AsU0FBUyxHQUFHLElBQUksT0FBTyxFQUFRO1FBRXJDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7Ozs7UUFBQyxVQUFDLE9BQW1DLEVBQUUsQ0FBUztZQUNuRSxLQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsRUFBQyxDQUFDO1FBRUgsVUFBVTs7O1FBQUM7WUFDVCxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsR0FBRSxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRTlDLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCwyQ0FBTzs7O0lBQVA7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsT0FBbUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7UUFFSCxpQkFBTSxPQUFPLFdBQUUsQ0FBQztJQUNsQixDQUFDO0lBQ0gsZ0NBQUM7QUFBRCxDQUFDLEFBeENELENBQStDLHNCQUFzQixHQXdDcEUiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi4vbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IH0gZnJvbSAnLi9iYXNlLXN0cmF0ZWd5JztcblxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxPcGFjaXR5U3RyYXRlZ3kgZXh0ZW5kcyBOekNhcm91c2VsQmFzZVN0cmF0ZWd5IHtcbiAgd2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHM6IFF1ZXJ5TGlzdDxOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZT4gfCBudWxsKTogdm9pZCB7XG4gICAgc3VwZXIud2l0aENhcm91c2VsQ29udGVudHMoY29udGVudHMpO1xuXG4gICAgaWYgKHRoaXMuY29udGVudHMpIHtcbiAgICAgIHRoaXMuc2xpY2tUcmFja0VsLnN0eWxlLndpZHRoID0gYCR7dGhpcy5sZW5ndGggKiB0aGlzLnVuaXRXaWR0aH1weGA7XG5cbiAgICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUsIGk6IG51bWJlcikgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdvcGFjaXR5JywgdGhpcy5jYXJvdXNlbENvbXBvbmVudCEuYWN0aXZlSW5kZXggPT09IGkgPyAnMScgOiAnMCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRlbnQuZWwsICd3aWR0aCcsIGAke3RoaXMudW5pdFdpZHRofXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ2xlZnQnLCBgJHstdGhpcy51bml0V2lkdGggKiBpfXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3RyYW5zaXRpb24nLCBbJ29wYWNpdHkgNTAwbXMgZWFzZSAwcycsICd2aXNpYmlsaXR5IDUwMG1zIGVhc2UgMHMnXSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzd2l0Y2goX2Y6IG51bWJlciwgX3Q6IG51bWJlcik6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIGNvbnN0IHsgdG86IHQgfSA9IHRoaXMuZ2V0RnJvbVRvSW5Cb3VuZGFyeShfZiwgX3QpO1xuICAgIGNvbnN0IGNvbXBsZXRlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgICB0aGlzLmNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQ6IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlLCBpOiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ29wYWNpdHknLCB0ID09PSBpID8gJzEnIDogJzAnKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29tcGxldGUkLm5leHQoKTtcbiAgICAgIGNvbXBsZXRlJC5jb21wbGV0ZSgpO1xuICAgIH0sIHRoaXMuY2Fyb3VzZWxDb21wb25lbnQhLm56VHJhbnNpdGlvblNwZWVkKTtcblxuICAgIHJldHVybiBjb21wbGV0ZSQ7XG4gIH1cblxuICBkaXNwb3NlKCk6IHZvaWQge1xuICAgIHRoaXMuY29udGVudHMuZm9yRWFjaCgoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoY29udGVudC5lbCwgJ3RyYW5zaXRpb24nLCBudWxsKTtcbiAgICB9KTtcblxuICAgIHN1cGVyLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl19