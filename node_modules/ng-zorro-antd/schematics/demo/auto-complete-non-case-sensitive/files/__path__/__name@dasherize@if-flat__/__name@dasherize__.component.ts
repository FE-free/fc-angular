import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  encapsulation: ViewEncapsulation.None,
  <% if(inlineTemplate) { %>template: `
    <div class="example-input">
      <input
        placeholder="try to type \`<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>b\`"
        nz-input
        [(ngModel)]="inputValue"
        (input)="onInput($event.target?.value)"
        [nzAutocomplete]="auto"
      />
      <nz-autocomplete [nzDataSource]="filteredOptions" #auto> </nz-autocomplete>
    </div>
  `
})
export class <%= classify(name) %>Component {
  inputValue: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

  constructor() {
    this.filteredOptions = this.options;
  }

  onInput(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
  }
}
