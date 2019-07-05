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
export class NzFilterOptionPipe {
    /**
     * @param {?} options
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return options;
        }
        else {
            return ((/** @type {?} */ (options))).filter((/**
             * @param {?} o
             * @return {?}
             */
            o => filterOption(searchValue, o)));
        }
    }
}
NzFilterOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOption' },] }
];
export class NzFilterGroupOptionPipe {
    /**
     * @param {?} groups
     * @param {?} searchValue
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, searchValue, filterOption, serverSearch) {
        if (serverSearch || !searchValue) {
            return groups;
        }
        else {
            return ((/** @type {?} */ (groups))).filter((/**
             * @param {?} g
             * @return {?}
             */
            g => {
                return g.listOfNzOptionComponent.some((/**
                 * @param {?} o
                 * @return {?}
                 */
                o => filterOption(searchValue, o)));
            }));
        }
    }
}
NzFilterGroupOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterGroupOption' },] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3NlbGVjdC8iLCJzb3VyY2VzIjpbIm56LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFPcEQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFDN0IsU0FBUyxDQUNQLE9BQTRCLEVBQzVCLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxPQUFPLENBQUMsbUJBQUEsT0FBTyxFQUF1QixDQUFDLENBQUMsTUFBTTs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDO1NBQ25GO0lBQ0gsQ0FBQzs7O1lBYkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztBQWlCaEMsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7SUFDbEMsU0FBUyxDQUNQLE1BQWdDLEVBQ2hDLFdBQW1CLEVBQ25CLFlBQTJCLEVBQzNCLFlBQXFCO1FBRXJCLElBQUksWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sQ0FBQyxtQkFBQSxNQUFNLEVBQTRCLENBQUMsQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUM7WUFDM0UsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQWZGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRTs7Ozs7OztBQWtCckMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLFdBQW1CLEVBQUUsTUFBeUI7SUFDaEYsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1QixPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzdFO1NBQU07UUFDTCxPQUFPLEtBQUssQ0FBQztLQUNkO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dDogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KSA9PiBib29sZWFuO1xuXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlck9wdGlvbicgfSlcbmV4cG9ydCBjbGFzcyBOekZpbHRlck9wdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKFxuICAgIG9wdGlvbnM6IE56T3B0aW9uQ29tcG9uZW50W10sXG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcbiAgICBmaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24sXG4gICAgc2VydmVyU2VhcmNoOiBib29sZWFuXG4gICk6IE56T3B0aW9uQ29tcG9uZW50W10ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIXNlYXJjaFZhbHVlKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIE56T3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZSwgbykpO1xuICAgIH1cbiAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICduekZpbHRlckdyb3VwT3B0aW9uJyB9KVxuZXhwb3J0IGNsYXNzIE56RmlsdGVyR3JvdXBPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShcbiAgICBncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSxcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxuICAgIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbixcbiAgICBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW5cbiAgKTogTnpPcHRpb25Hcm91cENvbXBvbmVudFtdIHtcbiAgICBpZiAoc2VydmVyU2VhcmNoIHx8ICFzZWFyY2hWYWx1ZSkge1xuICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChncm91cHMgYXMgTnpPcHRpb25Hcm91cENvbXBvbmVudFtdKS5maWx0ZXIoZyA9PiB7XG4gICAgICAgIHJldHVybiBnLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnNvbWUobyA9PiBmaWx0ZXJPcHRpb24oc2VhcmNoVmFsdWUsIG8pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdEZpbHRlck9wdGlvbihzZWFyY2hWYWx1ZTogc3RyaW5nLCBvcHRpb246IE56T3B0aW9uQ29tcG9uZW50KTogYm9vbGVhbiB7XG4gIGlmIChvcHRpb24gJiYgb3B0aW9uLm56TGFiZWwpIHtcbiAgICByZXR1cm4gb3B0aW9uLm56TGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=