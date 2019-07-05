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
import { Pipe } from '@angular/core';
var NzFilterOptionPipe = /** @class */ (function () {
    function NzFilterOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            function (o) { return filterOption(searchValue, o); }));
        }
    };
    NzFilterOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterOption' },] }
    ];
    return NzFilterOptionPipe;
}());
export { NzFilterOptionPipe };
var NzFilterGroupOptionPipe = /** @class */ (function () {
    function NzFilterGroupOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzFilterGroupOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            function (g) {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                function (o) { return filterOption(searchValue, o); }));
            }));
        }
    };
    NzFilterGroupOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
    ];
    return NzFilterGroupOptionPipe;
}());
export { NzFilterGroupOptionPipe };
/**
 * @param {?} searchValue
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(searchValue, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFNcEQ7SUFBQTtJQWNBLENBQUM7Ozs7Ozs7O0lBWkMsc0NBQVM7Ozs7Ozs7SUFBVCxVQUNFLE9BQTRCLEVBQzVCLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQzs7Z0JBYkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztJQWNoQyx5QkFBQztDQUFBLEFBZEQsSUFjQztTQWJZLGtCQUFrQjtBQWUvQjtJQUFBO0lBZ0JBLENBQUM7Ozs7Ozs7O0lBZEMsMkNBQVM7Ozs7Ozs7SUFBVCxVQUNFLE1BQWdDLEVBQ2hDLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxtQkFBQSxNQUFNLEVBQTRCLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBNUIsQ0FBNEIsRUFBQyxDQUFDO1lBQzNFLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFmRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUU7O0lBZ0JyQyw4QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBZlksdUJBQXVCOzs7Ozs7QUFpQnBDLE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxXQUFtQixFQUFFLE1BQXlCO0lBQ2hGLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUIsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUM3RTtTQUFNO1FBQ0wsT0FBTyxLQUFLLENBQUM7S0FDZDtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIFRGaWx0ZXJPcHRpb24gPSAoaW5wdXQ6IHN0cmluZywgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCkgPT4gYm9vbGVhbjtcblxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJPcHRpb24nIH0pXG5leHBvcnQgY2xhc3MgTnpGaWx0ZXJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICBvcHRpb25zOiBOek9wdGlvbkNvbXBvbmVudFtdLFxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmcsXG4gICAgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLFxuICAgIHNlcnZlclNlYXJjaDogYm9vbGVhblxuICApOiBOek9wdGlvbkNvbXBvbmVudFtdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAob3B0aW9ucyBhcyBOek9wdGlvbkNvbXBvbmVudFtdKS5maWx0ZXIobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcbiAgICB9XG4gIH1cbn1cblxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJHcm91cE9wdGlvbicgfSlcbmV4cG9ydCBjbGFzcyBOekZpbHRlckdyb3VwT3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oXG4gICAgZ3JvdXBzOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10sXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXG4gICk6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSB7XG4gICAgaWYgKHNlcnZlclNlYXJjaCB8fCAhc2VhcmNoVmFsdWUpIHtcbiAgICAgIHJldHVybiBncm91cHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoZ3JvdXBzIGFzIE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSkuZmlsdGVyKGcgPT4ge1xuICAgICAgICByZXR1cm4gZy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5zb21lKG8gPT4gZmlsdGVyT3B0aW9uKHNlYXJjaFZhbHVlLCBvKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRGaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWU6IHN0cmluZywgb3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCk6IGJvb2xlYW4ge1xuICBpZiAob3B0aW9uICYmIG9wdGlvbi5uekxhYmVsKSB7XG4gICAgcmV0dXJuIG9wdGlvbi5uekxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19