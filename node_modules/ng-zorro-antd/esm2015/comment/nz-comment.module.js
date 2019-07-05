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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentContentDirective } from './nz-comment-cells';
import { NzCommentComponent } from './nz-comment.component';
/** @type {?} */
const NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
export class NzCommentModule {
}
NzCommentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVuRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDRCQUE0QixFQUM1Qix3QkFBd0IsRUFDeEIseUJBQXlCLEVBQzFCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O01BRXRELGdCQUFnQixHQUFHO0lBQ3ZCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtDQUM3QjtBQU9ELE1BQU0sT0FBTyxlQUFlOzs7WUFMM0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQ2xELFlBQVksRUFBRSxDQUFDLGtCQUFrQixFQUFFLEdBQUcsZ0JBQWdCLENBQUM7YUFDeEQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuXG5pbXBvcnQge1xuICBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQsXG4gIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmUsXG4gIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSxcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZVxufSBmcm9tICcuL256LWNvbW1lbnQtY2VsbHMnO1xuaW1wb3J0IHsgTnpDb21tZW50Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jb21tZW50LmNvbXBvbmVudCc7XG5cbmNvbnN0IE5aX0NPTU1FTlRfQ0VMTFMgPSBbXG4gIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSxcbiAgTnpDb21tZW50Q29udGVudERpcmVjdGl2ZSxcbiAgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50LFxuICBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlXSxcbiAgZXhwb3J0czogW056Q29tbWVudENvbXBvbmVudCwgLi4uTlpfQ09NTUVOVF9DRUxMU10sXG4gIGRlY2xhcmF0aW9uczogW056Q29tbWVudENvbXBvbmVudCwgLi4uTlpfQ09NTUVOVF9DRUxMU11cbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50TW9kdWxlIHt9XG4iXX0=