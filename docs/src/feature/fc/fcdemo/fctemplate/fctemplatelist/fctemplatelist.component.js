/*
 * @Author: honghong
 * @Date: 2019-10-16 15:51:40
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 17:09:37
 * @Description:
 * @email: 3300536651@qq.com
 */
import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from 'src/fccore/util/util.service';
let FctemplatelistComponent = class FctemplatelistComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        this.listOfData = [];
        this.controlArray = [];
        this.isCollapse = true;
        this.searchObj = {
            name: '',
            age: '',
            address: ''
        };
    }
    ngOnInit() {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`
            });
        }
        this.tableScroll = UtilService.fixedTableHeader(240);
    }
    /**
     * 改变浏览器窗口大小
     * @param event
     */
    onResize(event) {
        this.tableScroll = UtilService.fixedTableHeader(310);
    }
};
tslib_1.__decorate([
    HostListener('window:resize', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FctemplatelistComponent.prototype, "onResize", null);
FctemplatelistComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-templatelist',
        templateUrl: './fctemplatelist.component.html',
        styles: [
            `
        .fc-templatelist {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
       
        .fc-searchbar-item {
            display: flex;
            flex-direction: row;
        }
        .fc-searchbar-label {
            width: 25%;
            text-align: right;
            padding-right: 10px;
            line-height: 32px;
        }
        .fc-searchbar-control {
            width: 75%;
        }
        .fc-templatelist-content {
            padding: 0 10px 10px;
            flex: 1;
            overflow: hidden;
        }
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], FctemplatelistComponent);
export { FctemplatelistComponent };
//# sourceMappingURL=fctemplatelist.component.js.map