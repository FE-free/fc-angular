/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 日志管理
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:35:03
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'syslog',
  templateUrl: './syslog.component.html',
  styles: [``]
})
export class SyslogComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
