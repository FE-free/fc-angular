import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-affix>
      <button nz-button [nzType]="'primary'">
        <span>Affix top</span>
      </button>
    </nz-affix>
    <br />
    <nz-affix nzOffsetBottom="0">
      <button nz-button [nzType]="'primary'">
        <span>Affix bottom</span>
      </button>
    </nz-affix>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {}
