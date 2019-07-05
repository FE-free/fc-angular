import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-rate [(ngModel)]="value" nzAllowHalf></nz-rate>
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <nz-rate [(ngModel)]="value" nzAllowHalf [nzAllowClear]="false"></nz-rate>
    <span class="ant-rate-text">allowClear: false</span>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  value = 0;
}
