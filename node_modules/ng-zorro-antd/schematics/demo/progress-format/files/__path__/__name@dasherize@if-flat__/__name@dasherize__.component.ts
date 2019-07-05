import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-progress [nzPercent]="75" nzType="circle" [nzFormat]="formatOne"></nz-progress>
    <nz-progress [nzPercent]="100" nzType="circle" [nzFormat]="formatTwo"></nz-progress>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-progress {
        margin-right: 8px;
        margin-bottom: 8px;
        display: inline-block;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  formatOne = (percent: number) => `${percent} Days`;
  formatTwo = () => `Done`;
}
