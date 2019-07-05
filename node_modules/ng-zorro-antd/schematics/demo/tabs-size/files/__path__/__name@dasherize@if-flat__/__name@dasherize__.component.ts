import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-radio-group [(ngModel)]="size">
      <label nz-radio-button nzValue="small"><span>Small</span></label>
      <label nz-radio-button nzValue="default"><span>Default</span></label>
      <label nz-radio-button nzValue="large"><span>Large</span></label>
    </nz-radio-group>
    <nz-tabset [nzSize]="size">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab ' + tab"> Content of tab {{ tab }} </nz-tab>
    </nz-tabset>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  size = 'small';
  tabs = [1, 2, 3];
}
