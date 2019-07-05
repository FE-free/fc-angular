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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { slideMotion } from 'ng-zorro-antd/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
/**
 * @deprecated Use `NzDropdownMenuComponent` instead, will remove in 9.0.0.
 */
export class NzDropdownContextComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.open = true;
        this.dropDownPosition = 'bottom';
        this.destroy$ = new Subject();
    }
    /**
     * @param {?} open
     * @param {?} templateRef
     * @param {?} positionChanges
     * @param {?} control
     * @return {?}
     */
    init(open, templateRef, positionChanges, control) {
        this.open = open;
        this.templateRef = templateRef;
        this.control = control;
        positionChanges.pipe(takeUntil(this.destroy$)).subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.dropDownPosition = data.connectionPair.overlayY === 'bottom' ? 'top' : 'bottom';
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    afterAnimation() {
        if (!this.open) {
            this.control.dispose();
        }
    }
    // TODO auto set dropdown class after the bug resolved
    /**
     * https://github.com/angular/angular/issues/14842 *
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzDropdownContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-context',
                exportAs: 'nzDropdownContext',
                animations: [slideMotion],
                preserveWhitespaces: false,
                template: "<div *ngIf=\"open\"\n  class=\"ant-dropdown ant-dropdown-placement-bottomLeft\"\n  [@slideMotion]=\"dropDownPosition\"\n  (@slideMotion.done)=\"afterAnimation()\">\n  <ng-template [ngTemplateOutlet]=\"templateRef\"></ng-template>\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [NzMenuDropdownService],
                styles: [`
      nz-dropdown-context {
        display: block;
      }

      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
/** @nocollapse */
NzDropdownContextComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
if (false) {
    /** @type {?} */
    NzDropdownContextComponent.prototype.open;
    /** @type {?} */
    NzDropdownContextComponent.prototype.templateRef;
    /** @type {?} */
    NzDropdownContextComponent.prototype.dropDownPosition;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.control;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDropdownContextComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFTQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBR1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTRCbkU7O0dBRUc7QUFDSCxNQUFNLE9BQU8sMEJBQTBCOzs7O0lBaUNyQyxZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhDMUMsU0FBSSxHQUFHLElBQUksQ0FBQztRQUVaLHFCQUFnQixHQUFxQixRQUFRLENBQUM7UUFFdEMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUE0QlksQ0FBQzs7Ozs7Ozs7SUExQjlDLElBQUksQ0FDRixJQUFhLEVBQ2IsV0FBOEIsRUFDOUIsZUFBMkQsRUFDM0QsT0FBMEI7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3JGLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7Ozs7SUFNRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7OztZQXJFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDO2dCQUN6QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQix5UEFBbUQ7Z0JBQ25ELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7eUJBRWhDOzs7Ozs7Ozs7Ozs7O0tBYUM7YUFFSjs7OztZQXJDQyxpQkFBaUI7Ozs7SUEwQ2pCLDBDQUFZOztJQUNaLGlEQUErQjs7SUFDL0Isc0RBQThDOzs7OztJQUM5Qyw2Q0FBbUM7Ozs7O0lBQ25DLDhDQUFpQzs7Ozs7SUE0QnJCLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOekRyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotZHJvcGRvd24uc2VydmljZSc7XG5pbXBvcnQgeyBOek1lbnVEcm9wZG93blNlcnZpY2UgfSBmcm9tICcuL256LW1lbnUtZHJvcGRvd24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWRyb3Bkb3duLWNvbnRleHQnLFxuICBleHBvcnRBczogJ256RHJvcGRvd25Db250ZXh0JyxcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW056TWVudURyb3Bkb3duU2VydmljZV0sXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIG56LWRyb3Bkb3duLWNvbnRleHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLmFudC1kcm9wZG93biB7XG4gICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE56RHJvcGRvd25NZW51Q29tcG9uZW50YCBpbnN0ZWFkLCB3aWxsIHJlbW92ZSBpbiA5LjAuMC5cbiAqL1xuZXhwb3J0IGNsYXNzIE56RHJvcGRvd25Db250ZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgb3BlbiA9IHRydWU7XG4gIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBwcml2YXRlIGNvbnRyb2w6IE56RHJvcGRvd25TZXJ2aWNlO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBpbml0KFxuICAgIG9wZW46IGJvb2xlYW4sXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHZvaWQ+LFxuICAgIHBvc2l0aW9uQ2hhbmdlczogT2JzZXJ2YWJsZTxDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2U+LFxuICAgIGNvbnRyb2w6IE56RHJvcGRvd25TZXJ2aWNlXG4gICk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgdGhpcy50ZW1wbGF0ZVJlZiA9IHRlbXBsYXRlUmVmO1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgcG9zaXRpb25DaGFuZ2VzLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBkYXRhLmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKCk6IHZvaWQge1xuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgYWZ0ZXJBbmltYXRpb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuY29udHJvbC5kaXNwb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIC8vIFRPRE8gYXV0byBzZXQgZHJvcGRvd24gY2xhc3MgYWZ0ZXIgdGhlIGJ1ZyByZXNvbHZlZFxuICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTQ4NDIgKiovXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19