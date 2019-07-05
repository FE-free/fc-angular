/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import { NzDirectionVHType, NzSizeLDSType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { Observable } from 'rxjs';
import { NzListGrid } from './interface';
export declare class NzListComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private updateHostClassService;
    nzDataSource: any[];
    nzBordered: boolean;
    nzGrid: NzListGrid;
    nzHeader: string | TemplateRef<void>;
    nzFooter: string | TemplateRef<void>;
    nzItemLayout: NzDirectionVHType;
    nzRenderItem: TemplateRef<void>;
    nzLoading: boolean;
    nzLoadMore: TemplateRef<void>;
    nzPagination: TemplateRef<void>;
    nzSize: NzSizeLDSType;
    nzSplit: boolean;
    nzNoResult: string | TemplateRef<void>;
    private prefixCls;
    private _setClassMap;
    private itemLayoutNotifySource;
    readonly itemLayoutNotify$: Observable<NzDirectionVHType>;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
