/*
 * @Author: luohong
 * @Date: 2019-08-05 09:51:16
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-05 09:52:00
 * @Description: 
 * @email: 3300536651@qq.com
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'fcbutton',
  templateUrl: './fcbutton.component.html',
  styles: [``]
})
export class FcbuttonComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {

  }
}
