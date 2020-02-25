import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 10:21:48
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';
import * as G2 from '@antv/g2';
let Fcg2barComponent = class Fcg2barComponent {
    constructor() {
    }
    // 初始化组件视图和子视图后调用，只调用一次 ， 可以进行dom操作
    ngAfterViewInit() {
        this.createChartBar(this.fcId, this.fcData);
        // 自适应宽度
        this.chartBar.forceFit();
    }
    createChartBar(id, data) {
        this.chartBar = new G2.Chart({
            container: id,
            forceFit: true,
            height: 300,
            padding: { top: 20, right: 20, bottom: 30, left: 30 }
        });
        this.chartBar.source(data);
        this.chartBar.scale('sales', {
            tickInterval: 20
        });
        this.chartBar.interval().position('year*sales');
        // 渲染柱状图
        this.chartBar.render();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Fcg2barComponent.prototype, "fcId", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], Fcg2barComponent.prototype, "fcData", void 0);
Fcg2barComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-g2bar',
        templateUrl: './fcg2bar.component.html',
        styles: [`
    .fc-chart {
        width: 100%;
    }
    `]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Fcg2barComponent);
export { Fcg2barComponent };
//# sourceMappingURL=fcg2bar.component.js.map