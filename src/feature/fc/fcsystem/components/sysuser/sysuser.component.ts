import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'sysuser',
  templateUrl: './sysuser.component.html',
  styles: [``]
})
export class SysuserComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
