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
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
function RegisteredMeta() { }
if (false) {
    /** @type {?} */
    RegisteredMeta.prototype.modalRef;
    /** @type {?} */
    RegisteredMeta.prototype.afterOpenSubscription;
    /** @type {?} */
    RegisteredMeta.prototype.afterCloseSubscription;
}
var NzModalControlService = /** @class */ (function () {
    function NzModalControlService(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    Object.defineProperty(NzModalControlService.prototype, "afterAllClose", {
        // Track singleton afterAllClose through over the injection tree
        get: 
        // Track singleton afterAllClose through over the injection tree
        /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.afterAllClose : (/** @type {?} */ (this.rootAfterAllClose));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "openModals", {
        // Track singleton openModals array through over the injection tree
        get: 
        // Track singleton openModals array through over the injection tree
        /**
         * @return {?}
         */
        function () {
            return this.parentService ? this.parentService.openModals : (/** @type {?} */ (this.rootOpenModals));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzModalControlService.prototype, "registeredMetaMap", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            // Registered modal for later usage
            return this.parentService ? this.parentService.registeredMetaMap : (/** @type {?} */ (this.rootRegisteredMetaMap));
        },
        enumerable: true,
        configurable: true
    });
    // Register a modal to listen its open/close
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.registerModal = 
    // Register a modal to listen its open/close
    /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        var _this = this;
        if (!this.hasRegistered(modalRef)) {
            /** @type {?} */
            var afterOpenSubscription = modalRef.afterOpen.subscribe((/**
             * @return {?}
             */
            function () { return _this.openModals.push(modalRef); }));
            /** @type {?} */
            var afterCloseSubscription = modalRef.afterClose.subscribe((/**
             * @return {?}
             */
            function () { return _this.removeOpenModal(modalRef); }));
            this.registeredMetaMap.set(modalRef, { modalRef: modalRef, afterOpenSubscription: afterOpenSubscription, afterCloseSubscription: afterCloseSubscription });
        }
    };
    // deregister modals
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.deregisterModal = 
    // deregister modals
    /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    };
    /**
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.hasRegistered = /**
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        return this.registeredMetaMap.has(modalRef);
    };
    // Close all registered opened modals
    // Close all registered opened modals
    /**
     * @return {?}
     */
    NzModalControlService.prototype.closeAll = 
    // Close all registered opened modals
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    };
    /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    NzModalControlService.prototype.removeOpenModal = /**
     * @private
     * @param {?} modalRef
     * @return {?}
     */
    function (modalRef) {
        /** @type {?} */
        var index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    };
    NzModalControlService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzModalControlService.ctorParameters = function () { return [
        { type: NzModalControlService, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return NzModalControlService;
}());
export { NzModalControlService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootOpenModals;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootAfterAllClose;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.rootRegisteredMetaMap;
    /**
     * @type {?}
     * @private
     */
    NzModalControlService.prototype.parentService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbW9kYWwtY29udHJvbC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tb2RhbC8iLCJzb3VyY2VzIjpbIm56LW1vZGFsLWNvbnRyb2wuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQzs7OztBQUk3Qyw2QkFJQzs7O0lBSEMsa0NBQXFCOztJQUNyQiwrQ0FBb0M7O0lBQ3BDLGdEQUFxQzs7QUFHdkM7SUFxQkUsK0JBQTRDLGFBQW9DO1FBQXBDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQVR4RSxtQkFBYyxHQUF3QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNyRSxzQkFBaUIsR0FBeUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFGLDBCQUFxQixHQUEyQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFPM0IsQ0FBQztJQWxCcEYsc0JBQUksZ0RBQWE7UUFEakIsZ0VBQWdFOzs7Ozs7UUFDaEU7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBQSxJQUFJLENBQUMsaUJBQWlCLEVBQUMsQ0FBQztRQUN6RixDQUFDOzs7T0FBQTtJQUdELHNCQUFJLDZDQUFVO1FBRGQsbUVBQW1FOzs7Ozs7UUFDbkU7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFD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Q2xHLHNEQUE4Rzs7Ozs7SUFPbEcsOENBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IE56TW9kYWxSZWYgfSBmcm9tICcuL256LW1vZGFsLXJlZi5jbGFzcyc7XG5cbmludGVyZmFjZSBSZWdpc3RlcmVkTWV0YSB7XG4gIG1vZGFsUmVmOiBOek1vZGFsUmVmO1xuICBhZnRlck9wZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTnpNb2RhbENvbnRyb2xTZXJ2aWNlIHtcbiAgLy8gVHJhY2sgc2luZ2xldG9uIGFmdGVyQWxsQ2xvc2UgdGhyb3VnaCBvdmVyIHRoZSBpbmplY3Rpb24gdHJlZVxuICBnZXQgYWZ0ZXJBbGxDbG9zZSgpOiBTdWJqZWN0PHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLmFmdGVyQWxsQ2xvc2UgOiB0aGlzLnJvb3RBZnRlckFsbENsb3NlITtcbiAgfVxuXG4gIC8vIFRyYWNrIHNpbmdsZXRvbiBvcGVuTW9kYWxzIGFycmF5IHRocm91Z2ggb3ZlciB0aGUgaW5qZWN0aW9uIHRyZWVcbiAgZ2V0IG9wZW5Nb2RhbHMoKTogTnpNb2RhbFJlZltdIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLm9wZW5Nb2RhbHMgOiB0aGlzLnJvb3RPcGVuTW9kYWxzITtcbiAgfVxuXG4gIHByaXZhdGUgcm9vdE9wZW5Nb2RhbHM6IE56TW9kYWxSZWZbXSB8IG51bGwgPSB0aGlzLnBhcmVudFNlcnZpY2UgPyBudWxsIDogW107XG4gIHByaXZhdGUgcm9vdEFmdGVyQWxsQ2xvc2U6IFN1YmplY3Q8dm9pZD4gfCBudWxsID0gdGhpcy5wYXJlbnRTZXJ2aWNlID8gbnVsbCA6IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgcm9vdFJlZ2lzdGVyZWRNZXRhTWFwOiBNYXA8TnpNb2RhbFJlZiwgUmVnaXN0ZXJlZE1ldGE+IHwgbnVsbCA9IHRoaXMucGFyZW50U2VydmljZSA/IG51bGwgOiBuZXcgTWFwKCk7XG5cbiAgcHJpdmF0ZSBnZXQgcmVnaXN0ZXJlZE1ldGFNYXAoKTogTWFwPE56TW9kYWxSZWYsIFJlZ2lzdGVyZWRNZXRhPiB7XG4gICAgLy8gUmVnaXN0ZXJlZCBtb2RhbCBmb3IgbGF0ZXIgdXNhZ2VcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRTZXJ2aWNlID8gdGhpcy5wYXJlbnRTZXJ2aWNlLnJlZ2lzdGVyZWRNZXRhTWFwIDogdGhpcy5yb290UmVnaXN0ZXJlZE1ldGFNYXAhO1xuICB9XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnRTZXJ2aWNlOiBOek1vZGFsQ29udHJvbFNlcnZpY2UpIHt9XG5cbiAgLy8gUmVnaXN0ZXIgYSBtb2RhbCB0byBsaXN0ZW4gaXRzIG9wZW4vY2xvc2VcbiAgcmVnaXN0ZXJNb2RhbChtb2RhbFJlZjogTnpNb2RhbFJlZik6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNSZWdpc3RlcmVkKG1vZGFsUmVmKSkge1xuICAgICAgY29uc3QgYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uID0gbW9kYWxSZWYuYWZ0ZXJPcGVuLnN1YnNjcmliZSgoKSA9PiB0aGlzLm9wZW5Nb2RhbHMucHVzaChtb2RhbFJlZikpO1xuICAgICAgY29uc3QgYWZ0ZXJDbG9zZVN1YnNjcmlwdGlvbiA9IG1vZGFsUmVmLmFmdGVyQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmKSk7XG5cbiAgICAgIHRoaXMucmVnaXN0ZXJlZE1ldGFNYXAuc2V0KG1vZGFsUmVmLCB7IG1vZGFsUmVmLCBhZnRlck9wZW5TdWJzY3JpcHRpb24sIGFmdGVyQ2xvc2VTdWJzY3JpcHRpb24gfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZGVyZWdpc3RlciBtb2RhbHNcbiAgZGVyZWdpc3Rlck1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XG4gICAgY29uc3QgcmVnaXN0ZXJlZE1ldGEgPSB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmdldChtb2RhbFJlZik7XG4gICAgaWYgKHJlZ2lzdGVyZWRNZXRhKSB7XG4gICAgICAvLyBSZW1vdmUgdGhpcyBtb2RhbCBpZiBpdCBpcyBzdGlsbCBpbiB0aGUgb3BlbmVkIG1vZGFsIGxpc3QgKE5PVEU6IGl0IG1heSB0cmlnZ2VyIFwiYWZ0ZXJBbGxDbG9zZVwiKVxuICAgICAgdGhpcy5yZW1vdmVPcGVuTW9kYWwocmVnaXN0ZXJlZE1ldGEubW9kYWxSZWYpO1xuICAgICAgcmVnaXN0ZXJlZE1ldGEuYWZ0ZXJPcGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICByZWdpc3RlcmVkTWV0YS5hZnRlckNsb3NlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmRlbGV0ZShtb2RhbFJlZik7XG4gICAgfVxuICB9XG5cbiAgaGFzUmVnaXN0ZXJlZChtb2RhbFJlZjogTnpNb2RhbFJlZik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlZ2lzdGVyZWRNZXRhTWFwLmhhcyhtb2RhbFJlZik7XG4gIH1cblxuICAvLyBDbG9zZSBhbGwgcmVnaXN0ZXJlZCBvcGVuZWQgbW9kYWxzXG4gIGNsb3NlQWxsKCk6IHZvaWQge1xuICAgIGxldCBpID0gdGhpcy5vcGVuTW9kYWxzLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHRoaXMub3Blbk1vZGFsc1tpXS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlT3Blbk1vZGFsKG1vZGFsUmVmOiBOek1vZGFsUmVmKTogdm9pZCB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm9wZW5Nb2RhbHMuaW5kZXhPZihtb2RhbFJlZik7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgdGhpcy5vcGVuTW9kYWxzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIGlmICghdGhpcy5vcGVuTW9kYWxzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFmdGVyQWxsQ2xvc2UubmV4dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19