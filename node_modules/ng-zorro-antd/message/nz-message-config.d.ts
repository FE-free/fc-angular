/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { InjectionToken } from '@angular/core';
export interface NzMessageConfig {
    nzAnimate?: boolean;
    nzDuration?: number;
    nzMaxStack?: number;
    nzPauseOnHover?: boolean;
    nzTop?: number | string;
    [index: string]: any;
}
export declare const NZ_MESSAGE_DEFAULT_CONFIG: InjectionToken<NzMessageConfig>;
export declare const NZ_MESSAGE_CONFIG: InjectionToken<NzMessageConfig>;
export declare const NZ_MESSAGE_DEFAULT_CONFIG_PROVIDER: {
    provide: InjectionToken<NzMessageConfig>;
    useValue: {
        nzAnimate: boolean;
        nzDuration: number;
        nzMaxStack: number;
        nzPauseOnHover: boolean;
        nzTop: number;
    };
};
