import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styles: [`
  
  `]
})
export class ErrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
