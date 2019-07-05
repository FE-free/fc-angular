/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType, NzSizeDSType } from 'ng-zorro-antd/core';
import { NzStepComponent } from './nz-step.component';
export declare type NzDirectionType = 'horizontal' | 'vertical';
export declare type NzStatusType = 'wait' | 'process' | 'finish' | 'error';
export declare class NzStepsComponent implements OnChanges, OnInit, OnDestroy, AfterContentInit {
    steps: QueryList<NzStepComponent>;
    nzCurrent: number;
    nzDirection: NzDirectionType;
    nzLabelPlacement: 'horizontal' | 'vertical';
    nzSize: NzSizeDSType;
    nzStartIndex: number;
    nzStatus: NzStatusType;
    nzProgressDot: boolean | TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    showProcessDot: boolean;
    customProcessDotTemplate: TemplateRef<{
        $implicit: TemplateRef<void>;
        status: string;
        index: number;
    }>;
    classMap: NgClassType;
    private destroy$;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private updateChildrenSteps;
    private setClassMap;
}
