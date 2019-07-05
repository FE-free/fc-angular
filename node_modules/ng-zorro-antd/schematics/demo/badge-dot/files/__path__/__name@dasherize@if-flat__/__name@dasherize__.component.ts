import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge nzDot><i nz-icon nzType="notification"></i></nz-badge>
    <nz-badge nzDot [nzShowDot]="false"><i nz-icon nzType="notification"></i></nz-badge>
    <nz-badge nzDot>
      <a>Link something</a>
    </nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-badge {
        margin-right: 20px;
      }

      [nz-icon] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        font-size: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
