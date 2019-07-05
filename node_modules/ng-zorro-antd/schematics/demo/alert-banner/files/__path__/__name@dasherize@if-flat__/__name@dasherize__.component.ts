import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-alert nzBanner nzMessage="Warning text"></nz-alert>
    <nz-alert
      nzBanner
      nzMessage="Very long warning text warning text text text text text text text"
      nzCloseable
    ></nz-alert>
    <nz-alert nzBanner nzMessage="Warning text without icon" [nzShowIcon]="false"></nz-alert>
    <nz-alert nzBanner nzType="error" nzMessage="Error text"></nz-alert>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-alert {
        margin-bottom: 12px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
