import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <h4>String</h4>
    <nz-breadcrumb nzSeparator=">">
      <nz-breadcrumb-item>
        Home
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        An Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>
    <br />
    <h4>TemplateRef</h4>
    <nz-breadcrumb [nzSeparator]="iconTemplate">
      <nz-breadcrumb-item>
        Home
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        <a>Application List</a>
      </nz-breadcrumb-item>
      <nz-breadcrumb-item>
        An Application
      </nz-breadcrumb-item>
    </nz-breadcrumb>
    <ng-template #iconTemplate><i nz-icon nzType="arrow-right"></i></ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      h4:first-child {
        margin-top: 0;
      }

      h4 {
        margin: 16px 0;
        font-size: 14px;
        line-height: 1;
        font-weight: normal;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
