/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType } from 'ng-zorro-antd/core';
export declare class NzAlertComponent implements OnChanges {
    destroy: boolean;
    iconType: string;
    iconTheme: string;
    private isTypeSet;
    private isShowIconSet;
    nzCloseText: string | TemplateRef<void>;
    nzIconType: NgClassType;
    nzMessage: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    nzType: 'success' | 'info' | 'warning' | 'error';
    nzCloseable: boolean;
    nzShowIcon: boolean;
    nzBanner: boolean;
    readonly nzOnClose: EventEmitter<boolean>;
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateIconClassMap(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
