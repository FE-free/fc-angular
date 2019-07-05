/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CascaderOption, CascaderSearchOption, NzCascaderComponentAsSource } from './nz-cascader-definitions';
/**
 * All data is stored and parsed in NzCascaderService.
 */
export declare class NzCascaderService implements OnDestroy {
    /** Activated options in each column. */
    activatedOptions: CascaderOption[];
    /** An array to store cascader items arranged in different layers. */
    columns: CascaderOption[][];
    /** If user has entered searching mode. */
    inSearchingMode: boolean;
    /** Selected options would be output to user. */
    selectedOptions: CascaderOption[];
    values: any[];
    readonly $loading: BehaviorSubject<boolean>;
    /**
     * Emit an event to notify cascader it needs to redraw because activated or
     * selected options are changed.
     */
    readonly $redraw: Subject<void>;
    /**
     * Emit an event when an option gets selected.
     * Emit true if a leaf options is selected.
     */
    readonly $optionSelected: Subject<{
        option: CascaderOption;
        index: number;
    } | null>;
    /**
     * Emit an event to notify cascader it needs to quit searching mode.
     * Only emit when user do select a searching option.
     */
    readonly $quitSearching: Subject<void>;
    /** To hold columns before entering searching mode. */
    private columnsSnapshot;
    /** To hold activated options before entering searching mode. */
    private activatedOptionsSnapshot;
    private cascaderComponent;
    /** Return cascader options in the first layer. */
    readonly nzOptions: CascaderOption[];
    ngOnDestroy(): void;
    /**
     * Make sure that value matches what is displayed in the dropdown.
     */
    syncOptions(first?: boolean): void;
    /**
     * Bind cascader component so this service could use inputs.
     */
    withComponent(cascaderComponent: NzCascaderComponentAsSource): void;
    /**
     * Reset all options. Rebuild searching options if in searching mode.
     */
    withOptions(options: CascaderOption[] | null): void;
    /**
     * Try to set a option as activated.
     * @param option Cascader option
     * @param columnIndex Of which column this option is in
     * @param select Select
     * @param loadingChildren Try to load children asynchronously.
     */
    setOptionActivated(option: CascaderOption, columnIndex: number, select?: boolean, loadingChildren?: boolean): void;
    /**
     * Set a searching option as activated, finishing up things.
     * @param option
     */
    setSearchOptionSelected(option: CascaderSearchOption): void;
    /**
     * Filter cascader options to reset `columns`.
     * @param searchValue The string user wants to search.
     */
    prepareSearchOptions(searchValue: string): void;
    /**
     * Toggle searching mode by UI. It deals with things not directly related to UI.
     * @param toSearching If this cascader is entering searching mode
     */
    toggleSearchingMode(toSearching: boolean): void;
    setOptionSelected(option: CascaderOption, index: number): void;
    /**
     * Clear selected options.
     */
    clear(): void;
    getOptionLabel(o: CascaderOption): string;
    getOptionValue(o: CascaderOption): any;
    /**
     * Try to insert options into a column.
     * @param options Options to insert
     * @param columnIndex Position
     */
    private setColumnData;
    /**
     * Set all ancestor options as activated.
     */
    private trackAncestorActivatedOptions;
    private dropBehindActivatedOptions;
    private dropBehindColumns;
    /**
     * Load children of an option asynchronously.
     */
    loadChildren(option: CascaderOption | any, // tslint:disable-line:no-any
    columnIndex: number, success?: VoidFunction, failure?: VoidFunction): void;
    private isLoaded;
    /**
     * Find a option that has a given value in a given column.
     */
    private findOptionWithValue;
    private prepareEmitValue;
}
