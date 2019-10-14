/*
 * @Author: honghong
 * @Date: 2019-07-04 17:15:57
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 16:33:18
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sys-editpassword',
  templateUrl: './syseditpassword.component.html',
  styles: [``]
})
export class SyseditpasswordComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
