import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-card style="width: 100%;" nzTitle="Card title" [nzExtra]="extraTemplate">
      <nz-card-tab>
        <nz-tabset nzSize="large" [(nzSelectedIndex)]="index1">
          <nz-tab nzTitle="tab1"></nz-tab>
          <nz-tab nzTitle="tab2"></nz-tab>
        </nz-tabset>
      </nz-card-tab>
      content{{ index1 }}
    </nz-card>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
    <br />
    <br />
    <nz-card style="width: 100%;">
      <nz-card-tab>
        <nz-tabset nzSize="large" [(nzSelectedIndex)]="index2">
          <nz-tab nzTitle="article"></nz-tab>
          <nz-tab nzTitle="app"></nz-tab>
          <nz-tab nzTitle="project"></nz-tab>
        </nz-tabset>
      </nz-card-tab>
      content{{ index2 }}
    </nz-card>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  index1 = 0;
  index2 = 0;
}
