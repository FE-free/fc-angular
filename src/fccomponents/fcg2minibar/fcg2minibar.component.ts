/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 14:35:23
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, Input, AfterViewInit } from '@angular/core';
import * as G2 from '@antv/g2';
@Component({
    selector: 'fc-g2minibar',
    templateUrl: './fcg2minibar.component.html',
    styles: [``]
})
export class Fcg2minibarComponent implements AfterViewInit {
    // id
    @Input()
    fcId: string;
    // 数据
    @Input()
    fcData: any;
    constructor() {

    }
    ngAfterViewInit(): void {
        this.createMiniBarChart(this.fcId, this.fcData);
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
}
