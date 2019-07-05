import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <label nz-radio [nzDisabled]="disabled">Disabled</label>
      <br />
      <label nz-radio [nzDisabled]="disabled" [ngModel]="true">Disabled</label>
      <div style="margin-top:20px;">
        <button nz-button nzType="primary" (click)="disabled = !disabled">Toggle disabled</button>
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  disabled = true;
}
