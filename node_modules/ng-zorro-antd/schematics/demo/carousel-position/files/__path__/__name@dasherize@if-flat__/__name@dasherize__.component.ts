import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-radio-group [(ngModel)]="dotPosition">
      <label nz-radio-button nzValue="bottom">Bottom</label>
      <label nz-radio-button nzValue="top">Top</label>
      <label nz-radio-button nzValue="left">Left</label>
      <label nz-radio-button nzValue="right">Right</label>
    </nz-radio-group>
    <nz-carousel [nzDotPosition]="dotPosition">
      <div nz-carousel-content *ngFor="let index of array">
        <h3>{{ index }}</h3>
      </div>
    </nz-carousel>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-radio-group {
        margin-bottom: 8px;
      }

      [nz-carousel-content] {
        text-align: center;
        height: 160px;
        line-height: 160px;
        background: #364d79;
        color: #fff;
        overflow: hidden;
      }

      h3 {
        color: #fff;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  array = [1, 2, 3, 4];
  dotPosition = 'bottom';
}
