/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 锁屏
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 10:10:10
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'lockscreen',
  templateUrl: './lockscreen.component.html',
  styles: [`
  `]
})
export class LockscreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
