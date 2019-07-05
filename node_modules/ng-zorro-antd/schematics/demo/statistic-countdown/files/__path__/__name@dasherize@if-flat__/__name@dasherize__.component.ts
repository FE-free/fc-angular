import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-row [nzGutter]="16">
      <nz-col [nzSpan]="12">
        <nz-countdown [nzValue]="deadline" [nzTitle]="'Countdown'"></nz-countdown>
      </nz-col>
      <nz-col [nzSpan]="12">
        <nz-countdown [nzValue]="deadline" [nzTitle]="'Million Seconds'" [nzFormat]="'HH:mm:ss:SSS'"></nz-countdown>
      </nz-col>
      <nz-col [nzSpan]="24" style="margin-top: 32px;">
        <nz-countdown [nzValue]="deadline" [nzTitle]="'Day Level'" [nzFormat]="'D 天 H 时 m 分 s 秒'"></nz-countdown>
      </nz-col>
    </nz-row>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
