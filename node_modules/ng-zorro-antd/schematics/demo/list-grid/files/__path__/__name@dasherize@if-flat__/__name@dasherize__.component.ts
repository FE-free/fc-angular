import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-list [nzDataSource]="data" [nzRenderItem]="item" [nzGrid]="{ gutter: 16, span: 6 }">
      <ng-template #item let-item>
        <nz-list-item [nzContent]="nzContent">
          <ng-template #nzContent>
            <nz-card [nzTitle]="item.title">
              Card content
            </nz-card>
          </ng-template>
        </nz-list-item>
      </ng-template>
    </nz-list>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  data = [
    {
      title: 'Title 1'
    },
    {
      title: 'Title 2'
    },
    {
      title: 'Title 3'
    },
    {
      title: 'Title 4'
    }
  ];
}
