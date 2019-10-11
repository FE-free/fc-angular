/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 打印服务,上线环境自动关闭打印
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-17 11:43:44
 */
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { CommonService } from './common.service';
import { DaoService } from './dao.service';
@Injectable({
  providedIn: 'root'
})
export class LogService {
  moduleId: string
  resId: string
  constructor(private daoService: DaoService, private cacheService: CacheService) {
    this.moduleId = 'SYSTEM'
    this.resId = 'SYSLOG'
  }
  debug(msg: any): void {
    if (!this.daoService.FCCONFIG.production) {
      console.log(msg)
    }
  }
  info(msg: any): void {
    if (!this.daoService.FCCONFIG.production) {
      console.log(msg)
    }
  }
  error(msg: any): void {
    throw new Error(msg)
  }
  /**
   * 记录行为日志
   * @param moduleId 模块id
   * @param resId 资源id
   * @param act 操作编码
   * @param param 操作输入参数
   * @param result 结果
   * @param reason 原因
   */
  writeBehavior(
    moduleId: string,
    resId: string,
    act: string,
    param: any,
    result: string,
    reason?: string
  ): void {
    if (this.daoService.FCCONFIG.production) {
      this.write(moduleId, resId, LOGTYPE.BEHAVIOR, act, LOGLEVEL.INFO, param, result, reason ? reason : '')
    }
    this.info('App ' + act + ':' + result + ' ' + reason ? reason : '')
  }
  /**
   * 记录操作日志
   * @param moduleId 模块id
   * @param resId 资源id
   * @param act 操作编码
   * @param param 操作输入参数
   * @param result 结果
   * @param reason 原因
   */
  writeAction(
    moduleId: string,
    resId: string,
    act: string,
    param: any,
    result: string,
    reason?: string
  ): void {
    if (this.daoService.FCCONFIG.production) {
      this.write(moduleId, resId, LOGTYPE.ACTION, act, LOGLEVEL.INFO, param, result, reason ? reason : '')
    }
    this.info('App ' + act + ':' + result + ' ' + reason ? reason : '')
  }
  /**
   * 记录错误日志
   * @param moduleId 模块id
   * @param resId 资源id
   * @param act 操作编码
   * @param param 操作输入参数
   * @param result 结果
   * @param reason 原因
   */
  writeError(
    moduleId: string,
    resId: string,
    act: string,
    param: any,
    result: string,
    reason?: string
  ): void {
    if (this.daoService.FCCONFIG.production) {
      this.write(LOGTYPE.ERROR, moduleId, resId, act, LOGLEVEL.ERROR, param, result, reason ? reason : '')
    }
    this.error('App ' + act + ':' + result + ' ' + reason ? reason : '')
  }
  /**
   *
   * @param type 日志类型 操作日志：ACTION;错误日志：ERROR；行为日志：BEHAVIOR；
   * @param act 操作
   * @param level 级别
   * @param param 输入参数
   * @param result 结果
   * @param reason 原因
   */
  write(
    type: string,
    moduleId: string,
    resId: string,
    act: string,
    level: number,
    param: any,
    result: string,
    reason: string
  ): void {
    let userInfo = CacheService.getS('userinfo')
    let log = {
      LOGTIME: CommonService.getTimestamp(),
      SYSTEM: this.daoService.FCCONFIG.pid,
      USERID: userInfo ? userInfo.USERCODE : '',
      ACTION: act,
      MODULEID: moduleId,
      RESID: resId,
      LOGTYPE: type,
      LEVEL: level,
      PARAMS: JSON.stringify(param),
      RESULT: result,
      REASON: reason,
      CLIENTTYPE: 'CLIENT'
    }
    this.daoService
      .postFromLog(CommonService.getUrlBy(this.moduleId, this.resId, 'CREATE'), log)
      .subscribe(function() {})
  }
}
export declare const LOGLEVEL: {
  INFO: number
  WARM: number
  ERROR: number
}
export declare const LOGTYPE: {
  ACTION: string
  ERROR: string
  BEHAVIOR: string
}
