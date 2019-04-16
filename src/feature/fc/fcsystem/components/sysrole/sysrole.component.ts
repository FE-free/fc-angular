import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'sysrole',
  templateUrl: './sysrole.component.html',
  styles: [``]
})
export class SysroleComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
