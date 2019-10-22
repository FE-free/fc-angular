/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 公共方法
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:42:53
 */
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })
export class CommonService {
  static eventEmit: EventEmitter<any> = new EventEmitter()
  static base64encode: any
  static utf16to8: any
  static utf8to16: any
  static base64decode: any
  constructor() { }
  /**
   * 发生事件
   * @param actCode 事件名称
   */
  static event(eventName: string, param: any): void {
    this.eventEmit.emit({
      eventName: eventName,
      param: param
    })
  }
  /**
   * 订阅事件
   * @param 获取
   * @param 方法
   */
  static subscribe(actCode: string, func: Function) {
    return this.eventEmit.subscribe(function (value) {
      if (value.eventName === actCode) {
        return func(value)
      } else {
        return func(null)
      }
    })
  }
}
