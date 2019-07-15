/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 删除
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-15 14:02:10
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'fcremove',
  templateUrl: './fcremove.component.html',
  styles: [``]
})
export class FcremoveComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
