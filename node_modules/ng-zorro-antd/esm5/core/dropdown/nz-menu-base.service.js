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
import { BehaviorSubject, Subject } from 'rxjs';
var NzMenuBaseService = /** @class */ (function () {
    function NzMenuBaseService() {
        this.menuItemClick$ = new Subject(); // tslint:disable-line no-any
        // tslint:disable-line no-any
        this.theme$ = new Subject();
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlineIndent = 24;
        this.menuOpen$ = new BehaviorSubject(false);
    }
    // tslint:disable-next-line no-any
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    NzMenuBaseService.prototype.onMenuItemClick = 
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    function (menu) {
        this.menuItemClick$.next(menu);
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    NzMenuBaseService.prototype.setMode = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.mode = mode;
        this.mode$.next(mode);
    };
    /**
     * @param {?} theme
     * @return {?}
     */
    NzMenuBaseService.prototype.setTheme = /**
     * @param {?} theme
     * @return {?}
     */
    function (theme) {
        this.theme = theme;
        this.theme$.next(theme);
    };
    /**
     * @param {?} indent
     * @return {?}
     */
    NzMenuBaseService.prototype.setInlineIndent = /**
     * @param {?} indent
     * @return {?}
     */
    function (indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    };
    NzMenuBaseService.decorators = [
        { type: Injectable }
    ];
    return NzMenuBaseService;
}());
export { NzMenuBaseService };
if (false) {
    /** @type {?} */
    NzMenuBaseService.prototype.isInDropDown;
    /** @type {?} */
    NzMenuBaseService.prototype.menuItemClick$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme$;
    /** @type {?} */
    NzMenuBaseService.prototype.mode$;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme;
    /** @type {?} */
    NzMenuBaseService.prototype.mode;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent;
    /** @type {?} */
    NzMenuBaseService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1tZW51LWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJaEQ7SUFBQTtRQUdFLG1CQUFjLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2Qjs7UUFDbEUsV0FBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDdkIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFxQixVQUFVLENBQUMsQ0FBQztRQUM1RCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBcUIsT0FBTyxDQUFDO1FBQ2xDLFNBQUksR0FBdUIsVUFBVSxDQUFDO1FBQ3RDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztJQXFCbEQsQ0FBQztJQW5CQyxrQ0FBa0M7Ozs7OztJQUNsQywyQ0FBZTs7Ozs7O0lBQWYsVUFBZ0IsSUFBUztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELG1DQUFPOzs7O0lBQVAsVUFBUSxJQUF3QjtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxLQUF1QjtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELDJDQUFlOzs7O0lBQWYsVUFBZ0IsTUFBYztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkE5QkYsVUFBVTs7SUErQlgsd0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxpQkFBaUI7OztJQUM1Qix5Q0FBc0I7O0lBQ3RCLDJDQUFvQzs7SUFDcEMsbUNBQXVCOztJQUN2QixrQ0FBNEQ7O0lBQzVELDBDQUFnRDs7SUFDaEQsa0NBQWtDOztJQUNsQyxpQ0FBc0M7O0lBQ3RDLHlDQUFrQjs7SUFDbEIsc0NBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOek1lbnVCYXNlU2VydmljZSB7XG4gIGlzSW5Ecm9wRG93bjogYm9vbGVhbjtcbiAgbWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxhbnk+KCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8tYW55XG4gIHRoZW1lJCA9IG5ldyBTdWJqZWN0KCk7XG4gIG1vZGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekRpcmVjdGlvblZISVR5cGU+KCd2ZXJ0aWNhbCcpO1xuICBpbmxpbmVJbmRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDI0KTtcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xuICBtb2RlOiBOekRpcmVjdGlvblZISVR5cGUgPSAndmVydGljYWwnO1xuICBpbmxpbmVJbmRlbnQgPSAyNDtcbiAgbWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxuICBvbk1lbnVJdGVtQ2xpY2sobWVudTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tZW51SXRlbUNsaWNrJC5uZXh0KG1lbnUpO1xuICB9XG5cbiAgc2V0TW9kZShtb2RlOiBOekRpcmVjdGlvblZISVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUgPSBtb2RlO1xuICAgIHRoaXMubW9kZSQubmV4dChtb2RlKTtcbiAgfVxuXG4gIHNldFRoZW1lKHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZSA9IHRoZW1lO1xuICAgIHRoaXMudGhlbWUkLm5leHQodGhlbWUpO1xuICB9XG5cbiAgc2V0SW5saW5lSW5kZW50KGluZGVudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbmxpbmVJbmRlbnQgPSBpbmRlbnQ7XG4gICAgdGhpcy5pbmxpbmVJbmRlbnQkLm5leHQoaW5kZW50KTtcbiAgfVxufVxuIl19