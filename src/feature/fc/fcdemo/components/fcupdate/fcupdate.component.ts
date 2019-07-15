/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 修改
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-15 13:08:14
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fcupdate',
  templateUrl: './fcupdate.component.html',
  styles: [
    `
    `
  ]
})
export class FcupdateComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
