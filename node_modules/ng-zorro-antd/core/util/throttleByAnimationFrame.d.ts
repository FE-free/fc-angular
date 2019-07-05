/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export default function throttleByAnimationFrame(fn: any): (...args: any[]) => void;
export declare function throttleByAnimationFrameDecorator(): (target: any, key: string, descriptor: any) => {
    configurable: boolean;
    get(): any;
};
