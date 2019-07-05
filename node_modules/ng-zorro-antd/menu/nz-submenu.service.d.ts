/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BehaviorSubject, Subject } from 'rxjs';
import { NzDirectionVHIType } from 'ng-zorro-antd/core';
import { NzMenuService } from './nz-menu.service';
export declare class NzSubmenuService {
    private nzHostSubmenuService;
    nzMenuService: NzMenuService;
    disabled: boolean;
    mode: NzDirectionVHIType;
    mode$: import("rxjs").Observable<NzDirectionVHIType>;
    level: number;
    level$: BehaviorSubject<number>;
    subMenuOpen$: BehaviorSubject<boolean>;
    open$: BehaviorSubject<boolean>;
    mouseEnterLeave$: Subject<boolean>;
    menuOpen$: import("rxjs").Observable<boolean>;
    setOpenState(value: boolean): void;
    onMenuItemClick(): void;
    setLevel(value: number): void;
    setMouseEnterState(value: boolean): void;
    constructor(nzHostSubmenuService: NzSubmenuService, nzMenuService: NzMenuService);
}
