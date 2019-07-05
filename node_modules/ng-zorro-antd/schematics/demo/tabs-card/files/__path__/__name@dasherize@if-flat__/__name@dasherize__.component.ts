import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tabset [nzTabPosition]="'top'" [nzType]="'card'">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab' + tab"> Content of Tab Pane {{ tab }} </nz-tab>
    </nz-tabset>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [1, 2, 3];
}
