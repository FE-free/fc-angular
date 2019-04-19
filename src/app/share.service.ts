/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 单例服务，参考网址: https://angular.cn/guide/singleton-services
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 10:37:56
 */
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShareService {
  // 切换项目名称
  switchProjectSubject: Subject<{ eventName: string; param: any }> = new Subject<{ eventName: string; param: any }>();
}
