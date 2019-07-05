import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-pagination [(nzPageIndex)]="current" [nzTotal]="50" [nzSize]="'small'"></nz-pagination>
    <br />
    <nz-pagination
      [(nzPageIndex)]="current"
      [nzTotal]="50"
      [nzSize]="'small'"
      nzShowSizeChanger
      nzShowQuickJumper
    ></nz-pagination>
    <br />
    <nz-pagination
      [(nzPageIndex)]="current"
      [nzTotal]="50"
      [nzSize]="'small'"
      [nzShowTotal]="totalTemplate"
    ></nz-pagination>
    <ng-template #totalTemplate let-total>Total {{ total }} items</ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  current = 1;
}
