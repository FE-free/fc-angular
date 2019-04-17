/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 消息详情
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:34:14
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sysmessagedetail',
  templateUrl: './sysmessagedetail.component.html',
  styles: [``]
})
export class SysmessagedetailComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
