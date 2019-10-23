/*
 * @Author: honghong
 * @Date: 2019-10-16 15:51:40
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 17:09:37
 * @Description: 
 * @email: 3300536651@qq.com
 */


import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { UtilService } from 'src/fccore/util/util.service';

@Component({
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
})
export class FctemplatelistComponent implements OnInit {
    listOfData: any[] = [];
    validateForm: FormGroup;
    controlArray: any[] = [];
    isCollapse = true;
    searchObj = {
        name: '',
        age: '',
        address: ''
    }
    // 固定表头
    tableScroll: Object;
    constructor(public router: Router, public activedRoute: ActivatedRoute) { }
    ngOnInit(): void {
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
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.tableScroll = UtilService.fixedTableHeader(310);
    }
}
