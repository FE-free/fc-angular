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
import { NzCommentActionComponent, NzCommentActionHostDirective, NzCommentAvatarDirective, NzCommentContentDirective } from './nz-comment-cells';
import { NzCommentComponent } from './nz-comment.component';
/** @type {?} */
var NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
var NzCommentModule = /** @class */ (function () {
    function NzCommentModule() {
    }
    NzCommentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    exports: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS),
                    declarations: tslib_1.__spread([NzCommentComponent], NZ_COMMENT_CELLS)
                },] }
    ];
    return NzCommentModule;
}());
export { NzCommentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvbW1lbnQvIiwic291cmNlcyI6WyJuei1jb21tZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUMxQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQUV0RCxnQkFBZ0IsR0FBRztJQUN2Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7Q0FDN0I7QUFFRDtJQUFBO0lBSzhCLENBQUM7O2dCQUw5QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsT0FBTyxvQkFBRyxrQkFBa0IsR0FBSyxnQkFBZ0IsQ0FBQztvQkFDbEQsWUFBWSxvQkFBRyxrQkFBa0IsR0FBSyxnQkFBZ0IsQ0FBQztpQkFDeEQ7O0lBQzZCLHNCQUFDO0NBQUEsQUFML0IsSUFLK0I7U0FBbEIsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpBZGRPbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5cbmltcG9ydCB7XG4gIE56Q29tbWVudEFjdGlvbkNvbXBvbmVudCxcbiAgTnpDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSxcbiAgTnpDb21tZW50QXZhdGFyRGlyZWN0aXZlLFxuICBOekNvbW1lbnRDb250ZW50RGlyZWN0aXZlXG59IGZyb20gJy4vbnotY29tbWVudC1jZWxscyc7XG5pbXBvcnQgeyBOekNvbW1lbnRDb21wb25lbnQgfSBmcm9tICcuL256LWNvbW1lbnQuY29tcG9uZW50JztcblxuY29uc3QgTlpfQ09NTUVOVF9DRUxMUyA9IFtcbiAgTnpDb21tZW50QXZhdGFyRGlyZWN0aXZlLFxuICBOekNvbW1lbnRDb250ZW50RGlyZWN0aXZlLFxuICBOekNvbW1lbnRBY3Rpb25Db21wb25lbnQsXG4gIE56Q29tbWVudEFjdGlvbkhvc3REaXJlY3RpdmVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE56QWRkT25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpDb21tZW50Q29tcG9uZW50LCAuLi5OWl9DT01NRU5UX0NFTExTXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRNb2R1bGUge31cbiJdfQ==