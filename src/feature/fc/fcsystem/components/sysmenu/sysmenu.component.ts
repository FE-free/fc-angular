/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 菜单管理
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:39
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sys-menu',
  templateUrl: './sysmenu.component.html',
  styles: [``]
})
export class SysmenuComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
