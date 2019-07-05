/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterContentInit, ChangeDetectorRef, EventEmitter, Injector, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NzMenuBaseService, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
export declare type NzPlacement = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare function menuServiceFactory(injector: Injector): NzMenuBaseService;
export declare class NzDropDownComponent implements OnDestroy, AfterContentInit, OnChanges {
    protected cdr: ChangeDetectorRef;
    private nzMenuDropdownService;
    noAnimation?: NzNoAnimationDirective | undefined;
    triggerWidth: number;
    dropDownPosition: 'top' | 'center' | 'bottom';
    positions: ConnectionPositionPair[];
    visible$: Subject<boolean>;
    private destroy$;
    nzDropDownDirective: NzDropDownDirective;
    nzTrigger: 'click' | 'hover';
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzPlacement: NzPlacement;
    nzClickHide: boolean;
    nzDisabled: boolean;
    nzVisible: boolean;
    nzTableFilter: boolean;
    readonly nzVisibleChange: EventEmitter<boolean>;
    setVisibleStateWhen(visible: boolean, trigger?: 'click' | 'hover' | 'all'): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    startSubscribe(observable$: Observable<boolean>): void;
    updateDisabledState(): void;
    constructor(cdr: ChangeDetectorRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective | undefined);
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
