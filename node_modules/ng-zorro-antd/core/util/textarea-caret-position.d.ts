/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export declare const properties: string[];
export interface Coordinates {
    top: number;
    left: number;
    height: number;
}
export declare function getCaretCoordinates(element: HTMLInputElement | HTMLTextAreaElement, position: number, options?: {
    debug?: boolean;
}): Coordinates;
export declare function createDebugEle(element: HTMLInputElement | HTMLTextAreaElement, coordinates: Coordinates): void;
