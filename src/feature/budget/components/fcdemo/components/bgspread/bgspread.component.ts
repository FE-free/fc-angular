import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'bgspread',
  templateUrl: './bgspread.component.html',
  styles: [
    `
      .fc-spread-content {
        width: 100%;
        height: 700px;
      }
    `
  ]
})
export class BgspreadComponent {
  // spread
  spread: any
  // spread 样式
  hostStyle = {
    width: '100%',
    height: '100%'
  }
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
  /**
   * @description spreadJs 初始化
   * @param args
   */
  workbookInit(args) {
    this.spread = args.spread
  }
}
