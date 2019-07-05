import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <nz-select style="width: 120px;" [(ngModel)]="selectedValue" nzAllowClear nzPlaceHolder="Choose">
        <nz-option nzValue="jack" nzLabel="Jack"></nz-option>
        <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
        <nz-option nzValue="disabled" nzLabel="Disabled" nzDisabled></nz-option>
      </nz-select>
      <nz-select style="width: 120px;" [ngModel]="'lucy'" nzDisabled>
        <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      </nz-select>
      <nz-select style="width: 120px;" [ngModel]="'lucy'" nzLoading>
        <nz-option nzValue="lucy" nzLabel="Lucy"></nz-option>
      </nz-select>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-select {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  selectedValue = 'lucy';
}
