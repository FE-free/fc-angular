import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-progress [nzPercent]="75" nzType="circle" [nzWidth]="80"></nz-progress>
    <nz-progress [nzPercent]="70" nzType="circle" [nzWidth]="80" nzStatus="exception"></nz-progress>
    <nz-progress [nzPercent]="100" nzType="circle" [nzWidth]="80"></nz-progress>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-progress {
        margin-right: 8px;
        margin-bottom: 8px;
        display: inline-block;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
