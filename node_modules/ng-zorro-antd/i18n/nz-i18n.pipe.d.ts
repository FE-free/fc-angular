/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { PipeTransform } from '@angular/core';
import { NzI18nService } from './nz-i18n.service';
export declare class NzI18nPipe implements PipeTransform {
    private _locale;
    constructor(_locale: NzI18nService);
    transform(path: string, keyValue?: object): string;
}
