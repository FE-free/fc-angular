import { Component, OnInit } from '@angular/core';
import { NzFormatEmitEvent, NzTreeNodeOptions } from 'ng-zorro-antd';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-tree [nzData]="nodes" nzAsyncData (nzClick)="nzEvent($event)" (nzExpandChange)="nzEvent($event)"> </nz-tree>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  nodes = [
    { title: 'Expand to load', key: '0' },
    { title: 'Expand to load', key: '1' },
    { title: 'Tree Node', key: '2', isLeaf: true }
  ];

  nzEvent(event: Required<NzFormatEmitEvent>): void {
    console.log(event);
    // load child async
    if (event.eventName === 'expand') {
      const node = event.node;
      if (node && node.getChildren().length === 0 && node.isExpanded) {
        this.loadNode().then(data => {
          node.addChildren(data);
        });
      }
    }
  }

  loadNode(): Promise<NzTreeNodeOptions[]> {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            { title: 'Child Node', key: `${new Date().getTime()}-0` },
            { title: 'Child Node', key: `${new Date().getTime()}-1` }
          ]),
        1000
      );
    });
  }

  ngOnInit(): void {}
}
