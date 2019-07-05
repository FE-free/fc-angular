/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FunctionProp } from '../types/common-wrap';
export declare function toBoolean(value: boolean | string): boolean;
export declare function toNumber(value: number | string): number;
export declare function toNumber<D>(value: number | string, fallback: D): number | D;
export declare function toCssPixel(value: number | string): string;
/**
 * Get the function-property type's value
 */
export declare function valueFunctionProp<T>(prop: FunctionProp<T>, ...args: any[]): T;
/**
 * Input decorator that handle a prop to do get/set automatically with toBoolean
 *
 * Why not using @InputBoolean alone without @Input? AOT needs @Input to be visible
 *
 * @howToUse
 * ```
 * @Input() @InputBoolean() visible: boolean = false;
 *
 * // Act as below:
 * // @Input()
 * // get visible() { return this.__visible; }
 * // set visible(value) { this.__visible = value; }
 * // __visible = false;
 * ```
 */
export declare function InputBoolean(): any;
export declare function InputCssPixel(): any;
export declare function InputNumber(): any;
