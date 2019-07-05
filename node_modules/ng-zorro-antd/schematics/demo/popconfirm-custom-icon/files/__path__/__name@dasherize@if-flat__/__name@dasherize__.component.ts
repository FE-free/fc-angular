import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <a nz-popconfirm nzTitle="Are you sure?" [nzIcon]="iconTpl">Delete</a>
    <ng-template #iconTpl>
      <i nz-icon nzType="question-circle-o" style="color: red;"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
