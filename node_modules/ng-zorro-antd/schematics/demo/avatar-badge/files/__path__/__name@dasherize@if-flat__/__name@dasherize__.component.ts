import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge [nzCount]="5" style="margin-right: 24px;">
      <nz-avatar nzIcon="user" [nzShape]="'square'"></nz-avatar>
    </nz-badge>
    <nz-badge nzDot>
      <nz-avatar nzIcon="user" [nzShape]="'square'"></nz-avatar>
    </nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
