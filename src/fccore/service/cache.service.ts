/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 缓存服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:41:24
 */

export class CacheService {
    static set(key: string, value: any): void {
        if (value instanceof Object) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            window.localStorage.setItem(key, value);
        }
    };
    static get(key: string, defaultValue?: any): any {
        var v = window.localStorage.getItem(key);
        if (v === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(v);
            }
            catch (e) {
                return v;
            }
        }
    };
    static clear(): void{
        window.localStorage.clear();
    };
    static clearByKey(key: any): void{
        window.localStorage.removeItem(key);
    };
    static setS(key: string, value: any): void{
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };
    static getS(key: string, defaultValue?: any): any{
        var obj = window.sessionStorage.getItem(key);
        if (obj === null) {
            return defaultValue ? defaultValue : null;
        }
        else {
            try {
                return JSON.parse(obj);
            }
            catch (e) {
                return obj;
            }
        }
    };
    static clearS(): void{
        window.sessionStorage.clear();
    };
    static clearSByKey(key: any): void{
        window.sessionStorage.removeItem(key);
    };
    static objToString(obj: any): string{
        var _this = this;
        if (obj && obj !== null) {
            if (typeof (obj) === 'string') {
                return obj;
            }
            if (typeof (obj) === 'object') {
                var rtn_1 = {};
                Object.keys(obj).forEach(function (key) {
                    var value = obj[key];
                    if (typeof (value) === 'object') {
                        rtn_1[key] = _this.objToString(value);
                    }
                    else {
                        rtn_1[key] = value;
                    }
                });
                return JSON.stringify(rtn_1);
            }
            if (typeof (obj) === 'number') {
                return obj + "";
            }
        }
        else {
            return "";
        }
    };
}
