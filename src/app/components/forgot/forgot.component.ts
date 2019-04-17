/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 忘记密码
 * @email: luo.hong@neusoft.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:51
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'forgot',
  templateUrl: './forgot.component.html',
  styles: [`
  `]
})
export class ForgotComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
