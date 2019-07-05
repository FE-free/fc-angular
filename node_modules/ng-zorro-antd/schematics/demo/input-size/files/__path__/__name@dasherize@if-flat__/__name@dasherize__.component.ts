import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <input nz-input placeholder="large size" nzSize="large" />
      <input nz-input placeholder="default size" nzSize="default" />
      <input nz-input placeholder="small size" nzSize="small" />
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .example-input .ant-input {
        width: 200px;
        margin: 0 8px 8px 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
