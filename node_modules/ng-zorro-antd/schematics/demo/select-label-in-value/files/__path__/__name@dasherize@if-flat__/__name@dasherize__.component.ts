import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <p>The selected option's age is {{ selectedValue?.age }}</p>
    <br />
    <nz-select
      style="width: 120px;"
      [compareWith]="compareFn"
      [(ngModel)]="selectedValue"
      (ngModelChange)="log($event)"
      nzAllowClear
      nzPlaceHolder="Choose"
    >
      <nz-option *ngFor="let option of optionList" [nzValue]="option" [nzLabel]="option.label"></nz-option>
    </nz-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  optionList = [{ label: 'Lucy', value: 'lucy', age: 20 }, { label: 'Jack', value: 'jack', age: 22 }];
  selectedValue = { label: 'Jack', value: 'jack', age: 22 };
  // tslint:disable-next-line:no-any
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  log(value: { label: string; value: string; age: number }): void {
    console.log(value);
  }
}
