/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { NzDropDownPosition, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzAutocompleteOptionComponent, NzOptionSelectionChange } from './nz-autocomplete-option.component';
export interface AutocompleteDataSourceItem {
    value: string;
    label: string;
}
export declare type AutocompleteDataSource = AutocompleteDataSourceItem[] | string[] | number[];
export declare class NzAutocompleteComponent implements AfterViewInit, OnDestroy {
    private changeDetectorRef;
    private ngZone;
    noAnimation?: NzNoAnimationDirective | undefined;
    nzWidth: number;
    nzOverlayClassName: string;
    nzOverlayStyle: {
        [key: string]: string;
    };
    nzDefaultActiveFirstOption: boolean;
    nzBackfill: boolean;
    nzDataSource: AutocompleteDataSource;
    readonly selectionChange: EventEmitter<NzAutocompleteOptionComponent>;
    showPanel: boolean;
    isOpen: boolean;
    activeItem: NzAutocompleteOptionComponent;
    dropDownPosition: NzDropDownPosition;
    /**
     * Options accessor, its source may be content or dataSource
     */
    readonly options: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by content */
    fromContentOptions: QueryList<NzAutocompleteOptionComponent>;
    /** Provided by dataSource */
    fromDataSourceOptions: QueryList<NzAutocompleteOptionComponent>;
    /** cdk-overlay */
    template: TemplateRef<{}>;
    panel: ElementRef;
    content: ElementRef;
    private activeItemIndex;
    private selectionChangeSubscription;
    private dataSourceChangeSubscription;
    /** Options changes listener */
    readonly optionSelectionChanges: Observable<NzOptionSelectionChange>;
    constructor(changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, noAnimation?: NzNoAnimationDirective | undefined);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setVisibility(): void;
    setActiveItem(index: number): void;
    setNextItemActive(): void;
    setPreviousItemActive(): void;
    getOptionIndex(option?: NzAutocompleteOptionComponent): number;
    private optionsInit;
    /**
     * Clear the status of options
     */
    private clearSelectedOptions;
    private subscribeOptionChanges;
}
