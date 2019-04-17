/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: iframe
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-04-17 12:26:57
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'bgiframe',
  templateUrl: './bgiframe.component.html',
  styles: [``]
})
export class BgiframeComponent {
  // iframe地址
  iframeUrl: SafeResourceUrl
  constructor(public router: Router, public activedRoute: ActivatedRoute, public sanitizer: DomSanitizer) {
    let url: string = 'https://ng.ant.design/docs/introduce/zh'
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
