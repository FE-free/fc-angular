import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-spin [nzSpinning]="isSpinning">
      <nz-alert
        [nzType]="'info'"
        [nzMessage]="'Alert message title'"
        [nzDescription]="'Further details about the context of this alert.'"
      >
      </nz-alert>
    </nz-spin>
    <div style="margin-top:8px;">
      Loading state：
      <nz-switch [(ngModel)]="isSpinning"></nz-switch>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  isSpinning = false;
}
