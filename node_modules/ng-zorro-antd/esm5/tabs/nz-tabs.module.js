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
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabBodyComponent } from './nz-tab-body.component';
import { NzTabLabelDirective } from './nz-tab-label.directive';
import { NzTabComponent } from './nz-tab.component';
import { NzTabDirective } from './nz-tab.directive';
import { NzTabsInkBarDirective } from './nz-tabs-ink-bar.directive';
import { NzTabsNavComponent } from './nz-tabs-nav.component';
import { NzTabSetComponent } from './nz-tabset.component';
var NzTabsModule = /** @class */ (function () {
    function NzTabsModule() {
    }
    NzTabsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NzTabComponent,
                        NzTabDirective,
                        NzTabSetComponent,
                        NzTabsNavComponent,
                        NzTabLabelDirective,
                        NzTabsInkBarDirective,
                        NzTabBodyComponent
                    ],
                    exports: [
                        NzTabComponent,
                        NzTabDirective,
                        NzTabSetComponent,
                        NzTabsNavComponent,
                        NzTabLabelDirective,
                        NzTabsInkBarDirective,
                        NzTabBodyComponent
                    ],
                    imports: [CommonModule, ObserversModule, NzIconModule, NzAddOnModule]
                },] }
    ];
    return NzTabsModule;
}());
export { NzTabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFicy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3RhYnMvIiwic291cmNlcyI6WyJuei10YWJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFMUQ7SUFBQTtJQXFCMkIsQ0FBQzs7Z0JBckIzQixRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixxQkFBcUI7d0JBQ3JCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO2lCQUN0RTs7SUFDMEIsbUJBQUM7Q0FBQSxBQXJCNUIsSUFxQjRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBPYnNlcnZlcnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb2JzZXJ2ZXJzJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQgeyBOelRhYkJvZHlDb21wb25lbnQgfSBmcm9tICcuL256LXRhYi1ib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYkxhYmVsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWItbGFiZWwuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE56VGFiRGlyZWN0aXZlIH0gZnJvbSAnLi9uei10YWIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGFic0lua0JhckRpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGFicy1pbmstYmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRhYnNOYXZDb21wb25lbnQgfSBmcm9tICcuL256LXRhYnMtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRhYlNldENvbXBvbmVudCB9IGZyb20gJy4vbnotdGFic2V0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56VGFiQ29tcG9uZW50LFxuICAgIE56VGFiRGlyZWN0aXZlLFxuICAgIE56VGFiU2V0Q29tcG9uZW50LFxuICAgIE56VGFic05hdkNvbXBvbmVudCxcbiAgICBOelRhYkxhYmVsRGlyZWN0aXZlLFxuICAgIE56VGFic0lua0JhckRpcmVjdGl2ZSxcbiAgICBOelRhYkJvZHlDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE56VGFiQ29tcG9uZW50LFxuICAgIE56VGFiRGlyZWN0aXZlLFxuICAgIE56VGFiU2V0Q29tcG9uZW50LFxuICAgIE56VGFic05hdkNvbXBvbmVudCxcbiAgICBOelRhYkxhYmVsRGlyZWN0aXZlLFxuICAgIE56VGFic0lua0JhckRpcmVjdGl2ZSxcbiAgICBOelRhYkJvZHlDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT2JzZXJ2ZXJzTW9kdWxlLCBOekljb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56VGFic01vZHVsZSB7fVxuIl19