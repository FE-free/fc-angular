import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <label nz-checkbox nzDisabled [ngModel]="false"></label>
    <br />
    <label nz-checkbox nzDisabled [ngModel]="true"></label>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
