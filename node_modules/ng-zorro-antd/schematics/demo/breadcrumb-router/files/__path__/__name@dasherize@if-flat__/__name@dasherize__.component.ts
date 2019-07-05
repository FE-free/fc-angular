import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-breadcrumb>
      <nz-breadcrumb-item>
        <a [routerLink]="['../../']">Home</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        Breadcrumb
      </nz-breadcrumb-item>
    </nz-breadcrumb>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
