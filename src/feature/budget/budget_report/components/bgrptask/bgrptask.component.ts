import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'bgrptask',
  templateUrl: './bgrptask.component.html',
  styles: [``]
})
export class BgrptaskComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
