import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge [nzCount]="25"></nz-badge>
    <nz-badge
      [nzCount]="4"
      [nzStyle]="{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }"
    ></nz-badge>
    <nz-badge [nzCount]="109" [nzStyle]="{ backgroundColor: '#52c41a' }"></nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-badge {
        margin-right: 20px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
