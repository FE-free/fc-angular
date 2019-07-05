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
import { dispatchFakeEvent } from './dispatch-events';
/**
 * Focuses an input, sets its value and dispatches
 * the `input` event, simulating the user typing.
 * @param {?} value Value to be set on the input.
 * @param {?} element Element onto which to set the value.
 * @return {?}
 */
export function typeInElement(value, element) {
    element.focus();
    element.value = value;
    dispatchFakeEvent(element, 'input');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1pbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy90eXBlLWluLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFRdEQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFhLEVBQUUsT0FBK0M7SUFDMUYsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGRpc3BhdGNoRmFrZUV2ZW50IH0gZnJvbSAnLi9kaXNwYXRjaC1ldmVudHMnO1xuXG4vKipcbiAqIEZvY3VzZXMgYW4gaW5wdXQsIHNldHMgaXRzIHZhbHVlIGFuZCBkaXNwYXRjaGVzXG4gKiB0aGUgYGlucHV0YCBldmVudCwgc2ltdWxhdGluZyB0aGUgdXNlciB0eXBpbmcuXG4gKiBAcGFyYW0gdmFsdWUgVmFsdWUgdG8gYmUgc2V0IG9uIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSBlbGVtZW50IEVsZW1lbnQgb250byB3aGljaCB0byBzZXQgdGhlIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHlwZUluRWxlbWVudCh2YWx1ZTogc3RyaW5nLCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFRleHRBcmVhRWxlbWVudCk6IHZvaWQge1xuICBlbGVtZW50LmZvY3VzKCk7XG4gIGVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgZGlzcGF0Y2hGYWtlRXZlbnQoZWxlbWVudCwgJ2lucHV0Jyk7XG59XG4iXX0=