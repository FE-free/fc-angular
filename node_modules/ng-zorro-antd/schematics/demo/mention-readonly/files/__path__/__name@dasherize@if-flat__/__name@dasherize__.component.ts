import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <nz-mention [nzSuggestions]="suggestions">
      <input
        style="margin-bottom: 10px"
        placeholder="this is disabled Mention"
        nzMentionTrigger
        nz-input
        disabled
        [(ngModel)]="inputValue"
      />
      <input placeholder="this is readOnly Mention" nzMentionTrigger nz-input readOnly [(ngModel)]="inputValue" />
    </nz-mention>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  suggestions = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
}
