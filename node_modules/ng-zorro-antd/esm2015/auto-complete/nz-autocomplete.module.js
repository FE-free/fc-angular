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
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzAddOnModule, NzNoAnimationModule } from 'ng-zorro-antd/core';
import { NzAutocompleteOptgroupComponent } from './nz-autocomplete-optgroup.component';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
import { NzAutocompleteTriggerDirective } from './nz-autocomplete-trigger.directive';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
export class NzAutocompleteModule {
}
NzAutocompleteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzAutocompleteComponent,
                    NzAutocompleteOptionComponent,
                    NzAutocompleteTriggerDirective,
                    NzAutocompleteOptgroupComponent
                ],
                exports: [
                    NzAutocompleteComponent,
                    NzAutocompleteOptionComponent,
                    NzAutocompleteTriggerDirective,
                    NzAutocompleteOptgroupComponent
                ],
                imports: [CommonModule, OverlayModule, FormsModule, NzAddOnModule, NzNoAnimationModule]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWlCdEUsTUFBTSxPQUFPLG9CQUFvQjs7O1lBZmhDLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLDhCQUE4QjtvQkFDOUIsK0JBQStCO2lCQUNoQztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsdUJBQXVCO29CQUN2Qiw2QkFBNkI7b0JBQzdCLDhCQUE4QjtvQkFDOUIsK0JBQStCO2lCQUNoQztnQkFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsbUJBQW1CLENBQUM7YUFDeEYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUsIE56Tm9BbmltYXRpb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0Z3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS10cmlnZ2VyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56QXV0b2NvbXBsZXRlQ29tcG9uZW50LFxuICAgIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LFxuICAgIE56QXV0b2NvbXBsZXRlVHJpZ2dlckRpcmVjdGl2ZSxcbiAgICBOekF1dG9jb21wbGV0ZU9wdGdyb3VwQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCxcbiAgICBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCxcbiAgICBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUsXG4gICAgTnpBdXRvY29tcGxldGVPcHRncm91cENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBGb3Jtc01vZHVsZSwgTnpBZGRPbk1vZHVsZSwgTnpOb0FuaW1hdGlvbk1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVNb2R1bGUge31cbiJdfQ==