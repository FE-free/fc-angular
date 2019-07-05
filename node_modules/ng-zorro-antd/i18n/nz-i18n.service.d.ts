/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Observable } from 'rxjs';
import { DateLocale, NzI18nInterface } from './nz-i18n.interface';
export declare class NzI18nService {
    private _locale;
    private _change;
    private dateLocale;
    readonly localeChange: Observable<NzI18nInterface>;
    constructor(locale: NzI18nInterface, dateLocale: DateLocale);
    translate(path: string, data?: any): string;
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param locale The translating letters
     */
    setLocale(locale: NzI18nInterface): void;
    getLocale(): NzI18nInterface;
    getLocaleId(): string;
    setDateLocale(dateLocale: DateLocale): void;
    getDateLocale(): DateLocale;
    /**
     * Get locale data
     * @param path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param defaultValue default value if the result is not "truthy"
     */
    getLocaleData(path?: string, defaultValue?: any): any;
    private _getObjectPath;
}
