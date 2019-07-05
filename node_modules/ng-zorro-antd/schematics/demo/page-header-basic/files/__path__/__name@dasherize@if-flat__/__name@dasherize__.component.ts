import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-page-header (nzBack)="onBack()" nzBackIcon nzTitle="Title" nzSubtitle="This is a subtitle"> </nz-page-header>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-page-header {
        border: 1px solid rgb(235, 237, 240);
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  onBack() {
    console.log('onBack');
  }
}
