/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { ChangeDetectorRef, OnDestroy, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzDropdownService } from './nz-dropdown.service';
export declare class NzDropdownContextComponent implements OnDestroy {
    private cdr;
    open: boolean;
    templateRef: TemplateRef<void>;
    dropDownPosition: 'top' | 'bottom';
    private control;
    private destroy$;
    init(open: boolean, templateRef: TemplateRef<void>, positionChanges: Observable<ConnectedOverlayPositionChange>, control: NzDropdownService): void;
    close(): void;
    afterAnimation(): void;
    constructor(cdr: ChangeDetectorRef);
    /** https://github.com/angular/angular/issues/14842 **/
    ngOnDestroy(): void;
}
