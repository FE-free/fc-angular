import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="background: rgb(190, 200, 200);padding: 26px 16px 16px;">
      <button nz-button nzType="primary" nzGhost>Primary</button>
      <button nz-button nzType="default" nzGhost>Default</button>
      <button nz-button nzType="dashed" nzGhost>Dashed</button>
      <button nz-button nzType="danger" nzGhost>Danger</button>
      <button nz-button nzType="link" nzGhost>Link</button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
