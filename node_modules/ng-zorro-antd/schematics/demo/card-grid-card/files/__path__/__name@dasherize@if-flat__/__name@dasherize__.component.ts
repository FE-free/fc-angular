import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-card nzTitle="Cart Title">
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
      <div nz-card-grid [ngStyle]="gridStyle">Content</div>
    </nz-card>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  gridStyle = {
    width: '25%',
    textAlign: 'center'
  };
}
