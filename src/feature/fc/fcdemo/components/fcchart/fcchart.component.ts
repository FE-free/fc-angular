/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 新增
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-06-13 18:00:30
 */
import { Component, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as G2 from '@antv/g2';
import DataSet from '@antv/data-set';
@Component({
  selector: 'fcchart',
  templateUrl: './fcchart.component.html',
  styles: [``]
})
export class FcchartComponent implements AfterViewInit {

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
  radarDv: any;
  // 雷达图
  chartRadar: any;
  constructor(public router: Router, public activedRoute: ActivatedRoute) {

  }
  ngAfterViewInit(): void {
    this.createRadarChart('chartRadar', this.chartRadarData);
  }
  /**
   * @description: 绘制雷达图
   * @param {containerId}id
   * @param {data}数据
   */
  createRadarChart(containerId: string, data: any[]) {

    let _DataSet = new DataSet();
    // console.log(_DataSet,'_DataSet')
    let DataView = _DataSet.DataSet.DataView;
    console.dir(DataView)
    this.radarDv = new DataView().source(data);
    this.radarDv.transform({
      type: 'fold',
      fields: ['a', 'b'], // 展开字段集
      key: 'user', // key字段
      value: 'score' // value字段
    });
    this.chartRadar = new G2.Chart({
      container: containerId,
      forceFit: true,
      height: window.innerHeight,
      padding: [20, 20, 95, 20]
    });
    this.chartRadar.source(this.radarDv, {
      score: {
        min: 0,
        max: 80
      }
    });
    this.chartRadar.coord('polar', {
      radius: 0.8
    });
    this.chartRadar.axis('item', {
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null
        },
        hideFirstLine: false
      }
    });
    this.chartRadar.axis('score', {
      line: null,
      tickLine: null,
      grid: {
        type: 'polygon',
        lineStyle: {
          lineDash: null
        }
      }
    });
    this.chartRadar.legend('user', {
      marker: 'circle',
      offset: 30
    });
    this.chartRadar.line().position('item*score').color('user').size(2);
    this.chartRadar.point().position('item*score').color('user').shape('circle').size(4).style({
      stroke: '#fff',
      lineWidth: 1,
      fillOpacity: 1
    });
    this.chartRadar.area().position('item*score').color('user');
    this.chartRadar.render();
  }
}
