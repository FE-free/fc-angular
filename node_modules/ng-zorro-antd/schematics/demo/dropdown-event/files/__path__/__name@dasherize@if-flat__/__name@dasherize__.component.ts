import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <a nz-dropdown [nzDropdownMenu]="menu">
      Hover me, Click menu item
      <i nz-icon nzType="down"></i>
    </a>
    <nz-dropdown-menu #menu="nzDropdownMenu">
      <ul nz-menu>
        <li nz-menu-item (click)="log('1st menu item')">1st menu item</li>
        <li nz-menu-item (click)="log('2nd menu item')">2nd menu item</li>
        <li nz-menu-item (click)="log('3rd menu item')">3rd menu item</li>
      </ul>
    </nz-dropdown-menu>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  log(data: string): void {
    console.log(data);
  }
}
