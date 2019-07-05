/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { alreadyHasAThemeSuffix, getNameAndNamespace, isIconDefinition, printWarn, withSuffix } from '../utils';
import { IconService } from './icon.service';
export class IconDirective {
    /**
     * @param {?} _iconService
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_iconService, _elementRef, _renderer) {
        this._iconService = _iconService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.type || changes.theme || changes.twoToneColor) {
            this._changeIcon();
        }
    }
    /**
     * Render a new icon in the current element. Remove the icon when `type` is falsy.
     * @protected
     * @return {?}
     */
    _changeIcon() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (!this.type) {
                this._clearSVGElement();
                resolve(null);
            }
            else {
                this._iconService.getRenderedContent(this._parseIconType(this.type, this.theme), this.twoToneColor).subscribe((/**
                 * @param {?} svg
                 * @return {?}
                 */
                svg => {
                    this._setSVGElement(svg);
                    resolve(svg);
                }));
            }
        }));
    }
    /**
     * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
     * If namespace is specified, ignore theme because it meaningless for users' icons.
     * @protected
     * @param {?} type
     * @param {?} theme
     * @return {?}
     */
    _parseIconType(type, theme) {
        if (isIconDefinition(type)) {
            return type;
        }
        else {
            const [name, namespace] = getNameAndNamespace(type);
            if (namespace) {
                return type;
            }
            if (alreadyHasAThemeSuffix(name)) {
                if (!!theme) {
                    printWarn(`'type' ${name} already gets a theme inside so 'theme' ${theme} would be ignored`);
                }
                return name;
            }
            else {
                return withSuffix(name, theme || this._iconService.defaultTheme);
            }
        }
    }
    /**
     * @protected
     * @param {?} svg
     * @return {?}
     */
    _setSVGElement(svg) {
        this._clearSVGElement();
        this._renderer.appendChild(this._elementRef.nativeElement, svg);
    }
    /**
     * @protected
     * @return {?}
     */
    _clearSVGElement() {
        /** @type {?} */
        const el = this._elementRef.nativeElement;
        /** @type {?} */
        const children = el.childNodes;
        /** @type {?} */
        const length = children.length;
        for (let i = length - 1; i >= 0; i--) {
            /** @type {?} */
            const child = (/** @type {?} */ (children[i]));
            if (child.tagName.toLowerCase() === 'svg') {
                this._renderer.removeChild(el, child);
            }
        }
    }
}
IconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[antIcon]'
            },] }
];
/** @nocollapse */
IconDirective.ctorParameters = () => [
    { type: IconService },
    { type: ElementRef },
    { type: Renderer2 }
];
IconDirective.propDecorators = {
    type: [{ type: Input }],
    theme: [{ type: Input }],
    twoToneColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IconDirective.prototype.type;
    /** @type {?} */
    IconDirective.prototype.theme;
    /** @type {?} */
    IconDirective.prototype.twoToneColor;
    /**
     * @type {?}
     * @protected
     */
    IconDirective.prototype._iconService;
    /**
     * @type {?}
     * @protected
     */
    IconDirective.prototype._elementRef;
    /**
     * @type {?}
     * @protected
     */
    IconDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2hILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUs3QyxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBS3hCLFlBQXNCLFlBQXlCLEVBQVksV0FBdUIsRUFBWSxTQUFvQjtRQUE1RixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFZLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVksY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7Ozs7O0lBRXRILFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjtJQUNILENBQUM7Ozs7OztJQUtTLFdBQVc7UUFDbkIsT0FBTyxJQUFJLE9BQU87Ozs7UUFBb0IsT0FBTyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQzFDLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUMsU0FBUzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTtvQkFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7OztJQVFTLGNBQWMsQ0FBQyxJQUE2QixFQUFFLEtBQWdCO1FBQ3RFLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO2tCQUNDLENBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBRSxHQUFHLG1CQUFtQixDQUFDLElBQUksQ0FBQztZQUNyRCxJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLElBQUksQ0FBQzthQUNiO1lBQ0QsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUNYLFNBQVMsQ0FBQyxVQUFVLElBQUksMkNBQTJDLEtBQUssbUJBQW1CLENBQUMsQ0FBQztpQkFDOUY7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEU7U0FDRjtJQUNILENBQUM7Ozs7OztJQUVTLGNBQWMsQ0FBQyxHQUFlO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRVMsZ0JBQWdCOztjQUNsQixFQUFFLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTs7Y0FDaEQsUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVOztjQUN4QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUM5QixLQUFLLEdBQUcsbUJBQUEsUUFBUSxDQUFFLENBQUMsQ0FBRSxFQUFlO1lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN2QztTQUNGO0lBQ0gsQ0FBQzs7O1lBNUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVzthQUN0Qjs7OztZQUpRLFdBQVc7WUFSbEIsVUFBVTtZQUdWLFNBQVM7OzttQkFXUixLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzs7OztJQUZOLDZCQUF1Qzs7SUFDdkMsOEJBQTBCOztJQUMxQixxQ0FBOEI7Ozs7O0lBRWxCLHFDQUFtQzs7Ozs7SUFBRSxvQ0FBaUM7Ozs7O0lBQUUsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWxyZWFkeUhhc0FUaGVtZVN1ZmZpeCwgZ2V0TmFtZUFuZE5hbWVzcGFjZSwgaXNJY29uRGVmaW5pdGlvbiwgcHJpbnRXYXJuLCB3aXRoU3VmZml4IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbnRJY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyB8IEljb25EZWZpbml0aW9uO1xuICBASW5wdXQoKSB0aGVtZTogVGhlbWVUeXBlO1xuICBASW5wdXQoKSB0d29Ub25lQ29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2ljb25TZXJ2aWNlOiBJY29uU2VydmljZSwgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnR5cGUgfHwgY2hhbmdlcy50aGVtZSB8fCBjaGFuZ2VzLnR3b1RvbmVDb2xvcikge1xuICAgICAgdGhpcy5fY2hhbmdlSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBuZXcgaWNvbiBpbiB0aGUgY3VycmVudCBlbGVtZW50LiBSZW1vdmUgdGhlIGljb24gd2hlbiBgdHlwZWAgaXMgZmFsc3kuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NoYW5nZUljb24oKTogUHJvbWlzZTxTVkdFbGVtZW50IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxTVkdFbGVtZW50IHwgbnVsbD4ocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLmdldFJlbmRlcmVkQ29udGVudChcbiAgICAgICAgICB0aGlzLl9wYXJzZUljb25UeXBlKHRoaXMudHlwZSwgdGhpcy50aGVtZSksXG4gICAgICAgICAgdGhpcy50d29Ub25lQ29sb3JcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ZnID0+IHtcbiAgICAgICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHN2Zyk7XG4gICAgICAgICAgcmVzb2x2ZShzdmcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIGljb24gdG8gdGhlIHN0YW5kYXJkIGZvcm0sIGFuIGBJY29uRGVmaW5pdGlvbmAgb3IgYSBzdHJpbmcgbGlrZSAnYWNjb3VudC1ib29rLWZpbGxgICh3aXRoIGEgdGhlbWUgc3VmZml4ZWQpLlxuICAgKiBJZiBuYW1lc3BhY2UgaXMgc3BlY2lmaWVkLCBpZ25vcmUgdGhlbWUgYmVjYXVzZSBpdCBtZWFuaW5nbGVzcyBmb3IgdXNlcnMnIGljb25zLlxuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIHByb3RlY3RlZCBfcGFyc2VJY29uVHlwZSh0eXBlOiBzdHJpbmcgfCBJY29uRGVmaW5pdGlvbiwgdGhlbWU6IFRoZW1lVHlwZSk6IEljb25EZWZpbml0aW9uIHwgc3RyaW5nIHtcbiAgICBpZiAoaXNJY29uRGVmaW5pdGlvbih0eXBlKSkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFsgbmFtZSwgbmFtZXNwYWNlIF0gPSBnZXROYW1lQW5kTmFtZXNwYWNlKHR5cGUpO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbHJlYWR5SGFzQVRoZW1lU3VmZml4KG5hbWUpKSB7XG4gICAgICAgIGlmICghIXRoZW1lKSB7XG4gICAgICAgICAgcHJpbnRXYXJuKGAndHlwZScgJHtuYW1lfSBhbHJlYWR5IGdldHMgYSB0aGVtZSBpbnNpZGUgc28gJ3RoZW1lJyAke3RoZW1lfSB3b3VsZCBiZSBpZ25vcmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2l0aFN1ZmZpeChuYW1lLCB0aGVtZSB8fCB0aGlzLl9pY29uU2VydmljZS5kZWZhdWx0VGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0U1ZHRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NsZWFyU1ZHRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbC5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bIGkgXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGVsLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=