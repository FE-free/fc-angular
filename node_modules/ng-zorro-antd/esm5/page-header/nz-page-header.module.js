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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective } from './nz-page-header-cells';
import { NzPageHeaderComponent } from './nz-page-header.component';
/** @type {?} */
var NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective
];
var NzPageHeaderModule = /** @class */ (function () {
    function NzPageHeaderModule() {
    }
    NzPageHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule, NzDividerModule],
                    exports: tslib_1.__spread([NzPageHeaderComponent], NzPageHeaderCells),
                    declarations: tslib_1.__spread([NzPageHeaderComponent], NzPageHeaderCells)
                },] }
    ];
    return NzPageHeaderModule;
}());
export { NzPageHeaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM3Qix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzNCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBRTdELGlCQUFpQixHQUFHO0lBQ3hCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtDQUNoQztBQUVEO0lBQUE7SUFLaUMsQ0FBQzs7Z0JBTGpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQ3JFLE9BQU8sb0JBQUcscUJBQXFCLEdBQUssaUJBQWlCLENBQUM7b0JBQ3RELFlBQVksb0JBQUcscUJBQXFCLEdBQUssaUJBQWlCLENBQUM7aUJBQzVEOztJQUNnQyx5QkFBQztDQUFBLEFBTGxDLElBS2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xuaW1wb3J0IHsgTnpJY29uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcblxuaW1wb3J0IHtcbiAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyQ29udGVudERpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyRXh0cmFEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclRhZ0RpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyVGl0bGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uei1wYWdlLWhlYWRlci1jZWxscyc7XG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IE56UGFnZUhlYWRlckNlbGxzID0gW1xuICBOelBhZ2VIZWFkZXJUaXRsZURpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyU3VidGl0bGVEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckNvbnRlbnREaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclRhZ0RpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyRXh0cmFEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckZvb3RlckRpcmVjdGl2ZSxcbiAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBOekRpdmlkZXJNb2R1bGVdLFxuICBleHBvcnRzOiBbTnpQYWdlSGVhZGVyQ29tcG9uZW50LCAuLi5OelBhZ2VIZWFkZXJDZWxsc10sXG4gIGRlY2xhcmF0aW9uczogW056UGFnZUhlYWRlckNvbXBvbmVudCwgLi4uTnpQYWdlSGVhZGVyQ2VsbHNdXG59KVxuZXhwb3J0IGNsYXNzIE56UGFnZUhlYWRlck1vZHVsZSB7fVxuIl19