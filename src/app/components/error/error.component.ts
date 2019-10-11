/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 错误
 * @email: 3300536651@qq.com
 * @Date: 2019-02-18 10:59:15
 * @LastEditTime: 2019-04-17 09:55:15
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styles: [`
  `]
})
export class ErrorComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
  }

}
