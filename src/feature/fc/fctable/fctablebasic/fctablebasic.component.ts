/*
 * @Author: luohong
 * @Date: 2019-08-21 10:01:19
 * @LastEditors: luohong
 * @LastEditTime: 2019-08-23 15:57:41
 * @Description: 
 * @email: 3300536651@qq.com
 */

import { Component, OnInit, AfterViewInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
    selector: 'fc-tablebasic',
    templateUrl: './fctablebasic.component.html',
    styleUrls: ['./fctablebasic.component.less']
})
export class FctablebasicComponent implements OnInit, AfterViewInit {
    listOfData: any[] = [];
    constructor(public router: Router, public activedRoute: ActivatedRoute, private http: HttpClient) {
    }
    ngOnInit(): void {
        for (let i = 0; i < 100; i++) {
            this.listOfData.push({
              name: `Edward King ${i}`,
              age: 32,
              address: `London, Park Lane no. ${i}`
            });
          }
    }
    ngAfterViewInit(): void {
        
    }
}
