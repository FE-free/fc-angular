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
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
const iconTypeRE = /^anticon\-\w/;
/** @type {?} */
const getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
(className) => {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        const classArr = className.split(/\s/);
        /** @type {?} */
        const index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE)));
        return index === -1 ? undefined : { name: classArr[index], index };
    }
});
const ɵ0 = getIconTypeClass;
/** @type {?} */
const normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
(rawType) => {
    /** @type {?} */
    const ret = { type: rawType, crossError: false, verticalError: false };
    ret.type = rawType ? rawType.replace('anticon-', '') : '';
    if (ret.type.includes('verticle')) {
        ret.type = 'up';
        ret.verticalError = true;
    }
    if (ret.type.startsWith('cross')) {
        ret.type = 'close';
        ret.crossError = true;
    }
    return ret;
});
const ɵ1 = normalizeType;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * \@break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} platform
     */
    constructor(iconService, elementRef, renderer, platform) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.platform = platform;
        this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        this.spin = false;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * Properties with `nz` prefix.
     * @param {?} value
     * @return {?}
     */
    set nzSpin(value) {
        this.spin = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this.type = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTheme(value) {
        this.theme = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTwotoneColor(value) {
        this.twoToneColor = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIconfont(value) {
        this.iconfont = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        if (value && value.startsWith('anticon')) {
            /** @type {?} */
            const rawClass = getIconTypeClass(value);
            /** @type {?} */
            const type = rawClass ? normalizeType(rawClass.name).type : '';
            if (type && this.type !== type) {
                this._type = type;
            }
        }
        else {
            this._type = value;
        }
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    changeIcon2(oldAPI = false) {
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        svg => {
            this.setSVGData(svg);
            if (!oldAPI && svg) {
                this.handleSpin(svg);
                this.handleRotate(svg);
            }
        }));
    }
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    classChangeHandler(className) {
        /** @type {?} */
        const ret = getIconTypeClass(className);
        if (ret) {
            const { type, crossError, verticalError } = normalizeType(ret.name);
            if (crossError) {
                this.iconService.warnAPI('cross');
            }
            if (verticalError) {
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this._type = type;
                this.changeIcon2(true);
            }
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleSpin(svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    handleRotate(svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', `transform: rotate(${this.nzRotate}deg)`);
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassName() {
        if (typeof this.type === 'string') {
            /** @type {?} */
            const iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            const ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, `anticon-${this.type}`);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, `anticon-${this.type}`);
            }
        }
    }
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { type, nzType, nzTwotoneColor, twoToneColor, spin, nzSpin, theme, nzTheme, nzRotate } = changes;
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            if (this.platform.isBrowser) {
                // Add `class` mutation observer.
                this.classNameObserver = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                (mutations) => {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    (mutation) => mutation.attributeName === 'class'))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    (mutation) => this.classChangeHandler(((/** @type {?} */ (mutation.target))).className)));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const children = this.el.children;
        /** @type {?} */
        let length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                const child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i.anticon, [nz-icon]',
                exportAs: 'nzIcon'
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: NzIconService },
    { type: ElementRef },
    { type: Renderer2 },
    { type: Platform }
];
NzIconDirective.propDecorators = {
    nzSpin: [{ type: Input }],
    nzRotate: [{ type: Input }],
    nzType: [{ type: Input }],
    nzTheme: [{ type: Input }],
    nzTwotoneColor: [{ type: Input }],
    nzIconfont: [{ type: Input }],
    spin: [{ type: Input }],
    iconfont: [{ type: Input }],
    type: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], NzIconDirective.prototype, "nzSpin", null);
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.spin;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.iconfont;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.classNameObserver;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype._type;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.platform;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7TUFFNUMsVUFBVSxHQUFHLGNBQWM7O01BRTNCLGdCQUFnQjs7OztBQUFHLENBQUMsU0FBaUIsRUFBK0MsRUFBRTtJQUMxRixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsT0FBTyxTQUFTLENBQUM7S0FDbEI7U0FBTTs7Y0FDQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2NBQ2hDLEtBQUssR0FBRyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssY0FBYyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFDO1FBQy9HLE9BQU8sS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUNwRTtBQUNILENBQUMsQ0FBQTs7O01BRUssYUFBYTs7OztBQUFHLENBQUMsT0FBZSxFQUFpRSxFQUFFOztVQUNqRyxH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QzdCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxFQUFFLEVBQUU7O3NCQUNULEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLG1CQUFBLEtBQUssRUFBYyxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQXZMRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFLFFBQVE7YUFDbkI7Ozs7WUEzQ1EsYUFBYTtZQVZwQixVQUFVO1lBS1YsU0FBUztZQVRGLFFBQVE7OztxQkE0RGQsS0FBSzt1QkFHTCxLQUFLO3FCQUNMLEtBQUs7c0JBR0wsS0FBSzs2QkFHTCxLQUFLO3lCQUdMLEtBQUs7bUJBS0wsS0FBSzt1QkFHTCxLQUFLO21CQUVMLEtBQUs7O0FBdkJtQjtJQUFmLFlBQVksRUFBRTs7OzZDQUV2Qjs7O0lBQ0QsbUNBQThCOzs7OztJQWU5QiwrQkFBc0I7Ozs7O0lBR3RCLG1DQUEwQjs7Ozs7SUFtQjFCLDRDQUE0Qzs7Ozs7SUFDNUMsNkJBQTJDOzs7OztJQUMzQyxnQ0FBc0I7O0lBeUVwQixzQ0FBaUM7O0lBQ2pDLHFDQUE2Qjs7SUFDN0IsbUNBQTBCOzs7OztJQUMxQixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSwgVGhlbWVUeXBlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJy4vbnotaWNvbi5zZXJ2aWNlJztcblxuY29uc3QgaWNvblR5cGVSRSA9IC9eYW50aWNvblxcLVxcdy87XG5cbmNvbnN0IGdldEljb25UeXBlQ2xhc3MgPSAoY2xhc3NOYW1lOiBzdHJpbmcpOiB7IG5hbWU6IHN0cmluZzsgaW5kZXg6IG51bWJlciB9IHwgdW5kZWZpbmVkID0+IHtcbiAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNsYXNzQXJyID0gY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcbiAgICBjb25zdCBpbmRleCA9IGNsYXNzQXJyLmZpbmRJbmRleChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSk7XG4gICAgcmV0dXJuIGluZGV4ID09PSAtMSA/IHVuZGVmaW5lZCA6IHsgbmFtZTogY2xhc3NBcnJbaW5kZXhdLCBpbmRleCB9O1xuICB9XG59O1xuXG5jb25zdCBub3JtYWxpemVUeXBlID0gKHJhd1R5cGU6IHN0cmluZyk6IHsgdHlwZTogc3RyaW5nOyBjcm9zc0Vycm9yOiBib29sZWFuOyB2ZXJ0aWNhbEVycm9yOiBib29sZWFuIH0gPT4ge1xuICBjb25zdCByZXQgPSB7IHR5cGU6IHJhd1R5cGUsIGNyb3NzRXJyb3I6IGZhbHNlLCB2ZXJ0aWNhbEVycm9yOiBmYWxzZSB9O1xuICByZXQudHlwZSA9IHJhd1R5cGUgPyByYXdUeXBlLnJlcGxhY2UoJ2FudGljb24tJywgJycpIDogJyc7XG4gIGlmIChyZXQudHlwZS5pbmNsdWRlcygndmVydGljbGUnKSkge1xuICAgIHJldC50eXBlID0gJ3VwJztcbiAgICByZXQudmVydGljYWxFcnJvciA9IHRydWU7XG4gIH1cbiAgaWYgKHJldC50eXBlLnN0YXJ0c1dpdGgoJ2Nyb3NzJykpIHtcbiAgICByZXQudHlwZSA9ICdjbG9zZSc7XG4gICAgcmV0LmNyb3NzRXJyb3IgPSB0cnVlO1xuICB9XG4gIHJldHVybiByZXQ7XG59O1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIGV4dGVuZHMgSWNvbkRpcmVjdGl2ZSB0byBwcm92aWRlOlxuICpcbiAqIC0gSWNvbkZvbnQgc3VwcG9ydFxuICogLSBzcGlubmluZ1xuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcbiAqXG4gKiBAYnJlYWstY2hhbmdlc1xuICpcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5LCBpY29uIGNsYXNzIG5hbWVzIHdvdWxkIG5vdCBiZSBzdXBwb3J0ZWQuXG4gKiAtIHByb3BlcnRpZXMgdGhhdCBub3Qgc3RhcnRlZCB3aXRoIGBuemAuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2kuYW50aWNvbiwgW256LWljb25dJyxcbiAgZXhwb3J0QXM6ICduekljb24nXG59KVxuZXhwb3J0IGNsYXNzIE56SWNvbkRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRDaGVja2VkIHtcbiAgLyoqIFByb3BlcnRpZXMgd2l0aCBgbnpgIHByZWZpeC4gKi9cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNldCBuelNwaW4odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNwaW4gPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKSBuelJvdGF0ZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgc2V0IG56VHlwZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50eXBlID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgc2V0IG56VGhlbWUodmFsdWU6IFRoZW1lVHlwZSkge1xuICAgIHRoaXMudGhlbWUgPSB2YWx1ZTtcbiAgfVxuICBASW5wdXQoKSBzZXQgbnpUd290b25lQ29sb3IodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHdvVG9uZUNvbG9yID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgc2V0IG56SWNvbmZvbnQodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuaWNvbmZvbnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xuICBASW5wdXQoKSBzcGluID0gZmFsc2U7XG5cbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXG4gIEBJbnB1dCgpIGljb25mb250OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5zdGFydHNXaXRoKCdhbnRpY29uJykpIHtcbiAgICAgIGNvbnN0IHJhd0NsYXNzID0gZ2V0SWNvblR5cGVDbGFzcyh2YWx1ZSk7XG4gICAgICBjb25zdCB0eXBlID0gcmF3Q2xhc3MgPyBub3JtYWxpemVUeXBlKHJhd0NsYXNzLm5hbWUpLnR5cGUgOiAnJztcbiAgICAgIGlmICh0eXBlICYmIHRoaXMudHlwZSAhPT0gdHlwZSkge1xuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBwcml2YXRlIGNsYXNzTmFtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgX3R5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogUmVwbGFjZW1lbnQgb2YgYGNoYW5nZUljb25gIGZvciBtb3JlIG1vZGlmaWNhdGlvbnMuXG4gICAqIEBwYXJhbSBvbGRBUElcbiAgICovXG4gIHByaXZhdGUgY2hhbmdlSWNvbjIob2xkQVBJOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICBpZiAoIW9sZEFQSSkge1xuICAgICAgdGhpcy5zZXRDbGFzc05hbWUoKTtcbiAgICB9XG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oc3ZnID0+IHtcbiAgICAgIHRoaXMuc2V0U1ZHRGF0YShzdmcpO1xuICAgICAgaWYgKCFvbGRBUEkgJiYgc3ZnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlU3BpbihzdmcpO1xuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZShzdmcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGFzc0NoYW5nZUhhbmRsZXIoY2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgaWYgKHJldCkge1xuICAgICAgY29uc3QgeyB0eXBlLCBjcm9zc0Vycm9yLCB2ZXJ0aWNhbEVycm9yIH0gPSBub3JtYWxpemVUeXBlKHJldC5uYW1lKTtcbiAgICAgIGlmIChjcm9zc0Vycm9yKSB7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgnY3Jvc3MnKTtcbiAgICAgIH1cbiAgICAgIGlmICh2ZXJ0aWNhbEVycm9yKSB7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgndmVydGljYWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hhbmdlSWNvbjIodHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcGluKHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5zcGluIHx8IHRoaXMudHlwZSA9PT0gJ2xvYWRpbmcnKSAmJiAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uLXNwaW4nKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJvdGF0ZSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnLCBgdHJhbnNmb3JtOiByb3RhdGUoJHt0aGlzLm56Um90YXRlfWRlZylgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUoc3ZnLCAnc3R5bGUnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldENsYXNzTmFtZSgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IGljb25DbGFzc05hbWVBcnIgPSB0aGlzLmVsLmNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XG4gICAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKHRoaXMuZWwuY2xhc3NOYW1lKTtcbiAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgaWNvbkNsYXNzTmFtZUFyci5zcGxpY2UocmV0LmluZGV4LCAxLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgaWNvbkNsYXNzTmFtZUFyci5qb2luKCcgJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCBgYW50aWNvbi0ke3RoaXMudHlwZX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFNWR0RhdGEoc3ZnOiBTVkdFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJyAmJiBzdmcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2RhdGEtaWNvbicsIHRoaXMudHlwZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlLFxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge1xuICAgIHN1cGVyKGljb25TZXJ2aWNlLCBlbGVtZW50UmVmLCByZW5kZXJlcik7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyB0eXBlLCBuelR5cGUsIG56VHdvdG9uZUNvbG9yLCB0d29Ub25lQ29sb3IsIHNwaW4sIG56U3BpbiwgdGhlbWUsIG56VGhlbWUsIG56Um90YXRlIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKHR5cGUgfHwgbnpUeXBlIHx8IG56VHdvdG9uZUNvbG9yIHx8IHR3b1RvbmVDb2xvciB8fCBzcGluIHx8IG56U3BpbiB8fCB0aGVtZSB8fCBuelRoZW1lKSB7XG4gICAgICB0aGlzLmNoYW5nZUljb24yKCk7XG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xuICAgICAgdGhpcy5oYW5kbGVSb3RhdGUodGhpcy5lbC5maXJzdENoaWxkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gSWYgYHRoaXMudHlwZWAgaXMgbm90IHNwZWNpZmllZCBhbmQgYGNsYXNzTGlzdGAgY29udGFpbnMgYGFudGljb25gLCBpdCBzaG91bGQgYmUgYW4gaWNvbiB1c2luZyBvbGQgQVBJLlxuICAgIGlmICghdGhpcy50eXBlICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcbiAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgnb2xkJyk7XG4gICAgICAvLyBHZXQgYHR5cGVgIGZyb20gYGNsYXNzTmFtZWAuIElmIG5vdCwgaW5pdGlhbCByZW5kZXJpbmcgd291bGQgYmUgbWlzc2VkLlxuICAgICAgdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIodGhpcy5lbC5jbGFzc05hbWUpO1xuICAgICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XG4gICAgICAgIC8vIEFkZCBgY2xhc3NgIG11dGF0aW9uIG9ic2VydmVyLlxuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xuICAgICAgICAgIG11dGF0aW9uc1xuICAgICAgICAgICAgLmZpbHRlcigobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKVxuICAgICAgICAgICAgLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIoKG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBgY2xhc3NMaXN0YCBkb2VzIG5vdCBjb250YWluIGBhbnRpY29uYCwgYWRkIGl0IGJlZm9yZSBvdGhlciBjbGFzcyBuYW1lcy5cbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGBhbnRpY29uICR7dGhpcy5lbC5jbGFzc05hbWV9YC50cmltKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYXNzTmFtZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmICghdGhpcy50eXBlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcbiAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==