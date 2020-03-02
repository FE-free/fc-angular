import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 14:35:23
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';
import * as G2 from '@antv/g2';
let Fcg2minibarComponent = class Fcg2minibarComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createMiniBarChart(this.fcId, this.fcData);
    }
    /**
   * 迷你
   * @param containerId
   * @param data
   * @param sum
   */
    createMiniBarChart(containerId, data, sum) {
        let chart = new G2.Chart({
            container: containerId,
            forceFit: true,
            height: 35,
            padding: [36, 30, 30, 30]
        });
        chart.source(data);
        chart.legend(false);
        chart.axis(false);
        chart.tooltip({
            type: 'mini'
        });
        chart
            .interval()
            .position('index*value')
            .opacity(0.85)
            .color('#fff');
        // 渲染迷你柱状图
        chart.render();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Fcg2minibarComponent.prototype, "fcId", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Fcg2minibarComponent.prototype, "fcData", void 0);
Fcg2minibarComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-g2minibar',
        templateUrl: './fcg2minibar.component.html',
        styles: [``]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Fcg2minibarComponent);
export { Fcg2minibarComponent };
//# sourceMappingURL=fcg2minibar.component.js.map