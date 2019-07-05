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
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
/** @type {?} */
var antDesignIcons = (/** @type {?} */ (AllIcons));
var ɵ0 = /**
 * @param {?} key
 * @return {?}
 */
function (key) {
    /** @type {?} */
    var i = antDesignIcons[key];
    return i;
};
/** @type {?} */
var icons = Object.keys(antDesignIcons).map((ɵ0));
var ɵ1 = icons;
/**
 * Include this module in every testing spec, except `nz-icon.spec.ts`.
 */
// @dynamic
var NzIconTestModule = /** @class */ (function () {
    function NzIconTestModule() {
    }
    NzIconTestModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzIconModule],
                    providers: [
                        {
                            provide: NZ_ICONS,
                            useValue: ɵ1
                        }
                    ]
                },] }
    ];
    return NzIconTestModule;
}());
export { NzIconTestModule };
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaWNvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsibnotaWNvbi10ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxLQUFLLFFBQVEsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQUV0RCxjQUFjLEdBQUcsbUJBQUEsUUFBUSxFQUU5Qjs7Ozs7QUFFK0QsVUFBQSxHQUFHOztRQUMzRCxDQUFDLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUM3QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7O0lBSEssS0FBSyxHQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsTUFHN0Q7U0FXYyxLQUFLOzs7OztBQUxyQjtJQUFBO0lBUytCLENBQUM7O2dCQVQvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLFFBQVE7NEJBQ2pCLFFBQVEsSUFBTzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUFUaEMsSUFTZ0M7U0FBbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xuaW1wb3J0ICogYXMgQWxsSWNvbnMgZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9pY29ucyc7XG5cbmltcG9ydCB7IE56SWNvbk1vZHVsZSwgTlpfSUNPTlMgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5jb25zdCBhbnREZXNpZ25JY29ucyA9IEFsbEljb25zIGFzIHtcbiAgW2tleTogc3RyaW5nXTogSWNvbkRlZmluaXRpb247XG59O1xuXG5jb25zdCBpY29uczogSWNvbkRlZmluaXRpb25bXSA9IE9iamVjdC5rZXlzKGFudERlc2lnbkljb25zKS5tYXAoa2V5ID0+IHtcbiAgY29uc3QgaSA9IGFudERlc2lnbkljb25zW2tleV07XG4gIHJldHVybiBpO1xufSk7XG5cbi8qKlxuICogSW5jbHVkZSB0aGlzIG1vZHVsZSBpbiBldmVyeSB0ZXN0aW5nIHNwZWMsIGV4Y2VwdCBgbnotaWNvbi5zcGVjLnRzYC5cbiAqL1xuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtOekljb25Nb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOWl9JQ09OUyxcbiAgICAgIHVzZVZhbHVlOiBpY29uc1xuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekljb25UZXN0TW9kdWxlIHt9XG4iXX0=