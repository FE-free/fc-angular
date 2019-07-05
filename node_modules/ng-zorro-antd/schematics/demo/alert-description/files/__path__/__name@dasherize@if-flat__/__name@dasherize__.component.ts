import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-alert
      nzType="success"
      nzMessage="Success Text"
      nzDescription="Success Description Success Description Success Description"
    >
    </nz-alert>
    <nz-alert
      nzType="info"
      nzMessage="Info Text"
      nzDescription="Info Description Info Description Info Description Info Description"
    >
    </nz-alert>
    <nz-alert
      nzType="warning"
      nzMessage="Warning Text"
      nzDescription="Warning Description Warning Description Warning Description Warning Description"
    >
    </nz-alert>
    <nz-alert
      nzType="error"
      nzMessage="Error Text"
      nzDescription="Error Description Error Description Error Description Error Description"
    >
    </nz-alert>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-alert {
        margin-bottom: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
