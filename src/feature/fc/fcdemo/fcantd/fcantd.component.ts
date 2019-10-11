/*
 * @Author: honghong
 * @Date: 2019-10-11 17:55:30
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-11 18:03:01
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fc-antd',
  templateUrl: './fcantd.component.html',
  styles: [
    `
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `
  ]
})
export class FcantdComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
