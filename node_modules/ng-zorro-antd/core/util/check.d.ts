/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { IndexableObject } from '../types/indexable';
export declare function isNotNil(value: any): boolean;
export declare function isNil(value: any): value is null | undefined;
/**
 * Examine if two objects are shallowly equaled.
 */
export declare function shallowEqual(objA?: IndexableObject, objB?: IndexableObject): boolean;
export declare function isInteger(value: string | number): boolean;
export declare function isEmpty(element: HTMLElement): boolean;
export declare function filterNotEmptyNode(node: Node): Node | null;
export declare function isNonEmptyString(value: any): boolean;
export declare function isTemplateRef(value: any): boolean;
export declare function isComponent(value: any): boolean;
