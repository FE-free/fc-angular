import { Component, ViewChild } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { NzFormatEmitEvent, NzTreeNodeOptions, NzTreeComponent } from 'ng-zorro-antd'
@Component({
  selector: 'bgitem',
  templateUrl: './bgitem.component.html',
  styles: [``]
})
export class BgitemComponent {
  // 树
  @ViewChild('nzTreeComponent') nzTreeComponent: NzTreeComponent
  // 指定选中复选框的树节点
  defaultCheckedKeys = ['10020']
  // 指定选中的树节点
  defaultSelectedKeys = ['10010']
  // 展开指定的树节点
  defaultExpandedKeys = ['100', '1001']
  // 树的原书记
  treeNodes: NzTreeNodeOptions[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          disabled: true,
          children: [
            { title: 'leaf 1-0-0', key: '10010', disableCheckbox: true, isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [
            { title: 'leaf 1-1-0', key: '10020', isLeaf: true },
            { title: 'leaf 1-1-1', key: '10021', isLeaf: true }
          ]
        }
      ]
    }
  ]
  constructor(public router: Router, public activedRoute: ActivatedRoute) {}
  /**
   * 树点击
   * @param event
   */
  treeClick(event: NzFormatEmitEvent): void {
    console.log(event)
  }
  /**
   * 树 Checkbox 选中
   * @param event
   */
  treeCheck(event: NzFormatEmitEvent): void {
    console.log(event)
  }
  /**
   * 树选中
   * @param keys
   */
  treeSelect(keys: string[]): void {
    console.log(keys, this.nzTreeComponent.getSelectedNodeList())
  }
}
