import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tabset [nzTabBarExtraContent]="extraTemplate">
      <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab ' + tab"> Content of tab {{ tab }} </nz-tab>
    </nz-tabset>
    <ng-template #extraTemplate>
      <button nz-button>Extra Action</button>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [1, 2, 3];
}
