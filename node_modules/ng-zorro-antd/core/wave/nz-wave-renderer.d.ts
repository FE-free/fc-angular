/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NgZone } from '@angular/core';
export declare class NzWaveRenderer {
    private triggerElement;
    private ngZone;
    private insertExtraNode;
    private waveTransitionDuration;
    private styleForPseudo;
    private extraNode;
    private lastTime;
    private platform;
    clickHandler: () => void;
    readonly waveAttributeName: string;
    constructor(triggerElement: HTMLElement, ngZone: NgZone, insertExtraNode: boolean);
    onClick: (event: MouseEvent) => void;
    bindTriggerEvent(): void;
    removeTriggerEvent(): void;
    removeStyleAndExtraNode(): void;
    destroy(): void;
    private fadeOutWave;
    private isValidColor;
    private isNotGrey;
    private getWaveColor;
    private runTimeoutOutsideZone;
}
