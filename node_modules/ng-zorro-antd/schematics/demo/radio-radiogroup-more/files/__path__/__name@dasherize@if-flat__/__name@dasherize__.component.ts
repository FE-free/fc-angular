import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-radio-group [(ngModel)]="radioValue">
      <label nz-radio [ngStyle]="style" nzValue="A">Option A</label>
      <label nz-radio [ngStyle]="style" nzValue="B">Option B</label>
      <label nz-radio [ngStyle]="style" nzValue="C">Option C</label>
      <label nz-radio [ngStyle]="style" nzValue="M">
        More...
        <input type="text" nz-input *ngIf="radioValue == 'M'" style="width: 100px; margin-left: 10px;" />
      </label>
    </nz-radio-group>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [nz-radio] {
        display: block;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  radioValue = 'A';
  style = {
    display: 'block',
    height: '30px',
    lineHeight: '30px'
  };
}
