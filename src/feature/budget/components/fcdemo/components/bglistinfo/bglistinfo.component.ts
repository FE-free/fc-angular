import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'bglistinfo',
  templateUrl: './bglistinfo.component.html',
  styles: [
    `
      .toolbar {
      }
      .toolbar button {
        margin-right: 10px;
      }
    `
  ]
})
export class BglistinfoComponent {
  // 获取列表数据
  pageList = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '北京'
    },
    {
      key: '2',
      name: '李四',
      age: 42,
      address: '上海'
    },
    {
      key: '3',
      name: '小明',
      age: 32,
      address: '杭州'
    }
  ]
  // 查询对象
  searchObj = {
    taskName: '',
    taskCode: ''
  }
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
  /**
   * 查询
   */
  search() {}
  /**
   * 重置
   */
  reset() {}
}
