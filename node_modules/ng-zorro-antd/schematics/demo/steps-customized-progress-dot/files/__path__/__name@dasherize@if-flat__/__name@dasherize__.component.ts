import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-steps [nzCurrent]="1" [nzProgressDot]="progressTemplate">
      <nz-step nzTitle="Finished" nzDescription="You can hover on the dot."></nz-step>
      <nz-step nzTitle="In Progress" nzDescription="You can hover on the dot."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="You can hover on the dot."></nz-step>
      <nz-step nzTitle="Waiting" nzDescription="You can hover on the dot."></nz-step>
    </nz-steps>
    <ng-template #progressTemplate let-dot let-status="status" let-index="index">
      <span nz-popover nzContent="steps {{ index }} status: {{ status }}" style="margin-left: -100%;">
        <ng-template [ngTemplateOutlet]="dot"></ng-template>
      </span>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
