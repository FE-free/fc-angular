/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ReplaySubject, Subject } from 'rxjs';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { TFilterOption } from './nz-option.pipe';
export declare class NzSelectService {
    autoClearSearchValue: boolean;
    serverSearch: boolean;
    filterOption: TFilterOption;
    mode: 'default' | 'multiple' | 'tags';
    maxMultipleCount: number;
    disabled: boolean;
    compareWith: (o1: any, o2: any) => boolean;
    private listOfSelectedValueWithEmit$;
    private mapOfTemplateOption$;
    private searchValueRaw$;
    private listOfFilteredOption;
    private openRaw$;
    private checkRaw$;
    private open;
    clearInput$: Subject<boolean>;
    searchValue: string;
    isShowNotFound: boolean;
    open$: import("rxjs").Observable<boolean>;
    activatedOption: NzOptionComponent | null;
    activatedOption$: ReplaySubject<NzOptionComponent | null>;
    listOfSelectedValue$: import("rxjs").Observable<any[]>;
    modelChange$: import("rxjs").Observable<any[] | null>;
    searchValue$: import("rxjs").Observable<string>;
    listOfSelectedValue: any[];
    listOfTemplateOption: NzOptionComponent[];
    listOfTagOption: NzOptionComponent[];
    listOfTagAndTemplateOption: NzOptionComponent[];
    listOfNzOptionComponent: NzOptionComponent[];
    listOfNzOptionGroupComponent: NzOptionGroupComponent[];
    addedTagOption: NzOptionComponent | null;
    listOfCachedSelectedOption: NzOptionComponent[];
    valueOrOption$: import("rxjs").Observable<[any[], {
        listOfNzOptionComponent: NzOptionComponent[];
        listOfNzOptionGroupComponent: NzOptionGroupComponent[];
    }]>;
    check$: import("rxjs").Observable<string | boolean | {} | any[] | NzOptionComponent | [any[], {
        listOfNzOptionComponent: NzOptionComponent[];
        listOfNzOptionGroupComponent: NzOptionGroupComponent[];
    }] | null>;
    clickOption(option: NzOptionComponent): void;
    updateListOfCachedOption(): void;
    updateListOfTagOption(): void;
    updateAddTagOption(): void;
    updateListOfFilteredOption(): void;
    clearInput(): void;
    updateListOfSelectedValue(value: any[], emit: boolean): void;
    updateActivatedOption(option: NzOptionComponent | null): void;
    tokenSeparate(inputValue: string, tokenSeparators: string[]): void;
    includesSeparators(str: string | string[], separators: string[]): boolean;
    splitBySeparators(str: string | string[], separators: string[]): string[];
    resetActivatedOptionIfNeeded(): void;
    updateTemplateOption(listOfNzOptionComponent: NzOptionComponent[], listOfNzOptionGroupComponent: NzOptionGroupComponent[]): void;
    updateSearchValue(value: string): void;
    updateSelectedValueByLabelList(listOfLabel: string[]): void;
    onKeyDown(e: KeyboardEvent): void;
    removeValueFormSelected(option: NzOptionComponent): void;
    setOpenState(value: boolean): void;
    check(): void;
    readonly isSingleMode: boolean;
    readonly isTagsMode: boolean;
    readonly isMultipleMode: boolean;
    readonly isMultipleOrTags: boolean;
}
