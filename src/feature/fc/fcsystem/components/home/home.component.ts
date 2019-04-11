import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: [
    `
    `
  ]
})
export class HomeComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
