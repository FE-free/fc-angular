/*
 * @Author: honghong
 * @LastEditors  : honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime : 2020-02-11 17:11:30
 */
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })
export class CommonService {
  static eventEmit: EventEmitter<any> = new EventEmitter();
  static base64encode: any;
  static utf16to8: any;
  static utf8to16: any;
  static base64decode: any;
  constructor() {}
  /**
   * 发生事件
   * @param actCode 事件名称
   */
  static event(eventName: string, param: any): void {
    this.eventEmit.emit({
      eventName: eventName,
      param: param
    });
  }
  /**
   * 订阅事件
   * @param 获取
   * @param 方法
   */
  static subscribe(actCode: string, func: Function) {
    return this.eventEmit.subscribe(function(value) {
      if (value.eventName === actCode) {
        return func(value);
      } else {
        return func(null);
      }
    });
  }
  /**
   * 生成guid
   */
  static getGuid() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      S4() +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      '-' +
      S4() +
      S4() +
      S4()
    );
  }
  static getUuid() {
    let s = [];
    let hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
    s[8] = s[13] = s[18] = s[23] = '-';

    let uuid = s.join('');
    return uuid;
  }
}
