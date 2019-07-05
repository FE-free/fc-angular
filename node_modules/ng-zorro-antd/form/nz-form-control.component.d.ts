/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { FormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { NgClassType, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { NzColDirective, NzRowDirective } from 'ng-zorro-antd/grid';
import { NzFormItemComponent } from './nz-form-item.component';
export declare type NzFormControlStatusType = 'warning' | 'validating' | 'error' | 'success' | null;
export declare class NzFormControlComponent extends NzColDirective implements OnDestroy, OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    private nzFormItemComponent;
    private cdr;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    validateControl: FormControl | NgModel | null;
    status: NzFormControlStatusType;
    controlClassMap: NgClassType;
    iconType: string;
    defaultValidateControl: FormControlName | FormControlDirective;
    nzSuccessTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzWarningTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzErrorTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzValidatingTip: string | TemplateRef<{
        $implicit: FormControl | NgModel;
    }>;
    nzExtra: string | TemplateRef<void>;
    nzHasFeedback: boolean;
    nzValidateStatus: string | FormControl | FormControlName | NgModel;
    removeSubscribe(): void;
    watchControl(): void;
    validateControlStatus(status: string): boolean;
    setControlClassMap(): void;
    readonly hasTips: boolean;
    readonly showSuccessTip: boolean;
    readonly showWarningTip: boolean;
    readonly showErrorTip: boolean;
    readonly showValidatingTip: boolean;
    readonly showInnerTip: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, nzRowDirective: NzRowDirective, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
}
