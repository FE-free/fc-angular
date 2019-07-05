/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { antIconConsolePrefix, printErr } from '../utils';
/**
 * @return {?}
 */
export function NameSpaceIsNotSpecifyError() {
    return new Error(antIconConsolePrefix + "Type should have a namespace. Try \"namespace:" + name + "\".");
}
/**
 * @param {?} icon
 * @return {?}
 */
export function IconNotFoundError(icon) {
    return new Error(antIconConsolePrefix + "the icon " + icon + " does not exist or is not registered.");
}
/**
 * @return {?}
 */
export function HttpModuleNotImport() {
    printErr("you need to import \"HttpClientModule\" to use dynamic importing");
    return null;
}
/**
 * @param {?} url
 * @return {?}
 */
export function UrlNotSafeError(url) {
    return new Error(antIconConsolePrefix + "The url \"" + url + "\" is unsafe.");
}
/**
 * @return {?}
 */
export function SVGTagNotFoundError() {
    return new Error(antIconConsolePrefix + "<svg> tag not found");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5lcnJvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvIiwic291cmNlcyI6WyJjb21wb25lbnQvaWNvbi5lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQUUxRCxNQUFNLFVBQVUsMEJBQTBCO0lBQ3hDLE9BQU8sSUFBSSxLQUFLLENBQUksb0JBQW9CLHNEQUFnRCxJQUFJLFFBQUksQ0FBQyxDQUFDO0FBQ3BHLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQVk7SUFDNUMsT0FBTyxJQUFJLEtBQUssQ0FBSSxvQkFBb0IsaUJBQVksSUFBSSwwQ0FBdUMsQ0FBQyxDQUFDO0FBQ25HLENBQUM7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CO0lBQ2pDLFFBQVEsQ0FBQyxrRUFBZ0UsQ0FBQyxDQUFDO0lBQzNFLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVc7SUFDekMsT0FBTyxJQUFJLEtBQUssQ0FBSSxvQkFBb0Isa0JBQVksR0FBRyxrQkFBYyxDQUFDLENBQUM7QUFDekUsQ0FBQzs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUI7SUFDakMsT0FBTyxJQUFJLEtBQUssQ0FBSSxvQkFBb0Isd0JBQXFCLENBQUMsQ0FBQztBQUNqRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW50SWNvbkNvbnNvbGVQcmVmaXgsIHByaW50RXJyIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gTmFtZVNwYWNlSXNOb3RTcGVjaWZ5RXJyb3IoKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IEVycm9yKGAke2FudEljb25Db25zb2xlUHJlZml4fVR5cGUgc2hvdWxkIGhhdmUgYSBuYW1lc3BhY2UuIFRyeSBcIm5hbWVzcGFjZToke25hbWV9XCIuYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJY29uTm90Rm91bmRFcnJvcihpY29uOiBzdHJpbmcpOiBFcnJvciB7XG4gIHJldHVybiBuZXcgRXJyb3IoYCR7YW50SWNvbkNvbnNvbGVQcmVmaXh9dGhlIGljb24gJHtpY29ufSBkb2VzIG5vdCBleGlzdCBvciBpcyBub3QgcmVnaXN0ZXJlZC5gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEh0dHBNb2R1bGVOb3RJbXBvcnQoKTogbnVsbCB7XG4gIHByaW50RXJyKGB5b3UgbmVlZCB0byBpbXBvcnQgXCJIdHRwQ2xpZW50TW9kdWxlXCIgdG8gdXNlIGR5bmFtaWMgaW1wb3J0aW5nYCk7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gVXJsTm90U2FmZUVycm9yKHVybDogc3RyaW5nKTogRXJyb3Ige1xuICByZXR1cm4gbmV3IEVycm9yKGAke2FudEljb25Db25zb2xlUHJlZml4fVRoZSB1cmwgXCIke3VybH1cIiBpcyB1bnNhZmUuYCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTVkdUYWdOb3RGb3VuZEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBFcnJvcihgJHthbnRJY29uQ29uc29sZVByZWZpeH08c3ZnPiB0YWcgbm90IGZvdW5kYCk7XG59XG4iXX0=