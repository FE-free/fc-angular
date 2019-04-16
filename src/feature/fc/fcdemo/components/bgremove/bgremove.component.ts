import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'bgremove',
  templateUrl: './bgremove.component.html',
  styles: [``]
})
export class BgremoveComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
