import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-upload nzAction="https://jsonplaceholder.typicode.com/posts/" nzDirectory>
      <button nz-button><i nz-icon nzType="upload"></i> Upload Directory</button>
    </nz-upload>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
