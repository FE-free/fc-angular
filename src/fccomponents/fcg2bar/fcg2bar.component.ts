/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 10:21:48
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, Input, AfterViewInit, OnInit, AfterContentInit } from '@angular/core';
import * as G2 from '@antv/g2';
@Component({
    selector: 'fc-g2bar',
    templateUrl: './fcg2bar.component.html',
    styles: [`
    .fc-chart {
        width: 100%;
    }
    `]
})
export class Fcg2barComponent implements AfterViewInit {


    // id
    @Input()
    fcId: string;
    // 数据
    @Input()
    fcData: any;
    chartBar: any;
    constructor() {

    }
    // 初始化组件视图和子视图后调用，只调用一次 ， 可以进行dom操作
    ngAfterViewInit(): void {
        this.createChartBar(this.fcId, this.fcData);
        // 自适应宽度
        this.chartBar.forceFit()
    }
    createChartBar(id: string, data: any[]) {
        this.chartBar = new G2.Chart({
            container: id,
            forceFit: true,
            height: 300,
            padding: { top: 20, right: 20, bottom: 30, left: 30 }
        })
        this.chartBar.source(data);
        this.chartBar.scale('sales', {
            tickInterval: 20
        })
        this.chartBar.interval().position('year*sales')
        // 渲染柱状图
        this.chartBar.render()
    }
}
