import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 权限管理的业务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:36:33
 */
@Injectable()
export class SysuserBusiness {
  constructor(private http: HttpClient) { }

}
