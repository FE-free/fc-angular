/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 报表任务
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-19 14:06:29
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'bgrptask',
  templateUrl: './bgrptask.component.html',
  styles: [``]
})
export class BgrptaskComponent {
  itemName = ''
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
