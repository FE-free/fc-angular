import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-time-picker
      [nzDisabledHours]="disabledHours"
      [nzDisabledMinutes]="disabledMinutes"
      [nzDisabledSeconds]="disabledSeconds"
    ></nz-time-picker>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  disabledHours(): number[] {
    return [1, 2, 3];
  }

  disabledMinutes(hour: number): number[] {
    if (hour === 4) {
      return [20, 21, 22, 23, 24, 25];
    } else {
      return [];
    }
  }

  disabledSeconds(hour: number, minute: number): number[] {
    if (hour === 5 && minute === 1) {
      return [20, 21, 22, 23, 24, 25];
    } else {
      return [];
    }
  }
}
