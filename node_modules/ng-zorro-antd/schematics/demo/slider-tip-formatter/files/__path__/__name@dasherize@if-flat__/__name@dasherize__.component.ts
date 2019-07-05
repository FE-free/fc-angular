import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-slider [nzTipFormatter]="formatter"></nz-slider>
    <nz-slider [nzTipFormatter]="null"></nz-slider>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  formatter(value: number): string {
    return `${value}%`;
  }
}
