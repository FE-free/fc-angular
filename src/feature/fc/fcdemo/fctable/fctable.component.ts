/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description:表格
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:29:17
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'fctable',
  templateUrl: './fctable.component.html',
  styles: [``]
})
export class FctableComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
