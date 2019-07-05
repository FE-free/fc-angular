import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-time-picker [(ngModel)]="time" (ngModelChange)="log($event)"></nz-time-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  time: Date | null = null;

  log(time: Date): void {
    console.log(time && time.toTimeString());
  }
}
