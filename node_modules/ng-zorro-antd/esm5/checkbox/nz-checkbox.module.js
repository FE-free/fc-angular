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
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxGroupComponent } from './nz-checkbox-group.component';
import { NzCheckboxWrapperComponent } from './nz-checkbox-wrapper.component';
import { NzCheckboxComponent } from './nz-checkbox.component';
var NzCheckboxModule = /** @class */ (function () {
    function NzCheckboxModule() {
    }
    NzCheckboxModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, ObserversModule],
                    declarations: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent],
                    exports: [NzCheckboxComponent, NzCheckboxGroupComponent, NzCheckboxWrapperComponent]
                },] }
    ];
    return NzCheckboxModule;
}());
export { NzCheckboxModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jaGVja2JveC8iLCJzb3VyY2VzIjpbIm56LWNoZWNrYm94Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQ7SUFBQTtJQUsrQixDQUFDOztnQkFML0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDO29CQUNyRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsQ0FBQztvQkFDekYsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsMEJBQTBCLENBQUM7aUJBQ3JGOztJQUM4Qix1QkFBQztDQUFBLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56Q2hlY2tib3hHcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3gtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgT2JzZXJ2ZXJzTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpDaGVja2JveENvbXBvbmVudCwgTnpDaGVja2JveEdyb3VwQ29tcG9uZW50LCBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekNoZWNrYm94Q29tcG9uZW50LCBOekNoZWNrYm94R3JvdXBDb21wb25lbnQsIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94TW9kdWxlIHt9XG4iXX0=