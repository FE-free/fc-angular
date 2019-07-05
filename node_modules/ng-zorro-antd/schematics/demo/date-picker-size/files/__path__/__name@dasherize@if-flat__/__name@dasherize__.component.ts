import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="large">large</label>
      <label nz-radio-button nzValue="default">default</label>
      <label nz-radio-button nzValue="small">small</label>
    </nz-radio-group>
    <br /><br />
    <nz-date-picker [nzSize]="size"></nz-date-picker>
    <br />
    <nz-month-picker [nzSize]="size" nzPlaceHolder="Select Month"></nz-month-picker>
    <br />
    <nz-range-picker [nzSize]="size"></nz-range-picker>
    <br />
    <nz-week-picker [nzSize]="size" nzPlaceHolder="Select Week"></nz-week-picker>
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
  size = 'default';
}
