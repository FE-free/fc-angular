import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'bglistinfo',
  templateUrl: './bglistinfo.component.html',
  styles: [
    `
    `
  ]
})
export class BglistinfoComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
