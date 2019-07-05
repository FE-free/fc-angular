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
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { NzMenuService } from './nz-menu.service';
var NzSubmenuService = /** @class */ (function () {
    function NzSubmenuService(nzHostSubmenuService, nzMenuService) {
        var _this = this;
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.disabled = false;
        this.mode = 'vertical';
        this.mode$ = this.nzMenuService.mode$.pipe(map((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            if (mode === 'inline') {
                return 'inline';
            }
            else if (mode === 'vertical' || _this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        })), tap((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) { return (_this.mode = (/** @type {?} */ (mode))); })));
        this.level = 1;
        this.level$ = new BehaviorSubject(1);
        this.subMenuOpen$ = new BehaviorSubject(false);
        this.open$ = new BehaviorSubject(false);
        this.mouseEnterLeave$ = new Subject();
        this.menuOpen$ = combineLatest(this.subMenuOpen$, this.mouseEnterLeave$).pipe(map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return value[0] || value[1]; })), auditTime(150), distinctUntilChanged(), tap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            _this.setOpenState(data);
            if (_this.nzHostSubmenuService) {
                _this.nzHostSubmenuService.subMenuOpen$.next(data);
            }
        })));
        if (this.nzHostSubmenuService) {
            this.setLevel(this.nzHostSubmenuService.level + 1);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setOpenState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.open$.next(value);
    };
    /**
     * @return {?}
     */
    NzSubmenuService.prototype.onMenuItemClick = /**
     * @return {?}
     */
    function () {
        this.setMouseEnterState(false);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setLevel = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.level$.next(value);
        this.level = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSubmenuService.prototype.setMouseEnterState = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if ((this.mode === 'horizontal' || this.mode === 'vertical' || this.nzMenuService.isInDropDown) && !this.disabled) {
            this.mouseEnterLeave$.next(value);
        }
    };
    NzSubmenuService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzSubmenuService.ctorParameters = function () { return [
        { type: NzSubmenuService, decorators: [{ type: SkipSelf }, { type: Optional }] },
        { type: NzMenuService }
    ]; };
    return NzSubmenuService;
}());
export { NzSubmenuService };
if (false) {
    /** @type {?} */
    NzSubmenuService.prototype.disabled;
    /** @type {?} */
    NzSubmenuService.prototype.mode;
    /** @type {?} */
    NzSubmenuService.prototype.mode$;
    /** @type {?} */
    NzSubmenuService.prototype.level;
    /** @type {?} */
    NzSubmenuService.prototype.level$;
    /** @type {?} */
    NzSubmenuService.prototype.subMenuOpen$;
    /** @type {?} */
    NzSubmenuService.prototype.open$;
    /** @type {?} */
    NzSubmenuService.prototype.mouseEnterLeave$;
    /** @type {?} */
    NzSubmenuService.prototype.menuOpen$;
    /**
     * @type {?}
     * @private
     */
    NzSubmenuService.prototype.nzHostSubmenuService;
    /** @type {?} */
    NzSubmenuService.prototype.nzMenuService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZW51LyIsInNvdXJjZXMiOlsibnotc3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUkzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQ7SUFvREUsMEJBQ2tDLG9CQUFzQyxFQUMvRCxhQUE0QjtRQUZyQyxpQkFPQztRQU5pQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWtCO1FBQy9ELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBcERyQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFNBQUksR0FBdUIsVUFBVSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ25DLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDTixJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3JCLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO2lCQUFNLElBQUksSUFBSSxLQUFLLFVBQVUsSUFBSSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzNELE9BQU8sVUFBVSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLG1CQUFBLElBQUksRUFBc0IsQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQ3RELENBQUM7UUFDRixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLGlCQUFZLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDbkQsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQzVDLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDMUMsY0FBUyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDdEUsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsRUFBQyxFQUNsQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2Qsb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25EO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQXlCQSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7SUFDSCxDQUFDOzs7OztJQTFCRCx1Q0FBWTs7OztJQUFaLFVBQWEsS0FBYztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsbUNBQVE7Ozs7SUFBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCw2Q0FBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBYztRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7O2dCQWxERixVQUFVOzs7O2dCQXFEK0MsZ0JBQWdCLHVCQUFyRSxRQUFRLFlBQUksUUFBUTtnQkF2RGhCLGFBQWE7O0lBOER0Qix1QkFBQztDQUFBLEFBNURELElBNERDO1NBM0RZLGdCQUFnQjs7O0lBQzNCLG9DQUFpQjs7SUFDakIsZ0NBQXNDOztJQUN0QyxpQ0FXRTs7SUFDRixpQ0FBVTs7SUFDVixrQ0FBd0M7O0lBQ3hDLHdDQUFtRDs7SUFDbkQsaUNBQTRDOztJQUM1Qyw0Q0FBMEM7O0lBQzFDLHFDQVVFOzs7OztJQXNCQSxnREFBc0U7O0lBQ3RFLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56RGlyZWN0aW9uVkhJVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7IE56TWVudVNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelN1Ym1lbnVTZXJ2aWNlIHtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgbW9kZTogTnpEaXJlY3Rpb25WSElUeXBlID0gJ3ZlcnRpY2FsJztcbiAgbW9kZSQgPSB0aGlzLm56TWVudVNlcnZpY2UubW9kZSQucGlwZShcbiAgICBtYXAobW9kZSA9PiB7XG4gICAgICBpZiAobW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgcmV0dXJuICdpbmxpbmUnO1xuICAgICAgfSBlbHNlIGlmIChtb2RlID09PSAndmVydGljYWwnIHx8IHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHRhcChtb2RlID0+ICh0aGlzLm1vZGUgPSBtb2RlIGFzIE56RGlyZWN0aW9uVkhJVHlwZSkpXG4gICk7XG4gIGxldmVsID0gMTtcbiAgbGV2ZWwkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDEpO1xuICBzdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgb3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgbW91c2VFbnRlckxlYXZlJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIG1lbnVPcGVuJCA9IGNvbWJpbmVMYXRlc3QodGhpcy5zdWJNZW51T3BlbiQsIHRoaXMubW91c2VFbnRlckxlYXZlJCkucGlwZShcbiAgICBtYXAodmFsdWUgPT4gdmFsdWVbMF0gfHwgdmFsdWVbMV0pLFxuICAgIGF1ZGl0VGltZSgxNTApLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKGRhdGEgPT4ge1xuICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZGF0YSk7XG4gICAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xuICAgICAgICB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLnN1Yk1lbnVPcGVuJC5uZXh0KGRhdGEpO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuJC5uZXh0KHZhbHVlKTtcbiAgfVxuXG4gIG9uTWVudUl0ZW1DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNldE1vdXNlRW50ZXJTdGF0ZShmYWxzZSk7XG4gIH1cblxuICBzZXRMZXZlbCh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5sZXZlbCQubmV4dCh2YWx1ZSk7XG4gICAgdGhpcy5sZXZlbCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0TW91c2VFbnRlclN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLm1vZGUgPT09ICdob3Jpem9udGFsJyB8fCB0aGlzLm1vZGUgPT09ICd2ZXJ0aWNhbCcgfHwgdGhpcy5uek1lbnVTZXJ2aWNlLmlzSW5Ecm9wRG93bikgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMubW91c2VFbnRlckxlYXZlJC5uZXh0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBAU2tpcFNlbGYoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56SG9zdFN1Ym1lbnVTZXJ2aWNlOiBOelN1Ym1lbnVTZXJ2aWNlLFxuICAgIHB1YmxpYyBuek1lbnVTZXJ2aWNlOiBOek1lbnVTZXJ2aWNlXG4gICkge1xuICAgIGlmICh0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnNldExldmVsKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UubGV2ZWwgKyAxKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==