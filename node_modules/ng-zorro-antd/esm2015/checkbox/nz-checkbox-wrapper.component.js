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
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, Renderer2, ViewEncapsulation } from '@angular/core';
export class NzCheckboxWrapperComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     */
    constructor(renderer, elementRef) {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
        renderer.addClass(elementRef.nativeElement, 'ant-checkbox-group');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    /**
     * @return {?}
     */
    outputValue() {
        /** @type {?} */
        const checkedList = this.checkboxList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzChecked));
        return checkedList.map((/**
         * @param {?} item
         * @return {?}
         */
        item => item.nzValue));
    }
    /**
     * @return {?}
     */
    onChange() {
        this.nzOnChange.emit(this.outputValue());
    }
}
NzCheckboxWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-checkbox-wrapper',
                exportAs: 'nzCheckboxWrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzCheckboxWrapperComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzCheckboxWrapperComponent.propDecorators = {
    nzOnChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /**
     * @type {?}
     * @private
     */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NoZWNrYm94LyIsInNvdXJjZXMiOlsibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBWXZCLE1BQU0sT0FBTywwQkFBMEI7Ozs7O0lBcUJyQyxZQUFZLFFBQW1CLEVBQUUsVUFBc0I7UUFwQnBDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ3JELGlCQUFZLEdBQTBCLEVBQUUsQ0FBQztRQW9CL0MsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDcEUsQ0FBQzs7Ozs7SUFuQkQsV0FBVyxDQUFDLEtBQTBCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxXQUFXOztjQUNILFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7UUFDcEUsT0FBTyxXQUFXLENBQUMsR0FBRzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO0lBQy9DLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLHFDQUFtRDthQUNwRDs7OztZQWJDLFNBQVM7WUFIVCxVQUFVOzs7eUJBa0JULE1BQU07Ozs7SUFBUCxnREFBNkQ7Ozs7O0lBQzdELGtEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDaGVja2JveENvbXBvbmVudCB9IGZyb20gJy4vbnotY2hlY2tib3guY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotY2hlY2tib3gtd3JhcHBlcicsXG4gIGV4cG9ydEFzOiAnbnpDaGVja2JveFdyYXBwZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOekNoZWNrYm94V3JhcHBlckNvbXBvbmVudCB7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgcHJpdmF0ZSBjaGVja2JveExpc3Q6IE56Q2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xuXG4gIGFkZENoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3QucHVzaCh2YWx1ZSk7XG4gIH1cblxuICByZW1vdmVDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnNwbGljZSh0aGlzLmNoZWNrYm94TGlzdC5pbmRleE9mKHZhbHVlKSwgMSk7XG4gIH1cblxuICBvdXRwdXRWYWx1ZSgpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY2hlY2tlZExpc3QgPSB0aGlzLmNoZWNrYm94TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLm56Q2hlY2tlZCk7XG4gICAgcmV0dXJuIGNoZWNrZWRMaXN0Lm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSk7XG4gIH1cblxuICBvbkNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLm56T25DaGFuZ2UuZW1pdCh0aGlzLm91dHB1dFZhbHVlKCkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIHJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1jaGVja2JveC1ncm91cCcpO1xuICB9XG59XG4iXX0=