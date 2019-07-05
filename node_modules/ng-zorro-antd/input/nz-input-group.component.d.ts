/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, QueryList, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzInputDirective } from './nz-input.directive';
export declare class NzInputGroupComponent implements AfterContentInit {
    listOfNzInputDirective: QueryList<NzInputDirective>;
    private _size;
    nzAddOnBeforeIcon: NgClassType;
    nzAddOnAfterIcon: NgClassType;
    nzPrefixIcon: NgClassType;
    nzSuffixIcon: NgClassType;
    nzAddOnBefore: string | TemplateRef<void>;
    nzAddOnAfter: string | TemplateRef<void>;
    nzPrefix: string | TemplateRef<void>;
    nzSuffix: string | TemplateRef<void>;
    nzSearch: boolean;
    nzCompact: boolean;
    nzSize: NzSizeLDSType;
    readonly isLarge: boolean;
    readonly isSmall: boolean;
    readonly isAffix: boolean;
    readonly isAddOn: boolean;
    readonly isAffixWrapper: boolean;
    readonly isGroup: boolean;
    readonly isLargeGroup: boolean;
    readonly isLargeGroupWrapper: boolean;
    readonly isLargeAffix: boolean;
    readonly isLargeSearch: boolean;
    readonly isSmallGroup: boolean;
    readonly isSmallAffix: boolean;
    readonly isSmallGroupWrapper: boolean;
    readonly isSmallSearch: boolean;
    updateChildrenInputSize(): void;
    ngAfterContentInit(): void;
}
