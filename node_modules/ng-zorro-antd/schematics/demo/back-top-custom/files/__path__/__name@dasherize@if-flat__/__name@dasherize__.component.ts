import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-back-top [nzTemplate]="tpl" [nzVisibilityHeight]="100" (nzOnClick)="notify()">
      <ng-template #tpl>
        <div class="ant-back-top-inner">UP</div>
      </ng-template>
    </nz-back-top>
    Scroll down to see the bottom-right
    <strong> blue </strong>
    button.
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      :host ::ng-deep .ant-back-top {
        bottom: 100px;
      }

      :host ::ng-deep .ant-back-top-inner {
        height: 40px;
        width: 40px;
        line-height: 40px;
        border-radius: 4px;
        background-color: #1088e9;
        color: #fff;
        text-align: center;
        font-size: 20px;
      }

      :host ::ng-deep strong {
        color: #1088e9;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  notify(): void {
    console.log('notify');
  }
}
