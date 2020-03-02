import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @LastEditors: honghong
 * @Description: 新增
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-10-14 15:56:20
 */
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
let Fcg2Component = class Fcg2Component {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 雷达图数据
        this.chartRadarData = [
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
            }
        ];
        // 柱状图的数据
        this.chartBarData = [
            {
                year: '1 月',
                sales: 58
            },
            {
                year: '2 月',
                sales: 52
            },
            {
                year: '3 月',
                sales: 61
            },
            {
                year: '4 月',
                sales: 145
            },
            {
                year: '5 月',
                sales: 148
            },
            {
                year: '6 月',
                sales: 138
            },
            {
                year: '7 月',
                sales: 178
            },
            {
                year: '8 月',
                sales: 38
            },
            {
                year: '9 月',
                sales: 58
            },
            {
                year: '10 月',
                sales: 38
            },
            {
                year: '11 月',
                sales: 88
            },
            {
                year: '12 月',
                sales: 38
            }
        ];
    }
};
Fcg2Component = tslib_1.__decorate([
    Component({
        selector: 'fc-g2',
        templateUrl: './fcg2.component.html',
        styles: [`
  .fc-chart-card {
    margin-bottom : 20px;
  }
  .fc-chart-box {
    width: 80%;
  }
  .g2-guide-html {
    width: 100px;
    height: 80px;
    vertical-align: middle;
    text-align: center;
    line-height: 0.2;
  }
  .g2-guide-html .title {
      font-size: 12px;
      color: #8c8c8c;
      font-weight: 300;
  }
  .g2-guide-html .value {
      font-size: 32px;
      color: #000;
      font-weight: bold;
  }
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], Fcg2Component);
export { Fcg2Component };
//# sourceMappingURL=fcg2.component.js.map