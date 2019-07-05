/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NzEmptyCustomContent } from './nz-empty-config';
export declare class NzEmptyService<T = any> {
    private defaultEmptyContent;
    userDefaultContent$: BehaviorSubject<string | Type<any> | TemplateRef<any> | undefined>;
    constructor(defaultEmptyContent: Type<T>);
    setDefaultContent(content?: NzEmptyCustomContent): void;
    resetDefault(): void;
}
