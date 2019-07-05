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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, Input, QueryList, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
import { NzListComponent } from './nz-list.component';
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this.nzActions = [];
        this.nzNoFlex = false;
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    Object.defineProperty(NzListItemComponent.prototype, "isVerticalAndExtra", {
        get: /**
         * @return {?}
         */
        function () {
            return this.itemLayout === 'vertical' && !!this.nzExtra;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzListItemComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            _this.itemLayout = val;
            _this.cdr.detectChanges();
        }));
    };
    /**
     * @return {?}
     */
    NzListItemComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    };
    NzListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item, [nz-list-item]',
                    exportAs: 'nzListItem',
                    template: "<ng-template #actionsTpl>\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of nzActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #contentTpl>\n  <ng-content></ng-content>\n  <ng-container *ngIf=\"nzContent\">\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n  </ng-container>\n</ng-template>\n<ng-template #simpleTpl>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n  </div>\n</ng-container>",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzListItemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzListComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzListItemComponent.propDecorators = {
        metas: [{ type: ContentChildren, args: [NzListItemMetaComponent,] }],
        nzActions: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzExtra: [{ type: Input }],
        nzNoFlex: [{ type: Input }, { type: HostBinding, args: ['class.ant-list-item-no-flex',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzListItemComponent.prototype, "nzNoFlex", void 0);
    return NzListItemComponent;
}());
export { NzListItemComponent };
if (false) {
    /** @type {?} */
    NzListItemComponent.prototype.metas;
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.nzContent;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
    /** @type {?} */
    NzListItemComponent.prototype.nzNoFlex;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.itemLayout$;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.parentComp;
    /**
     * @type {?}
     * @private
     */
    NzListItemComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvbGlzdC8iLCJzb3VyY2VzIjpbIm56LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsV0FBVyxFQUNYLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBcUIsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQ7SUFzQkUsNkJBQ0UsVUFBc0IsRUFDdEIsUUFBbUIsRUFDWCxVQUEyQixFQUMzQixHQUFzQjtRQUR0QixlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUMzQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWhCdkIsY0FBUyxHQUE2QixFQUFFLENBQUM7UUFHbUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQWU3RixRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQVhELHNCQUFJLG1EQUFrQjs7OztRQUF0QjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUQsQ0FBQzs7O09BQUE7Ozs7SUFXRCw2Q0FBZTs7O0lBQWY7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ2hFLEtBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxZQUFZO29CQUN0Qixrb0NBQTRDO29CQUM1QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXRCQyxVQUFVO2dCQUtWLFNBQVM7Z0JBUUYsZUFBZTtnQkFoQnRCLGlCQUFpQjs7O3dCQTJCaEIsZUFBZSxTQUFDLHVCQUF1Qjs0QkFDdkMsS0FBSzs0QkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSyxZQUFvQixXQUFXLFNBQUMsNkJBQTZCOztJQUFFO1FBQTNELFlBQVksRUFBRTs7eURBQXVFO0lBOEJqRywwQkFBQztDQUFBLEFBM0NELElBMkNDO1NBbkNZLG1CQUFtQjs7O0lBQzlCLG9DQUFxRjs7SUFDckYsd0NBQWtEOztJQUNsRCx3Q0FBK0M7O0lBQy9DLHNDQUFvQzs7SUFDcEMsdUNBQStGOzs7OztJQUUvRix5Q0FBc0M7Ozs7O0lBQ3RDLDBDQUFrQzs7Ozs7SUFTaEMseUNBQW1DOzs7OztJQUNuQyxrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IElucHV0Qm9vbGVhbiwgTnpEaXJlY3Rpb25WSFR5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOekxpc3RJdGVtTWV0YUNvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC1pdGVtLW1ldGEuY29tcG9uZW50JztcbmltcG9ydCB7IE56TGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWl0ZW0sIFtuei1saXN0LWl0ZW1dJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihOekxpc3RJdGVtTWV0YUNvbXBvbmVudCkgbWV0YXMhOiBRdWVyeUxpc3Q8TnpMaXN0SXRlbU1ldGFDb21wb25lbnQ+O1xuICBASW5wdXQoKSBuekFjdGlvbnM6IEFycmF5PFRlbXBsYXRlUmVmPHZvaWQ+PiA9IFtdO1xuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4dHJhOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWxpc3QtaXRlbS1uby1mbGV4JykgbnpOb0ZsZXg6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGl0ZW1MYXlvdXQ6IE56RGlyZWN0aW9uVkhUeXBlO1xuICBwcml2YXRlIGl0ZW1MYXlvdXQkOiBTdWJzY3JpcHRpb247XG5cbiAgZ2V0IGlzVmVydGljYWxBbmRFeHRyYSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtTGF5b3V0ID09PSAndmVydGljYWwnICYmICEhdGhpcy5uekV4dHJhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGFyZW50Q29tcDogTnpMaXN0Q29tcG9uZW50LFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHtcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtbGlzdC1pdGVtJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtTGF5b3V0JCA9IHRoaXMucGFyZW50Q29tcC5pdGVtTGF5b3V0Tm90aWZ5JC5zdWJzY3JpYmUodmFsID0+IHtcbiAgICAgIHRoaXMuaXRlbUxheW91dCA9IHZhbDtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLml0ZW1MYXlvdXQkKSB7XG4gICAgICB0aGlzLml0ZW1MYXlvdXQkLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=