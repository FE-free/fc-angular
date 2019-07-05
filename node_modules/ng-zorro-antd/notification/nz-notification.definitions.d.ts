/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NzMessageData, NzMessageDataOptions } from 'ng-zorro-antd/message';
export interface NzNotificationData extends NzMessageData {
    template?: TemplateRef<{}>;
    type?: 'success' | 'info' | 'warning' | 'error' | 'blank' | string;
    title?: string;
}
export interface NzNotificationDataOptions<T = {}> extends NzMessageDataOptions {
    nzKey?: string;
    nzStyle?: any;
    nzClass?: any;
    /** Anything user wants renderer into a template. */
    nzData?: T;
}
export interface NzNotificationDataFilled extends NzNotificationData {
    messageId: string;
    createdAt: Date;
    state?: 'enter' | 'leave';
    options?: NzNotificationDataOptions;
    onClose?: Subject<boolean>;
}
