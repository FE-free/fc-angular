import { Component } from '@angular/core';

@Component({
  selector:'app-root',
  template:`<router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'angular-yyt';
  data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ];
}
