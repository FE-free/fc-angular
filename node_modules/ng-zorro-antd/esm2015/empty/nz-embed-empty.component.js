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
import { ComponentPortal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Injector, Input, TemplateRef, Type, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { simpleEmptyImage, NZ_EMPTY_COMPONENT_NAME } from './nz-empty-config';
import { NzEmptyService } from './nz-empty.service';
export class NzEmbedEmptyComponent {
    /**
     * @param {?} emptyService
     * @param {?} sanitizer
     * @param {?} viewContainerRef
     * @param {?} cdr
     * @param {?} injector
     */
    constructor(emptyService, sanitizer, viewContainerRef, cdr, injector) {
        this.emptyService = emptyService;
        this.sanitizer = sanitizer;
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.injector = injector;
        this.contentType = 'string';
        // tslint:disable-line:no-any
        this.defaultSvg = this.sanitizer.bypassSecurityTrustResourceUrl(simpleEmptyImage);
        this.size = '';
        this.subs_ = new Subscription();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzComponentName) {
            this.size = this.getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const userContent_ = this.emptyService.userDefaultContent$.subscribe((/**
         * @param {?} content
         * @return {?}
         */
        content => {
            this.content = this.specificContent || content;
            this.renderEmpty();
        }));
        this.subs_.add(userContent_);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subs_.unsubscribe();
    }
    /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    getEmptySize(componentName) {
        switch (componentName) {
            case 'table':
            case 'list':
                return 'normal';
            case 'select':
            case 'tree-select':
            case 'cascader':
            case 'transfer':
                return 'small';
            default:
                return '';
        }
    }
    /**
     * @private
     * @return {?}
     */
    renderEmpty() {
        /** @type {?} */
        const content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            const context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            /** @type {?} */
            const context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            const injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.markForCheck();
    }
}
NzEmbedEmptyComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-embed-empty',
                exportAs: 'nzEmbedEmpty',
                template: "<ng-container *ngIf=\"!content && specificContent !== null\" [ngSwitch]=\"size\">\n  <nz-empty *ngSwitchCase=\"'normal'\" class=\"ant-empty-normal\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\n  <nz-empty *ngSwitchCase=\"'small'\" class=\"ant-empty-small\" [nzNotFoundImage]=\"defaultSvg\"></nz-empty>\n  <nz-empty *ngSwitchDefault></nz-empty>\n</ng-container>\n<ng-container *ngIf=\"content\">\n  <ng-template *ngIf=\"contentType !== 'string'\" [cdkPortalOutlet]=\"contentPortal\"></ng-template>\n  <ng-container *ngIf=\"contentType === 'string'\">\n    {{ content }}\n  </ng-container>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
NzEmbedEmptyComponent.ctorParameters = () => [
    { type: NzEmptyService },
    { type: DomSanitizer },
    { type: ViewContainerRef },
    { type: ChangeDetectorRef },
    { type: Injector }
];
NzEmbedEmptyComponent.propDecorators = {
    nzComponentName: [{ type: Input }],
    specificContent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.nzComponentName;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.specificContent;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.content;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentType;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.contentPortal;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.defaultSvg;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.size;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.subs_;
    /** @type {?} */
    NzEmbedEmptyComponent.prototype.emptyService;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.viewContainerRef;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzEmbedEmptyComponent.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQVUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUtMLFdBQVcsRUFDWCxJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQXFDLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBU3BELE1BQU0sT0FBTyxxQkFBcUI7Ozs7Ozs7O0lBV2hDLFlBQ1MsWUFBNEIsRUFDM0IsU0FBdUIsRUFDdkIsZ0JBQWtDLEVBQ2xDLEdBQXNCLEVBQ3RCLFFBQWtCO1FBSm5CLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQUMzQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQVg1QixnQkFBVyxHQUF3QyxRQUFRLENBQUM7O1FBRTVELGVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0UsU0FBSSxHQUFnQixFQUFFLENB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O2dCQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsNG1CQUE4QzthQUMvQzs7OztZQVJRLGNBQWM7WUFKZCxZQUFZO1lBSG5CLGdCQUFnQjtZQVZoQixpQkFBaUI7WUFFakIsUUFBUTs7OzhCQXlCUCxLQUFLOzhCQUNMLEtBQUs7Ozs7SUFETixnREFBaUM7O0lBQ2pDLGdEQUErQzs7SUFFL0Msd0NBQStCOztJQUMvQiw0Q0FBNEQ7O0lBQzVELDhDQUE0Qjs7SUFDNUIsMkNBQTZFOztJQUM3RSxxQ0FBdUI7O0lBQ3ZCLHNDQUEyQjs7SUFHekIsNkNBQW1DOzs7OztJQUNuQywwQ0FBK0I7Ozs7O0lBQy9CLGlEQUEwQzs7Ozs7SUFDMUMsb0NBQThCOzs7OztJQUM5Qix5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBQb3J0YWwsIFBvcnRhbEluamVjdG9yLCBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFR5cGUsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgc2ltcGxlRW1wdHlJbWFnZSwgTnpFbXB0eUN1c3RvbUNvbnRlbnQsIE56RW1wdHlTaXplLCBOWl9FTVBUWV9DT01QT05FTlRfTkFNRSB9IGZyb20gJy4vbnotZW1wdHktY29uZmlnJztcbmltcG9ydCB7IE56RW1wdHlTZXJ2aWNlIH0gZnJvbSAnLi9uei1lbXB0eS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWVtYmVkLWVtcHR5JyxcbiAgZXhwb3J0QXM6ICduekVtYmVkRW1wdHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotZW1iZWQtZW1wdHkuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56RW1iZWRFbXB0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBuekNvbXBvbmVudE5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgc3BlY2lmaWNDb250ZW50OiBOekVtcHR5Q3VzdG9tQ29udGVudDtcblxuICBjb250ZW50PzogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XG4gIGNvbnRlbnRUeXBlOiAnY29tcG9uZW50JyB8ICd0ZW1wbGF0ZScgfCAnc3RyaW5nJyA9ICdzdHJpbmcnO1xuICBjb250ZW50UG9ydGFsPzogUG9ydGFsPGFueT47IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIGRlZmF1bHRTdmcgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoc2ltcGxlRW1wdHlJbWFnZSk7XG4gIHNpemU6IE56RW1wdHlTaXplID0gJyc7XG4gIHN1YnNfID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbXB0eVNlcnZpY2U6IE56RW1wdHlTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Q29tcG9uZW50TmFtZSkge1xuICAgICAgdGhpcy5zaXplID0gdGhpcy5nZXRFbXB0eVNpemUoY2hhbmdlcy5uekNvbXBvbmVudE5hbWUuY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQgJiYgIWNoYW5nZXMuc3BlY2lmaWNDb250ZW50LmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgdGhpcy5jb250ZW50ID0gY2hhbmdlcy5zcGVjaWZpY0NvbnRlbnQuY3VycmVudFZhbHVlO1xuICAgICAgdGhpcy5yZW5kZXJFbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IHVzZXJDb250ZW50XyA9IHRoaXMuZW1wdHlTZXJ2aWNlLnVzZXJEZWZhdWx0Q29udGVudCQuc3Vic2NyaWJlKGNvbnRlbnQgPT4ge1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5zcGVjaWZpY0NvbnRlbnQgfHwgY29udGVudDtcbiAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic18uYWRkKHVzZXJDb250ZW50Xyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNfLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldEVtcHR5U2l6ZShjb21wb25lbnROYW1lOiBzdHJpbmcpOiBOekVtcHR5U2l6ZSB7XG4gICAgc3dpdGNoIChjb21wb25lbnROYW1lKSB7XG4gICAgICBjYXNlICd0YWJsZSc6XG4gICAgICBjYXNlICdsaXN0JzpcbiAgICAgICAgcmV0dXJuICdub3JtYWwnO1xuICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgIGNhc2UgJ3RyZWUtc2VsZWN0JzpcbiAgICAgIGNhc2UgJ2Nhc2NhZGVyJzpcbiAgICAgIGNhc2UgJ3RyYW5zZmVyJzpcbiAgICAgICAgcmV0dXJuICdzbWFsbCc7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJFbXB0eSgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5jb250ZW50O1xuXG4gICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICdzdHJpbmcnO1xuICAgIH0gZWxzZSBpZiAoY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0geyAkaW1wbGljaXQ6IHRoaXMubnpDb21wb25lbnROYW1lIH0gYXMgYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgICAgdGhpcy5jb250ZW50VHlwZSA9ICd0ZW1wbGF0ZSc7XG4gICAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwoY29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLCBjb250ZXh0KTtcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFdlYWtNYXAoW1tOWl9FTVBUWV9DT01QT05FTlRfTkFNRSwgdGhpcy5uekNvbXBvbmVudE5hbWVdXSk7XG4gICAgICBjb25zdCBpbmplY3RvciA9IG5ldyBQb3J0YWxJbmplY3Rvcih0aGlzLmluamVjdG9yLCBjb250ZXh0KTtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnY29tcG9uZW50JztcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IG5ldyBDb21wb25lbnRQb3J0YWwoY29udGVudCwgdGhpcy52aWV3Q29udGFpbmVyUmVmLCBpbmplY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnc3RyaW5nJztcbiAgICAgIHRoaXMuY29udGVudFBvcnRhbCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19