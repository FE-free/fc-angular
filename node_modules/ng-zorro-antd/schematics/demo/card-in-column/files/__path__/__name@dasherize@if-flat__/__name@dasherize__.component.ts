import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div style="background: #ECECEC;padding:30px;">
      <div nz-row [nzGutter]="8">
        <div nz-col [nzSpan]="8">
          <nz-card nzTitle="Card title">
            <p>Card content</p>
          </nz-card>
        </div>
        <div nz-col [nzSpan]="8">
          <nz-card nzTitle="Card title">
            <p>Card content</p>
          </nz-card>
        </div>
        <div nz-col [nzSpan]="8">
          <nz-card nzTitle="Card title">
            <p>Card content</p>
          </nz-card>
        </div>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      p {
        margin: 0;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
