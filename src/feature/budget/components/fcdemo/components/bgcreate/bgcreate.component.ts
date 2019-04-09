import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'bgcreate',
  templateUrl: './bgcreate.component.html',
  styles: [
    `
    `
  ]
})
export class BgcreateComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
