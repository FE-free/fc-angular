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
import { createFakeEvent, createKeyboardEvent, createMouseEvent, createTouchEvent } from './event-objects';
/**
 * Utility to dispatch any event on a Node.
 * @param {?} node
 * @param {?} event
 * @return {?}
 */
export function dispatchEvent(node, event) {
    node.dispatchEvent(event);
    return event;
}
/**
 * Shorthand to dispatch a fake event on a specified node.
 * @param {?} node
 * @param {?} type
 * @param {?=} canBubble
 * @return {?}
 */
export function dispatchFakeEvent(node, type, canBubble) {
    return dispatchEvent(node, createFakeEvent(type, canBubble));
}
/**
 * Shorthand to dispatch a keyboard event with a specified key code.
 * @param {?} node
 * @param {?} type
 * @param {?} keyCode
 * @param {?=} target
 * @return {?}
 */
export function dispatchKeyboardEvent(node, type, keyCode, target) {
    return (/** @type {?} */ (dispatchEvent(node, createKeyboardEvent(type, keyCode, target))));
}
/**
 * Shorthand to dispatch a mouse event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @param {?=} event
 * @return {?}
 */
export function dispatchMouseEvent(node, type, x, y, event) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (event === void 0) { event = createMouseEvent(type, x, y); }
    return (/** @type {?} */ (dispatchEvent(node, event)));
}
/**
 * Shorthand to dispatch a touch event on the specified coordinates.
 * @param {?} node
 * @param {?} type
 * @param {?=} x
 * @param {?=} y
 * @return {?}
 */
export function dispatchTouchEvent(node, type, x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return (/** @type {?} */ (dispatchEvent(node, createTouchEvent(type, x, y))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9kaXNwYXRjaC1ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFHM0csTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFtQixFQUFFLEtBQVk7SUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQW1CLEVBQUUsSUFBWSxFQUFFLFNBQW1CO0lBQ3RGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWdCO0lBQy9GLE9BQU8sbUJBQUEsYUFBYSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQWlCLENBQUM7QUFDMUYsQ0FBQzs7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsSUFBVSxFQUNWLElBQVksRUFDWixDQUFhLEVBQ2IsQ0FBYSxFQUNiLEtBQWdEO0lBRmhELGtCQUFBLEVBQUEsS0FBYTtJQUNiLGtCQUFBLEVBQUEsS0FBYTtJQUNiLHNCQUFBLEVBQUEsUUFBb0IsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFaEQsT0FBTyxtQkFBQSxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFjLENBQUM7QUFDbEQsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsQ0FBYSxFQUFFLENBQWE7SUFBNUIsa0JBQUEsRUFBQSxLQUFhO0lBQUUsa0JBQUEsRUFBQSxLQUFhO0lBQ3ZGLE9BQU8sbUJBQUEsYUFBYSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQWMsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IGNyZWF0ZUZha2VFdmVudCwgY3JlYXRlS2V5Ym9hcmRFdmVudCwgY3JlYXRlTW91c2VFdmVudCwgY3JlYXRlVG91Y2hFdmVudCB9IGZyb20gJy4vZXZlbnQtb2JqZWN0cyc7XG5cbi8qKiBVdGlsaXR5IHRvIGRpc3BhdGNoIGFueSBldmVudCBvbiBhIE5vZGUuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCBldmVudDogRXZlbnQpOiBFdmVudCB7XG4gIG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gIHJldHVybiBldmVudDtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGZha2UgZXZlbnQgb24gYSBzcGVjaWZpZWQgbm9kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEZha2VFdmVudChub2RlOiBOb2RlIHwgV2luZG93LCB0eXBlOiBzdHJpbmcsIGNhbkJ1YmJsZT86IGJvb2xlYW4pOiBFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZUZha2VFdmVudCh0eXBlLCBjYW5CdWJibGUpKTtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIGtleWJvYXJkIGV2ZW50IHdpdGggYSBzcGVjaWZpZWQga2V5IGNvZGUuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hLZXlib2FyZEV2ZW50KG5vZGU6IE5vZGUsIHR5cGU6IHN0cmluZywga2V5Q29kZTogbnVtYmVyLCB0YXJnZXQ/OiBFbGVtZW50KTogS2V5Ym9hcmRFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZUtleWJvYXJkRXZlbnQodHlwZSwga2V5Q29kZSwgdGFyZ2V0KSkgYXMgS2V5Ym9hcmRFdmVudDtcbn1cblxuLyoqIFNob3J0aGFuZCB0byBkaXNwYXRjaCBhIG1vdXNlIGV2ZW50IG9uIHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hNb3VzZUV2ZW50KFxuICBub2RlOiBOb2RlLFxuICB0eXBlOiBzdHJpbmcsXG4gIHg6IG51bWJlciA9IDAsXG4gIHk6IG51bWJlciA9IDAsXG4gIGV2ZW50OiBNb3VzZUV2ZW50ID0gY3JlYXRlTW91c2VFdmVudCh0eXBlLCB4LCB5KVxuKTogTW91c2VFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGV2ZW50KSBhcyBNb3VzZUV2ZW50O1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgdG91Y2ggZXZlbnQgb24gdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaFRvdWNoRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCB4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKTogVG91Y2hFdmVudCB7XG4gIHJldHVybiBkaXNwYXRjaEV2ZW50KG5vZGUsIGNyZWF0ZVRvdWNoRXZlbnQodHlwZSwgeCwgeSkpIGFzIFRvdWNoRXZlbnQ7XG59XG4iXX0=