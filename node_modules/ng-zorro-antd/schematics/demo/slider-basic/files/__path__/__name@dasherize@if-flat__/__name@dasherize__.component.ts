import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-slider [(ngModel)]="value1" [nzDisabled]="disabled"></nz-slider>
    <nz-slider nzRange [(ngModel)]="value2" [nzDisabled]="disabled"></nz-slider>
    Disabled:
    <nz-switch nzSize="small" [(ngModel)]="disabled"></nz-switch>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
}
