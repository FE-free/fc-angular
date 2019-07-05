/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { antIconConsolePrefix, printErr } from '../utils';
/**
 * @return {?}
 */
export function NameSpaceIsNotSpecifyError() {
    return new Error(`${antIconConsolePrefix}Type should have a namespace. Try "namespace:${name}".`);
}
/**
 * @param {?} icon
 * @return {?}
 */
export function IconNotFoundError(icon) {
    return new Error(`${antIconConsolePrefix}the icon ${icon} does not exist or is not registered.`);
}
/**
 * @return {?}
 */
export function HttpModuleNotImport() {
    printErr(`you need to import "HttpClientModule" to use dynamic importing`);
    return null;
}
/**
 * @param {?} url
 * @return {?}
 */
export function UrlNotSafeError(url) {
    return new Error(`${antIconConsolePrefix}The url "${url}" is unsafe.`);
}
/**
 * @return {?}
 */
export function SVGTagNotFoundError() {
    return new Error(`${antIconConsolePrefix}<svg> tag not found`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5lcnJvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjb21wb25lbnQvaWNvbi5lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQUUxRCxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxvQkFBb0IsZ0RBQWdELElBQUksSUFBSSxDQUFDLENBQUM7QUFDcEcsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBWTtJQUM1QyxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsb0JBQW9CLFlBQVksSUFBSSx1Q0FBdUMsQ0FBQyxDQUFDO0FBQ25HLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CO0lBQ2pDLFFBQVEsQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO0lBQzNFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVc7SUFDekMsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLG9CQUFvQixZQUFZLEdBQUcsY0FBYyxDQUFDLENBQUM7QUFDekUsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUI7SUFDakMsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLG9CQUFvQixxQkFBcUIsQ0FBQyxDQUFDO0FBQ2pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbnRJY29uQ29uc29sZVByZWZpeCwgcHJpbnRFcnIgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBOYW1lU3BhY2VJc05vdFNwZWNpZnlFcnJvcigpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoYCR7YW50SWNvbkNvbnNvbGVQcmVmaXh9VHlwZSBzaG91bGQgaGF2ZSBhIG5hbWVzcGFjZS4gVHJ5IFwibmFtZXNwYWNlOiR7bmFtZX1cIi5gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEljb25Ob3RGb3VuZEVycm9yKGljb246IHN0cmluZyk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihgJHthbnRJY29uQ29uc29sZVByZWZpeH10aGUgaWNvbiAke2ljb259IGRvZXMgbm90IGV4aXN0IG9yIGlzIG5vdCByZWdpc3RlcmVkLmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSHR0cE1vZHVsZU5vdEltcG9ydCgpOiBudWxsIHtcbiAgcHJpbnRFcnIoYHlvdSBuZWVkIHRvIGltcG9ydCBcIkh0dHBDbGllbnRNb2R1bGVcIiB0byB1c2UgZHluYW1pYyBpbXBvcnRpbmdgKTtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBVcmxOb3RTYWZlRXJyb3IodXJsOiBzdHJpbmcpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoYCR7YW50SWNvbkNvbnNvbGVQcmVmaXh9VGhlIHVybCBcIiR7dXJsfVwiIGlzIHVuc2FmZS5gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFNWR1RhZ05vdEZvdW5kRXJyb3IoKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IEVycm9yKGAke2FudEljb25Db25zb2xlUHJlZml4fTxzdmc+IHRhZyBub3QgZm91bmRgKTtcbn1cbiJdfQ==