/*
 * @Author: luohong
 * @Date: 2019-08-21 10:01:19
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-23 13:58:21
 * @Description: 
 * @email: 3300536651@qq.com
 */

import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'fc-aggrid',
    templateUrl: './fcaggrid.component.html',
    styleUrls: ['./fcaggrid.component.less']
})
export class FcaggridComponent implements OnInit, AfterViewInit {
    constructor(public router: Router, public activedRoute: ActivatedRoute, private http: HttpClient) {
    }
    ngAfterViewInit(): void {
        throw new Error("Method not implemented.");
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
}
