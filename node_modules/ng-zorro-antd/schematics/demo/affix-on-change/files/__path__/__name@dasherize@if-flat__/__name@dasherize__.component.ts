import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-affix [nzOffsetTop]="120" (nzChange)="onChange($event)">
      <button nz-button>
        <span>120px to affix top</span>
      </button>
    </nz-affix>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  onChange(status: boolean) {
    console.log(status);
  }
}
