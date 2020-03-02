import * as tslib_1 from "tslib";
/*
 * @Author: honghong
 * @Date: 2019-10-14 10:52:47
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 17:22:43
 * @Description:
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';
import * as G2 from '@antv/g2';
let Fcg2linerComponent = class Fcg2linerComponent {
    constructor() {
    }
    ngAfterViewInit() {
        this.createChartLine(this.fcId, this.fcData);
    }
    /**
       * 创建多折线图
       * @param containerId
       * @param data
       */
    createChartLine(containerId, data) {
        this.chartLine = new G2.Chart({
            container: containerId,
            forceFit: true,
            height: 300,
            padding: [100, 20, 30, 45] // 上右下左
        });
        this.chartLine.source(data);
        this.chartLine.tooltip({
            follow: false,
            crosshairs: 'y',
            htmlContent: function htmlContent(title, items) {
                var alias = {
                    download: '当日累计下载量',
                    register: '当日累计注册量',
                    bill: '当日累计成交量'
                };
                var html = '<div class="custom-tooltip">';
                for (var i = 0; i < items.length; i++) {
                    var item = items[i];
                    var color = item.color;
                    var name = alias[item.name];
                    var value = item.value;
                    var domHead = '<div class="custom-tooltip-item" style="border-left-color:' + color + '">';
                    var domName = '<div class="custom-tooltip-item-name">' + name + '</div>';
                    var domValue = '<div class="custom-tooltip-item-value">' + value + '</div>';
                    var domTail = '</div>';
                    html += domHead + domName + domValue + domTail;
                }
                return html + '</div>';
            }
        });
        this.chartLine.axis('date', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                }
            }
        });
        this.chartLine.axis('value', {
            label: {
                textStyle: {
                    fill: '#aaaaaa'
                },
                formatter: function formatter(text) {
                    return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
                }
            }
        });
        this.chartLine.legend(false);
        this.chartLine
            .line()
            .position('date*value')
            .color('type');
        this.chartLine.render();
        this.chartLine.showTooltip({
            x: 300 - 20,
            y: 100
        });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], Fcg2linerComponent.prototype, "fcId", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], Fcg2linerComponent.prototype, "fcData", void 0);
Fcg2linerComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-g2line',
        templateUrl: './fcg2line.component.html',
        styles: [`
    ::ng-deep  .custom-tooltip {
        width: 100% !important;
        height: 10% !important;
        position: absolute;
        top: 0px;
        left: 0px;
        box-shadow: none!important;
    }
    ::ng-deep  .custom-tooltip-item {
        width: 150px;
        height: 50px;
        position: relative;
        float: left;
        margin-left: 20px;
        border-left-style: solid;
        border-left-width: 5px;
    }
    ::ng-deep  .custom-tooltip-item:first-child {
         margin-left: 0
    }
    ::ng-deep  .custom-tooltip-item-name {
        width: 80%;
        height: 20px;
        position: absolute;
        top: 0px;
        left: 10px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
    }
    ::ng-deep  .custom-tooltip-item-value {
        width: 80%;
        height: 30px;
        position: absolute;
        bottom: 0px;
        left: 10px;
        color: #262626;
        font-size: 22px;
    }
    `]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], Fcg2linerComponent);
export { Fcg2linerComponent };
//# sourceMappingURL=fcg2line.component.js.map