/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 新增
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 11:03:18
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'fc-g2',
  templateUrl: './fcg2.component.html',
  styles: [``]
})
export class Fcg2Component {
  // 雷达图数据
  chartRadarData = [
    {
      item: 'Design',
      a: 70,
      b: 30
    }, {
      item: 'Development',
      a: 60,
      b: 70
    }, {
      item: 'Marketing',
      a: 50,
      b: 60
    }, {
      item: 'Users',
      a: 40,
      b: 50
    }, {
      item: 'Test',
      a: 60,
      b: 70
    }, {
      item: 'Language',
      a: 70,
      b: 50
    }, {
      item: 'Technology',
      a: 50,
      b: 40
    }, {
      item: 'Support',
      a: 30,
      b: 40
    }, {
      item: 'Sales',
      a: 60,
      b: 40
    }, {
      item: 'UX',
      a: 50,
      b: 60
    }];

  constructor(public router: Router, public activedRoute: ActivatedRoute) {

  }
}
