/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 修改
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:29:30
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bgupdate',
  templateUrl: './bgupdate.component.html',
  styles: [
    `
    `
  ]
})
export class BgupdateComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
