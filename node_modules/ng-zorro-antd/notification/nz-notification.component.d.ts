/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef } from '@angular/core';
import { NzMessageComponent } from 'ng-zorro-antd/message';
import { NzNotificationContainerComponent } from './nz-notification-container.component';
import { NzNotificationDataFilled } from './nz-notification.definitions';
export declare class NzNotificationComponent extends NzMessageComponent {
    private container;
    protected cdr: ChangeDetectorRef;
    nzMessage: NzNotificationDataFilled;
    constructor(container: NzNotificationContainerComponent, cdr: ChangeDetectorRef);
    close(): void;
    readonly state: string | undefined;
}
