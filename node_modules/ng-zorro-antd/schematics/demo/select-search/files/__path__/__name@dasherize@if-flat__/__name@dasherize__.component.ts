import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-select
      style="width: 200px;"
      nzShowSearch
      nzAllowClear
      nzPlaceHolder="Select a person"
      [(ngModel)]="selectedValue"
    >
      <nz-option nzLabel="Jack" nzValue="jack"></nz-option>
      <nz-option nzLabel="Lucy" nzValue="lucy"></nz-option>
      <nz-option nzLabel="Tom" nzValue="tom"></nz-option>
    </nz-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue = null;
}
