import * as tslib_1 from "tslib";
var CommonService_1;
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2020-02-25 19:55:19
 */
import { EventEmitter, Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { concat } from 'rxjs/operators';
let CommonService = CommonService_1 = class CommonService {
    /**
     * 发生事件
     * @param actCode 事件名称
     */
    static event(eventName, param) {
        this.eventEmit.emit({
            // tslint:disable-next-line: object-literal-shorthand
            eventName: eventName,
            // tslint:disable-next-line: object-literal-shorthand
            param: param
        });
    }
    /**
     * 订阅事件
     * @param 获取
     * @param 方法
     */
    static subscribe(actCode, func) {
        return this.eventEmit.subscribe(value => {
            if (value.eventName === actCode) {
                return func(value);
            }
            else {
                return func(null);
            }
        });
    }
    /**
     * 生成guid
     */
    static getGuid() {
        function S4() {
            return (((Math.random() + 1) * 0x10000) | 0).toString(16).substring(1);
        }
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    }
    static getUuid() {
        const s = [];
        const hexDigits = '0123456789abcdef';
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = '-';
        const uuid = s.join('');
        return uuid;
    }
    /**
     * 设置cookie
     * @param key 键 名称
     * @param value 值
     * @param t 时间(秒)
     */
    static addCookie(key, value, expiredays) {
        let oDate = new Date();
        oDate.setDate(oDate.getDate() + expiredays);
        document.cookie = key + '=' + value + '; expires=' + oDate.toDateString();
    }
    /**
     * 获取cookie
     * @param key
     */
    static getCookie(key) {
        let arr1 = document.cookie.split('; '); // 由于cookie是通过一个分号+空格的形式串联起来的，所以这里需要先按分号空格截断,变成[name=Jack,pwd=123456,age=22]数组类型；
        for (var i = 0; i < arr1.length; i++) {
            var arr2 = arr1[i].split('='); //通过=截断，把name=Jack截断成[name,Jack]数组；
            if (arr2[0] == key) {
                return decodeURI(arr2[1]);
            }
        }
    }
    /**
     *
     * @param key 名称
     * @param value 值
     * @param expiredays 时间（秒）
     */
    static setCookie(key, value, expiredays) {
        let exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = key + "=" + escape(value) +
            ((expiredays == null) ? "" : ";expires=" + exdate.toDateString());
    }
    /**
     * [removeCookie 移除cookie]
     */
    static removeCookie(key) {
        this.addCookie(key, '', -1); // 把cookie设置为过期
    }
    static base64encode(str) {
        let out, i, len;
        let c1, c2, c3;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            c1 = str.charCodeAt(i++) & 0xff;
            if (i == len) {
                out += CommonService_1.base64EncodeChars.charAt(c1 >> 2);
                out += CommonService_1.base64EncodeChars.charAt((c1 & 0x3) << 4);
                out += '==';
                break;
            }
            c2 = str.charCodeAt(i++);
            if (i == len) {
                out += CommonService_1.base64EncodeChars.charAt(c1 >> 2);
                out += CommonService_1.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
                out += CommonService_1.base64EncodeChars.charAt((c2 & 0xf) << 2);
                out += '=';
                break;
            }
            c3 = str.charCodeAt(i++);
            out += CommonService_1.base64EncodeChars.charAt(c1 >> 2);
            out += CommonService_1.base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xf0) >> 4));
            out += CommonService_1.base64EncodeChars.charAt(((c2 & 0xf) << 2) | ((c3 & 0xc0) >> 6));
            out += CommonService_1.base64EncodeChars.charAt(c3 & 0x3f);
        }
        return out;
    }
    static base64decode(str) {
        let c1, c2, c3, c4;
        let i, len, out;
        len = str.length;
        i = 0;
        out = '';
        while (i < len) {
            /* c1 */
            do {
                c1 = CommonService_1.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c1 == -1);
            if (c1 == -1)
                break;
            /* c2 */
            do {
                c2 = CommonService_1.base64DecodeChars[str.charCodeAt(i++) & 0xff];
            } while (i < len && c2 == -1);
            if (c2 == -1)
                break;
            out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
            /* c3 */
            do {
                c3 = str.charCodeAt(i++) & 0xff;
                if (c3 == 61)
                    return out;
                c3 = CommonService_1.base64DecodeChars[c3];
            } while (i < len && c3 == -1);
            if (c3 == -1)
                break;
            out += String.fromCharCode(((c2 & 0xf) << 4) | ((c3 & 0x3c) >> 2));
            /* c4 */
            do {
                c4 = str.charCodeAt(i++) & 0xff;
                if (c4 == 61)
                    return out;
                c4 = CommonService_1.base64DecodeChars[c4];
            } while (i < len && c4 == -1);
            if (c4 == -1)
                break;
            out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
        }
        return out;
    }
    /**
     * utf16转utf8
     * @param {Object} str
     * @param str
     */
    static utf16to8(str) {
        let out, i, len, c;
        out = '';
        len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            }
            else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
            else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    }
    /**
     * utf8转utf16
     */
    static utf8to16(str) {
        let out, i, len, c;
        let char2, char3;
        out = '';
        len = str.length;
        i = 0;
        while (i < len) {
            c = str.charCodeAt(i++);
            switch (c >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    // 0xxxxxxx
                    out += str.charAt(i - 1);
                    break;
                case 12:
                case 13:
                    // 110x xxxx 10xx xxxx
                    char2 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x1f) << 6) | (char2 & 0x3f));
                    break;
                case 14:
                    // 1110 xxxx10xx xxxx10xx xxxx
                    char2 = str.charCodeAt(i++);
                    char3 = str.charCodeAt(i++);
                    out += String.fromCharCode(((c & 0x0f) << 12) | ((char2 & 0x3f) << 6) | ((char3 & 0x3f) << 0));
                    break;
            }
        }
        return out;
    }
    /**
     * base64解密
     */
    static deCode64(str) {
        if (str == undefined) {
            return '';
        }
        return CommonService_1.utf8to16(CommonService_1.base64decode(str));
    }
    /**
     * 获取当前时间戳
     */
    static getMilliseconds() {
        return Date.now();
    }
    /**
     * 获取时间戳
     * @param date 当前时间
     */
    static getMillisecondsFromDate(date) {
        return new Date(date).valueOf();
    }
    /**
     * 秒数转时间
     * @param seconds 秒数
     */
    static getDateByMilliseconds(seconds) {
        return new Date(seconds);
    }
    /**
     * 获取当前时间秒数
     */
    static getTimestamp() {
        return CommonService_1.getMilliseconds() / 1000;
    }
    /**
     * 根据指定日期获取秒数
     * @param date 指定日期
     */
    static getTimestampFromDate(date) {
        return Date.parse(date) / 1000;
    }
    /**
     * 秒数转日期
     * @param seconds 秒数
     */
    static getDateByTimetamp(seconds) {
        return new Date(seconds * 1000);
    }
    /**
     * 获取当前年月
     * @param seg 分隔符 / -
     */
    static getYearMonth(seg) {
        if (seg === void 0) {
            seg = '-';
        }
        let myDate = new Date();
        let month = myDate.getMonth() + 1;
        if (month < 10) {
            return myDate.getFullYear() + seg + '0' + month;
        }
        else {
            return myDate.getFullYear() + seg + month;
        }
    }
    /**
     * 获取当前年月日
     * @param seg 分隔符
     */
    static getDate(seg) {
        if (seg === void 0) {
            seg = '-';
        }
        let myDate = new Date();
        let month = myDate.getMonth() + 1;
        let day = myDate.getDate();
        let value = '';
        if (month < 10) {
            value = myDate.getFullYear() + seg + '0' + month;
        }
        else {
            value = myDate.getFullYear() + seg + month;
        }
        if (day < 10) {
            value += seg + '0' + day;
        }
        else {
            value += seg + day;
        }
        return value;
    }
    /**
     * 时间格式化处理
     * @param 格式化字符串
     * @param 格式化日期格式化
     * */
    static dateFormat(date, fmt) {
        // let o = {
        //   'M+': date.getMonth() + 1,
        //   'd+': date.getDate(),
        //   'h+': date.getHours(),
        //   'm+': date.getMinutes(),
        //   's+': date.getSeconds(),
        //   'q+': Math.floor((date.getMonth() + 3) / 3),
        //   S: date.getMilliseconds() //毫秒
        // };
        // if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        // for (let k in o)
        //   if (new RegExp('(' + k + ')').test(fmt))
        //     fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
        // return fmt;
        let o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours() % 12 == 0 ? 12 : date.getHours() % 12,
            "H+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒         
        };
        let week = {
            "0": "/u65e5",
            "1": "/u4e00",
            "2": "/u4e8c",
            "3": "/u4e09",
            "4": "/u56db",
            "5": "/u4e94",
            "6": "/u516d"
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        if (/(E+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[date.getDay() + ""]);
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
    /**
     * 时间格式化处理
     * @param 格式化字符串
     * @param 格式化日期格式化
     * */
    static stringDateFormat(dateStr, fmt) {
        return CommonService_1.dateFormat(CommonService_1.stringToDate(dateStr), fmt);
    }
    /**
     * 时间戳格式化处理
     * @param 格式化
     * @param 时间戳
     * */
    static timestampFormat(timestamp, fmt) {
        return CommonService_1.dateFormat(new Date(timestamp), fmt);
    }
    /**
     * 字符串转时间（yyyy-MM-dd HH:mm:ss、yyyy/M/d HH:mm:ss、yyyyMMddHHmmss、yyyyMMddHHmm、yyyyMMdd）
     * result （分钟）
     */
    static stringToDate(fDate) {
        if (!fDate) {
            return null;
        }
        let fullDate = fDate.split('-');
        if (fullDate.length > 1) {
            return new Date(Date.parse(fDate.replace(/-/g, '/')));
        }
        fullDate = fDate.split('/');
        if (fullDate.length > 1) {
            return new Date(Date.parse(fDate.replace(/\//g, '/')));
        }
        let year = '';
        let month = '';
        let day = '';
        if (fDate.length > 7) {
            year = fDate.substr(0, 4);
            month = fDate.substr(4, 2);
            day = fDate.substr(6, 2);
        }
        let hour = '';
        let min = '';
        if (fDate.length > 11) {
            hour = fDate.substr(8, 2);
            min = fDate.substr(10, 2);
        }
        let second = '';
        if (fDate.length > 13) {
            second = fDate.substr(12, 2);
        }
        if (fDate.length === 8)
            return new Date(Date.parse(year + '/' + month + '/' + day));
        if (fDate.length === 12)
            return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min));
        if (fDate.length === 14)
            return new Date(Date.parse(year + '/' + month + '/' + day + ' ' + hour + ':' + min + ':' + second));
    }
    /**
     * 数值格式化
     * @param num 数值
     * @param format 格式化
     */
    static numberFormat(num, format) {
        let numberal = window['numeral'](num);
        return numberal.format(format);
    }
    /**
     * 复制对象
     * @param obj 复制对象
     */
    static cloneObj(obj, exceptKey) {
        if (typeof obj === 'string') {
            return obj + '';
        }
        /** @type {?} */
        let datas = {};
        Object.keys(obj).forEach(
        /**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (exceptKey && exceptKey.length !== 0) {
                if (exceptKey !== key) {
                    datas[key] = obj[key];
                }
            }
            else {
                datas[key] = obj[key];
            }
        });
        return datas;
    }
    /**
     * 串行执行两个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    createObservableConcat(obs1, obs2) {
        return concat(obs1, obs1);
    }
    /**
     * 并行执行多个订阅任务
     * @param obs1 Observable
     * @param obs2 Observable
     */
    createObservableJoin(obs1) {
        let result = {};
        return forkJoin(obs1);
    }
    /**
     * 复制对象
     * @param obj 复制对象
     */
    static cloneArray(objs, exceptKey) {
        if (typeof objs === 'string') {
            return objs + '';
        }
        /** @type {?} */
        let datas = [];
        Object.keys(objs).forEach(
        /**
         * @param {?} key
         * @return {?}
         */
        key => {
            if (exceptKey && exceptKey.length !== 0) {
                if (exceptKey !== key) {
                    if (typeof objs === 'object') {
                        datas.push(this.cloneObj(objs[key], exceptKey));
                    }
                    else {
                        datas.push(objs[key]);
                    }
                }
            }
            else {
                datas.push(this.cloneObj(objs[key]));
            }
        });
        return datas;
    }
};
CommonService.eventEmit = new EventEmitter();
CommonService.base64EncodeChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
CommonService.base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
/**
 * 加密
 */
CommonService.enCode64 = function (str) {
    if (str == undefined) {
        return '';
    }
    return this.base64encode(this.utf16to8(str));
};
CommonService = CommonService_1 = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], CommonService);
export { CommonService };
//# sourceMappingURL=common.js.map