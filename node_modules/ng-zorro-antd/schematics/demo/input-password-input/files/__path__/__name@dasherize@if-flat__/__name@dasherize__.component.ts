import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-input-group [nzSuffix]="suffixTemplate">
      <input
        [type]="passwordVisible ? 'text' : 'password'"
        nz-input
        placeholder="input password"
        [(ngModel)]="password"
      />
    </nz-input-group>
    <ng-template #suffixTemplate>
      <i nz-icon [nzType]="passwordVisible ? 'eye-invisible' : 'eye'" (click)="passwordVisible = !passwordVisible"></i>
    </ng-template>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      i {
        cursor: pointer;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  passwordVisible = false;
  password: string;
}
