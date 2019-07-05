/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
export declare class FakeViewportRuler {
    getViewportRect(): {
        left: number;
        top: number;
        width: number;
        height: number;
        bottom: number;
        right: number;
    };
    getViewportSize(): {
        width: number;
        height: number;
    };
    getViewportScrollPosition(): {
        top: number;
        left: number;
    };
}
