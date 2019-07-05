import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-spin nzSimple [nzSize]="'small'"></nz-spin>
    <nz-spin nzSimple></nz-spin>
    <nz-spin nzSimple [nzSize]="'large'"></nz-spin>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-spin {
        display: inline-block;
        margin-right: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
