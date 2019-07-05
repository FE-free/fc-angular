import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <nz-avatar [nzSize]="64" nzIcon="user"></nz-avatar>
      <nz-avatar nzSize="large" nzIcon="user"></nz-avatar>
      <nz-avatar nzIcon="user"></nz-avatar>
      <nz-avatar nzSize="small" nzIcon="user"></nz-avatar>
    </div>
    <div>
      <nz-avatar [nzShape]="'square'" [nzSize]="64" [nzIcon]="'user'"></nz-avatar>
      <nz-avatar [nzShape]="'square'" [nzSize]="'large'" [nzIcon]="'user'"></nz-avatar>
      <nz-avatar [nzShape]="'square'" [nzIcon]="'user'"></nz-avatar>
      <nz-avatar [nzShape]="'square'" [nzSize]="'small'" [nzIcon]="'user'"></nz-avatar>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-avatar {
        margin-top: 16px;
        margin-right: 16px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {}
