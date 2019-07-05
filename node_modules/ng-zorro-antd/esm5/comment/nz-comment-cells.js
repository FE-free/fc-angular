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
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
var NzCommentAvatarDirective = /** @class */ (function () {
    function NzCommentAvatarDirective() {
    }
    NzCommentAvatarDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-avatar[nz-comment-avatar]',
                    exportAs: 'nzCommentAvatar'
                },] }
    ];
    return NzCommentAvatarDirective;
}());
export { NzCommentAvatarDirective };
var NzCommentContentDirective = /** @class */ (function () {
    function NzCommentContentDirective() {
    }
    NzCommentContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'nz-comment-content, [nz-comment-content]',
                    exportAs: 'nzCommentContent',
                    host: { class: 'ant-comment-content-detail' }
                },] }
    ];
    return NzCommentContentDirective;
}());
export { NzCommentContentDirective };
var NzCommentActionHostDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzCommentActionHostDirective, _super);
    function NzCommentActionHostDirective(componentFactoryResolver, viewContainerRef) {
        return _super.call(this, componentFactoryResolver, viewContainerRef) || this;
    }
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    /**
     * @return {?}
     */
    NzCommentActionHostDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.attach(this.nzCommentActionHost);
    };
    NzCommentActionHostDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nzCommentActionHost]',
                    exportAs: 'nzCommentActionHost'
                },] }
    ];
    /** @nocollapse */
    NzCommentActionHostDirective.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef }
    ]; };
    NzCommentActionHostDirective.propDecorators = {
        nzCommentActionHost: [{ type: Input }]
    };
    return NzCommentActionHostDirective;
}(CdkPortalOutlet));
export { NzCommentActionHostDirective };
if (false) {
    /** @type {?} */
    NzCommentActionHostDirective.prototype.nzCommentActionHost;
}
var NzCommentActionComponent = /** @class */ (function () {
    function NzCommentActionComponent(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    Object.defineProperty(NzCommentActionComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentPortal;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCommentActionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    };
    NzCommentActionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-comment-action',
                    exportAs: 'nzCommentAction',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-template><ng-content></ng-content></ng-template>'
                }] }
    ];
    /** @nocollapse */
    NzCommentActionComponent.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    NzCommentActionComponent.propDecorators = {
        implicitContent: [{ type: ViewChild, args: [TemplateRef, { static: true },] }]
    };
    return NzCommentActionComponent;
}());
export { NzCommentActionComponent };
if (false) {
    /** @type {?} */
    NzCommentActionComponent.prototype.implicitContent;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.contentPortal;
    /**
     * @type {?}
     * @private
     */
    NzCommentActionComponent.prototype.viewContainerRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29tbWVudC8iLCJzb3VyY2VzIjpbIm56LWNvbW1lbnQtY2VsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNoQixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFBQTtJQUl1QyxDQUFDOztnQkFKdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw4QkFBOEI7b0JBQ3hDLFFBQVEsRUFBRSxpQkFBaUI7aUJBQzVCOztJQUNzQywrQkFBQztDQUFBLEFBSnhDLElBSXdDO1NBQTNCLHdCQUF3QjtBQUVyQztJQUFBO0lBS3dDLENBQUM7O2dCQUx4QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDBDQUEwQztvQkFDcEQsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFO2lCQUM5Qzs7SUFDdUMsZ0NBQUM7Q0FBQSxBQUx6QyxJQUt5QztTQUE1Qix5QkFBeUI7QUFFdEM7SUFJa0Qsd0RBQWU7SUFHL0Qsc0NBQVksd0JBQWtELEVBQUUsZ0JBQWtDO2VBQ2hHLGtCQUFNLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCwrQ0FBUTs7O0lBQVI7UUFDRSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsa0RBQVc7OztJQUFYO1FBQ0UsaUJBQU0sV0FBVyxXQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNEQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBckJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7OztnQkEzQkMsd0JBQXdCO2dCQU94QixnQkFBZ0I7OztzQ0FzQmYsS0FBSzs7SUFpQlIsbUNBQUM7Q0FBQSxBQXRCRCxDQUlrRCxlQUFlLEdBa0JoRTtTQWxCWSw0QkFBNEI7OztJQUN2QywyREFBb0Q7O0FBbUJ0RDtJQWVFLGtDQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU45QyxrQkFBYSxHQUEwQixJQUFJLENBQUM7SUFNSyxDQUFDO0lBSjFELHNCQUFJLDZDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7Ozs7SUFJRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkYsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRSxzREFBc0Q7aUJBQ2pFOzs7O2dCQS9DQyxnQkFBZ0I7OztrQ0FpRGYsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBWTFDLCtCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FiWSx3QkFBd0I7OztJQUNuQyxtREFBNkU7Ozs7O0lBQzdFLGlEQUFvRDs7Ozs7SUFNeEMsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1hdmF0YXJbbnotY29tbWVudC1hdmF0YXJdJyxcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBdmF0YXInXG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudEF2YXRhckRpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWNvbnRlbnQsIFtuei1jb21tZW50LWNvbnRlbnRdJyxcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRDb250ZW50JyxcbiAgaG9zdDogeyBjbGFzczogJ2FudC1jb21tZW50LWNvbnRlbnQtZGV0YWlsJyB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q29tbWVudENvbnRlbnREaXJlY3RpdmUge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256Q29tbWVudEFjdGlvbkhvc3RdJyxcbiAgZXhwb3J0QXM6ICduekNvbW1lbnRBY3Rpb25Ib3N0J1xufSlcbmV4cG9ydCBjbGFzcyBOekNvbW1lbnRBY3Rpb25Ib3N0RGlyZWN0aXZlIGV4dGVuZHMgQ2RrUG9ydGFsT3V0bGV0IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBuekNvbW1lbnRBY3Rpb25Ib3N0OiBUZW1wbGF0ZVBvcnRhbCB8IG51bGw7XG5cbiAgY29uc3RydWN0b3IoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICBzdXBlcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIHZpZXdDb250YWluZXJSZWYpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2godGhpcy5uekNvbW1lbnRBY3Rpb25Ib3N0KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1jb21tZW50LWFjdGlvbicsXG4gIGV4cG9ydEFzOiAnbnpDb21tZW50QWN0aW9uJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgTnpDb21tZW50QWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZiwgeyBzdGF0aWM6IHRydWUgfSkgaW1wbGljaXRDb250ZW50OiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBjb250ZW50UG9ydGFsOiBUZW1wbGF0ZVBvcnRhbCB8IG51bGwgPSBudWxsO1xuXG4gIGdldCBjb250ZW50KCk6IFRlbXBsYXRlUG9ydGFsIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudFBvcnRhbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRlbnRQb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5pbXBsaWNpdENvbnRlbnQsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gIH1cbn1cbiJdfQ==