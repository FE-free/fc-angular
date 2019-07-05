import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-input-number [(ngModel)]="demoValue" [nzSize]="'large'" [nzMin]="1" [nzMax]="10" [nzStep]="1"></nz-input-number>
    <nz-input-number [(ngModel)]="demoValue" [nzMin]="1" [nzMax]="10" [nzStep]="1"></nz-input-number>
    <nz-input-number [(ngModel)]="demoValue" [nzSize]="'small'" [nzMin]="1" [nzMax]="10" [nzStep]="1"></nz-input-number>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-input-number {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  demoValue = 3;
}
