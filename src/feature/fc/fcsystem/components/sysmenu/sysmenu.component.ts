/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 菜单管理
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:39
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sysmenu',
  templateUrl: './sysmenu.component.html',
  styles: [``]
})
export class SysmenuComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
