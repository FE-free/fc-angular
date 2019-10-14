/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 消息详情
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:14
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sys-messagedetail',
  templateUrl: './sysmessagedetail.component.html',
  styles: [``]
})
export class SysmessagedetailComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
