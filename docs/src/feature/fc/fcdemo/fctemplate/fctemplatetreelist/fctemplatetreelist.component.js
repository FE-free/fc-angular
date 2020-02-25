/*
 * @Author: honghong
 * @Date: 2019-10-16 15:49:44
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 16:04:51
 * @Description:
 * @email: 3300536651@qq.com
 */
import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilService } from 'src/fccore/util/util.service';
let FctemplatetreelistComponent = class FctemplatetreelistComponent {
    constructor(router, activedRoute) {
        this.router = router;
        this.activedRoute = activedRoute;
        // 树的数据
        this.searchValue = '';
        this.defaultCheckedKeys = ['0-0-0'];
        this.defaultSelectedKeys = ['0-0-0'];
        this.defaultExpandedKeys = ['0-0', '0-0-0', '0-0-1'];
        this.nodes = [
            {
                title: '0-0',
                key: '0-0',
                expanded: true,
                children: [
                    {
                        title: '0-0-0',
                        key: '0-0-0',
                        children: [
                            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
                            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
                            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-1',
                        key: '0-0-1',
                        children: [
                            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
                            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
                            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
                        ]
                    },
                    {
                        title: '0-0-2',
                        key: '0-0-2',
                        isLeaf: true
                    }
                ]
            },
            {
                title: '0-1',
                key: '0-1',
                children: [
                    { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
                    { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
                    { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
                ]
            },
            {
                title: '0-2',
                key: '0-2',
                isLeaf: true
            }
        ];
        // 列表的数据
        this.listOfData = [];
    }
    ngOnInit() {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`
            });
        }
        this.tableScroll = UtilService.fixedTableHeader(300);
    }
    nzEvent(event) {
        console.log(event);
    }
    /**
    * 改变浏览器窗口大小
    * @param event
    */
    onResize(event) {
        this.tableScroll = UtilService.fixedTableHeader(300);
    }
};
tslib_1.__decorate([
    HostListener('window:resize', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], FctemplatetreelistComponent.prototype, "onResize", null);
FctemplatetreelistComponent = tslib_1.__decorate([
    Component({
        selector: 'fc-temp;atetreelist',
        templateUrl: './fctemplatetreelist.component.html',
        styles: [
            `
     .fc-templatetreelist {
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
     }
     .fc-templatetreelist-content {
        flex: 1;
        display: flex;
        flex-direction: row;
        padding: 10px;
        overflow: hidden;
     }
     .fc-left {
        width: 220px;
        margin-right: 10px;
        background-color: #fff;
        height: 100%;
        overflow: hidden;
     }
     .fc-left nz-tree {
         width: 100%;
         height: 100%;
         overflow: hidden;
     }
     :host ::ng-deep .fc-left .ant-tree {
         width: 100%;
         height: calc(100% -  62px);
         overflow: auto;
     }
     .fc-tree-search {
         padding: 5px;
     }
     .fc-right {
        flex: 1;
        background-color: #fff;
     }
    `
        ]
    }),
    tslib_1.__metadata("design:paramtypes", [Router, ActivatedRoute])
], FctemplatetreelistComponent);
export { FctemplatetreelistComponent };
//# sourceMappingURL=fctemplatetreelist.component.js.map