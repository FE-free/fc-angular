/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter } from '@angular/core';
import { NzCalendarI18nInterface } from 'ng-zorro-antd/i18n';
export declare class OkButtonComponent {
    locale: NzCalendarI18nInterface;
    okDisabled: boolean;
    readonly clickOk: EventEmitter<void>;
    prefixCls: string;
}
