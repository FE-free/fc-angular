import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-timeline [nzPending]="'Recording...'" [nzReverse]="reverse">
      <nz-timeline-item>Create a services site 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Solve initial network problems 2015-09-01</nz-timeline-item>
      <nz-timeline-item>Technical testing 2015-09-01</nz-timeline-item>
    </nz-timeline>
    <button nz-button style="margin-top: 16px" nzType="primary" (click)="toggleReverse()">Toggle Reverse</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  reverse = false;

  toggleReverse(): void {
    this.reverse = !this.reverse;
  }
}
