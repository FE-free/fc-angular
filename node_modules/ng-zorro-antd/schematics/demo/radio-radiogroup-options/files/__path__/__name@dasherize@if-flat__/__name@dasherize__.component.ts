import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <nz-radio-group [(ngModel)]="radioValue">
        <label nz-radio [nzValue]="o.value" *ngFor="let o of options">{{ o.label }}</label>
      </nz-radio-group>
      <nz-radio-group [(ngModel)]="radioValue">
        <label nz-radio [nzValue]="o.value" *ngFor="let o of options">{{ o.label }}</label>
      </nz-radio-group>
      <nz-radio-group [(ngModel)]="radioValue">
        <label nz-radio [nzValue]="o.value" *ngFor="let o of options">{{ o.label }}</label>
      </nz-radio-group>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  radioValue = 'Apple';
  options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
}
