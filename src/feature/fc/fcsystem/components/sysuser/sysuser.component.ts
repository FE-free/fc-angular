/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 用户管理
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:33:22
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'sysuser',
  templateUrl: './sysuser.component.html',
  styles: [``]
})
export class SysuserComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
