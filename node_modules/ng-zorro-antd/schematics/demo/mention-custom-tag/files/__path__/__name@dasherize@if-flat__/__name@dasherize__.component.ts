import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <nz-mention [nzSuggestions]="webFrameworks" [nzValueWith]="valueWith" (nzOnSelect)="onSelect($event)">
      <input placeholder="@someone" nz-input nzMentionTrigger [(ngModel)]="inputValue" />
      <ng-container *nzMentionSuggestion="let framework">
        <span>{{ framework.name }} - {{ framework.type }}</span>
      </ng-container>
    </nz-mention>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  inputValue: string;
  webFrameworks = [
    { name: 'React', type: 'JavaScript' },
    { name: 'Angular', type: 'JavaScript' },
    { name: 'Laravel', type: 'PHP' },
    { name: 'Flask', type: 'Python' },
    { name: 'Django', type: 'Python' }
  ];

  valueWith = (data: { name: string; type: string }) => data.name;

  onSelect(value: string): void {
    console.log(value);
  }
}
