import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'bgtable',
  templateUrl: './bgtable.component.html',
  styles: [``]
})
export class BgtableComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
