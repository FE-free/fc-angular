import { Component } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div>
      <nz-select style="width: 120px;" [(ngModel)]="selectedProvince" (ngModelChange)="provinceChange($event)">
        <nz-option *ngFor="let p of provinceData" [nzValue]="p" [nzLabel]="p"></nz-option>
      </nz-select>
      <nz-select style="width: 120px;" [(ngModel)]="selectedCity">
        <nz-option *ngFor="let c of cityData[selectedProvince]" [nzValue]="c" [nzLabel]="c"></nz-option>
      </nz-select>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>,
  <% if(inlineStyle) { %>styles: [`
      nz-select {
        margin-right: 8px;
      }
    `]<% } else { %>styleUrls: ['./<%= dasherize(name) %>.component.<%= style %>']<% } %>
})
export class <%= classify(name) %>Component {
  selectedProvince = 'Zhejiang';
  selectedCity = 'Hangzhou';
  provinceData = ['Zhejiang', 'Jiangsu'];
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }
}
