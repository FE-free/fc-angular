/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export declare type NzCascaderExpandTrigger = 'click' | 'hover';
export declare type NzCascaderTriggerType = 'click' | 'hover';
export declare type NzCascaderSize = 'small' | 'large' | 'default';
export declare type NzCascaderFilter = (searchValue: string, path: CascaderOption[]) => boolean;
export declare type NzCascaderSorter = (a: CascaderOption[], b: CascaderOption[], inputValue: string) => number;
export interface CascaderOption {
    value?: any;
    label?: string;
    title?: string;
    disabled?: boolean;
    loading?: boolean;
    isLeaf?: boolean;
    parent?: CascaderOption;
    children?: CascaderOption[];
    [key: string]: any;
}
export interface CascaderSearchOption extends CascaderOption {
    path: CascaderOption[];
}
export interface NzShowSearchOptions {
    filter?: NzCascaderFilter;
    sorter?: NzCascaderSorter;
}
export declare function isShowSearchObject(options: NzShowSearchOptions | boolean): options is NzShowSearchOptions;
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 */
export interface NzCascaderComponentAsSource {
    inputValue: string;
    nzShowSearch: NzShowSearchOptions | boolean;
    nzLabelProperty: string;
    nzValueProperty: string;
    nzChangeOnSelect: boolean;
    nzChangeOn?(option: CascaderOption, level: number): boolean;
    nzLoadData?(node: CascaderOption, index?: number): PromiseLike<any>;
}
