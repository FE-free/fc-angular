/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: spread
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 14:42:16
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'fc-spreadbasic',
  templateUrl: './fcspreadbasic.component.html',
  styles: [
    `
      .fc-spread-content {
        width: 100%;
        height: 700px;
      }
    `
  ]
})
export class FcspreadbasicComponent {
  // spread
  spread: any;
  // spread 样式
  spreadStyle = {
    width: '100%',
    height: '100%'
  }
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
  /**
   * @description spreadJs 初始化
   * @param args
   */
  workbookInit(args) {
    this.spread = args.spread
  }
  
}
