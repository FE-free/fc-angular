/*
 * @Author: luohong
 * @Date: 2019-08-21 09:57:09
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-21 17:52:36
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'fc-ckeeditor',
    templateUrl: './fcckeeditor.component.html',
    styleUrls: ['./fcckeeditor.component.less']
})
export class FcckeeditorComponent implements OnInit, AfterViewInit {
    ckeditorContent: string = '<p>Some html</p>';
    constructor(public router: Router, public activedRoute: ActivatedRoute) {
    }
    /**
     * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
     */
    ngOnInit() {
       
    }
    /**
     * 每当 Angular 初始化完组件视图及其子视图之后调用。
     */
    ngAfterViewInit(): void {

    }
    onChange($event: any): void {
        console.log("onChange");
    }
}
