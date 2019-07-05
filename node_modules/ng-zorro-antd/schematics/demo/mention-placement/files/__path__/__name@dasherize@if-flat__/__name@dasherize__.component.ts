import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <nz-mention nzPlacement="top" [nzSuggestions]="suggestions" (nzOnSelect)="onSelect($event)">
      <input nzMentionTrigger nz-input [(ngModel)]="inputValue" (ngModelChange)="onChange($event)" />
    </nz-mention>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];

  onChange(value: string): void {
    console.log(value);
  }

  onSelect(suggestion: string): void {
    console.log(`onSelect ${suggestion}`);
  }
}
