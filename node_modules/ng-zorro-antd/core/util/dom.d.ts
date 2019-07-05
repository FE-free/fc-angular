/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * This module provides utility functions to query DOM information or
 * set properties.
 */
import { Observable } from 'rxjs';
/**
 * Silent an event by stopping and preventing it.
 */
export declare function silentEvent(e: Event): void;
export declare function getElementOffset(elem: HTMLElement): {
    top: number;
    left: number;
};
export declare function findFirstNotEmptyNode(element: HTMLElement): Node | null;
export declare function findLastNotEmptyNode(element: HTMLElement): Node | null;
export declare function reverseChildNodes(parent: HTMLElement): void;
/**
 * Investigate if an event is a `TouchEvent`.
 */
export declare function isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent;
export interface MouseTouchObserverConfig {
    end: string;
    move: string;
    pluckKey: string[];
    start: string;
    end$?: Observable<Event>;
    moveResolved$?: Observable<number>;
    startPlucked$?: Observable<number>;
    filter?(e: Event): boolean;
}
