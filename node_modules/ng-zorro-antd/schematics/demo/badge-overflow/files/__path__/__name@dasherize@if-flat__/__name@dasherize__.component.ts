import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-badge [nzCount]="99">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="200">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="200" [nzOverflowCount]="10">
      <a class="head-example"></a>
    </nz-badge>
    <nz-badge [nzCount]="10000" [nzOverflowCount]="999">
      <a class="head-example"></a>
    </nz-badge>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-badge {
        margin-right: 20px;
      }

      .head-example {
        width: 42px;
        height: 42px;
        border-radius: 4px;
        background: #eee;
        display: inline-block;
        vertical-align: middle;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
