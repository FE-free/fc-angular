import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'syslog',
  templateUrl: './syslog.component.html',
  styles: [``]
})
export class SyslogComponent {
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
}
