import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-spin nzTip="Loading...">
      <nz-alert
        nzType="info"
        nzMessage="Alert message title"
        nzDescription="Further details about the context of this alert."
      >
      </nz-alert>
    </nz-spin>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
