import { Component } from '@angular/core';
import endOfMonth from 'date-fns/end_of_month';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-range-picker [nzRanges]="ranges1" ngModel (ngModelChange)="onChange($event)"></nz-range-picker>
    <br />
    <nz-range-picker
      [nzRanges]="ranges1"
      nzShowTime
      nzFormat="yyyy/MM/dd HH:mm:ss"
      ngModel
      (ngModelChange)="onChange($event)"
    ></nz-range-picker>
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
  ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  ranges2 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}
