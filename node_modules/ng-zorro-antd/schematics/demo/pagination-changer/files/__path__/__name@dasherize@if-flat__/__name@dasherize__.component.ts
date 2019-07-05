import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-pagination [nzPageIndex]="3" [nzTotal]="500" nzShowSizeChanger [nzPageSize]="10"></nz-pagination>
    <br />
    <nz-pagination [nzPageIndex]="3" [nzTotal]="500" nzShowSizeChanger [nzPageSize]="10" nzDisabled></nz-pagination>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
