/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 缓存服务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:41:24
 */
export class CacheService {
    static set(key, value) {
        if (value instanceof Object) {
            window.localStorage.setItem(key, JSON.stringify(value));
        }
        else {
            window.localStorage.setItem(key, value);
        }
    }
    ;
    static get(key, defaultValue) {
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
    }
    ;
    static clear() {
        window.localStorage.clear();
    }
    ;
    static clearByKey(key) {
        window.localStorage.removeItem(key);
    }
    ;
    static setS(key, value) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    ;
    static getS(key, defaultValue) {
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
    }
    ;
    static clearS() {
        window.sessionStorage.clear();
    }
    ;
    static clearSByKey(key) {
        window.sessionStorage.removeItem(key);
    }
    ;
    static objToString(obj) {
        let _this = this;
        if (obj && obj !== null) {
            if (typeof (obj) === 'string') {
                return obj;
            }
            if (typeof (obj) === 'object') {
                /** @type {?} */
                let rtn_1 = {};
                Object.keys(obj).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
                    /** @type {?} */
                    let value = obj[key];
                    if (typeof (value) === 'object') {
                        rtn_1[key] = _this.objToString(value);
                    }
                    else {
                        rtn_1[key] = value;
                    }
                }));
                return JSON.stringify(rtn_1);
            }
            if (typeof (obj) === 'number') {
                return obj + "";
            }
        }
        else {
            return "";
        }
    }
    ;
}
//# sourceMappingURL=cache.js.map