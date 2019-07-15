/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: iframe
 * @email: 3300536651@qq.com
 * @Date: 2019-04-12 16:39:30
 * @LastEditTime: 2019-07-15 14:03:06
 */
import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'fciframe',
  templateUrl: './fciframe.component.html',
  styles: [``]
})
export class FciframeComponent {
  // iframe地址
  iframeUrl: SafeResourceUrl
  constructor(public router: Router, public activedRoute: ActivatedRoute, public sanitizer: DomSanitizer) {
    let url: string = 'https://ng.ant.design/components/form/zh'
    this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
