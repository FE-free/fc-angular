import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-date-picker [nzFormat]="dateFormat"></nz-date-picker>
    <br />
    <nz-month-picker [nzFormat]="monthFormat"></nz-month-picker>
    <br />
    <nz-range-picker [nzFormat]="dateFormat"></nz-range-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-date-picker,
      nz-month-picker,
      nz-range-picker,
      nz-week-picker {
        margin: 0 8px 12px 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
}
