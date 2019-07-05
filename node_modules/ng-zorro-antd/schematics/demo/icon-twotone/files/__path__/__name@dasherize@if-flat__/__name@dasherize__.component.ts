import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="icons-list">
      <i nz-icon [nzType]="'smile'" [nzTheme]="'twotone'"></i>
      <i nz-icon [nzType]="'heart'" [nzTheme]="'twotone'" [nzTwotoneColor]="'#eb2f96'"></i>
      <i nz-icon [nzType]="'check-circle'" [nzTheme]="'twotone'" [nzTwotoneColor]="'#52c41a'"></i>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .icons-list > .anticon {
        margin-right: 6px;
        font-size: 24px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
