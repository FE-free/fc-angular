import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      Text
      <nz-divider nzType="vertical"></nz-divider>
      <a href="#">Link</a>
      <nz-divider nzType="vertical"></nz-divider>
      <a href="#">Link</a>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
