import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-collapse nzAccordion>
      <nz-collapse-panel *ngFor="let panel of panels" [nzHeader]="panel.name" [nzActive]="panel.active">
        <p>{{ panel.name }} content</p>
      </nz-collapse-panel>
    </nz-collapse>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component {
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    },
    {
      active: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      name: 'This is panel header 3'
    }
  ];
}
