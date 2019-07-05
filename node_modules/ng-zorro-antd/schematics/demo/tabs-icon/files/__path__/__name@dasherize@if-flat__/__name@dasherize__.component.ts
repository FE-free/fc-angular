import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tabset>
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="titleTemplate">
        <ng-template #titleTemplate> <i nz-icon [nzType]="tab.icon"></i>{{ tab.name }} </ng-template>
        {{ tab.name }}
      </nz-tab>
    </nz-tabset>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [
    {
      active: true,
      name: 'Tab 1',
      icon: 'apple'
    },
    {
      active: false,
      name: 'Tab 2',
      icon: 'android'
    }
  ];
}
