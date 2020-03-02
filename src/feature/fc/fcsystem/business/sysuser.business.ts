import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/*
 * @Author: honghong
 * @LastEditors  : Please set LastEditors
 * @Description: 权限管理的业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime : 2020-03-02 14:54:22
 */
@Injectable()
export class SysuserBusiness {
  constructor(private http: HttpClient) {}
}
export interface LoginValidationRule {
  AttemptNumber: number | 0;
  Locked: boolean | false;
  LockedTime: string | '';
}
