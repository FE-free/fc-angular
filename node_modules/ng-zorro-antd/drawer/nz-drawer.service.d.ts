/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { NzDrawerOptions, NzDrawerOptionsOfComponent } from './nz-drawer-options';
import { NzDrawerRef } from './nz-drawer-ref';
export declare class DrawerBuilderForService<R> {
    private overlay;
    private options;
    private drawerRef;
    private overlayRef;
    private unsubscribe$;
    constructor(overlay: Overlay, options: NzDrawerOptions);
    getInstance(): NzDrawerRef<R>;
    createDrawer(): void;
    updateOptions(options: NzDrawerOptionsOfComponent): void;
}
export declare class NzDrawerService {
    private overlay;
    constructor(overlay: Overlay);
    create<T = any, D = any, R = any>(options: NzDrawerOptions<T, D>): NzDrawerRef<R>;
}
