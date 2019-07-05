/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Creates a browser MouseEvent with the specified options. */
export declare function createMouseEvent(type: string, x?: number, y?: number, button?: number): MouseEvent;
/** Creates a browser TouchEvent with the specified pointer coordinates. */
export declare function createTouchEvent(type: string, pageX?: number, pageY?: number): UIEvent;
/** Dispatches a keydown event from an element. */
export declare function createKeyboardEvent(type: string, keyCode: number, target?: Element, key?: string): KeyboardEvent;
/** Creates a fake event object with any desired event type. */
export declare function createFakeEvent(type: string, canBubble?: boolean, cancelable?: boolean): Event;
