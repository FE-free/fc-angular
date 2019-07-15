/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 首页
 * @email: 3300536651@qq.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-07-11 17:29:54
 */
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import * as G2 from '@antv/g2'
@Component({
  selector: 'home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.less']
})
export class Home2Component implements OnInit, AfterViewInit {
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
  /**
   * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
   */
  ngOnInit(): void { }
  /**
   * 每当 Angular 初始化完组件视图及其子视图之后调用。
   */
  ngAfterViewInit(): void {
  }
}
