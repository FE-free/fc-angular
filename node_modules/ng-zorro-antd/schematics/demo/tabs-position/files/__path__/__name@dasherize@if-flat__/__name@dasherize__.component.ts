import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="margin-bottom: 16px;">
      Tab position：
      <nz-select [(ngModel)]="position" style="width: 80px;">
        <nz-option *ngFor="let option of options" [nzLabel]="option.label" [nzValue]="option.value"> </nz-option>
      </nz-select>
    </div>
    <nz-tabset [nzTabPosition]="position" [nzType]="'line'">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab ' + tab"> Content of tab {{ tab }} </nz-tab>
    </nz-tabset>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  position = 'top';
  tabs = [1, 2, 3];
  options = [
    { value: 'top', label: 'top' },
    { value: 'left', label: 'left' },
    { value: 'right', label: 'right' },
    { value: 'bottom', label: 'bottom' }
  ];
}
