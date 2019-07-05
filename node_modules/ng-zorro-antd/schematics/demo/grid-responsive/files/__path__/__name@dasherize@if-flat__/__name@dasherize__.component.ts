import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div nz-row>
      <div nz-col nzXs="2" nzSm="4" nzMd="6" nzLg="8" nzXl="10">
        Col
      </div>
      <div nz-col nzXs="20" nzSm="16" nzMd="12" nzLg="8" nzXl="4">
        Col
      </div>
      <div nz-col nzXs="2" nzSm="4" nzMd="6" nzLg="8" nzXl="10">
        Col
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
