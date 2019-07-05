// tslint:disable:no-any
import { Component, OnInit } from '@angular/core';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <nz-cascader [(ngModel)]="values" [nzOptions]="nzOptions" (ngModelChange)="onChanges($event)"> </nz-cascader>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      .ant-cascader-picker {
        width: 300px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  nzOptions: any[] | null = null;
  values: any[] = ['zhejiang', 'hangzhou', 'xihu'];

  onChanges(values: any): void {
    console.log(values, this.values);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.nzOptions = options;
    }, 500);
  }
}
