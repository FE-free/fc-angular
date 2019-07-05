import { Component, ViewEncapsulation } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <nz-mention [nzSuggestions]="suggestions" (nzOnSearchChange)="onSearchChange($event)" [nzPrefix]="['#', '@']">
      <input
        placeholder="input @ to mention people, # to mention tag"
        nzMentionTrigger
        nz-input
        [(ngModel)]="inputValue"
      />
    </nz-mention>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  suggestions: string[] = [];
  users = ['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご'];
  tags = ['1.0', '2.0', '3.0'];

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log('nzOnSearchChange', value, prefix);
    this.suggestions = prefix === '@' ? this.users : this.tags;
  }
}
