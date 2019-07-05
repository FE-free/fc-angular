import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="icons-list">
      <i nz-icon [nzIconfont]="'icon-tuichu'"></i>
      <i nz-icon [nzIconfont]="'icon-facebook'"></i>
      <i nz-icon [nzIconfont]="'icon-twitter'"></i>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      [nz-icon] {
        margin-right: 6px;
        font-size: 24px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  constructor(private _iconService: NzIconService) {
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }
}
