/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Gets a RegExp used to detect an angular wrapped error message.
 * See https://github.com/angular/angular/issues/8348
 * @param {?} e
 * @return {?}
 */
export function wrappedErrorMessage(e) {
    /** @type {?} */
    var escapedMessage = e.message.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    return new RegExp(escapedMessage);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcHBlZC1lcnJvci1tZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy93cmFwcGVkLWVycm9yLW1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQSxNQUFNLFVBQVUsbUJBQW1CLENBQUMsQ0FBUTs7UUFDcEMsY0FBYyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLE1BQU0sQ0FBQztJQUN2RSxPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLyoqXG4gKiBHZXRzIGEgUmVnRXhwIHVzZWQgdG8gZGV0ZWN0IGFuIGFuZ3VsYXIgd3JhcHBlZCBlcnJvciBtZXNzYWdlLlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzgzNDhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZWRFcnJvck1lc3NhZ2UoZTogRXJyb3IpIHtcbiAgY29uc3QgZXNjYXBlZE1lc3NhZ2UgPSBlLm1lc3NhZ2UucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy5dL2csICdcXFxcJCYnKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoZXNjYXBlZE1lc3NhZ2UpO1xufVxuIl19