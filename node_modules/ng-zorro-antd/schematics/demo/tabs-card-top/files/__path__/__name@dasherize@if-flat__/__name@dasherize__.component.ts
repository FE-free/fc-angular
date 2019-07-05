import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div class="card-container">
      <nz-tabset [nzTabPosition]="'top'" [nzType]="'card'">
        <nz-tab *ngFor="let tab of tabs" [nzTitle]="'Tab Title ' + tab">
          <p>Content of Tab Pane {{ tab }}</p>
          <p>Content of Tab Pane {{ tab }}</p>
          <p>Content of Tab Pane {{ tab }}</p>
        </nz-tab>
      </nz-tabset>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      :host {
        background: #f5f5f5;
        overflow: hidden;
        padding: 24px;
        display: block;
      }

      .card-container ::ng-deep .ant-tabs-card .ant-tabs-content {
        height: 120px;
        margin-top: -16px;
      }

      .card-container ::ng-deep .ant-tabs-card .ant-tabs-content .ant-tabs-tabpane {
        background: #fff;
        padding: 16px;
      }

      .card-container ::ng-deep .ant-tabs-card .ant-tabs-bar {
        border-color: #fff;
      }

      .card-container ::ng-deep .ant-tabs-card .ant-tabs-bar .ant-tabs-tab {
        border-color: transparent;
        background: transparent;
      }

      .card-container ::ng-deep .ant-tabs-card .ant-tabs-bar .ant-tabs-tab-active {
        border-color: #fff;
        background: #fff;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  tabs = [1, 2, 3];
}
