import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-steps [nzCurrent]="current" [nzStartIndex]="3" nzSize="small">
      <nz-step nzTitle="Finished"></nz-step>
      <nz-step nzTitle="In Progress"></nz-step>
      <nz-step nzTitle="Waiting"></nz-step>
    </nz-steps>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  current = 3;
}
