import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-rate [(ngModel)]="value" [nzTooltips]="tooltips"></nz-rate>
    <span *ngIf="value" class="ant-rate-text">{{ value ? tooltips[value - 1] : '' }}</span>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
}
