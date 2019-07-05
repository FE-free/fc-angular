import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-slider
      [(ngModel)]="singleValue"
      (ngModelChange)="onChange($event)"
      (nzOnAfterChange)="onAfterChange($event)"
    ></nz-slider>
    <nz-slider
      nzRange
      [nzStep]="10"
      [(ngModel)]="rangeValue"
      (ngModelChange)="onChange($event)"
      (nzOnAfterChange)="onAfterChange($event)"
    ></nz-slider>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  singleValue = 30;
  rangeValue = [20, 50];

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number): void {
    console.log(`onAfterChange: ${value}`);
  }
}
