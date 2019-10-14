/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 11:12:06
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, Input, AfterViewInit } from '@angular/core';
import DataSet from '@antv/data-set';
import * as G2 from '@antv/g2';
@Component({
    selector: 'fc-g2radar',
    templateUrl: './fcg2radar.component.html',
    styles: [``]
})
export class Fcg2radarComponent implements AfterViewInit {
    @Input()
    fcId: string;
    radarDv: any;
    // 雷达图
    chartRadar: any;
    // 数据
    @Input()
    fcData: fcRadarDataInterface[];
    constructor() {

    }
    ngAfterViewInit(): void {
        this.createRadarChart('chartRadar', this.fcData);
    }
    /**
     * @description: 绘制雷达图
     * @param {containerId}id
     * @param {data}数据
     */
    createRadarChart(containerId: string, data: any[]) {
        let _DataSet = new DataSet();
        let DataView = _DataSet.DataSet.DataView;
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
interface fcRadarDataInterface {
    item: string,
    a: number,
    b: number
}