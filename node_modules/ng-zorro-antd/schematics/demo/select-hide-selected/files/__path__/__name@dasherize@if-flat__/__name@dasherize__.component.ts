import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-select
      style="width: 100%"
      nzMode="multiple"
      nzPlaceHolder="Inserted are removed"
      [(ngModel)]="listOfSelectedValue"
    >
      <ng-container *ngFor="let option of listOfOption">
        <nz-option [nzLabel]="option" [nzValue]="option" *ngIf="isNotSelected(option)"></nz-option>
      </ng-container>
    </nz-select>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  listOfOption = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
}
