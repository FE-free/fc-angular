/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 删除
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:28:48
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'bgremove',
  templateUrl: './bgremove.component.html',
  styles: [``]
})
export class BgremoveComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
