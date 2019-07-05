import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <a
      nz-popconfirm
      nzTitle="Are you sure delete this task?"
      [nzCondition]="switchValue"
      (nzOnConfirm)="confirm()"
      (nzOnCancel)="cancel()"
      >Delete a task</a
    >
    <br />
    <br />
    Whether directly execute:
    <nz-switch [(ngModel)]="switchValue"></nz-switch>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  switchValue = false;

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

  constructor(private nzMessageService: NzMessageService) {}
}
