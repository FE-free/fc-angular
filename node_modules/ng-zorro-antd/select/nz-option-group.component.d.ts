/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { QueryList, TemplateRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export declare class NzOptionGroupComponent {
    isLabelString: boolean;
    label: string | TemplateRef<void>;
    listOfNzOptionComponent: QueryList<NzOptionComponent>;
    nzLabel: string | TemplateRef<void>;
}
