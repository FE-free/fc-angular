import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-upload nzAction="https://jsonplaceholder.typicode.com/posts/">
      <button nz-button><i nz-icon nzType="upload"></i><span>Click to Upload</span></button>
    </nz-upload>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
