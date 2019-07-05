import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-progress [nzPercent]="30"></nz-progress>
    <nz-progress [nzPercent]="50" nzStatus="active"></nz-progress>
    <nz-progress [nzPercent]="70" nzStatus="exception"></nz-progress>
    <nz-progress [nzPercent]="100"></nz-progress>
    <nz-progress [nzPercent]="50" [nzShowInfo]="false"></nz-progress>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
