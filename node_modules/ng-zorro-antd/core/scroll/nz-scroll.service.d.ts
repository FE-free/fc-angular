/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Provider } from '@angular/core';
export declare type EasyingFn = (t: number, b: number, c: number, d: number) => number;
export declare class NzScrollService {
    private doc;
    constructor(doc: any);
    /** Set the position of the scroll bar of `el`. */
    setScrollTop(el: Element | Window, topValue?: number): void;
    /** Get position of `el` against window. */
    getOffset(el: Element): {
        top: number;
        left: number;
    };
    /** Get the position of the scoll bar of `el`. */
    getScroll(el?: Element | Window, top?: boolean): number;
    /**
     * Scroll `el` to some position with animation.
     *
     * @param containerEl container, `window` by default
     * @param targetTopValue Scroll to `top`, 0 by default
     * @param easing Transition curve, `easeInOutCubic` by default
     * @param callback callback invoked when transition is done
     */
    scrollTo(containerEl: Element | Window, targetTopValue?: number, easing?: EasyingFn, callback?: () => void): void;
}
export declare function SCROLL_SERVICE_PROVIDER_FACTORY(doc: Document, scrollService: NzScrollService): NzScrollService;
export declare const SCROLL_SERVICE_PROVIDER: Provider;
