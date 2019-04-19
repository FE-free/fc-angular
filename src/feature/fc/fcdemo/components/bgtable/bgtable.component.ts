/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description:表格
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:29:17
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'bgtable',
  templateUrl: './bgtable.component.html',
  styles: [``]
})
export class BgtableComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
