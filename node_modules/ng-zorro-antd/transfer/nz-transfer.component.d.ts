/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { TransferCanMove, TransferChange, TransferDirection, TransferItem, TransferSearchChange, TransferSelectChange } from './interface';
export declare class NzTransferComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    private nzUpdateHostClassService;
    private elementRef;
    private unsubscribe$;
    private lists;
    locale: any;
    leftFilter: string;
    rightFilter: string;
    nzDisabled: boolean;
    nzDataSource: TransferItem[];
    nzTitles: string[];
    nzOperations: string[];
    nzListStyle: object;
    nzShowSelectAll: boolean;
    nzItemUnit: string;
    nzItemsUnit: string;
    nzCanMove: (arg: TransferCanMove) => Observable<TransferItem[]>;
    nzRenderList: Array<TemplateRef<void> | null>;
    nzRender: TemplateRef<void>;
    nzFooter: TemplateRef<void>;
    nzShowSearch: boolean;
    nzFilterOption: (inputValue: string, item: TransferItem) => boolean;
    nzSearchPlaceholder: string;
    nzNotFoundContent: string;
    readonly nzChange: EventEmitter<TransferChange>;
    readonly nzSearchChange: EventEmitter<TransferSearchChange>;
    readonly nzSelectChange: EventEmitter<TransferSelectChange>;
    leftDataSource: TransferItem[];
    rightDataSource: TransferItem[];
    private splitDataSource;
    private getCheckedData;
    handleLeftSelectAll: (checked: boolean) => void;
    handleRightSelectAll: (checked: boolean) => void;
    handleLeftSelect: (item: TransferItem) => void;
    handleRightSelect: (item: TransferItem) => void;
    handleSelect(direction: TransferDirection, checked: boolean, item?: TransferItem): void;
    handleFilterChange(ret: {
        direction: TransferDirection;
        value: string;
    }): void;
    leftActive: boolean;
    rightActive: boolean;
    private updateOperationStatus;
    moveToLeft: () => void;
    moveToRight: () => void;
    moveTo(direction: TransferDirection): void;
    private truthMoveTo;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, renderer: Renderer2);
    private setClassMap;
    private markForCheckAllList;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
