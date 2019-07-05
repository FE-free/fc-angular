/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { alreadyHasAThemeSuffix, getNameAndNamespace, isIconDefinition, printWarn, withSuffix } from '../utils';
import { IconService } from './icon.service';
var IconDirective = /** @class */ (function () {
    function IconDirective(_iconService, _elementRef, _renderer) {
        this._iconService = _iconService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    IconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.type || changes.theme || changes.twoToneColor) {
            this._changeIcon();
        }
    };
    /**
     * Render a new icon in the current element. Remove the icon when `type` is falsy.
     */
    /**
     * Render a new icon in the current element. Remove the icon when `type` is falsy.
     * @protected
     * @return {?}
     */
    IconDirective.prototype._changeIcon = /**
     * Render a new icon in the current element. Remove the icon when `type` is falsy.
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            if (!_this.type) {
                _this._clearSVGElement();
                resolve(null);
            }
            else {
                _this._iconService.getRenderedContent(_this._parseIconType(_this.type, _this.theme), _this.twoToneColor).subscribe((/**
                 * @param {?} svg
                 * @return {?}
                 */
                function (svg) {
                    _this._setSVGElement(svg);
                    resolve(svg);
                }));
            }
        }));
    };
    /**
     * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
     * If namespace is specified, ignore theme because it meaningless for users' icons.
     * @param type
     * @param theme
     */
    /**
     * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
     * If namespace is specified, ignore theme because it meaningless for users' icons.
     * @protected
     * @param {?} type
     * @param {?} theme
     * @return {?}
     */
    IconDirective.prototype._parseIconType = /**
     * Parse a icon to the standard form, an `IconDefinition` or a string like 'account-book-fill` (with a theme suffixed).
     * If namespace is specified, ignore theme because it meaningless for users' icons.
     * @protected
     * @param {?} type
     * @param {?} theme
     * @return {?}
     */
    function (type, theme) {
        if (isIconDefinition(type)) {
            return type;
        }
        else {
            var _a = tslib_1.__read(getNameAndNamespace(type), 2), name_1 = _a[0], namespace = _a[1];
            if (namespace) {
                return type;
            }
            if (alreadyHasAThemeSuffix(name_1)) {
                if (!!theme) {
                    printWarn("'type' " + name_1 + " already gets a theme inside so 'theme' " + theme + " would be ignored");
                }
                return name_1;
            }
            else {
                return withSuffix(name_1, theme || this._iconService.defaultTheme);
            }
        }
    };
    /**
     * @protected
     * @param {?} svg
     * @return {?}
     */
    IconDirective.prototype._setSVGElement = /**
     * @protected
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._clearSVGElement();
        this._renderer.appendChild(this._elementRef.nativeElement, svg);
    };
    /**
     * @protected
     * @return {?}
     */
    IconDirective.prototype._clearSVGElement = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this._elementRef.nativeElement;
        /** @type {?} */
        var children = el.childNodes;
        /** @type {?} */
        var length = children.length;
        for (var i = length - 1; i >= 0; i--) {
            /** @type {?} */
            var child = (/** @type {?} */ (children[i]));
            if (child.tagName.toLowerCase() === 'svg') {
                this._renderer.removeChild(el, child);
            }
        }
    };
    IconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[antIcon]'
                },] }
    ];
    /** @nocollapse */
    IconDirective.ctorParameters = function () { return [
        { type: IconService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    IconDirective.propDecorators = {
        type: [{ type: Input }],
        theme: [{ type: Input }],
        twoToneColor: [{ type: Input }]
    };
    return IconDirective;
}());
export { IconDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNoSCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFRRSx1QkFBc0IsWUFBeUIsRUFBWSxXQUF1QixFQUFZLFNBQW9CO1FBQTVGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVksZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFBWSxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUcsQ0FBQzs7Ozs7SUFFdEgsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDekQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDTyxtQ0FBVzs7Ozs7SUFBckI7UUFBQSxpQkFlQztRQWRDLE9BQU8sSUFBSSxPQUFPOzs7O1FBQW9CLFVBQUEsT0FBTztZQUMzQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FDbEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFDMUMsS0FBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQyxTQUFTOzs7O2dCQUFDLFVBQUEsR0FBRztvQkFDYixLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDTyxzQ0FBYzs7Ozs7Ozs7SUFBeEIsVUFBeUIsSUFBNkIsRUFBRSxLQUFnQjtRQUN0RSxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNDLElBQUEsaURBQStDLEVBQTdDLGNBQUksRUFBRSxpQkFBdUM7WUFDckQsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELElBQUksc0JBQXNCLENBQUMsTUFBSSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDWCxTQUFTLENBQUMsWUFBVSxNQUFJLGdEQUEyQyxLQUFLLHNCQUFtQixDQUFDLENBQUM7aUJBQzlGO2dCQUNELE9BQU8sTUFBSSxDQUFDO2FBQ2I7aUJBQU07Z0JBQ0wsT0FBTyxVQUFVLENBQUMsTUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xFO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFUyxzQ0FBYzs7Ozs7SUFBeEIsVUFBeUIsR0FBZTtRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVTLHdDQUFnQjs7OztJQUExQjs7WUFDUSxFQUFFLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTs7WUFDaEQsUUFBUSxHQUFHLEVBQUUsQ0FBQyxVQUFVOztZQUN4QixNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU07UUFDOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2dCQUM5QixLQUFLLEdBQUcsbUJBQUEsUUFBUSxDQUFFLENBQUMsQ0FBRSxFQUFlO1lBQzFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxLQUFLLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN2QztTQUNGO0lBQ0gsQ0FBQzs7Z0JBNUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBSlEsV0FBVztnQkFSbEIsVUFBVTtnQkFHVixTQUFTOzs7dUJBV1IsS0FBSzt3QkFDTCxLQUFLOytCQUNMLEtBQUs7O0lBdUVSLG9CQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0ExRVksYUFBYTs7O0lBQ3hCLDZCQUF1Qzs7SUFDdkMsOEJBQTBCOztJQUMxQixxQ0FBOEI7Ozs7O0lBRWxCLHFDQUFtQzs7Ozs7SUFBRSxvQ0FBaUM7Ozs7O0lBQUUsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgYWxyZWFkeUhhc0FUaGVtZVN1ZmZpeCwgZ2V0TmFtZUFuZE5hbWVzcGFjZSwgaXNJY29uRGVmaW5pdGlvbiwgcHJpbnRXYXJuLCB3aXRoU3VmZml4IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbnRJY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyB8IEljb25EZWZpbml0aW9uO1xuICBASW5wdXQoKSB0aGVtZTogVGhlbWVUeXBlO1xuICBASW5wdXQoKSB0d29Ub25lQ29sb3I6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgX2ljb25TZXJ2aWNlOiBJY29uU2VydmljZSwgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnR5cGUgfHwgY2hhbmdlcy50aGVtZSB8fCBjaGFuZ2VzLnR3b1RvbmVDb2xvcikge1xuICAgICAgdGhpcy5fY2hhbmdlSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYSBuZXcgaWNvbiBpbiB0aGUgY3VycmVudCBlbGVtZW50LiBSZW1vdmUgdGhlIGljb24gd2hlbiBgdHlwZWAgaXMgZmFsc3kuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NoYW5nZUljb24oKTogUHJvbWlzZTxTVkdFbGVtZW50IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxTVkdFbGVtZW50IHwgbnVsbD4ocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICAgICAgcmVzb2x2ZShudWxsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLmdldFJlbmRlcmVkQ29udGVudChcbiAgICAgICAgICB0aGlzLl9wYXJzZUljb25UeXBlKHRoaXMudHlwZSwgdGhpcy50aGVtZSksXG4gICAgICAgICAgdGhpcy50d29Ub25lQ29sb3JcbiAgICAgICAgKS5zdWJzY3JpYmUoc3ZnID0+IHtcbiAgICAgICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHN2Zyk7XG4gICAgICAgICAgcmVzb2x2ZShzdmcpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhIGljb24gdG8gdGhlIHN0YW5kYXJkIGZvcm0sIGFuIGBJY29uRGVmaW5pdGlvbmAgb3IgYSBzdHJpbmcgbGlrZSAnYWNjb3VudC1ib29rLWZpbGxgICh3aXRoIGEgdGhlbWUgc3VmZml4ZWQpLlxuICAgKiBJZiBuYW1lc3BhY2UgaXMgc3BlY2lmaWVkLCBpZ25vcmUgdGhlbWUgYmVjYXVzZSBpdCBtZWFuaW5nbGVzcyBmb3IgdXNlcnMnIGljb25zLlxuICAgKiBAcGFyYW0gdHlwZVxuICAgKiBAcGFyYW0gdGhlbWVcbiAgICovXG4gIHByb3RlY3RlZCBfcGFyc2VJY29uVHlwZSh0eXBlOiBzdHJpbmcgfCBJY29uRGVmaW5pdGlvbiwgdGhlbWU6IFRoZW1lVHlwZSk6IEljb25EZWZpbml0aW9uIHwgc3RyaW5nIHtcbiAgICBpZiAoaXNJY29uRGVmaW5pdGlvbih0eXBlKSkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFsgbmFtZSwgbmFtZXNwYWNlIF0gPSBnZXROYW1lQW5kTmFtZXNwYWNlKHR5cGUpO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICAgIGlmIChhbHJlYWR5SGFzQVRoZW1lU3VmZml4KG5hbWUpKSB7XG4gICAgICAgIGlmICghIXRoZW1lKSB7XG4gICAgICAgICAgcHJpbnRXYXJuKGAndHlwZScgJHtuYW1lfSBhbHJlYWR5IGdldHMgYSB0aGVtZSBpbnNpZGUgc28gJ3RoZW1lJyAke3RoZW1lfSB3b3VsZCBiZSBpZ25vcmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2l0aFN1ZmZpeChuYW1lLCB0aGVtZSB8fCB0aGlzLl9pY29uU2VydmljZS5kZWZhdWx0VGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0U1ZHRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN2Zyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NsZWFyU1ZHRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbC5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gbGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bIGkgXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKGVsLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=