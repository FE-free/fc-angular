/*
 * @Author: luohong
 * @Date: 2019-08-21 09:57:09
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-22 14:29:16
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import DataSet from '@antv/data-set';
import * as G2 from '@antv/g2';

@Component({
    selector: 'fc-g2',
    templateUrl: './fcg2.component.html',
    styleUrls: ['./fcg2.component.less']
})
export class Fcg2Component implements AfterViewInit {
    // 雷达图
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
    chartRadar: any;
    // 基础环图
    chartDonutdata = [{
        item: '事例一',
        count: 40,
        percent: 0.4
    }, {
        item: '事例二',
        count: 21,
        percent: 0.21
    }, {
        item: '事例三',
        count: 17,
        percent: 0.17
    }, {
        item: '事例四',
        count: 13,
        percent: 0.13
    }, {
        item: '事例五',
        count: 9,
        percent: 0.09
    }];


    constructor(public router: Router, public activedRoute: ActivatedRoute) {

    }
    ngAfterViewInit(): void {
        this.createRadarChart('chartRadar', this.chartRadarData);
        this.createDonutChart('chartDonut', this.chartDonutdata);
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
    /**
     * 
     * @param containerId 绘制基础环图
     * @param data 
     */
    createDonutChart(containerId: string, data: any[]) {
        let chartDonut = new G2.Chart({
            container: containerId,
            forceFit: true,
            height: window.innerHeight,
            animate: false
        });
        chartDonut.source(data, {
            percent: {
                formatter: function formatter(val) {
                    val = val * 100 + '%';
                    return val;
                }
            }
        });
        chartDonut.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6
        });
        chartDonut.tooltip({
            showTitle: false,
            itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
        });
        // 辅助文本
        chartDonut.guide().html({
            position: ['50%', '50%'],
            html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
            alignX: 'middle',
            alignY: 'middle'
        });
        let interval = chartDonut.intervalStack().position('percent').color('item').label('percent', {
            formatter: function formatter(val, item) {
                return item.point.item + ': ' + val;
            }
        }).tooltip('item*percent', function (item, percent) {
            percent = percent * 100 + '%';
            return {
                name: item,
                value: percent
            };
        }).style({
            lineWidth: 1,
            stroke: '#fff'
        });
        chartDonut.render();
        console.dir(interval, 'interval')
        interval.select(data[0]);
    }

}
