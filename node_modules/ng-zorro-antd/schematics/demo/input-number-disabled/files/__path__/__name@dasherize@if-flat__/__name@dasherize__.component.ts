import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-input-number
      [(ngModel)]="demoValue"
      [nzMin]="1"
      [nzMax]="10"
      [nzStep]="1"
      [nzDisabled]="isDisabled"
    ></nz-input-number>
    <div style="margin-top:20px;">
      <button nz-button [nzType]="'primary'" (click)="toggleDisabled()">
        <span>Toggle Disabled</span>
      </button>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  demoValue = 3;
  isDisabled = false;

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
