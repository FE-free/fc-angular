/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterContentInit, ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, TemplateRef } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
import { NzMenuDropdownService } from './nz-menu-dropdown.service';
export declare class NzDropDownButtonComponent extends NzDropDownComponent implements OnDestroy, AfterContentInit, OnChanges {
    noAnimation?: NzNoAnimationDirective | undefined;
    nzSize: string;
    nzType: string;
    nzIcon: string | TemplateRef<void>;
    readonly nzClick: EventEmitter<MouseEvent>;
    nzDropDownDirective: NzDropDownDirective;
    constructor(cdr: ChangeDetectorRef, nzMenuDropdownService: NzMenuDropdownService, noAnimation?: NzNoAnimationDirective | undefined);
    /** rewrite afterViewInit hook */
    ngAfterContentInit(): void;
}
