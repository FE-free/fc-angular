import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 11:12:06
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';
import DataSet from '@antv/data-set';
import * as G2 from '@antv/g2';
let Fcg2radarComponent = class Fcg2radarComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createRadarChart('chartRadar', this.fcData);
    }
    /**
     * @description: 绘制雷达图
     * @param {containerId}id
     * @param {data}数据
     */
    createRadarChart(containerId, data) {
        let _DataSet = new DataSet();
        let DataView = _DataSet.DataSet.DataView;
        this.radarDv = new DataView().source(data);
        this.radarDv.transform({
            type: 'fold',
            fields: ['a', 'b'],
            key: 'user',
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
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Fcg2radarComponent.prototype, "fcId", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], Fcg2radarComponent.prototype, "fcData", void 0);
Fcg2radarComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-g2radar',
        templateUrl: './fcg2radar.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Fcg2radarComponent);
export { Fcg2radarComponent };
//# sourceMappingURL=fcg2radar.component.js.map