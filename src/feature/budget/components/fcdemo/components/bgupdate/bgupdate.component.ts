import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'bgupdate',
  templateUrl: './bgupdate.component.html',
  styles: [
    `
    `
  ]
})
export class BgupdateComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
