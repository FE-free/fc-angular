import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="background: #ECECEC;padding:30px;">
      <nz-card style="width:300px;" [nzBordered]="false" nzTitle="Card title" [nzExtra]="extraTemplate">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </nz-card>
    </div>
    <ng-template #extraTemplate>
      <a>More</a>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      p {
        margin: 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
