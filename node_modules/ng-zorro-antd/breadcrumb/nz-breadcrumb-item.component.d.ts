/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
export declare class NzBreadCrumbItemComponent {
    nzBreadCrumbComponent: NzBreadCrumbComponent;
    /**
     * Dropdown content of a breadcrumb item.
     */
    nzOverlay?: NzDropdownMenuComponent;
    constructor(nzBreadCrumbComponent: NzBreadCrumbComponent);
}
