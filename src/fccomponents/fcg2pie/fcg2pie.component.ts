import { Component, AfterViewChecked, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as G2 from '@antv/g2';
import DataSet from '@antv/data-set';
@Component({
    selector: 'fcg2pie',
    templateUrl: './fcg2pie.component.html',
    styles: [``]
})
export class Fcg2pieComponent {
    @Input()
    fcId: string;
    constructor() {

    }
}
