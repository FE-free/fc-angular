import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:01
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 15:16:37
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';
import * as G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import * as $ from 'jquery';
let Fcg2pieComponent = class Fcg2pieComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createChartPie();
    }
    createChartPie() {
        let data = [{
                type: '评估中',
                percent: 0.23
            }, {
                type: '设计中',
                percent: 0.28
            }, {
                type: '正在开发',
                percent: 0.30
            }, {
                type: '已上线',
                percent: 0.19
            }];
        let sum = 500;
        let ds = new DataSet();
        let dv = ds.createView().source(data);
        dv.transform({
            type: 'map',
            callback: function callback(row) {
                let res = sum * row.percent + '';
                row.value = parseInt(res);
                return row;
            }
        });
        var chart = new G2.Chart({
            container: 'mountNode',
            forceFit: true,
            height: window.innerHeight,
            padding: 'auto'
        });
        chart.source(dv);
        chart.tooltip(false);
        chart.legend({
            position: 'right-center',
            offsetX: -100
        });
        chart.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6
        });
        chart.intervalStack().position('percent').color('type', ['#0a7aca', '#0a9afe', '#4cb9ff', '#8ed1ff']).opacity(1).label('percent', {
            offset: -18,
            textStyle: {
                fill: 'white',
                fontSize: 12,
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
            },
            rotate: 0,
            autoRotate: false,
            formatter: function formatter(text, item) {
                let res = item.point.percent * 100 + '';
                return String(parseInt(res)) + '%';
            }
        });
        chart.guide().html({
            position: ['50%', '50%'],
            html: '<div class="g2-guide-html"><p class="title">项目总计</p><p class="value">500</p></div>'
        });
        chart.on('interval:mouseenter', function (ev) {
            var data = ev.data._origin;
            $(".g2-guide-html").css('opacity', 1);
            $(".g2-guide-html .title").text(data.type);
            $(".g2-guide-html .value").text(data.value);
        });
        chart.on('interval:mouseleave', function () {
            $(".g2-guide-html .title").text('项目总计');
            $(".g2-guide-html .value").text(500);
        });
        chart.render();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Fcg2pieComponent.prototype, "fcId", void 0);
Fcg2pieComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-g2pie',
        templateUrl: './fcg2pie.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Fcg2pieComponent);
export { Fcg2pieComponent };
//# sourceMappingURL=fcg2pie.component.js.map