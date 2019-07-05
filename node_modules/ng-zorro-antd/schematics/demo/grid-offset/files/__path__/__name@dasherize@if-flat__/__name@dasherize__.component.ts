import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div nz-row>
      <div nz-col nzSpan="8">
        col-8
      </div>
      <div nz-col nzSpan="8" nzOffset="8">
        col-8
      </div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="6" nzOffset="6">
        col-6 col-offset-6
      </div>
      <div nz-col nzSpan="6" nzOffset="6">
        col-6 col-offset-6
      </div>
    </div>
    <div nz-row>
      <div nz-col nzSpan="12" nzOffset="6">
        col-12 col-offset-6
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
