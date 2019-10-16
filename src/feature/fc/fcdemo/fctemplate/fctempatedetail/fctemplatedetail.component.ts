/*
 * @Author: honghong
 * @Date: 2019-10-16 15:46:03
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-16 16:03:09
 * @Description: 
 * @email: 3300536651@qq.com
 */

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'fc-templatedetail',
    templateUrl: './fctemplatedetail.component.html',
    styles: [
        `
     
    `
    ]
})
export class FctemplatedetailComponent {
    constructor(public router: Router, public activedRoute: ActivatedRoute) { }
}
