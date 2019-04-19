/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 权限管理
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:33:47
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'sysrole',
  templateUrl: './sysrole.component.html',
  styles: [``]
})
export class SysroleComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
