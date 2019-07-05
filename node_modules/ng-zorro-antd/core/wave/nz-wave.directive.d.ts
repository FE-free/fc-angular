/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, InjectionToken, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NzWaveRenderer } from './nz-wave-renderer';
export interface NzWaveConfig {
    disabled?: boolean;
}
export declare const NZ_WAVE_GLOBAL_DEFAULT_CONFIG: NzWaveConfig;
export declare const NZ_WAVE_GLOBAL_CONFIG: InjectionToken<NzWaveConfig>;
export declare function NZ_WAVE_GLOBAL_CONFIG_FACTORY(): NzWaveConfig;
export declare class NzWaveDirective implements OnInit, OnDestroy {
    private ngZone;
    private elementRef;
    private config;
    private animationType;
    nzWaveExtraNode: boolean;
    private waveRenderer;
    private waveDisabled;
    readonly disabled: boolean;
    readonly rendererRef: NzWaveRenderer;
    constructor(ngZone: NgZone, elementRef: ElementRef, config: NzWaveConfig, animationType: string);
    isConfigDisabled(): boolean;
    ngOnDestroy(): void;
    ngOnInit(): void;
    renderWaveIfEnabled(): void;
    disable(): void;
    enable(): void;
}
