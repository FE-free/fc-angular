/*
 * @Author: luohong
 * @LastEditors: luohong
 * @Description: 预算项目
 * @email: luo.hong@neusoft.com
 * @Date: 2019-04-16 15:57:43
 * @LastEditTime: 2019-04-18 13:48:37
 */
import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNodeOptions } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { ParentComponent } from 'src/fccomponents/parent.component';
import { DaoService } from 'src/fccore/service/dao.service';

@Component({
  selector: 'bgitem',
  templateUrl: './bgitem.component.html',
  styles: [`

  `]
})
export class BgitemComponent extends ParentComponent implements OnInit,AfterContentInit {

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
  validateForm: FormGroup;
  // 选中索引
  fcSelectedIndex=0
  // 一级分类
  firstClass:any;
  // 项目名称
  itemName:string;
  // 拼音码
  pinyinCode:string;
  constructor(public router: Router, public activedRoute: ActivatedRoute,private daoService: DaoService, private fb: FormBuilder) {
    super()
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    })
  }
  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.pageList = []
    this.daoService.postFromApi('BUDGET/BGITEMNEW/LISTINFO', {}).subscribe(result => {
      if (result.CODE === '0') {
        this.pageList = result.DATA
      }
    })
  }
  /**
   * @description: 事件
   * @param {string} eventName
   * @param {any} context
   * @return:
   */
  event(eventName: string, context?: any): void {
    switch (eventName) {
      case 'listAdd': // 新增
        this.addNew();
        break;
      case 'cardSave': // 保存
        this.cardSave();
        break;
      case 'cardBack': // 保存
        this.cardBack();
        break;
      default:
        break
    }
  }
  addNew(): void {
    this.fcSelectedIndex = 1;
  }
  cardSave(): void {
  }
  cardBack(): void {
    this.fcSelectedIndex = 0;
  }
  cardSaveBack(): void {
  }
  search(): void {
  }
  reset(): void {
  }
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
  /**
   * 新增下级项目
   */
  listAdd() {
    this.fcSelectedIndex = 1;
  }
  submitForm = ($event: any, value: any) => {
    $event.preventDefault()
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty()
      this.validateForm.controls[key].updateValueAndValidity()
    }
    console.log(value)
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault()
    this.validateForm.reset()
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine()
      this.validateForm.controls[key].updateValueAndValidity()
    }
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity())
  }

  userNameAsyncValidator = (control: FormControl) =>
    Observable.create((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true })
        } else {
          observer.next(null)
        }
        observer.complete()
      }, 1000)
    })

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true }
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true }
    }
    return {}
  }
}
