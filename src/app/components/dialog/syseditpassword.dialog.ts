/*
 * @Author: honghong
 * @Date: 2019-07-04 17:15:57
 * @LastEditors: honghong
 * @LastEditTime: 2019-10-14 16:46:07
 * @Description: 
 * @email: 3300536651@qq.com
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sys-editpassword',
  templateUrl: './syseditpassword.dialog.html',
  styles: [``]
})
export class SyseditpasswordComponent {
  @Input()
  userName: string = 'admin';
  @Input()
  passWord: string = 'admin';
  constructor() { }
}
