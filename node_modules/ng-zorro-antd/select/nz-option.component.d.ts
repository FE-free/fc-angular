/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class NzOptionComponent implements OnChanges {
    changes: Subject<{}>;
    template: TemplateRef<void>;
    nzLabel: string;
    nzValue: any;
    nzDisabled: boolean;
    nzCustomContent: boolean;
    ngOnChanges(): void;
}
