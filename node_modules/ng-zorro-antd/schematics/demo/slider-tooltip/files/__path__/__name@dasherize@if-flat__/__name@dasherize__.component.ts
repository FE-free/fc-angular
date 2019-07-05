import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-slider [nzTooltipVisible]="'always'"></nz-slider>
    <nz-slider [nzTooltipVisible]="'never'"></nz-slider>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
