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
export function dispatchMouseEvent(node, type, x = 0, y = 0, event = createMouseEvent(type, x, y)) {
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
export function dispatchTouchEvent(node, type, x = 0, y = 0) {
    return (/** @type {?} */ (dispatchEvent(node, createTouchEvent(type, x, y))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGF0Y2gtZXZlbnRzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jb3JlLyIsInNvdXJjZXMiOlsidGVzdGluZy9kaXNwYXRjaC1ldmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFHM0csTUFBTSxVQUFVLGFBQWEsQ0FBQyxJQUFtQixFQUFFLEtBQVk7SUFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQW1CLEVBQUUsSUFBWSxFQUFFLFNBQW1CO0lBQ3RGLE9BQU8sYUFBYSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFDL0QsQ0FBQzs7Ozs7Ozs7O0FBR0QsTUFBTSxVQUFVLHFCQUFxQixDQUFDLElBQVUsRUFBRSxJQUFZLEVBQUUsT0FBZSxFQUFFLE1BQWdCO0lBQy9GLE9BQU8sbUJBQUEsYUFBYSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQWlCLENBQUM7QUFDMUYsQ0FBQzs7Ozs7Ozs7OztBQUdELE1BQU0sVUFBVSxrQkFBa0IsQ0FDaEMsSUFBVSxFQUNWLElBQVksRUFDWixJQUFZLENBQUMsRUFDYixJQUFZLENBQUMsRUFDYixRQUFvQixnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVoRCxPQUFPLG1CQUFBLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQWMsQ0FBQztBQUNsRCxDQUFDOzs7Ozs7Ozs7QUFHRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBVSxFQUFFLElBQVksRUFBRSxJQUFZLENBQUMsRUFBRSxJQUFZLENBQUM7SUFDdkYsT0FBTyxtQkFBQSxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBYyxDQUFDO0FBQ3pFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHsgY3JlYXRlRmFrZUV2ZW50LCBjcmVhdGVLZXlib2FyZEV2ZW50LCBjcmVhdGVNb3VzZUV2ZW50LCBjcmVhdGVUb3VjaEV2ZW50IH0gZnJvbSAnLi9ldmVudC1vYmplY3RzJztcblxuLyoqIFV0aWxpdHkgdG8gZGlzcGF0Y2ggYW55IGV2ZW50IG9uIGEgTm9kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIGV2ZW50OiBFdmVudCk6IEV2ZW50IHtcbiAgbm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgcmV0dXJuIGV2ZW50O1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgZmFrZSBldmVudCBvbiBhIHNwZWNpZmllZCBub2RlLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoRmFrZUV2ZW50KG5vZGU6IE5vZGUgfCBXaW5kb3csIHR5cGU6IHN0cmluZywgY2FuQnViYmxlPzogYm9vbGVhbik6IEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlRmFrZUV2ZW50KHR5cGUsIGNhbkJ1YmJsZSkpO1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEga2V5Ym9hcmQgZXZlbnQgd2l0aCBhIHNwZWNpZmllZCBrZXkgY29kZS4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaEtleWJvYXJkRXZlbnQobm9kZTogTm9kZSwgdHlwZTogc3RyaW5nLCBrZXlDb2RlOiBudW1iZXIsIHRhcmdldD86IEVsZW1lbnQpOiBLZXlib2FyZEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlS2V5Ym9hcmRFdmVudCh0eXBlLCBrZXlDb2RlLCB0YXJnZXQpKSBhcyBLZXlib2FyZEV2ZW50O1xufVxuXG4vKiogU2hvcnRoYW5kIHRvIGRpc3BhdGNoIGEgbW91c2UgZXZlbnQgb24gdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaE1vdXNlRXZlbnQoXG4gIG5vZGU6IE5vZGUsXG4gIHR5cGU6IHN0cmluZyxcbiAgeDogbnVtYmVyID0gMCxcbiAgeTogbnVtYmVyID0gMCxcbiAgZXZlbnQ6IE1vdXNlRXZlbnQgPSBjcmVhdGVNb3VzZUV2ZW50KHR5cGUsIHgsIHkpXG4pOiBNb3VzZUV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgZXZlbnQpIGFzIE1vdXNlRXZlbnQ7XG59XG5cbi8qKiBTaG9ydGhhbmQgdG8gZGlzcGF0Y2ggYSB0b3VjaCBldmVudCBvbiB0aGUgc3BlY2lmaWVkIGNvb3JkaW5hdGVzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoVG91Y2hFdmVudChub2RlOiBOb2RlLCB0eXBlOiBzdHJpbmcsIHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApOiBUb3VjaEV2ZW50IHtcbiAgcmV0dXJuIGRpc3BhdGNoRXZlbnQobm9kZSwgY3JlYXRlVG91Y2hFdmVudCh0eXBlLCB4LCB5KSkgYXMgVG91Y2hFdmVudDtcbn1cbiJdfQ==