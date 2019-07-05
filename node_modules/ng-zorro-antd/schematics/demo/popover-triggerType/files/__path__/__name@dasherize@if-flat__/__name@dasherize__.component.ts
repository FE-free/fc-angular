import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <ng-template #contentTemplate>
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    </ng-template>
    <button nz-button nz-popover nzTitle="Title" [nzContent]="contentTemplate" nzTrigger="click">Click me</button>
    <button nz-button nz-popover nzTitle="Title" [nzContent]="contentTemplate" nzTrigger="hover">Hover me</button>
    <button nz-button nz-popover nzTitle="Title" [nzContent]="contentTemplate" nzTrigger="focus">Focus me</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      button {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
