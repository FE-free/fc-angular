import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <p nz-paragraph nzEditable [(nzContent)]="editStr"></p>
    <p nz-paragraph nzCopyable nzEditable [(nzContent)]="copyStr"></p>
    <p nz-paragraph nzCopyable nzCopyText="Hello, Ant Design!">Replace copy text.</p>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  editStr = 'This is an editable text.';
  copyStr = 'This is a copyable text.';
}
