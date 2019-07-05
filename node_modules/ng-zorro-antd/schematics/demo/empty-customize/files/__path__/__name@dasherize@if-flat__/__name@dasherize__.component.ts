import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-empty
      [nzNotFoundImage]="
        'https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original'
      "
      [nzNotFoundContent]="contentTpl"
      [nzNotFoundFooter]="footerTpl"
    >
      <ng-template #contentTpl>
        <span> Customize <a href="#API">Description</a> </span>
      </ng-template>
      <ng-template #footerTpl>
        <button nz-button nzType="primary" (click)="onClick()">Create Now</button>
      </ng-template>
    </nz-empty>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  onClick(): void {
    console.log('clicked');
  }
}
