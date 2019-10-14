/*
 * @Author: honghong
 * @Date: 2019-10-14 10:50:43
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 10:50:43
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as G2 from '@antv/g2';
import DataSet from '@antv/data-set';
@Component({
    selector: 'fcg2bar',
    templateUrl: './fcg2bar.component.html',
    styles: [``]
})
export class Fcg2pieComponent {
    @Input()
    fcId: string;
    constructor() {

    }
}
