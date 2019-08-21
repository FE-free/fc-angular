/*
 * @Author: luohong
 * @Date: 2019-08-21 10:01:21
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-21 14:16:24
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
    selector: 'templateform',
    templateUrl: './templateform.component.html',
    styleUrls: ['./templateform.component.less']
})
export class TemplateformComponent implements OnInit, AfterViewInit {
    constructor(public router: Router, public activedRoute: ActivatedRoute) { }
    /**
     * 初始化指令/组件,在第一轮 ngOnChanges() 完成之后调用，只调用一次
     */
    ngOnInit(): void { }
    /**
     * 每当 Angular 初始化完组件视图及其子视图之后调用。
     */
    ngAfterViewInit(): void {

    }
}
