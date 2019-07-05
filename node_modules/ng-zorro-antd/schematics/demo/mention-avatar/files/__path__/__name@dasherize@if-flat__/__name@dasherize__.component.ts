import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <nz-mention [nzSuggestions]="webFrameworks" [nzValueWith]="valueWith" (nzOnSelect)="onSelect($event)">
      <input nz-input nzMentionTrigger [(ngModel)]="inputValue" />
      <ng-container *nzMentionSuggestion="let framework">
        <nz-avatar nzSize="small" [nzText]="framework.name" [nzSrc]="framework.icon"></nz-avatar>
        <span>{{ framework.name }} - {{ framework.type }}</span>
      </ng-container>
    </nz-mention>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .ant-avatar.ant-avatar-sm {
        width: 14px;
        height: 14px;
        margin-right: 8px;
        position: relative;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
    { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
    { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
    { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' }
  ];

  valueWith = (data: { name: string; type: string; icon: string }) => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
