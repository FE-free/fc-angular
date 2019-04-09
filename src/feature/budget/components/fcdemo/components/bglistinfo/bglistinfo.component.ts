import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'bglistinfo',
  templateUrl: './bglistinfo.component.html',
  styles: [
    `
    .toolbar {
      
    }
    .toolbar button{
      margin-right: 10px;
    }
    `
  ]
})
export class BglistinfoComponent {
  constructor( public router: Router,
    public activedRoute: ActivatedRoute) {
  }
}
