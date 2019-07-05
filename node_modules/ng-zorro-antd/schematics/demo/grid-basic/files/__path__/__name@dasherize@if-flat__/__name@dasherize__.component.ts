import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div nz-row>
      <div nz-col nzSpan="12">col-12</div>
      <div nz-col nzSpan="12">col-12</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8">col-8</div>
      <div nz-col nzSpan="8">col-8</div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
      <div nz-col nzSpan="6">col-6</div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
