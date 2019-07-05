import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-alert
      nzType="warning"
      nzCloseable
      nzMessage="Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text Warning Text"
      (nzOnClose)="afterClose()"
    >
    </nz-alert>
    <nz-alert
      nzType="error"
      nzCloseable
      nzMessage="Error Text"
      nzDescription="Error Description Error Description Error Description Error Description Error Description Error Description"
      (nzOnClose)="afterClose()"
    >
    </nz-alert>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-alert {
        margin-bottom: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  afterClose(): void {
    console.log('close');
  }
}
