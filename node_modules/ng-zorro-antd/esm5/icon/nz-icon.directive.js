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
var iconTypeRE = /^anticon\-\w/;
/** @type {?} */
var getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
function (className) {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        var classArr = className.split(/\s/);
        /** @type {?} */
        var index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); }));
        return index === -1 ? undefined : { name: classArr[index], index: index };
    }
});
var ɵ0 = getIconTypeClass;
/** @type {?} */
var normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
function (rawType) {
    /** @type {?} */
    var ret = { type: rawType, crossError: false, verticalError: false };
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
var ɵ1 = normalizeType;
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
var NzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconDirective, _super);
    function NzIconDirective(iconService, elementRef, renderer, platform) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.platform = platform;
        _this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        _this.spin = false;
        _this.el = _this.elementRef.nativeElement;
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        /** Properties with `nz` prefix. */
        set: /**
         * Properties with `nz` prefix.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.startsWith('anticon')) {
                /** @type {?} */
                var rawClass = getIconTypeClass(value);
                /** @type {?} */
                var type = rawClass ? normalizeType(rawClass.name).type : '';
                if (type && this.type !== type) {
                    this._type = type;
                }
            }
            else {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param oldAPI
     */
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    function (oldAPI) {
        var _this = this;
        if (oldAPI === void 0) { oldAPI = false; }
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            _this.setSVGData(svg);
            if (!oldAPI && svg) {
                _this.handleSpin(svg);
                _this.handleRotate(svg);
            }
        }));
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    NzIconDirective.prototype.classChangeHandler = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        /** @type {?} */
        var ret = getIconTypeClass(className);
        if (ret) {
            var _a = normalizeType(ret.name), type = _a.type, crossError = _a.crossError, verticalError = _a.verticalError;
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
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleSpin = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleRotate = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.type === 'string') {
            /** @type {?} */
            var iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            var ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, "anticon-" + this.type);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, "anticon-" + this.type);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var type = changes.type, nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, twoToneColor = changes.twoToneColor, spin = changes.spin, nzSpin = changes.nzSpin, theme = changes.theme, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
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
                function (mutations) {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return mutation.attributeName === 'class'; }))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return _this.classChangeHandler(((/** @type {?} */ (mutation.target))).className); }));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = this.el.children;
        /** @type {?} */
        var length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                var child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i.anticon, [nz-icon]',
                    exportAs: 'nzIcon'
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: NzIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Platform }
    ]; };
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
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFNUMsVUFBVSxHQUFHLGNBQWM7O0lBRTNCLGdCQUFnQjs7OztBQUFHLFVBQUMsU0FBaUI7SUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO1NBQU07O1lBQ0MsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztZQUNoQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBdEUsQ0FBc0UsRUFBQztRQUMvRyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztLQUNwRTtBQUNILENBQUMsQ0FBQTs7O0lBRUssYUFBYTs7OztBQUFHLFVBQUMsT0FBZTs7UUFDOUIsR0FBRyxH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Z0NBQXNCOztJQXlFcEIsc0NBQWlDOztJQUNqQyxxQ0FBNkI7O0lBQzdCLG1DQUEwQjs7Ozs7SUFDMUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25EaXJlY3RpdmUsIFRoZW1lVHlwZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXInO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcbmltcG9ydCB7IE56SWNvblNlcnZpY2UgfSBmcm9tICcuL256LWljb24uc2VydmljZSc7XG5cbmNvbnN0IGljb25UeXBlUkUgPSAvXmFudGljb25cXC1cXHcvO1xuXG5jb25zdCBnZXRJY29uVHlwZUNsYXNzID0gKGNsYXNzTmFtZTogc3RyaW5nKTogeyBuYW1lOiBzdHJpbmc7IGluZGV4OiBudW1iZXIgfSB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICghY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjbGFzc0FyciA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XG4gICAgY29uc3QgaW5kZXggPSBjbGFzc0Fyci5maW5kSW5kZXgoY2xzID0+IGNscyAhPT0gJ2FudGljb24nICYmIGNscyAhPT0gJ2FudGljb24tc3BpbicgJiYgISFjbHMubWF0Y2goaWNvblR5cGVSRSkpO1xuICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyB1bmRlZmluZWQgOiB7IG5hbWU6IGNsYXNzQXJyW2luZGV4XSwgaW5kZXggfTtcbiAgfVxufTtcblxuY29uc3Qgbm9ybWFsaXplVHlwZSA9IChyYXdUeXBlOiBzdHJpbmcpOiB7IHR5cGU6IHN0cmluZzsgY3Jvc3NFcnJvcjogYm9vbGVhbjsgdmVydGljYWxFcnJvcjogYm9vbGVhbiB9ID0+IHtcbiAgY29uc3QgcmV0ID0geyB0eXBlOiByYXdUeXBlLCBjcm9zc0Vycm9yOiBmYWxzZSwgdmVydGljYWxFcnJvcjogZmFsc2UgfTtcbiAgcmV0LnR5cGUgPSByYXdUeXBlID8gcmF3VHlwZS5yZXBsYWNlKCdhbnRpY29uLScsICcnKSA6ICcnO1xuICBpZiAocmV0LnR5cGUuaW5jbHVkZXMoJ3ZlcnRpY2xlJykpIHtcbiAgICByZXQudHlwZSA9ICd1cCc7XG4gICAgcmV0LnZlcnRpY2FsRXJyb3IgPSB0cnVlO1xuICB9XG4gIGlmIChyZXQudHlwZS5zdGFydHNXaXRoKCdjcm9zcycpKSB7XG4gICAgcmV0LnR5cGUgPSAnY2xvc2UnO1xuICAgIHJldC5jcm9zc0Vycm9yID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmV0O1xufTtcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgdG8gcHJvdmlkZTpcbiAqXG4gKiAtIEljb25Gb250IHN1cHBvcnRcbiAqIC0gc3Bpbm5pbmdcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5XG4gKlxuICogQGJyZWFrLWNoYW5nZXNcbiAqXG4gKiAtIG9sZCBBUEkgY29tcGF0aWJpbGl0eSwgaWNvbiBjbGFzcyBuYW1lcyB3b3VsZCBub3QgYmUgc3VwcG9ydGVkLlxuICogLSBwcm9wZXJ0aWVzIHRoYXQgbm90IHN0YXJ0ZWQgd2l0aCBgbnpgLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdpLmFudGljb24sIFtuei1pY29uXScsXG4gIGV4cG9ydEFzOiAnbnpJY29uJ1xufSlcbmV4cG9ydCBjbGFzcyBOekljb25EaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIC8qKiBQcm9wZXJ0aWVzIHdpdGggYG56YCBwcmVmaXguICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBzZXQgbnpTcGluKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zcGluID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgbnpSb3RhdGU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHlwZSA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIHNldCBuelRoZW1lKHZhbHVlOiBUaGVtZVR5cGUpIHtcbiAgICB0aGlzLnRoZW1lID0gdmFsdWU7XG4gIH1cbiAgQElucHV0KCkgc2V0IG56VHdvdG9uZUNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHZhbHVlO1xuICB9XG4gIEBJbnB1dCgpIHNldCBuekljb25mb250KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmljb25mb250ID0gdmFsdWU7XG4gIH1cblxuICAvKiogQGRlcHJlY2F0ZWQgOC4wLjAgYXZvaWQgZXhwb3NpbmcgbG93IGxheWVyIEFQSS4gKi9cbiAgQElucHV0KCkgc3BpbiA9IGZhbHNlO1xuXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xuICBASW5wdXQoKSBpY29uZm9udDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCB0eXBlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhcnRzV2l0aCgnYW50aWNvbicpKSB7XG4gICAgICBjb25zdCByYXdDbGFzcyA9IGdldEljb25UeXBlQ2xhc3ModmFsdWUpO1xuICAgICAgY29uc3QgdHlwZSA9IHJhd0NsYXNzID8gbm9ybWFsaXplVHlwZShyYXdDbGFzcy5uYW1lKS50eXBlIDogJyc7XG4gICAgICBpZiAodHlwZSAmJiB0aGlzLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgdHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcbiAgcHJpdmF0ZSBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIF90eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0gb2xkQVBJXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZUljb24yKG9sZEFQSTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCFvbGRBUEkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NOYW1lKCk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XG4gICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnKTtcbiAgICAgIGlmICghb2xkQVBJICYmIHN2Zykge1xuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSb3RhdGUoc3ZnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyhjbGFzc05hbWUpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGNvbnN0IHsgdHlwZSwgY3Jvc3NFcnJvciwgdmVydGljYWxFcnJvciB9ID0gbm9ybWFsaXplVHlwZShyZXQubmFtZSk7XG4gICAgICBpZiAoY3Jvc3NFcnJvcikge1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ2Nyb3NzJyk7XG4gICAgICB9XG4gICAgICBpZiAodmVydGljYWxFcnJvcikge1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ3ZlcnRpY2FsJyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy50eXBlICE9PSB0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoYW5nZUljb24yKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3Bpbihzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVSb3RhdGUoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSb3RhdGUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHN2ZywgJ3N0eWxlJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25zdCBpY29uQ2xhc3NOYW1lQXJyID0gdGhpcy5lbC5jbGFzc05hbWUuc3BsaXQoL1xccy8pO1xuICAgICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyh0aGlzLmVsLmNsYXNzTmFtZSk7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIGljb25DbGFzc05hbWVBcnIuc3BsaWNlKHJldC5pbmRleCwgMSwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGljb25DbGFzc05hbWVBcnIuam9pbignICcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgYGFudGljb24tJHt0aGlzLnR5cGV9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRTVkdEYXRhKHN2ZzogU1ZHRWxlbWVudCB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycgJiYgc3ZnKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSxcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHtcbiAgICBzdXBlcihpY29uU2VydmljZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgdHlwZSwgbnpUeXBlLCBuelR3b3RvbmVDb2xvciwgdHdvVG9uZUNvbG9yLCBzcGluLCBuelNwaW4sIHRoZW1lLCBuelRoZW1lLCBuelJvdGF0ZSB9ID0gY2hhbmdlcztcblxuICAgIGlmICh0eXBlIHx8IG56VHlwZSB8fCBuelR3b3RvbmVDb2xvciB8fCB0d29Ub25lQ29sb3IgfHwgc3BpbiB8fCBuelNwaW4gfHwgdGhlbWUgfHwgbnpUaGVtZSkge1xuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xuICAgIH0gZWxzZSBpZiAobnpSb3RhdGUpIHtcbiAgICAgIHRoaXMuaGFuZGxlUm90YXRlKHRoaXMuZWwuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQodGhpcy5pY29uU2VydmljZS5jcmVhdGVJY29uZm9udEljb24oYCMke3RoaXMuaWNvbmZvbnR9YCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cbiAgICBpZiAoIXRoaXMudHlwZSAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XG4gICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ29sZCcpO1xuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cbiAgICAgIHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKHRoaXMuZWwuY2xhc3NOYW1lKTtcbiAgICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgICAvLyBBZGQgYGNsYXNzYCBtdXRhdGlvbiBvYnNlcnZlci5cbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgICAgICBtdXRhdGlvbnNcbiAgICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcbiAgICAgICAgICAgIC5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKChtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgYGNsYXNzTGlzdGAgZG9lcyBub3QgY29udGFpbiBgYW50aWNvbmAsIGFkZCBpdCBiZWZvcmUgb3RoZXIgY2xhc3MgbmFtZXMuXG4gICAgaWYgKCF0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBgYW50aWNvbiAke3RoaXMuZWwuY2xhc3NOYW1lfWAudHJpbSgpKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGFzc05hbWVPYnNlcnZlcikge1xuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIElmIGN1c3RvbSBjb250ZW50IGlzIHByb3ZpZGVkLCB0cnkgdG8gbm9ybWFsaXplIFNWRyBlbGVtZW50cy5cbiAgICovXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuZWwuY2hpbGRyZW47XG4gICAgbGV0IGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMudHlwZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2xlbmd0aF07XG4gICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgICAgdGhpcy5pY29uU2VydmljZS5ub3JtYWxpemVTdmdFbGVtZW50KGNoaWxkIGFzIFNWR0VsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=