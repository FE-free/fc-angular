/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: spread
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-16 10:43:11
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fcspread',
  templateUrl: './fcspread.component.html',
  styles: [
    `
      .fc-spread-content {
        width: 100%;
        height: 700px;
        padding: 10px;
      }
    `
  ]
})
export class FcspreadComponent {
  // spread
  spread: any;
  // spread 样式
  spreadStyle = {
    width: '100%',
    height: '100%'
  }
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
  /**
   * @description spreadJs 初始化
   * @param args
   */
  workbookInit(args) {
    this.spread = args.spread
  }
}
