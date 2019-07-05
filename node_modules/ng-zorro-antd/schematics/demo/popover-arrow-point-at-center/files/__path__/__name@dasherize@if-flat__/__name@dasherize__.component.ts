import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <button nz-button nzTitle="Title" nzContent="Content" nzPlacement="topLeft" nz-popover>
      Align edge / 边缘对齐
    </button>
    <button nz-button nzTitle="Title" nzContent="Content" nzPlacement="topCenter" nz-popover>
      Arrow points to center / 箭头指向中心
    </button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      button {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
