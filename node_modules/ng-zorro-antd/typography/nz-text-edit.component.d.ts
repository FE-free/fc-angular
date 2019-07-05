/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzAutosizeDirective } from 'ng-zorro-antd/input';
export declare class NzTextEditComponent implements OnInit, OnDestroy {
    private host;
    private cdr;
    private i18n;
    editing: boolean;
    locale: any;
    private destroy$;
    text: string;
    readonly startEditing: EventEmitter<void>;
    readonly endEditing: EventEmitter<string>;
    textarea: ElementRef<HTMLTextAreaElement>;
    autosizeDirective: NzAutosizeDirective;
    beforeText: string;
    currentText: string;
    nativeElement: any;
    constructor(host: ElementRef, cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onClick(): void;
    confirm(): void;
    onInput(event: Event): void;
    onEnter(event: KeyboardEvent): void;
    onCancel(): void;
    focusAndSetValue(): void;
}
