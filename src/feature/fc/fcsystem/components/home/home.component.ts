/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 首页
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-18 14:43:45
 */
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import * as G2 from '@antv/g2'
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // 首页卡片样式
  homeBodyStyle = {
    background: '#fff'
  }
  // 柱状图
  chartBar: any
  // 柱状图的数据
  chartBarData: any
  // 迷你柱状图1的数据
  miniBarData_1 = [
    {
      index: 0,
      value: 74
    },
    {
      index: 1,
      value: 60
    },
    {
      index: 2,
      value: 50
    },
    {
      index: 3,
      value: 10
    },
    {
      index: 4,
      value: 30
    },
    {
      index: 5,
      value: 50
    },
    {
      index: 6,
      value: 35
    },
    {
      index: 7,
      value: 60
    },
    {
      index: 8,
      value: 90
    },
    {
      index: 9,
      value: 100
    }
  ]
  // 折线图
  chartLine: any
  // 折线图数据
  chartLineData = [
    {
      date: '2018/8/1',
      type: 'download',
      value: 4623
    },
    {
      date: '2018/8/1',
      type: 'register',
      value: 2208
    },
    {
      date: '2018/8/1',
      type: 'bill',
      value: 182
    },
    {
      date: '2018/8/2',
      type: 'download',
      value: 6145
    },
    {
      date: '2018/8/2',
      type: 'register',
      value: 2016
    },
    {
      date: '2018/8/2',
      type: 'bill',
      value: 257
    },
    {
      date: '2018/8/3',
      type: 'download',
      value: 508
    },
    {
      date: '2018/8/3',
      type: 'register',
      value: 2916
    },
    {
      date: '2018/8/3',
      type: 'bill',
      value: 289
    },
    {
      date: '2018/8/4',
      type: 'download',
      value: 6268
    },
    {
      date: '2018/8/4',
      type: 'register',
      value: 4512
    },
    {
      date: '2018/8/4',
      type: 'bill',
      value: 428
    },
    {
      date: '2018/8/5',
      type: 'download',
      value: 6411
    },
    {
      date: '2018/8/5',
      type: 'register',
      value: 8281
    },
    {
      date: '2018/8/5',
      type: 'bill',
      value: 619
    },
    {
      date: '2018/8/6',
      type: 'download',
      value: 1890
    },
    {
      date: '2018/8/6',
      type: 'register',
      value: 2008
    },
    {
      date: '2018/8/6',
      type: 'bill',
      value: 87
    },
    {
      date: '2018/8/7',
      type: 'download',
      value: 4251
    },
    {
      date: '2018/8/7',
      type: 'register',
      value: 1963
    },
    {
      date: '2018/8/7',
      type: 'bill',
      value: 706
    },
    {
      date: '2018/8/8',
      type: 'download',
      value: 2978
    },
    {
      date: '2018/8/8',
      type: 'register',
      value: 2367
    },
    {
      date: '2018/8/8',
      type: 'bill',
      value: 387
    },
    {
      date: '2018/8/9',
      type: 'download',
      value: 3880
    },
    {
      date: '2018/8/9',
      type: 'register',
      value: 2956
    },
    {
      date: '2018/8/9',
      type: 'bill',
      value: 488
    },
    {
      date: '2018/8/10',
      type: 'download',
      value: 3606
    },
    {
      date: '2018/8/10',
      type: 'register',
      value: 678
    },
    {
      date: '2018/8/10',
      type: 'bill',
      value: 507
    },
    {
      date: '2018/8/11',
      type: 'download',
      value: 4311
    },
    {
      date: '2018/8/11',
      type: 'register',
      value: 3188
    },
    {
      date: '2018/8/11',
      type: 'bill',
      value: 548
    },
    {
      date: '2018/8/12',
      type: 'download',
      value: 4116
    },
    {
      date: '2018/8/12',
      type: 'register',
      value: 3491
    },
    {
      date: '2018/8/12',
      type: 'bill',
      value: 456
    },
    {
      date: '2018/8/13',
      type: 'download',
      value: 6419
    },
    {
      date: '2018/8/13',
      type: 'register',
      value: 2852
    },
    {
      date: '2018/8/13',
      type: 'bill',
      value: 689
    },
    {
      date: '2018/8/14',
      type: 'download',
      value: 1643
    },
    {
      date: '2018/8/14',
      type: 'register',
      value: 4788
    },
    {
      date: '2018/8/14',
      type: 'bill',
      value: 280
    },
    {
      date: '2018/8/15',
      type: 'download',
      value: 445
    },
    {
      date: '2018/8/15',
      type: 'register',
      value: 4319
    },
    {
      date: '2018/8/15',
      type: 'bill',
      value: 176
    }
  ]
  // 待办任务
  toDoTaks = [
    {
      title: ' 报表任务 1'
    },
    {
      title: '报表任务 2'
    },
    {
      title: '报表任务 3'
    },
    {
      title: '报表任务 4'
    }
  ];
  // 日历数据
  listDataMap = {
    eight: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' }
    ],
    ten: [
      { type: 'warning', content: 'This is warning event.' },
      { type: 'success', content: 'This is usual event.' },
      { type: 'error', content: 'This is error event.' }
    ],
    eleven: [
      { type: 'warning', content: 'This is warning event' },
      { type: 'success', content: 'This is very long usual event........' },
      { type: 'error', content: 'This is error event 1.' },
      { type: 'error', content: 'This is error event 2.' },
      { type: 'error', content: 'This is error event 3.' },
      { type: 'error', content: 'This is error event 4.' }
    ]
  };
  constructor(public router: Router, public activedRoute: ActivatedRoute) { }
  /**
   * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
   */
  ngOnInit(): void { }
  /**
   * 每当 Angular 初始化完组件视图及其子视图之后调用。
   */
  ngAfterViewInit(): void {
    // 加载柱状图的数据
    this.chartData()
    // 加载迷你柱状图1
    this.createMiniBarChart('miniBar_1', this.miniBarData_1)
    // 加载迷你柱状图2
    this.createMiniBarChart('miniBar_2', this.miniBarData_1)
    // 加载迷你柱状图3
    this.createMiniBarChart('miniBar_3', this.miniBarData_1)
    // 加载迷你柱状图4
    this.createMiniBarChart('miniBar_4', this.miniBarData_1)
  }
  /**
   * 柱状图的数据
   */
  chartData() {
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
    ]
    this.chartBar = new G2.Chart({
      container: 'chartBar',
      forceFit: true,
      height: 300,
      padding: { top: 20, right: 20, bottom: 30, left: 30 }
    })
    this.chartBar.source(this.chartBarData)
    this.chartBar.scale('sales', {
      tickInterval: 20
    })
    this.chartBar.interval().position('year*sales')
    // 渲染柱状图
    this.chartBar.render()
    // 渲染折线图
    this.createChartLine('chartLine', this.chartLineData)
  }

  /**
   * 迷你
   * @param containerId
   * @param data
   * @param sum
   */
  createMiniBarChart(containerId: string, data: any[], sum?: any) {
    let chart = new G2.Chart({
      container: containerId,
      forceFit: true,
      height: 35,
      padding: [36, 30, 30, 30]
    })
    chart.source(data)
    chart.legend(false)
    chart.axis(false)
    chart.tooltip({
      type: 'mini'
    })
    chart
      .interval()
      .position('index*value')
      .opacity(0.85)
      .color('#fff')
    // 渲染迷你柱状图
    chart.render()
  }
  /**
   * 创建多折线图
   * @param containerId
   * @param data
   */
  createChartLine(containerId: string, data: any[]) {
    this.chartLine = new G2.Chart({
      container: containerId,
      forceFit: true,
      height: 300,
      padding: [100, 20, 30, 45] // 上右下左
    })
    this.chartLine.source(data)
    this.chartLine.tooltip({
      follow: false,
      crosshairs: 'y',
      htmlContent: function htmlContent(title, items) {
        var alias = {
          download: '当日累计下载量',
          register: '当日累计注册量',
          bill: '当日累计成交量'
        }
        var html = '<div class="custom-tooltip">'
        for (var i = 0; i < items.length; i++) {
          var item = items[i]
          var color = item.color
          var name = alias[item.name]
          var value = item.value
          var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + color + '">'
          var domName = '<div class="custom-tooltip-item-name">' + name + '</div>'
          var domValue = '<div class="custom-tooltip-item-value">' + value + '</div>'
          var domTail = '</div>'
          html += domHead + domName + domValue + domTail
        }
        return html + '</div>'
      }
    })
    this.chartLine.axis('date', {
      label: {
        textStyle: {
          fill: '#aaaaaa'
        }
      }
    })
    this.chartLine.axis('value', {
      label: {
        textStyle: {
          fill: '#aaaaaa'
        },
        formatter: function formatter(text) {
          return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        }
      }
    })
    this.chartLine.legend(false)
    this.chartLine
      .line()
      .position('date*value')
      .color('type')
    this.chartLine.render()
    this.chartLine.showTooltip({
      x: 300 - 20,
      y: 100
    })
  }
  /**
   * @description: 日历
   * @param {type}
   * @return:
   */
  getMonthData(date: Date): number | null {
    if (date.getMonth() === 8) {
      return 1394;
    }
    return null;
  }
}
