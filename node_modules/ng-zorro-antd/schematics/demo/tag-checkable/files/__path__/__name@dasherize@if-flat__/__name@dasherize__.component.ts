import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tag nzMode="checkable" [nzChecked]="true" (nzCheckedChange)="checkChange($event)">Tag1</nz-tag>
    <nz-tag nzMode="checkable" [nzChecked]="true" (nzCheckedChange)="checkChange($event)">Tag2</nz-tag>
    <nz-tag nzMode="checkable" [nzChecked]="true" (nzCheckedChange)="checkChange($event)">Tag3</nz-tag>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  checkChange(e: boolean): void {
    console.log(e);
  }
}
