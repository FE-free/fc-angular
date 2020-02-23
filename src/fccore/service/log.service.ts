/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */
import { Injectable } from '@angular/core';
import { CacheService } from '../common/cache';
import { DaoService } from './dao.service';
import { environment } from 'src/environments/environment';
const isDev = !environment.production
@Injectable({
  providedIn: 'root'
})
export class LogService {
  constructor(private daoService: DaoService, private cacheService: CacheService) {

  }
  static debug(msg: any, describtion?: string): void {
    if (isDev) {
      console.log(msg, describtion)
    }
  }
  info(msg: any): void {
    if (isDev) {
      console.log(msg)
    }
  }
  error(msg: any): void {
    throw new Error(msg)
  }
}
