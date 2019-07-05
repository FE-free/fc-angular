import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= selector %>',
  <% if(inlineTemplate) { %>template: `
    <div nz-row nzType="flex">
      <div nz-col nzSpan="6" [nzOrder]="order" *ngFor="let order of orderList; index as i">
        {{ i + 1 }} col-order-{{ order }}
      </div>
    </div>
  `<% } else { %>templateUrl: './<%= dasherize(name) %>.component.html'<% } %>
})
export class <%= classify(name) %>Component implements OnInit {
  orderList = [1, 2, 3, 4];

  ngOnInit(): void {
    setTimeout(() => {
      this.orderList = [...this.orderList.reverse()];
    }, 10000);
  }
}
