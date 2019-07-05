/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Utility to dispatch any event on a Node. */
export declare function dispatchEvent(node: Node | Window, event: Event): Event;
/** Shorthand to dispatch a fake event on a specified node. */
export declare function dispatchFakeEvent(node: Node | Window, type: string, canBubble?: boolean): Event;
/** Shorthand to dispatch a keyboard event with a specified key code. */
export declare function dispatchKeyboardEvent(node: Node, type: string, keyCode: number, target?: Element): KeyboardEvent;
/** Shorthand to dispatch a mouse event on the specified coordinates. */
export declare function dispatchMouseEvent(node: Node, type: string, x?: number, y?: number, event?: MouseEvent): MouseEvent;
/** Shorthand to dispatch a touch event on the specified coordinates. */
export declare function dispatchTouchEvent(node: Node, type: string, x?: number, y?: number): TouchEvent;
