import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'bgitem',
  templateUrl: './bgitem.component.html',
  styles: [``]
})
export class BgitemComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
