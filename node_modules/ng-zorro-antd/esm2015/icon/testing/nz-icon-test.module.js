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
const antDesignIcons = (/** @type {?} */ (AllIcons));
const ɵ0 = /**
 * @param {?} key
 * @return {?}
 */
key => {
    /** @type {?} */
    const i = antDesignIcons[key];
    return i;
};
/** @type {?} */
const icons = Object.keys(antDesignIcons).map((ɵ0));
const ɵ1 = icons;
/**
 * Include this module in every testing spec, except `nz-icon.spec.ts`.
 */
// @dynamic
export class NzIconTestModule {
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi10ZXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvaWNvbi90ZXN0aW5nLyIsInNvdXJjZXMiOlsibnotaWNvbi10ZXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxLQUFLLFFBQVEsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RCxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztNQUV0RCxjQUFjLEdBQUcsbUJBQUEsUUFBUSxFQUU5Qjs7Ozs7QUFFK0QsR0FBRyxDQUFDLEVBQUU7O1VBQzlELENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQzs7TUFISyxLQUFLLEdBQXFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxNQUc3RDtXQVdjLEtBQUs7Ozs7O0FBSXJCLE1BQU0sT0FBTyxnQkFBZ0I7OztZQVQ1QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLFFBQVE7d0JBQ2pCLFFBQVEsSUFBTztxQkFDaEI7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24gfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcbmltcG9ydCAqIGFzIEFsbEljb25zIGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xuXG5pbXBvcnQgeyBOekljb25Nb2R1bGUsIE5aX0lDT05TIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuY29uc3QgYW50RGVzaWduSWNvbnMgPSBBbGxJY29ucyBhcyB7XG4gIFtrZXk6IHN0cmluZ106IEljb25EZWZpbml0aW9uO1xufTtcblxuY29uc3QgaWNvbnM6IEljb25EZWZpbml0aW9uW10gPSBPYmplY3Qua2V5cyhhbnREZXNpZ25JY29ucykubWFwKGtleSA9PiB7XG4gIGNvbnN0IGkgPSBhbnREZXNpZ25JY29uc1trZXldO1xuICByZXR1cm4gaTtcbn0pO1xuXG4vKipcbiAqIEluY2x1ZGUgdGhpcyBtb2R1bGUgaW4gZXZlcnkgdGVzdGluZyBzcGVjLCBleGNlcHQgYG56LWljb24uc3BlYy50c2AuXG4gKi9cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBbTnpJY29uTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTlpfSUNPTlMsXG4gICAgICB1c2VWYWx1ZTogaWNvbnNcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpJY29uVGVzdE1vZHVsZSB7fVxuIl19