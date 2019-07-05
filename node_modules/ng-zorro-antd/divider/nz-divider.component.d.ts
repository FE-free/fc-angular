/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ElementRef, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
export declare class NzDividerComponent implements OnChanges, OnInit {
    private elementRef;
    private nzUpdateHostClassService;
    nzText: string | TemplateRef<void>;
    nzType: 'horizontal' | 'vertical';
    nzOrientation: 'left' | 'right' | 'center';
    nzDashed: boolean;
    private setClass;
    constructor(elementRef: ElementRef, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnChanges(): void;
    ngOnInit(): void;
}
