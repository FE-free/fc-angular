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
var NzEmbedEmptyComponent = /** @class */ (function () {
    function NzEmbedEmptyComponent(emptyService, sanitizer, viewContainerRef, cdr, injector) {
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
    NzEmbedEmptyComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzComponentName) {
            this.size = this.getEmptySize(changes.nzComponentName.currentValue);
        }
        if (changes.specificContent && !changes.specificContent.isFirstChange()) {
            this.content = changes.specificContent.currentValue;
            this.renderEmpty();
        }
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var userContent_ = this.emptyService.userDefaultContent$.subscribe((/**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            _this.content = _this.specificContent || content;
            _this.renderEmpty();
        }));
        this.subs_.add(userContent_);
    };
    /**
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subs_.unsubscribe();
    };
    /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.getEmptySize = /**
     * @private
     * @param {?} componentName
     * @return {?}
     */
    function (componentName) {
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
    };
    /**
     * @private
     * @return {?}
     */
    NzEmbedEmptyComponent.prototype.renderEmpty = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var content = this.content;
        if (typeof content === 'string') {
            this.contentType = 'string';
        }
        else if (content instanceof TemplateRef) {
            /** @type {?} */
            var context = (/** @type {?} */ ({ $implicit: this.nzComponentName }));
            this.contentType = 'template';
            this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
        }
        else if (content instanceof Type) {
            /** @type {?} */
            var context = new WeakMap([[NZ_EMPTY_COMPONENT_NAME, this.nzComponentName]]);
            /** @type {?} */
            var injector = new PortalInjector(this.injector, context);
            this.contentType = 'component';
            this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
        }
        else {
            this.contentType = 'string';
            this.contentPortal = undefined;
        }
        this.cdr.markForCheck();
    };
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
    NzEmbedEmptyComponent.ctorParameters = function () { return [
        { type: NzEmptyService },
        { type: DomSanitizer },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef },
        { type: Injector }
    ]; };
    NzEmbedEmptyComponent.propDecorators = {
        nzComponentName: [{ type: Input }],
        specificContent: [{ type: Input }]
    };
    return NzEmbedEmptyComponent;
}());
export { NzEmbedEmptyComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1iZWQtZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9lbXB0eS8iLCJzb3VyY2VzIjpbIm56LWVtYmVkLWVtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxlQUFlLEVBQVUsY0FBYyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQzlGLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxRQUFRLEVBQ1IsS0FBSyxFQUtMLFdBQVcsRUFDWCxJQUFJLEVBQ0osZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQXFDLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBEO0lBa0JFLCtCQUNTLFlBQTRCLEVBQzNCLFNBQXVCLEVBQ3ZCLGdCQUFrQyxFQUNsQyxHQUFzQixFQUN0QixRQUFrQjtRQUpuQixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFYNUIsZ0JBQVcsR0FBd0MsUUFBUSxDQUFDOztRQUU1RCxlQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdFLFNBQUksR0FBZ0IsRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxJQUFJ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Qy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsY0FBYztvQkFDeEIsNG1CQUE4QztpQkFDL0M7Ozs7Z0JBUlEsY0FBYztnQkFKZCxZQUFZO2dCQUhuQixnQkFBZ0I7Z0JBVmhCLGlCQUFpQjtnQkFFakIsUUFBUTs7O2tDQXlCUCxLQUFLO2tDQUNMLEtBQUs7O0lBNkVSLDRCQUFDO0NBQUEsQUF0RkQsSUFzRkM7U0EvRVkscUJBQXFCOzs7SUFDaEMsZ0RBQWlDOztJQUNqQyxnREFBK0M7O0lBRS9DLHdDQUErQjs7SUFDL0IsNENBQTREOztJQUM1RCw4Q0FBNEI7O0lBQzVCLDJDQUE2RTs7SUFDN0UscUNBQXVCOztJQUN2QixzQ0FBMkI7O0lBR3pCLDZDQUFtQzs7Ozs7SUFDbkMsMENBQStCOzs7OztJQUMvQixpREFBMEM7Ozs7O0lBQzFDLG9DQUE4Qjs7Ozs7SUFDOUIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCwgUG9ydGFsLCBQb3J0YWxJbmplY3RvciwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBUeXBlLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHNpbXBsZUVtcHR5SW1hZ2UsIE56RW1wdHlDdXN0b21Db250ZW50LCBOekVtcHR5U2l6ZSwgTlpfRU1QVFlfQ09NUE9ORU5UX05BTUUgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XG5pbXBvcnQgeyBOekVtcHR5U2VydmljZSB9IGZyb20gJy4vbnotZW1wdHkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICduei1lbWJlZC1lbXB0eScsXG4gIGV4cG9ydEFzOiAnbnpFbWJlZEVtcHR5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWVtYmVkLWVtcHR5LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOekVtYmVkRW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpDb21wb25lbnROYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNwZWNpZmljQ29udGVudDogTnpFbXB0eUN1c3RvbUNvbnRlbnQ7XG5cbiAgY29udGVudD86IE56RW1wdHlDdXN0b21Db250ZW50O1xuICBjb250ZW50VHlwZTogJ2NvbXBvbmVudCcgfCAndGVtcGxhdGUnIHwgJ3N0cmluZycgPSAnc3RyaW5nJztcbiAgY29udGVudFBvcnRhbD86IFBvcnRhbDxhbnk+OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICBkZWZhdWx0U3ZnID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHNpbXBsZUVtcHR5SW1hZ2UpO1xuICBzaXplOiBOekVtcHR5U2l6ZSA9ICcnO1xuICBzdWJzXyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZW1wdHlTZXJ2aWNlOiBOekVtcHR5U2VydmljZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekNvbXBvbmVudE5hbWUpIHtcbiAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZ2V0RW1wdHlTaXplKGNoYW5nZXMubnpDb21wb25lbnROYW1lLmN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZXMuc3BlY2lmaWNDb250ZW50ICYmICFjaGFuZ2VzLnNwZWNpZmljQ29udGVudC5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuY29udGVudCA9IGNoYW5nZXMuc3BlY2lmaWNDb250ZW50LmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMucmVuZGVyRW1wdHkoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCB1c2VyQ29udGVudF8gPSB0aGlzLmVtcHR5U2VydmljZS51c2VyRGVmYXVsdENvbnRlbnQkLnN1YnNjcmliZShjb250ZW50ID0+IHtcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuc3BlY2lmaWNDb250ZW50IHx8IGNvbnRlbnQ7XG4gICAgICB0aGlzLnJlbmRlckVtcHR5KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNfLmFkZCh1c2VyQ29udGVudF8pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzXy51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbXB0eVNpemUoY29tcG9uZW50TmFtZTogc3RyaW5nKTogTnpFbXB0eVNpemUge1xuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgICAgY2FzZSAndGFibGUnOlxuICAgICAgY2FzZSAnbGlzdCc6XG4gICAgICAgIHJldHVybiAnbm9ybWFsJztcbiAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICBjYXNlICd0cmVlLXNlbGVjdCc6XG4gICAgICBjYXNlICdjYXNjYWRlcic6XG4gICAgICBjYXNlICd0cmFuc2Zlcic6XG4gICAgICAgIHJldHVybiAnc21hbGwnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRW1wdHkoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuY29udGVudDtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAnc3RyaW5nJztcbiAgICB9IGVsc2UgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgY29uc3QgY29udGV4dCA9IHsgJGltcGxpY2l0OiB0aGlzLm56Q29tcG9uZW50TmFtZSB9IGFzIGFueTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgIHRoaXMuY29udGVudFR5cGUgPSAndGVtcGxhdGUnO1xuICAgICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKGNvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZiwgY29udGV4dCk7XG4gICAgfSBlbHNlIGlmIChjb250ZW50IGluc3RhbmNlb2YgVHlwZSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IG5ldyBXZWFrTWFwKFtbTlpfRU1QVFlfQ09NUE9ORU5UX05BTUUsIHRoaXMubnpDb21wb25lbnROYW1lXV0pO1xuICAgICAgY29uc3QgaW5qZWN0b3IgPSBuZXcgUG9ydGFsSW5qZWN0b3IodGhpcy5pbmplY3RvciwgY29udGV4dCk7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ2NvbXBvbmVudCc7XG4gICAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgQ29tcG9uZW50UG9ydGFsKGNvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZiwgaW5qZWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRlbnRUeXBlID0gJ3N0cmluZyc7XG4gICAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cbn1cbiJdfQ==