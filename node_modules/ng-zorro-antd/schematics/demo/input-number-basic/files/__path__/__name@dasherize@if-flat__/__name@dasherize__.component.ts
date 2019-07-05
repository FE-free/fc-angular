import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="10" [nzStep]="1"></nz-input-number>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  demoValue = 3;
}
