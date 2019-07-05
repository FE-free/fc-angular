import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-switch [ngModel]="true" nzCheckedChildren="开" nzUnCheckedChildren="关"></nz-switch>
    <br />
    <nz-switch [ngModel]="false" nzCheckedChildren="1" nzUnCheckedChildren="0"></nz-switch>
    <br />
    <nz-switch
      [ngModel]="true"
      [nzCheckedChildren]="checkedTemplate"
      [nzUnCheckedChildren]="unCheckedTemplate"
    ></nz-switch>
    <ng-template #checkedTemplate><i nz-icon nzType="check"></i></ng-template>
    <ng-template #unCheckedTemplate><i nz-icon nzType="close"></i></ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-switch {
        margin-bottom: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
