import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'sysmenu',
  templateUrl: './sysmenu.component.html',
  styles: [``]
})
export class SysmenuComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
