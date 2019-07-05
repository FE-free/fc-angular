import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button nz-button nzType="primary" nzBlock>Primary</button>
    <button nz-button nzType="default" nzBlock>Default</button>
    <button nz-button nzType="dashed" nzBlock>Dashed</button>
    <button nz-button nzType="danger" nzBlock>Danger</button>
    <button nz-button nzType="link" nzBlock>Link</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [nz-button] {
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
