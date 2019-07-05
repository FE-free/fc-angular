import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-switch [(ngModel)]="switchValue" [nzDisabled]="isDisabled"></nz-switch>
    <br />
    <button nz-button [nzType]="'primary'" (click)="isDisabled = !isDisabled">Toggle disabled</button>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-switch {
        margin-bottom: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  switchValue = false;
  isDisabled = true;
}
